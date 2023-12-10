import { UserAddSchema } from "../schema/UserAdd.js";
import bcrypt from "bcrypt";
import { setCookies } from "../utils/features.js";


export const ServerMainPage = (req,res)=>{
    res.send("Server Page...")
}


// ADDING NEW USER FUNCTION
export const AddUserRouteFunc = async(req,res)=>{

    const {name,email,password} =  req.body
    let user = await UserAddSchema.findOne({email});

    if (user){
        return res.status(404).json({
            success : false,
            message : "user already exist..."
        })
    }
    else{

        const hashedPassword = await bcrypt.hash(password,10);

        user = await UserAddSchema.create({
                    name,
                    email,
                    password : hashedPassword,})
        
        setCookies(user, res , "Regster Success..." , 201 );

    }
}

// Get All Users
export const GetAllUser=async(req,res)=>{
    const allUser = await UserAddSchema.find()

    res.json({
        success:true,
        allUser
    })

}


// Single User getiing login Details
export const LoginUser = async(req,res, next)=>{

    
    
        const { email , password } = req.body;

        const findUser = await UserAddSchema.findOne({email}).select("+password");

        if (!findUser){
            return res.status(404).json({
                success : false,
                message : "User email not found..."
            })
        }

        const isMatch = await bcrypt.compare(password , findUser.password)

        if (!isMatch){
            return res.status(404).json({
                success : false,
                message : "User password Wrong..."
            })
        }

        // res.cookie("token",findUser.name,{httpOnly :true , expires : new Date(Date.now() + 15*60*1000)}).status(200).json({
        //     success : true,
        //     message : findUser.name,
        //     details : findUser,
        // })

        setCookies( findUser , res,`Welcome Back... ${findUser.name}`,200)


}



// Logout the user that exists...

export const LogoutUser = async(req,res)=>{

    res.status(200).cookie("token","",{expires : new Date(Date.now()),
        sameSite : process.env.NODE_ENV === "Development"?"lax":"none",
        secure : process.env.NODE_ENV === "Development"?false : true,
    }).json({
        success : true,
        message : "Logout Success..."
    })

}


// GET MY details

export const GetMyProfile = (req,res)=>{

    
    res.status(200).json({
        success : true,
        user : req.user,
        
    })

};


