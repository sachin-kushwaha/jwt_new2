const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/JWTlogin2",{useNewUrlParser:true}

).then(()=>{
    console.log("connection is successful")
}).catch((e)=>{
    console.log(e)
});