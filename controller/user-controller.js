
import usermodel from "../model/user-model.js"

export const SignupUser = async(request,response) => {
    try{
        const user = request.body

        const newUser = new usermodel(user)

        await newUser.save();

        return response.status(200).json({msg:'Signup Successfull'})
    }catch(err){
        return response.status(400).json({msg:'Error while Signup the user'})
    }
}