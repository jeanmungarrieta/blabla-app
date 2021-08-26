import express from 'express';
import { getMail,getUsercreate } from '../controller.js';


const router = express.Router();

router
  .route("/")
  
  router
  .route('/send-email')
  .post(getUsercreate)
  .post(getMail)
  
  
  

  


export default router;