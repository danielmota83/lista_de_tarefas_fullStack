import { Router } from 'express';

const router = Router();

router.get('/tarefas', async (request, response) => {
  await wait();

  const tarefas = await Database.all('SELECT * FROM tarefas');
  response.json(tarefas);
});

router.get('/tarefas/most-viewed', async (request, response) => {
  await wait();

  const tarefas = await Database.all('SELECT * FROM tarefas LIMIT 3');
  response.json(tarefas);
});

router.post('/tarefas', async (request, response) => {
  await wait();

  const { content, userName } = request.body;

  if (!content || !userName) {
    return response
      .status(400)
      .json({
        code: '001',
        error: 'The properties `content` and `userName` are required!',
      });
  }

  await Database.run(
    'INSERT INTO tarefas(content, userName, publishedAt) VALUES(?, ?, ?)',
    [content, userName, new Date().toISOString()],
  );

  response.sendStatus(201);
});

export default router;
