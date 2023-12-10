import { taskAddSchema } from "../schema/taskSchema.js"


// Adding new tasks...
export const newTask = async(req,res,next)=>{

    const {title, description} = req.body

    await taskAddSchema.create({
        title,
        description,
        user : req.user,

    })

    res.status(201).json({
        success : true,
        message : "Added task success..."
    })

}


// Accessing All the tasks
export const myAllTask=async(req,res,next)=>{

    const userId = req.user._id

    const tasks = await taskAddSchema.find({user : userId});

    res.status(200).json({
        success : true,
        tasks,
    })

}

// Updating Task
export const UpdateTask=async(req,res,next)=>{

    const {id} = req.params;
    const task = await taskAddSchema.findById(id)

    if(!task){
        return res.status(404).json({
            success : false,
            message : "Invalid id..."
        })
    }

    task.isCompleted = !task.isCompleted

    await task.save()

    res.status(200).json({
        success : true,
        message : "Task Updated...",
    })

}


// DELETE TASK
export const DeleteTask=async(req,res,next)=>{

    const {id} = req.params

    const task = await taskAddSchema.findById(id)

    if(!task){
        return res.status(404).json({
            success : false,
            message : "Invalid id..."
        })
    }

    await task.deleteOne();

    res.status(200).json({
        success : true,
        message : "Task Deleted...",
    })


}












