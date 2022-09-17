const mongoose=require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.mongoUri,{useNewUrlParser:true}

).then(()=>{
    console.log("connection is successful")
}).catch((e)=>{
    console.log(e)
});