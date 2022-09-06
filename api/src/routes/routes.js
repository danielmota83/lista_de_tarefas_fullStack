import express from 'express';
import tasksController from '../controllers/tasks.controller.js';
import { validId, validObjectBody } from '../middlewares/tasks.middleware.js';
 
const router = express.Router();

router.get('/all-tasks', tasksController.allTasks);
router.get('/all-tasks/:id',  validId, tasksController.taskById);
router.post('/create-task', validObjectBody, tasksController.createTask);
router.put('/update-task/:id', validId, validObjectBody, tasksController.updateTaskById);
router.delete('/delete-task/:id', validId, tasksController.deleteTask);

export default router
