const express = require('express')
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const  restaurantsController = require ('./constrollers/restaurantsController')
const cors = require('cors')
const restaurantRouter = require("./routers/restaurantRouter")


const app = express()
app.use(cors())
dotenv.config();
app.use(express.json());
app.use('/restaurants',restaurantRouter)



mongoose.connect(process.env.MONGO_URL, () => {
    console.log("Connected to mongoDB");
});

app.listen(9000,()=>{
    console.log('App started ap port 9000')
})