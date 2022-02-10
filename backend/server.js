import express from 'express'
import dotenv from 'dotenv'
import router from './routes/index.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 8500;

app.use(express.json())
app.use(router)


app.listen(PORT, ()=> {
    console.log(`listening on port ${PORT}`)
})