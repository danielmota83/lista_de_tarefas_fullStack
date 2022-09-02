import 'mongoose';

 export const validId = (req, res, next) =>{
    const id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({message: 'Identificação inválida'})
    }
    next();
 };

 export const validObjectBody = (req, res, next) =>{
    let task = req.body;

    if(
        !task ||
        !task.tarefa ||
        !task.oQueFazer ||
        !task.tipo ||
        !task.quando
    ) {
        return res
        .status(400)
        .send({message:'Você não preencheu todos os dados obrigatórios.'})
    }
    next();
};