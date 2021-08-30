
import {createUser, validateUser} from './model.js'
import jwt from 'jsonwebtoken';
import {secret} from '../data/secrets.js';

export const getRegister=(req,res)=>{
        console.log(req.body)
        createUser(req.body)
        res.status(200)     
}
export const showRegister=(req,res)=>{
    send(true)     
}

///--------controllerlogin-----------------


export const loginController = async (req, res) => {
    
    const { email, password } = req.body;

    const userInfo = await validateUser(email);
    console.log(userInfo)
    
    if (userInfo !== undefined && password === userInfo.password) {
       
        const token = jwt.sign({user: email},secret );
       
        res.send({
            access_token: token
        });
    } else {
        console.log('hola')
        res.status(404).send('Usuario/Contraseña erróneos');
    }
}

//-------controllerShowinfo-----------

export const retrieveUserInfoCtrl = async (req, res) => {
   
    const userInfo = await validateUser(req.email);
   
    delete userInfo.password;
    console.log(userInfo)
    res.send(userInfo);
}