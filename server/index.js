const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

const member_info_model = require("../server/modules/member")

app.use(express.json())
app.use(cors());

mongoose.connect("mongodb+srv://root:root123@traningcluster.ogej9tj.mongodb.net/applewebsite?retryWrites=true&w=majority",{
    useNewUrlParser:true,
});

//新增
app.post("/register", async (req,res) =>{

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const country = req.body.country;
    const birthday = req.body.birthday;
    const email = req.body.email;
    const password = req.body.password;
    const phonezone = req.body.phonezone;
    const phone = req.body.phone;


    const member_info = new member_info_model({
        firstname:firstName,
        lastname:lastName,
        countryregion:country,
        birthday:birthday,
        email:email,
        password:password,
        phonezone:phonezone,
        phonenumber:phone
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