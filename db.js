const mongoose=require("mongoose");
var mongoURL="mongodb+srv://W3_87408_Nikita:manager@cluster0.uumbm.mongodb.net/Guest-Guru"
mongoose.connect(mongoURL,{useUnifiedTopology: true})
var connection=mongoose.connection
connection.on('error',()=>{
    console.log("database connection failed")

})
connection.on('connected',()=>{
    console.log("database connection sucessful")
    
})



module.exports=mongoose