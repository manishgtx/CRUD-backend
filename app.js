const express = require('express')
require('dotenv').config()
const app = express()
const connectDB = require('./db/connect')
// Router
const usersRouter = require('./routes/users')
const authRouter = require('./routes/auth')

// middleware
const cors = require('cors')
const notFound = require('./middleware/notFound')
app.use(cors())
app.use(express.json());
app.get('/',(req,res)=> {
    res.send('API is working...')
})
app.use('/api/v1',[usersRouter,authRouter])
app.use(notFound)

const port = 5000
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        console.log('Database Connected Succesfully')
        app.listen(port,console.log(`server is listening on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}
start()
