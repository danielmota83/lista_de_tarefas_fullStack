import express from 'express';
import  cors from 'cors';
import 'dotenv/config';
import connectToDb from './src/database/mongoDb.js';
import taskroutes from './src/routes/routes.js';

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use('/', taskroutes);

connectToDb();

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`API rodando em http://localhost:${PORT}`));
