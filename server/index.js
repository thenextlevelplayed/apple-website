const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const bcrypt = require("bcrypt"); // 密碼加密
const member_info_model = require("../server/modules/member")

app.use(express.json())
app.use(cors());

mongoose.connect("mongodb+srv://root:root123@traningcluster.ogej9tj.mongodb.net/applewebsite?retryWrites=true&w=majority",{
    useNewUrlParser:true,
});

//註冊 
app.post("/register", async (req,res) =>{

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const country = req.body.country;
    const birthday = req.body.birthday;
    const email = req.body.email;
    // const password = req.body.password;
    const phonezone = req.body.phonezone;
    const phone = req.body.phone;

    //密碼加密
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const password = req.body.password;

    console.log(firstName)
    console.log(lastName)
    console.log(country)
    console.log(birthday)
    console.log(email)
    console.log(password)
    console.log(phonezone)
    console.log(phone)



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

    // console.log(member_info.firstname,member_info.countryregion,member_info.password)
    
    try {
        await member_info.save();


    } catch (err) {
        console.log(err);
    }

})

//登入
app.post("/login", async(req,res)=>{
    
})

app.listen(3001, ()=>{
    console.log("server running on port 3001")
})