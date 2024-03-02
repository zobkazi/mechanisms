import express, { Request, Response } from 'express'
import cors from 'cors'
import morgan from 'morgan'
const dotenv = require('dotenv').config()

import { createUser } from './controllers'
import {getAllUsers} from './controllers'
import {getUserById} from './controllers'

const app = express()


app.use(cors())
app.use(morgan('dev'))
app.use(express.json())



// routes
app.post('/users', createUser)
app.get('/users', getAllUsers)
app.get('/users/:id', getUserById)



app.get('/', (req, res) => {

    res.send('Hello World!')
})

// 404 error
app.use((_req: Request, res: Response) => {

    res.status(404).send('Not Found')
})
// Error handling
app.use((err: Error, _req: Request, res: Response) => {

    res.status(500).send(err.message)
})


const PORT = process.env.PORT || 4000

app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`)
})