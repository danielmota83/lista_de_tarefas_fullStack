import Task from '../models/Tasks';

const allTasks = async() => await Task.find();
const createTask = async (newTask) => await Task.create (newTask);
const taskById =  async (id) => await Task.findById(id);
const updateTaskById = async (id, updatedTask) => {
    return await Task.findByIdAndUpdate(id, updatedTask).setOptinos({returnOriginal:false});
};
const deleteTask = async (id) => await Task.findByIdAndDelete(id);

export default {
    allTasks,
    createTask,
    taskById,
    updateTaskById,
    deleteTask,
}
