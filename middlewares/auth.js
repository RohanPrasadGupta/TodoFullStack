import { UserAddSchema } from "../schema/UserAdd.js";
import jwt from "jsonwebtoken";



export const isAuthenticated = async(req,res,next)=>{

    const id  = "myId";
    const {token} = req.cookies;

    // console.log(token)
    if(!token){
        return res.json({
            success : false,
            message : "No token Found Login First"
        })
    }

    const decodeData = jwt.verify(token, process.env.jwt_secret)
    // console.log(decodeData)

    req.user = await UserAddSchema.findById(decodeData._id);
    next()


}