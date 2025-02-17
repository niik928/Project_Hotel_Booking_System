const express=require("express");
const app=express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
const dbConfig=require('./db')
const roomsRoute = require('./routes/roomsRoute')
const userRoute = require('./routes/userRoute')
app.use('/api/rooms',roomsRoute)
app.use('/api/users',userRoute)
const port=process.env.PORT||5000;
app.listen(port,()=> console.log("Node Server Started using nodemon"));