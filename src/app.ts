import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

import postRoute from './routes/postRoute'

dotenv.config()

const app = express()

app.use(bodyParser.json())

const connectionString = process.env.MONGO_URL
const PORT = process.env.PORT || 8000

app.use('/post', postRoute)

app.listen(PORT, () => {
    mongoose.connect(connectionString).then((res) => {
        console.log(`DB Connected! Server listening on PORT ${PORT}`)
    })
    .catch((e) => {
        console.log(`Error in connecting to database, ${e}`)
    })
})
