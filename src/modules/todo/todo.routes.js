import { Router } from "express";
import { Auth } from "../../../middlewares/Authentication.js";
import { validation } from "../../../middlewares/validation.js";
import * as todo_Controller from './todo.controller.js'
import { addTodoSchema, deleteTodoSchema, searchByTitleSchema, updateTodoSchema } from "./todo.validation.js";
const router=Router()

router.post('/addTodo',validation(addTodoSchema),Auth(),todo_Controller.addTodo)
router.put('/updateTodo',validation(updateTodoSchema),Auth(),todo_Controller.updateTodo)
router.delete('/deleteTodo',validation(deleteTodoSchema),Auth(),todo_Controller.deleteTodo)
router.get('/getToDoWithUser',Auth(),todo_Controller.getToDoWithUser)
router.delete('/clearTodo',Auth(),todo_Controller.clearTodo)








export default router