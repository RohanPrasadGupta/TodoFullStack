import express from "express";
import UserRouter from "./routes/UserRou.js";
import taskRouter from "./routes/task.js";
import {config} from "dotenv"
import cookieParser from "cookie-parser";
import cors from "cors";


export const App = express()

config({
    path : "./database/config.env",
})

App.use(express.json())

App.use(cookieParser());

App.use(cors({
    origin : [process.env.Frontend_URI],
    methods : ["GET","PUT","POST","DELETE"],
    credentials : true,
}));

App.use(UserRouter)

App.use(taskRouter)

