const express = require('express')
const getOne = require('../controller/getOneController')
const loginUser = require('../controller/loginController')
const registerUser = require('../controller/registerController')
const connectDB = require('../db/connect')
const MongoDB_URL = require('../env')
const fileUpload = require('express-fileupload');
const uploadFile = require('../controller/uploadController')
const deleteUser = require('../controller/deleteController')
const getAll = require('../controller/getAllController')
const cors = require('cors')
const completeRegister = require('../controller/completeController')
const registerCourse = require('../controller/courseController')

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(fileUpload())
app.use(cors())
app.use('/image', express.static('../img'))

const start = async () => {
    try {
        connectDB(MongoDB_URL)
        app.listen(port, () => console.log(`Example app listening on port ${port}!`))
    } catch (error) {
        console.log(error);
    }
}

start()

app.get('/', (req, res) => res.json('Hello World!'))
app.post('/register', registerUser)
app.post('/login', loginUser)
app.post('/get', getOne)
app.get('/get/all', getAll)
app.post('/upload', uploadFile)
app.post('/delete', deleteUser)
app.post('/complete', completeRegister)
app.post('/course', registerCourse)
app.use('/image', express.static(__dirname + '/../img'))
