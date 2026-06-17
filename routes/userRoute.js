const express=require("express");
const router=express.Router();
const User =require("../models/user")


// router.post("/register",async(req,res)=>{
//      console.log("Register API Hit");
//   console.log(req.body);
//     const {name , email ,phone, password} = req.body
//     const newUser=new User(req.body)
//     try{
//         newUser.save()
//         res.send("User Registered successfully")
//         console.log(newUser);
//     } catch(error){
//         return res.status(400).json({error});
//     }
// });
router.post("/register", async (req, res) => {
  try {
    console.log("Register API Hit");
    console.log(req.body);

    const newUser = new User(req.body);

    const savedUser = await newUser.save();

    console.log(savedUser);

    res.send("User Registered Successfully");
  } catch (error) {
    console.log("REGISTER ERROR => ", error);
    res.status(400).json({ error: error.message });
  }
});

router.post("/login",async (req,res)=>{
    const{email,password}=req.body
    try{

    
    const user=  await User.find({email,password})
    if(user.length > 0)
        {
            const currentUser = {
                name : user[0].name , 
                email : user[0].email, 
                isAdmin : user[0].isAdmin, 
                _id : user[0]._id
            };
            res.send(currentUser);
        }
        else{
            return res.status(400).json({ message: 'User Login Failed' });
        }
   
}catch(error){
    return res.status(400).json({error});

}

});
module.exports=router