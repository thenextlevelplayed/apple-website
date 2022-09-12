import "../css/sign_up.css"
import Navbar from "../components/Navbar"
import React, { useState } from 'react'
import Axios from 'axios'
const Sign_up =() =>{

    const getInitialState = () =>{
        const country = "Taiwan";
        return country;
    }

    const [firstName,SetFistName] = useState('');
    const [lastName,SetLastName] = useState('');
    const [country,SetCountry] = useState(getInitialState);
    const [birthday,SetBirthday] = useState('');
    const [email,SetEmail] = useState('');
    const [password,SetPassword] = useState('');
    const [phonezone,SetPhoneZone] = useState('');
    const [phone,SetPhone] = useState('');



    const register = () =>{
        Axios.post("http://localhost:3001/register" , {
            firstName: firstName,
            lastName: lastName,
            country: country,
            birthday: birthday,
            email: email,
            password:password,
            phonezone:phonezone,
            phone:phone
        })

        console.log(firstName)

    }

    return(
        <>
        <Navbar/>
        <div class="login-page">
        <div>
            <h1>Apple ID</h1>
            <div class="sign-up"> <a href="sign_in.html">sign in</a></div>
            <a class="rs-account-sign-up" href="/signup">Create Your Apple ID</a>
            <br/>
        </div>
        <div class="login-page_header">
        </div>
    </div>

    <div class="flow">
        <div class="flow-container">
            <form action="http://localhost:3001/register" method="POST" class="">
                <div class="flow-section">
                    <div class="flow-section-title"><h1>Create Your Apple ID</h1></div>
                    <div class="flow-section-sub-title">
                        <div class="intro-text">One Apple ID is all you need to access all Apple services.</div>
                        <div class="intro-link">
                            <p>Already have an Apple&nbsp;ID?<a class="no-wrap" href="https://iforgot.apple.com/appleid">Find it here</a></p>
                            
                        </div>
                    </div>
                    <div class="form-textbox spec">
                        <input type="text" id="firstName" onChange={(event) =>{
                            SetFistName(event.target.value);
                        }}/>
                        <span class="firstName_label_first">First Name</span>
                        <input type="text" id="lastName" onChange={(event) =>{
                            SetLastName(event.target.value);
                        }}/>
                        <span class="firstName_label_last">Last Name</span>
                    </div>
                    <div class="form-textbox" style={{"margin-top":"10px"}}>
                        <label for="COUNTRY"><h3>COUNTRY / REGION</h3></label>
                        <select id="country" value={country} onChange={ (event) => {
                            SetCountry(event.target.value);
                        }}>
                            <option value="Taiwan">Taiwan</option>
                            <option value="United States">United States</option>
                            <option value="Nepal">Nepal</option>
                            <option value="Sweden">Sweden</option>
                        </select>
                    </div>
                    <div class="form-textbox">
                        <input type="date" id="birth" onChange={(event) =>{
                            SetBirthday(event.target.value);
                        }}/>
                        <span class="rg-firstName_label">Birthday</span>
                    </div>
                </div>

                <div class="flow-section">
                    <div class="form-textbox">
                        <input type="text" id="email" onChange={(event) =>{
                            SetEmail(event.target.value);
                        }}/>
                        <span class="rg-firstName_label">name@example.com</span>
                        <div class="aidcaption">This will be your new Apple ID.</div>
                    </div>
                    <div class="form-textbox">
                        <input type="password" id="password" />
                        <span class="rg-firstName_label">Password</span>
                    </div>
                    <div class="form-textbox">
                        <input type="password" id="confirm-password" onChange={(event) =>{
                            SetPassword(event.target.value);
                        }}/>
                        <span class="rg-firstName_label">Confirm password</span>
                    </div>
                </div>

                <div class="flow-section">
                    <div class="form-textbox">
                        <select id="zone" value={phonezone} onChange={ (event) => {
                            SetPhoneZone(event.target.value);
                        }}>
                            <option value="TW">+886 (Taiwan)</option>
                            <option value="US">+1 (United States)</option>
                            <option value="Np">+977 (Nepal)</option>
                            <option value="SE">+46 (Sweden)</option>
                        </select>
                    </div>
                    <div class="form-textbox">
                        <input type="text" id="phone" onChange={(event) =>{
                            SetPhone(event.target.value);
                        }}/>
                        <span class="rg-firstName_label">Phone number</span>
                    </div>
                </div>

                <div class="privacy">
                    <div class="privacy-icon"> </div>
                    Your Apple ID information is used to allow you to sign in securely and access your data. Apple records certain data for security, support and reporting purposes. If you agree, Apple may also use your Apple ID information to send you marketing emails and communications, including based on your use of Apple services. 
                </div>
                <div class="register-btn">
                    <button type="submit" class="sign-up-btn">Register</button>
                </div>
            </form>
        </div>
    </div>
    
    <div id="apple-footer">
        <div class="copyright">
            <span>Copyright © 2022 Apple Inc. All rights reserved.</span>
        </div>
    </div>
        </>
    )
}

export default Sign_up