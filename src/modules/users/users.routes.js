import { Router } from "express";
import * as user_Controller from './users.controller.js'
import { Auth } from "../../../middlewares/Authentication.js";
import { validation } from "../../../middlewares/validation.js";
import { updateSchema } from "./users.validation.js";

const router=Router()


router.put('/updateUser',validation(updateSchema),Auth(),user_Controller.updateUser)
router.delete('/deleteUser',Auth(),user_Controller.deleteUser)
router.get('/getUser',Auth(),user_Controller.getUser)







export default router