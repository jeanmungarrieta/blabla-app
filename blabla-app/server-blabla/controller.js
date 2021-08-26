
import nodemailer from 'nodemailer'
import {createUser} from './src/model.js'



export const getUsercreate=(req,res,next)=>{
  createUser(req.body)
  next()
  
}

export const getMail  = async (req, res) => {
    
  
  
  const {Nombre,apellidos,telefono, Correo, Contraseña}= req.body

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'jose.tovarcabrera@gmail.com', // generated ethereal user
        pass: , // generated ethereal password
      },
      tls:{
        rejectUnauthorized:false
      }
    });
   await transporter.sendMail({
      from: 'jose.tovarcabrera@gmail.com',
      to:req.body.Correo,
      subject: 'Message',
      html:
            '<p><b>Hola</p>' +
            '<p> Gracias por registrarte, ya puedes seguir navegando en http://localhost:3000/registrado </p>',
    })
    res.redirect('http://localhost:3000/registrado')
  }