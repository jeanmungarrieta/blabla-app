
import {createUser, validateUser,validateReg,getMail} from './model.js'

export const getRegister=async (req,res)=>{
    console.log(req.body)
     const check = await validateReg(req.body.Correo)
     console.log(check)
     const {password,rememberPassword}= req.body
     if(req.body.password !== req.body.remember ||check){
        res.status(404).send('User is already registreded');
     }else{
        createUser(req.body)
        
        res.status(200).redirect('http://localhost:3000/registrado')
}
}
///--------controllerlogin-----------------


export const loginController = async (req, res) => {
    // let buff = new Buffer(req.body.password);
    //   let base64data = buff.toString('base64');
    const check = await validateUser(req.body.email, req.body.password);
    if(check){
        res.status(200).redirect('http://localhost:3000/usuario');
    } else {
        res.status(404).send('User not validated');
    }
}