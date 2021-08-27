import express from 'express';
import { getMail } from '../controller.js';


const router = express.Router();

router
  .route("/")
  
  router
  .route('/send-email')
  .post(getMail)
  
  
  

  


export default router;