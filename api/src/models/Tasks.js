import 'mongoose';

 const TaskSchema = new mongoose.Schema(
    {
        tarefa:{type: String, require: true},
        oQueFazer:{type: String, require: true},
        tipo:{type: String, require: true},
        quado:{type: Date},
    }
);

const Task = mongoose.model('Task', TaskSchema, 'tasks');

export default Task;