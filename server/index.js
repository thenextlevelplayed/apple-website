const express = require('express')
const mongoose = require('mongoose')
const app = express()

const member_info_model = require("../server/modules/member")

app.use(express.json())

mongoose.connect("mongodb+srv://root:root123@traningcluster.ogej9tj.mongodb.net/applewebsite?retryWrites=true&w=majority",{
    useNewUrlParser:true,
});

app.get("/", async (req,res) =>{
    const member_info = new member_info_model({
        firstname:"123",
        lastname:"456",
        countryregion:"Tawian",
        birthday:"2022/9/6",
        email:"20220906@gmail.com",
        password:"123456",
        phonezone:"886+",
        phonenumber:9876543241
    })
    
    try {
        await member_info.save();
        res.send("inserted data")
    } catch (err) {
        console.log(err);

    }
})

app.listen(3001, ()=>{
    console.log("server running on port 3001")
})