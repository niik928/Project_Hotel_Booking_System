const mongoose = require('mongoose');
const AutoIncrement=require('mongoose-sequence')(mongoose)
const userSchema = mongoose.Schema({
    userid:{
        type: Number,
        unique:true

    },
    phone:{
        type: Number,
        required : true,
         unique:  true

    },


    name :{
        type: String,
        required : true
    },
    email :{
        type: String,
        required : true
    },
    password :{
        type: String,
        required : true
    },
    isAdmin :{
        type: Boolean,
        default:false
    }
},{
        timestamps:true,
    
});
userSchema.plugin(AutoIncrement, { inc_field: 'userid' });
const userModel=mongoose.model('users',userSchema)

module.exports=userModel;