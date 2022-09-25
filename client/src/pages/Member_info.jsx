import "../css/member.css"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import Axios from 'axios'



const Member_info = () =>{
const [swiperRef, setSwiperRef] = useState(null);

let appendNumber = 4;
let prependNumber = 1;

const prepend2 = () => {
    swiperRef.prependSlide([
        '<div className="swiper-slide-member">Slide ' + --prependNumber + "</div>",
        '<div className="swiper-slide-member">Slide ' + --prependNumber + "</div>",
    ]);
};

const prepend = () => {
swiperRef.prependSlide(
    '<div className="swiper-slide-member">Slide ' + --prependNumber + "</div>"
);
};

const append = () => {
swiperRef.appendSlide(
    '<div className="swiper-slide-member">Slide ' + ++appendNumber + "</div>"
    );
};

const append2 = () => {
swiperRef.appendSlide([
    '<div className="swiper-slide-member">Slide ' + ++appendNumber + "</div>",
    '<div className="swiper-slide-member">Slide ' + ++appendNumber + "</div>",
    ]);
};

// pop up
    //   accountinfo
const [openAccount, setOpenAccountInfo] = useState(true);
const  openAccountInfo = event =>{
    setOpenAccountInfo(current => !current)
}
    // EmailInfo
const [openEmail, setOpenEmail] = useState(true)
const openEmailInfo = event =>{
    setOpenEmail(current =>!current)
}

    // passwordinfow
const [openPassword,setOpenPassword] = useState(true)
const openPasswordInfo = event =>{
    setOpenPassword(current =>!current)
}
    //phoneinfo
const [openPhone, setOpenPhone] = useState(true)
const openPhoneInfo =event =>{
    setOpenPhone(current =>!current)
}

    // get data
const [data,setData] = useState([]);
const getToken = window.sessionStorage.getItem('token');
const email = window.sessionStorage.getItem('email')
console.log(getToken)
console.log(email)

// Axios.get(`http://localhost:3010/memberInfo?token=${getToken}`).then(res=>{
//     res.send(email);
//     console.log(email);
//     console.log(res.data);
//     console.log(123);

//     setData(res.data.data)
    
// }).catch(error=>{
//     console.log(error);
// })
// console.log(data);
useEffect(() =>{
    const getToken = window.sessionStorage.getItem('token')
    Axios.get(`http://localhost:3010/memberInfo?token=${getToken}`).then((res)=>{
        console.log('res.data.data',res.data.data);
        setData(res.data.data)
    }).catch(error => {
        if (error.response){
            console.log(error.response)

            //do something
            
            }else if(error.request){
                console.log(error.request)
            
            //do something else
            
            }else if(error.message){
                console.log(error.message)
            
            //do something other than the other two
            
            }
      });
},[])

 console.log(data, 'data');




    


    return(

        

        <>
        <Navbar/>
        <div className="member_name">
            <div>
                <h1>Account</h1>
                <a className="rs-account-sign-out more" href="/signout">sign out</a>
                <br/>
            </div>
            <div className="member_name_header">
                <span id="name">Hi, {data.lastname}</span>
            </div>
        </div>
        <div className="user_device">
            <h2>Your Devices</h2>
            <div className="email_title">
                <span id="email">You're signed in to 1 device with email.</span>
            </div>        
            <div className="user_device_image">
                <img alt="" src="https://appleid.cdn-apple.com/static/deviceImages-11.0/iPhone/iPhone11,8-3b3b3c-b03c40/online-infobox__3x.png" className="rs-device-tile-image"/>
            </div>
            <div className="device_content">
                <div className="product_name">iPhone 14</div>
                <a href="https://getsupport.apple.com?PRKEYS=PF9&amp;caller=rtlhm&amp;locale=en_US" className="rs-device-tile-button as-buttonlink more" target="_blank" rel="noreferrer"><span> Get support {">"} </span><span className="visuallyhidden" style={{"display": "none"}}>(opens in a new window)</span></a>
            </div>
        </div>





        <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={30}
            pagination={{
                type: "fraction",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            style={{
                "backgroundColor":"#f5f5f7",
                "textAlign": "center",
                "fontSize:" : "18px",
                "boxSizing": "border-box",
                "width": "475px!important",
                "height": "0px!important",
                "marginLeft": "10px!important",
                "marginTop": "0 !important",
                        }}
            
            
        >
        <SwiperSlide style={{
                "textAlign": "center",
                "fontSize:" : "18px",
                "background": "#fff",
                "boxSizing": "border-box",
                "width": "475px!important",
                "height": "250px!important",
                "marginLeft": "10px!important",
                "marginTop": "0 !important"
                        }}>
        <div className="account_link_title">
            <div className="account_link_content">
                <h2 className="account_balance">Your Apple Account Balance</h2>
                <p className="description">Enable two-factor authentication to view your balance.</p>
            </div>
        </div>
        </SwiperSlide >
        <SwiperSlide style={{
                "textAlign": "center",
                "fontSize:" : "18px",
                "background": "#fff",
                "boxSizing": "border-box",
                "width": "475px!important",
                "height": "250px!important",
                "marginLeft": "10px!important",
                "marginTop": "0 !important"
                        }}>
        <div className="account_link_title">
            <div className="account_link_content">
                <h2>Your Orders</h2>
                <p className="description">Track, modify, or cancel an order or make a return.</p>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide style={{
                "textAlign": "center",
                "fontSize:" : "18px",
                "background": "#fff",
                "boxSizing": "border-box",
                "width": "475px!important",
                "height": "250px!important",
                "marginLeft": "10px!important",
                "marginTop": "0 !important"
                        }}>
        <div className="account_link_title">
            <div className="account_link_content">
                <h2>Your Favorites</h2>
                <p className="description">When you see the heart icon while shopping, tap it to add items to your list.</p>
            </div>
        </div>
        </SwiperSlide>
        </Swiper>

        <div className="account_settings">
        <div className="account_settings_title">
            <h2>Account Settings</h2>
        </div>
        <div className="account_settings_content">
            {/* <!-- openAccountInfo() --> */}
            {/* <!-- email() --> */}
            <div className="row-account">
                <div className="column">
                    <h3>Account</h3>
                    <div className="setting-section">
                        <div className="setting-section-header">
                            <h3>Account Info</h3>
                        </div>
                        <div className="name">{data.firstname} {data.lastname}</div>
                        <div className="address">{data.countryregion}</div>
                        <button type="button" onClick={openAccountInfo}>Edit</button>
                    </div>
                    <div className="setting-section">
                        <div className="setting-section-header">
                            <h3>Email Info</h3>
                        </div>
                        <button type="button" onClick={openEmailInfo}>Edit</button>
                    </div>
                </div>
            </div>
            {/* <!-- password() --> */}
            {/* <!-- phone() --> */}
            <div className="row-account">
                <div className="column">
                    <h3>Password</h3>
                    <div className="setting-section">
                        <div className="setting-section-header">
                            <h3>Change password</h3>
                        </div>
                        <button type="button" onClick={openPasswordInfo}>Edit</button>
                    </div>
                    <div className="setting-section">
                        <div className="setting-section-header">
                            <h3>Phone Info</h3>
                        </div>
                        <button type="button" onClick={openPhoneInfo}>Edit</button>
                    </div>
                </div>
            </div>
            <div className="row-account">
                <div className="column">
                    <h3>Privacy</h3>
                    <div className="setting-section">
                        <div className="setting-section-header">
                            <h3 style={{"marginBottom" : "5px"}}>Personal information</h3>
                        </div>
                        <div className="personal-info">You're in control of your personal information and can manage your data or delete your account at any time. Apple is committed to protecting your privacy. </div>
                        <a href="http://www.apple.com/shop/go/privacy/manage_your_privacy/" className="as-buttonlink more rs-settings-external-link" target="_blank" rel="noreferrer"><span>Manage my personal information {`>`} </span><span className="visuallyhidden" style={{"display" : "none"}}>(opens in a new window)</span></a>
                    </div>     
                </div>
            </div>
            
        </div>
        </div>
        {/* <!-- popup --> */}
    {/* <!-- openAccountInfo() --> */}
    <div className="openaccountinfo form-modelus" id="popupForm-accountinfo" style={{display: openAccount ? 'none ':'block '}}>
        <div className="form-accountinfo ">
            <form action="" className="form-container">
                <h1>Edit your account info</h1>
                <div className="mem-form-textbox">
                    <input type="text" id="firstName" value={data.firstname}/>
                    <span className="firstName_label">First Name</span>
                </div>
                <div className="mem-form-textbox">
                    <input type="text" id="mem-lastName" value="{{lastName}}"/>
                    <span className="firstName_label">Last Name</span>
                </div>
                <div className="mem-form-textbox">
                    <input type="text" id="address" value="{{address}}"/>
                    <span className="firstName_label">Address</span>
                </div>
                <div className="mem-overlay-change">
                    <button type="submit"  className="mem-btn">Save</button>
                    <button type="button"  className="mem-btn cancel" onClick={openAccountInfo}>cancel</button>
                </div>
                <button type="button" className="rc-overlay-close" onClick={openAccountInfo} aria-label="close" data-autom="overlay-close"><span className="rc-overlay-closesvg"><svg width="21" height="21" className="as-svgicon as-svgicon-close as-svgicon-tiny as-svgicon-closetiny" role="img" aria-hidden="true"><path fill="none" d="M0 0h21v21H0z"></path><path d="M12.12 10l4.07-4.06a1.5 1.5 0 10-2.11-2.12L10 7.88 5.94 3.81a1.5 1.5 0 10-2.12 2.12L7.88 10l-4.07 4.06a1.5 1.5 0 000 2.12 1.51 1.51 0 002.13 0L10 12.12l4.06 4.07a1.45 1.45 0 001.06.44 1.5 1.5 0 001.06-2.56z"></path></svg></span></button>
                
            </form>
        </div>
    </div>
    {/* <!-- email() --> */}
    <div className="openaccountinfo form-modelus" id="popupForm-email" style={{display: openEmail ? 'none ':'block '}}>
        <div className="form-email ">
            <form action="" className="form-container">
                <h1>Edit your email info</h1>
                <div className="mem-form-textbox">
                    <input type="text" id="email" value={data.email} readOnly/>
                    <span className="firstName_label">Email</span>
                </div>
                <div className="mem-form-textbox">
                    <input type="text" id="newEmail" />
                    <span className="firstName_label">New email</span>
                </div>
                <div className="mem-overlay-change">
                    <button type="submit"  className="mem-btn">Save</button>
                    <button type="button"  className="mem-btn cancel" onClick={openEmailInfo}>cancel</button>
                </div>
                <button type="button" className="rc-overlay-close" onClick={openEmailInfo} aria-label="close" data-autom="overlay-close"><span className="rc-overlay-closesvg"><svg width="21" height="21" className="as-svgicon as-svgicon-close as-svgicon-tiny as-svgicon-closetiny" role="img" aria-hidden="true"><path fill="none" d="M0 0h21v21H0z"></path><path d="M12.12 10l4.07-4.06a1.5 1.5 0 10-2.11-2.12L10 7.88 5.94 3.81a1.5 1.5 0 10-2.12 2.12L7.88 10l-4.07 4.06a1.5 1.5 0 000 2.12 1.51 1.51 0 002.13 0L10 12.12l4.06 4.07a1.45 1.45 0 001.06.44 1.5 1.5 0 001.06-2.56z"></path></svg></span></button>
                
            </form>
        </div>
    </div>
    {/* <!-- password() --> */}
    <div className="openaccountinfo form-modelus" id="popupForm-password" style={{display: openPassword ? 'none ':'block '}}>
        <div className="form-password ">
            <form action="" className="form-container">
                <h1>Change your password </h1>
                <div className="mem-form-textbox">
                    <input type="password" id="password" />
                    <span className="firstName_label">Current password</span>
                </div>
                <div className="mem-form-textbox">
                    <input type="password" id="newPassword" />
                    <span className="firstName_label">New password</span>
                </div>
                <div className="mem-overlay-change">
                    <button type="submit"  className="mem-btn">Save</button>
                    <button type="button"  className="mem-btn cancel" onClick={openPasswordInfo}>cancel</button>
                </div>
                <button type="button" className="rc-overlay-close" onClick={openPasswordInfo} aria-label="close" data-autom="overlay-close"><span className="rc-overlay-closesvg"><svg width="21" height="21" className="as-svgicon as-svgicon-close as-svgicon-tiny as-svgicon-closetiny" role="img" aria-hidden="true"><path fill="none" d="M0 0h21v21H0z"></path><path d="M12.12 10l4.07-4.06a1.5 1.5 0 10-2.11-2.12L10 7.88 5.94 3.81a1.5 1.5 0 10-2.12 2.12L7.88 10l-4.07 4.06a1.5 1.5 0 000 2.12 1.51 1.51 0 002.13 0L10 12.12l4.06 4.07a1.45 1.45 0 001.06.44 1.5 1.5 0 001.06-2.56z"></path></svg></span></button>
                
            </form>
        </div>
    </div>
    {/* <!-- phone() --> */}
    <div className="openaccountinfo form-modelus" id="popupForm-phone" style={{display: openPhone ? 'none' :'block'}}>
        <div className="form-phone ">
            <form action="" className="form-container">
                <h1>Edit your phone info</h1>
                <div className="mem-form-textbox">
                    <input type="text" id="phone" value={'0'+data.phonenumber} readOnly/>
                    <span className="firstName_label">phone</span>
                </div>
                <div className="mem-form-textbox">
                    <input type="text" id="newPhone" />
                    <span className="firstName_label">new Phone</span>
                </div>
                <div className="mem-overlay-change">
                    <button type="submit"  className="mem-btn">Save</button>
                    <button type="button"  className="mem-btn cancel" onClick={openPhoneInfo}>cancel</button>
                </div>
                <button type="button" className="rc-overlay-close" onClick={openPhoneInfo} aria-label="close" data-autom="overlay-close"><span className="rc-overlay-closesvg"><svg width="21" height="21" className="as-svgicon as-svgicon-close as-svgicon-tiny as-svgicon-closetiny" role="img" aria-hidden="true"><path fill="none" d="M0 0h21v21H0z"></path><path d="M12.12 10l4.07-4.06a1.5 1.5 0 10-2.11-2.12L10 7.88 5.94 3.81a1.5 1.5 0 10-2.12 2.12L7.88 10l-4.07 4.06a1.5 1.5 0 000 2.12 1.51 1.51 0 002.13 0L10 12.12l4.06 4.07a1.45 1.45 0 001.06.44 1.5 1.5 0 001.06-2.56z"></path></svg></span></button>
                
            </form>
        </div>
    </div>
    <div  style={{"backgroundColor":"#f5f5f7"}}><Footer/></div>
    
    {/* gf-content */}
    </>
    )

    
    

}

export default Member_info