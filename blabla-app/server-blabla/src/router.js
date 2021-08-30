import express from 'express';
import {isValidateReg,validateJWTAuth} from './middleware.js'
import { getRegister,loginController,retrieveUserInfoCtrl,showRegister} from './controller.js';


const router = express.Router();


router
  .route("/")
  
  router
  .route('/log')
  .post(isValidateReg, getRegister)
  .get(showRegister)
 
  
  router
  .route('/login')
  .post(loginController)
  .get(retrieveUserInfoCtrl)

  router.use(validateJWTAuth);
  router
  .route('/showInfo')
  .get(retrieveUserInfoCtrl)
  
export default router;