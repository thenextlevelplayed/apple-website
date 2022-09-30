const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const bcrypt = require("bcrypt"); // 密碼加密
const member_info_model = require("../server/modules/member")
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const jwt_decode = require('jwt-decode');
const config = require("../server/modules/token");
const { json } = require('express');

app.use(express.json())
app.use(cors());
app.listen(3001, ()=>{
    console.log("server running on port 3001")
})
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const saltRounds = 10; //密碼加密

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
    console.log("req.body.password:",req.body.password)
    //密碼加密
    req.body.password = await bcrypt.hash(req.body.password, saltRounds);
    console.log("req.body.password:",req.body.password)
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
        member_info.save();
        return res.json({
            message:"save success"});


    } catch (err) {
        console.log(err);
        return res.json({
            message:"error"});
    }

})

//登入
app.post("/login", async(req,res)=>{
    const email = req.body.email;
    const password = req.body.password

    const collection = await member_info_model.findOne({
        email:email
    })
    // console.log(collection)

    try { if (collection){
        // 對照密碼
        const cmp = await bcrypt.compare(req.body.password, collection.password);
        if (cmp){
            // console.log('ok!')
            // console.log(collection.password)
            const setToken= {
                email:req.body.email,
                id:collection._id
            }

            const token = jwt.sign(setToken,config.jwtKey, {expiresIn:'24h'})
            //  console.log(token)
            return res.json({
                success: true,
                login_check: true,
                password_check: true,
                message: '認證成功...',
                token: token,
                // login : loginUser.login,
                // name: loginUser.name,
                email: req.body.email
            });
        } else{
            console.log('wrong!')
            return res.send("Wrong username or password.");
        }}
    }catch (error) {
        console.log(error);
        return res.status(500).send("Internal Server error Occured");
    }
})
// check password
app.post('/comfirm',async(req,res)=>{
    const oldPassword = req.body.oldPassword
    const newPassword = req.body.newPassword
    const id = req.body.id;
    const collection = await member_info_model.findById({
        _id:id
    })
    console.log(oldPassword)
    console.log(newPassword)
    console.log(collection.password)
    try { if (collection){
        // 對照密碼
        const cmp =  await bcrypt.compare(oldPassword, collection.password);
        if (cmp){
            // 密碼加密
            password = await bcrypt.hash(newPassword, saltRounds);
            try{
                await member_info_model.findByIdAndUpdate(id,
                    {
                        password:password,
                }, function (err, docs) {
                    if (err){ 
                        console.log(err)
                        res.send('err') 
                    } 
                    else{ 
                        console.log("Updated User:", docs); 
                        res.send('docs') 
                    } 
                 })
            }catch (err){
                console.log('err',err)
            }


            return res.json({
                success: true,
                login_check: true,
                password_check: true,
                message: '認證成功...',
            });
        } else{
            console.log('wrong!')
            return res.send("Wrong password.");
        }}
    }catch (error) {
        console.log(error);
        return res.status(500).send("Internal Server error Occured");
    }
})



//會員資料顯示
app.get('/memberInfo',async (req,res)=>{
    
    let token =req.body.token || req.query.token || req.headers['x-access-token'] || req.headers['authorization'];
    // console.log(token)
    if(token){
        await jwt.verify(token,config.jwtKey),(err,decoded)=>{
            if (err){
                console.log('500')
                return res.status(500).json({
                    success:false,
                    message:'token 認證錯誤'
                });
            } else{
                console.log('200')
                res.send('getinfo')

                // return req.body.email
            }
        }
    } else{
        console.log('403')
        return res.status(403).json({
            success:false,
            message:'沒有提供 token 做驗證'
        });
    }
    var decoded = jwt_decode(token);
    // console.log('decoded',decoded)

    member_info_model.findOne({
        _id:decoded.id
        // email:'im7878@gmail.com'

    }, function (err, userinfo) {
        return res.status(200).json({
          success: true,
          message: 'userinfo',
          data : userinfo
        })
      })
});

//udate data
app.put('/updateName', async (req,res)=>{
    const newFirstName = req.body.newFirstName;
    const newLastName = req.body.newLastName;
    const id = req.body.id;
    // const id = '63255c2817e5a5d72666dbbe';
    console.log(newFirstName)
    console.log(newLastName)
    console.log(id)

    //add auth
    let token =req.body.token || req.query.token || req.headers['x-access-token'] || req.headers['authorization'];
    // console.log(token)
    if(token){
        await jwt.verify(token,config.jwtKey),(err,decoded)=>{
            if (err){
                console.log('500')
                return res.status(500).json({
                    success:false,
                    message:'token 認證錯誤'
                });
            } else{
                console.log('200')
                res.send('getinfo')

                // return req.body.email
            }
        }
    } else{
        console.log('403')
        return res.status(403).json({
            success:false,
            message:'沒有提供 token 做驗證'
        });
    }


    try{
        await member_info_model.findByIdAndUpdate(id,
            {
                firstname:newFirstName,
                lastname:newLastName
        }, function (err, docs) {
            if (err){ 
                console.log(err)
                res.send('err') 
            } 
            else{ 
                console.log("Updated User:", docs); 
                res.send('docs') 
            } 
         })
    }catch (err){
        console.log('err',err)
    }
})

app.put('/updateEmail', async (req,res)=>{
    const newEmail = req.body.newEmail;
    const id = req.body.id;
    console.log(id)

    //add auth
    let token =req.body.token || req.query.token || req.headers['x-access-token'] || req.headers['authorization'];
    // console.log(token)
    if(token){
        await jwt.verify(token,config.jwtKey),(err,decoded)=>{
            if (err){
                console.log('500')
                return res.status(500).json({
                    success:false,
                    message:'token 認證錯誤'
                });
            } else{
                console.log('200')
                res.send('getinfo')

                // return req.body.email
            }
        }
    } else{
        console.log('403')
        return res.status(403).json({
            success:false,
            message:'沒有提供 token 做驗證'
        });
    }


    try{
        await member_info_model.findByIdAndUpdate(id,
            {
                email:newEmail,
        }, function (err, docs) {
            if (err){ 
                console.log(err)
                res.send('err') 
            } 
            else{ 
                console.log("Updated User:", docs); 
                res.send('docs') 
            } 
         })
    }catch (err){
        console.log('err',err)
    }
})

app.put('/updatePhone', async (req,res)=>{
    const newPhoneNum = req.body.newPhoneNum;
    const id = req.body.id;
    console.log(id)

    //add auth
    let token =req.body.token || req.query.token || req.headers['x-access-token'] || req.headers['authorization'];
    // console.log(token)
    if(token){
        await jwt.verify(token,config.jwtKey),(err,decoded)=>{
            if (err){
                console.log('500')
                return res.status(500).json({
                    success:false,
                    message:'token 認證錯誤'
                });
            } else{
                console.log('200')
                res.send('getinfo')

                // return req.body.email
            }
        }
    } else{
        console.log('403')
        return res.status(403).json({
            success:false,
            message:'沒有提供 token 做驗證'
        });
    }


    try{
        await member_info_model.findByIdAndUpdate(id,
            {
                phonenumber:newPhoneNum,
        }, function (err, docs) {
            if (err){ 
                console.log(err)
                res.send('err') 
            } 
            else{ 
                console.log("Updated User:", docs); 
                res.send('docs') 
            } 
         })
    }catch (err){
        console.log('err',err)
    }
})



function verifyToken (req,res,next){
    let token =req.body.token || req.query.token || req.headers['x-access-token'] || req.headers['authorization'];
    // console.log('token',token)
    var decoded = jwt_decode(token);
    // console.log('email:',decoded.email)


    // console.log('verify toekn,token');
    if(token){
        jwt.verify(token,config.jwtKey),(err,decoded)=>{
            if (err){
                console.log('500')
                return res.status(500).json({
                    success:false,
                    message:'token 認證錯誤'
                });
            } else{
                console.log('200')

                req.decoded=decoded;
                req.body.email = decoded.email
                next();
                // return req.body.email
            }
        }
    } else{
        console.log('403')
        return res.status(403).json({
            success:false,
            message:'沒有提供 token 做驗證'
        });
    }
}

