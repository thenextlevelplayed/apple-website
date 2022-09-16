import "../css/sign_up.css"
import Navbar from "../components/Navbar"
import React, { useState} from 'react'
import Axios from 'axios'
import {useNavigate} from 'react-router-dom';
import { validEmail, validPassword } from './components/RegExp';
const Sign_up =() =>{

    const getInitialState = () =>{
        const country = "Taiwan";
        return country;
    }

    
    const getPhoneZone = () =>{
        const phonezone = "TW";
        return phonezone;
    }

    const [firstName,SetFistName] = useState('');
    const [lastName,SetLastName] = useState('');
    const [country,SetCountry] = useState(getInitialState);
    const [birthday,SetBirthday] = useState('');
    const [email,SetEmail] = useState('');
    const [firstPassword,SetFirstPassword] = useState('');
    const [password,SetPassword] = useState('');
    const [phonezone,SetPhoneZone] = useState(getPhoneZone);
    const [phone,SetPhone] = useState('');
    // const [emailErr, setEmailErr] = useState(false);
    
    const navigate = useNavigate();



    const  register = () =>{


        if (!validEmail.test(email)) {
            alert('Your email is invalid')
         }
         else if(firstPassword != password){
            alert('Your password is not the same')
         }
        else{
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

            
            alert("succseefully register");
            navigate('/sign-in', {replace: true});
         }


        

        




    }
    // console.log(country)

    console.log(phonezone)

    return(
        <>
        <Navbar/>
        <div className="login-page">
        <div>
            <h1>Apple ID</h1>
            <div className="sign-up"> <a href="/sign-in">sign in</a></div>
            <a className="rs-account-sign-up" href="/sign-up">Create Your Apple ID</a>
            <br/>
        </div>
        <div className="login-page_header">
        </div>
    </div>

    <div className="flow">
        <div className="flow-container">
            <form onSubmit={register}>
                <div className="flow-section">
                    <div className="flow-section-title"><h1>Create Your Apple ID</h1></div>
                    <div className="flow-section-sub-title">
                        <div className="intro-text">One Apple ID is all you need to access all Apple services.</div>
                        <div className="intro-link">
                            <p>Already have an Apple&nbsp;ID?<a className="no-wrap" href="https://iforgot.apple.com/appleid">Find it here</a></p>
                            
                        </div>
                    </div>
                    <div className="form-textbox spec">
                        <input type="text" id="firstName" onChange={(event) =>{
                            SetFistName(event.target.value);
                        }} required/>
                        <span className="firstName_label_first">First Name</span>
                        <input type="text" id="lastName" onChange={(event) =>{
                            SetLastName(event.target.value);
                        }} required/>
                        <span className="firstName_label_last">Last Name</span>
                    </div>
                    <div className="form-textbox" style={{"marginTop":"10px"}}>
                        <label htmlFor="COUNTRY"><h3>COUNTRY / REGION</h3></label>
                        <select id="country" value={country} onChange={ (event) => {
                            SetCountry(event.target.value);
                        }}>
                            <option value="Taiwan">Taiwan</option>
                            <option value="United States">United States</option>
                            <option value="Nepal">Nepal</option>
                            <option value="Sweden">Sweden</option>
                        </select>
                    </div>
                    <div className="form-textbox">
                        <input type="date" id="birth" onChange={(event) =>{
                            SetBirthday(event.target.value);
                        }} required/>
                        <span className="rg-firstName_label">Birthday</span>
                    </div>
                </div>

                <div className="flow-section">
                    <div className="form-textbox">
                        <input type="text" id="email" onChange={(event) =>{
                            SetEmail(event.target.value);
                        }} required/>
                        <span className="rg-firstName_label">name@example.com</span>
                        <div className="aidcaption">This will be your new Apple ID.</div>
                    </div>
                    <div className="form-textbox">
                        <input type="password" id="password" onChange={(event) =>{
                            SetFirstPassword(event.target.value)}} required/>
                        <span className="rg-firstName_label">Password</span>
                    </div>
                    <div className="form-textbox">
                        <input type="password" id="confirm-password" onChange={(event) =>{
                            SetPassword(event.target.value);
                        }} required/>
                        <span className="rg-firstName_label">Confirm password</span>
                    </div>
                </div>

                <div className="flow-section">
                    <div className="form-textbox">
                        <select id="zone" value={phonezone} onChange={ (event) => {
                            SetPhoneZone(event.target.value);
                        }}>
                            <option value="TW">+886 (Taiwan)</option>
                            <option value="US">+1 (United States)</option>
                            <option value="Np">+977 (Nepal)</option>
                            <option value="SE">+46 (Sweden)</option>
                        </select>
                    </div>
                    <div className="form-textbox">
                        <input type="text" id="phone" onChange={(event) =>{
                            SetPhone(event.target.value);
                        }} required/>
                        <span className="rg-firstName_label">Phone number</span>
                    </div>
                </div>

                <div className="privacy">
                    <div className="privacy-icon"> </div>
                    Your Apple ID information is used to allow you to sign in securely and access your data. Apple records certain data for security, support and reporting purposes. If you agree, Apple may also use your Apple ID information to send you marketing emails and communications, including based on your use of Apple services. 
                </div>
                <div className="register-btn">
                    <button type="submit" className="sign-up-btn">Register</button>
                </div>
            </form>
        </div>
    </div>
    
    <div id="apple-footer">
        <div className="copyright">
            <span>Copyright © 2022 Apple Inc. All rights reserved.</span>
        </div>
    </div>
        </>
    )
}

export default Sign_up