import express from 'express';
import taskController from '../controllers/tasks.controller';

const router = express.Router();

router.get('/all-tasks', tasksController.allTasks);
router.get('/all-tasks/:id', tasksController.taskById);
router.post('/create-task', tasksController.createTask);
router.put('/update-task/:id', tasksController.updateTaskById);
router.delete('/delete-task/:id', tasksController.deleteTask);

export default router
