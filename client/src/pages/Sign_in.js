import "../css/sign_in.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
const Sign_in = () => {
    return (
      
      <>
      <Navbar/>
      <div class="login-page">
      <div>
          <h1>Apple ID</h1>
          <div class="sign-up">sign in</div>
          <a class="rs-account-sign-up" href="/sign-up">Create Your Apple ID</a>
          <br />
      </div>
      <div class="login-page_header">
      </div>
  </div>
  <div class="landing">
      <div class="landing-top">
          <div class="landing-interaction">
              <div class="sign-in">
                  <div class="sign-in-auth">
                      <div class="sign-in-title">
                          <h1 class="appleid">Apple ID</h1>
                          <p>Manage your Apple account</p>
                      </div>
                      <div class="form-sign-in ">
                          <form action="" class="form-container">
                              <div class="form-textbox">
                                  <input type="text" id="email"/>
                                  <span class="sign-in-firstName_label">Apple ID</span>
                              </div>
                              <div class="form-textbox">
                                  <input type="password" id="assword"/>
                                  <span class="sign-in-firstName_label">Password</span>
                              </div>
                              <div class="overlay-change">
                                  <button type="submit"  class="btn">
                                      <span class="arrow-right"></span>
                                  </button>
                              </div>
                              <div class="remember-password">
                                  <input type="checkbox" name="" id="remember-me"/>
                                  <label for="remember-me">
                                      <span>
                                          Remember me
                                      </span>
                                  </label>
                              </div>                              
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>

  <div class="rs-chat">
      <div class="rs-chat-container">
          <div>
              Need some help? or call 1‑800‑MY‑APPLE.
          </div>
      </div>
  </div>

  <div id="apple-footer">
      <div class="copyright">
          <span>Copyright © 2022 Apple Inc. All rights reserved.</span>
      </div>
  </div>
  </>
    )
  };
  
  export default Sign_in;