import tasksService from "../service/tasks.services.js";

const allTasks = async (req, res) => {
    const tasks = await tasksService.allTasks();
  
    if (tasks.length == 0) {
      return res
        .status(206)
        .send({ message: 'Ainda não existe nenhuma tarefa cadastrada!' });
    }
  
    res.send(tasks);
  };

  const taskById = async (req, res) => {
    const id = req.params.id;
  
    const task = await tasksService.taskById(id);
  
    if (!task) {
      res.status(206).send({ message: 'Nenhuma tarefa encontrada' });
    } else {
      res
        .status(200)
        .send({ message: 'Tarefa encontrada com sucesso', task });
    }
  };

  const createTask = async (req, res) => {
    const task = req.body;
  
    const newTask = await tasksService.createTask(task);
  
    res
    .status(201)
    .send({message: 'Sua tarefa foi criada com sucesso!', newTask});
  };

  const updateTaskById = async (req, res) => {
    const id = req.params.id;
    const taskEdit = req.body;
  
    const chosenTask = await tasksService.taskById(id);
  
    if (!chosenTask) {
      return res.status(206).send({ message: 'Tarefa não encontrada!' });
    }
  
    const updatedTask = await tasksService.updateTaskById(id, taskEdit);
  
    res.send(updatedTask);
  };

  const deleteTask = async (req, res) => {
    const id = req.params.id;
  
    const chosenTask = await tasksService.taskById(id);
  
    if (!chosenTask) {
      return res.status(206).send({ message: 'Nenhuma tarefa selecionada.' });
    }
  
    await tasksService.deleteTask(id);
  
    return res.status(204).send({ message: 'Tarefa deletada!' });
  };


  export default {
    allTasks,
    taskById,
    createTask,
    updateTaskById,
    deleteTask,
}
