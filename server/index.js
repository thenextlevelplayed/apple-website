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
app.listen(3010, ()=>{
    console.log("server running on port 3010")
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

    // var query = dbSchemas.SomeValue.find({}).select('name');

    // collection.exec(function (err, docs) {
    //     if (err) return (err);
    //     res.send(docs);
    //     console.log(docs)
    // });
  

    // console.log( collection.getFilter());
    // collection.getFilter();

    // ,(err,result)=>{
    //     // if(err) {
    //     //     console.log('err:',err)
    //     //     res.send("account or password is wrong")
    //     // }
    //     console.log(email);
    //     console.log(password);
    //     console.log('result:',result)
    //     res.send("correct")
    // })

})

//會員資料顯示
// app.get('/memberInfo',verifyToken,(req,res)=>{
//     console.log("AppleID : ",req.body.email);
//     member_info_model.findOne({
//         email:req.body.email
//     },(err,AppleID)=>{
//         if(err){
//             res.json({
//                 success:false,
//             message:"MongoDB Error ..."
//             })
//         return false;
//         }
//         if(!AppleID){
//             return res.json({
//                 success:false,
//                 message:"Login使用者不存在，建議使用者進行註冊"
//               })
//         } else{
//             console.log( AppleID.firstname)
//             return res.json({
//                 success:true,
//                 message:"使用者存在",
//                 data:AppleID
//                 // firstname : AppleID.firstname,
//                 // lastname : AppleID.lastname,
//                 // email:AppleID.email,
//                 // password:password,
//                 // phonenumber:phonenumber 
//             }) 
                       
//         } 
//     })
// })

//test-----------------------
app.get('/memberInfo',async (req,res)=>{
    
    let token =req.body.token || req.query.token || req.headers['x-access-token'] || req.headers['authorization'];
    console.log(token)
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
    console.log('decoded',decoded)

    member_info_model.findOne({
        email:decoded.email
        // email:'im7878@gmail.com'

    }, function (err, userinfo) {
        return res.status(200).json({
          success: true,
          message: 'userinfo',
          data : userinfo
        })
      })
});



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

