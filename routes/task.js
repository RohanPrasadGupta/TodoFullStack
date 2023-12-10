import express from "express";
import { newTask , myAllTask, UpdateTask, DeleteTask } from "../controllers/taskController.js";
import { isAuthenticated } from "../middlewares/auth.js";



const router = express.Router()

router.post('/tasknew', isAuthenticated , newTask);

router.get('/getmytask', isAuthenticated , myAllTask);

router.route("/:id").put(isAuthenticated,UpdateTask).delete(isAuthenticated,DeleteTask)


export default router




