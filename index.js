const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config({path: './config/config.env'})

const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors({
    origin: process.env.CLIENT_PORT
}))


app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)



