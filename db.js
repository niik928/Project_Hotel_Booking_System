const mongoose=require("mongoose");
var mongoURL="mongodb://127.0.0.1:27017/hotel_booking"
mongoose.connect(mongoURL,{useUnifiedTopology: true})
var connection=mongoose.connection
connection.on('error',()=>{
    console.log("database connection failed")

})
connection.on('connected',()=>{
    console.log("database connection sucessful")
    
})



module.exports = mongoose