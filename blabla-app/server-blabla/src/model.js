import nodemailer from 'nodemailer'
import { MongoClient} from 'mongodb';

const URL = 'mongodb+srv://bootcamp_user:bootcamp_user@cluster0.be4cd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
//--------------modelReg---------------------------------

export const validateReg = async (user) => {
  const loginValue = {
    email: user,
  };
  const client = await MongoClient.connect(URL);
  const data = await client
    .db("blabla-app")
    .collection("users")
    .find(loginValue)
    .toArray();
  client.close();
  return data.length > 0;
};



export const createUser = async (req,res) => {
  
  console.log('Se ha conectado correctamente');

      const user = req
  const client = await MongoClient.connect(URL);
  const data = await client
        .db('blabla-app')
          .collection('users')
          .insertOne(user) 
          let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
              user: 'jose.tovarcabrera@gmail.com', // generated ethereal user
              pass:  // generated ethereal password
            },
            tls: {
              rejectUnauthorized: false
            }
          });
          await transporter.sendMail({
            from: 'jose.tovarcabrera@gmail.com',
            to: req.email,
            subject: 'Message',
            html: '<p><b>Hola</p>' +
              '<p> Gracias por registrarte, ya puedes seguir navegando en http://localhost:3000/registrado </p>',
          })
          
      }
  

  

//----------------------model login
export const validateUser = async (user) => {
  
  const loginValue = {
    email: user,
  };

  const client = await MongoClient.connect(URL);
  const data = await client
    .db("blabla-app")
    .collection("users")
    .findOne(loginValue)
    
  client.close();
  return data;
};





///-----model email----------------------------
export const getMail = (async (req) => {

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'jose.tovarcabrera@gmail.com', // generated ethereal user
      pass: 'skrlqlnamsgmnupx', // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false
    }
  });
  await transporter.sendMail({
    from: 'jose.tovarcabrera@gmail.com',
    to: req.email,
    subject: 'Message',
    html: '<p><b>Hola</p>' +
      '<p> Gracias por registrarte, ya puedes seguir navegando en http://localhost:3000/registrado </p>',
  })
  // res.redirect('http://localhost:3000/registrado')
})