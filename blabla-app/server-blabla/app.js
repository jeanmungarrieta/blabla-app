import express from 'express'
import cookieParser from 'cookie-parser'
import nodemailer from 'nodemailer'

const app = express()
const port = 3000


app.use(express.json()) // for parsing application/json


app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.post('/send-email', async (req, res) => {
    console.log(req.body)
    const {Nombre, Correo, Contraseña}= req.body
    // res.send({"data": `Hello ${req.body.name}`})
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
            '<p> Gracias por registrarte, ya puedes seguir navegando en http://localhost:3001/registrado </p>',
    })
    res.redirect('http://localhost:3001/registrado')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

