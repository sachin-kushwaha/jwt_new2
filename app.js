const express = require("express");
require('dotenv').config();
const cors= require("cors")
const passport = require("passport");

const app = express();

const port =process.env.PORT || 6000;
require("./config/database");


// const  User= require("./model/user");
const User=require("./model/user");

const router= require("./router");
app.use(passport.initialize());

app.use(cors())
app.use(express.json());

app.use(router);





app.listen(port, (req,res)=>{
    console.log(`connection is on port no. ${port}`)
 })