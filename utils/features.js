import jwt  from "jsonwebtoken";

export const setCookies = (user, res, messageGt, StatusCode = 200) =>{
    const token = jwt.sign({_id : user._id},process.env.jwt_secret)

    // console.log(process.env.NODE_ENV === "Development")
    // console.log(process.env.NODE_ENV)
        
        res.status(StatusCode).cookie("token", token , {
            httpOnly : true,
            maxAge : 15 * 60 * 1000,
            sameSite : process.env.NODE_ENV === "Development"?"lax":"none",
            secure : process.env.NODE_ENV === "Development"?false : true,
        }).json({
            success : true,
            message : messageGt
        })
}