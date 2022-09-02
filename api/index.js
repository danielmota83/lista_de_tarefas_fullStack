import express from 'express';
import  'cors';
import 'dotenv/config'


const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`API rodando em http://localhost:${PORT}`));
