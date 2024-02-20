import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

import routes from './routes/routes.js';
import { dbConnect } from "./dbConnect/dbConnect.js";


const app = express();
dotenv.config();

app.use(helmet())
app.use(morgan('common'))
app.use(cors());
app.use(express.json())

app.use(routes)

const PORT = 5000;

app.listen(PORT, () =>{
   console.log(`Server Is Running on Port ${PORT}`);
   dbConnect();
})
