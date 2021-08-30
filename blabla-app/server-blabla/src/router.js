import express from 'express';

import { getRegister,loginController } from './controller.js';


const router = express.Router();

router
  .route("/")
  
  router
  .route('/log')
  .post(getRegister)

  router
  .route('/login')
  .post(loginController)
  
  
  

  


export default router;