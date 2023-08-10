import express from 'express'
import { dbConnection } from './databases/connection.js'
import authRouter from './src/modules/Auth/auth.routes.js'
import dotenv from 'dotenv'
import usersRouter from './src/modules/users/users.routes.js'
import todoRouter from './src/modules/todo/todo.routes.js'
import cors from 'cors'
dotenv.config()
const app = express()
const BaseUrl = '/App/toDo'
const port = 3000 || 5000
app.use(express.json())
app.use(`${BaseUrl}`, authRouter)
app.use(`${BaseUrl}`, usersRouter)
app.use(`${BaseUrl}`, todoRouter)


app.use(cors())

app.use(
    cors({ 
        origin: `http://localhost:4200`, 
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        allowedHeaders: [
            'Content-Type', 
            'Authorization', 
            'Origin', 
            'x-access-token', 
            'XSRF-TOKEN',
            'Access-Control-Allow-Origin'
        ], 
        preflightContinue: false 
    })
);









dbConnection()

// const req=['ahmed','body','ali']

// const user={
//     body:'gsgs'
// }
// console.log(user['body']);


app.listen(port, () => {
    console.log(`server is running on ${port}.............`);
})