import { App } from "./App.js";
import { DatabaseConnect } from "./database/DatabaseConnect.js";



// Database connection
DatabaseConnect()


App.listen(5000,()=>{
    console.log(`server is working on Port ${process.env.PORT} in ${process.env.NODE_ENV}`)
})