import { Router } from "express";
import { validation } from "../../../middlewares/validation.js";
import * as auth_Conroller from './auth.controller.js'
import { logInSchema, signUpSchema } from "./Auth.validation.js";

const router=Router()

router.post('/signUp',validation(signUpSchema),auth_Conroller.SignUp)
router.post('/logIn',validation(logInSchema),auth_Conroller.logIn)





export default router