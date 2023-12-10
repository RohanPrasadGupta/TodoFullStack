import mongoose from "mongoose"


// ATLAS STRING
// mongodb+srv://Rohan:Rohan123DBS@atlascluster.hvomahi.mongodb.net/


export const DatabaseConnect=async()=>{ 
    await mongoose.connect(process.env.MONGO_URI,{
                    dbName: "User"
                    })
                    .then(()=>{console.log("Database Connected")})
                    .catch((error)=>{`Error Occured ${error}`})
    }