import 'mongoose';
import mongoose from 'mongoose';

const connectToDb = ()=> {
    mongoose
        .connect(process.env.DATABASE_URL, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        .then(() => console.log('Ótima notícia, a base de dados está conectada!'))
        .catch((err)=> console.log(`Hum, algo deu arreado, banco não conectado: ${err}`))
}

export default connectToDb;