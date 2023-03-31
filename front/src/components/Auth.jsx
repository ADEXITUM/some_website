import React, { useState } from "react"

import '../assets/css/style.css'

const Auth = function(){
    function closeAuthMenu(){
        document.querySelector('.authmenu').classList.remove('active-popup')
        const timer = ms => new Promise(res => setTimeout(res, ms))
        setTimeout(function timer() {
            document.querySelector('.parallax').classList.remove('active-popup')
        }, 160);
    }

    const [switchToggled, setSwitchToggled] = useState(false)

    function ToggleSwitch() {
        return switchToggled ? setSwitchToggled(false) : setSwitchToggled(true) 
    }

    return (
    <div class="authmenu" id={ switchToggled ? "register" : "login"}>
        <span class="icon-close" onClick={closeAuthMenu}><ion-icon name="close-outline"></ion-icon></span>
        <div class="form-box login">
            <h2>Login</h2>
            <form action="#">
                <div class="input-box">
                    <span class="icon"><ion-icon name="mail-outline"></ion-icon></span>
                    <input type="email" required/>
                    <label>Email</label>
                </div>
                <div class="input-box">
                    <span class="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                    <input type="password" required/>
                    <label>Password</label>
                </div>
                <div class="remember-forgotten">
                    <label><input type="checkbox"/> Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>
                <button type="submit" class="btn">Login</button>
                <div class="login-register">
                    <p> Don't have an account?
                        <a href="#"
                        class="register-link" onClick={ToggleSwitch}> Register</a></p>
                </div>
            </form>
        </div>
        <div class="form-box register">
            <h2>Registration</h2>
            <form action="#">
                <div class="input-box">
                    <span class="icon"><ion-icon name="person-outline"></ion-icon></span>
                    <input type="username" required/>
                    <label>Username</label>
                </div>
                <div class="input-box">
                    <span class="icon"><ion-icon name="mail-outline"></ion-icon></span>
                    <input type="email" required/>
                    <label>Email</label>
                </div>
                <div class="input-box">
                    <span class="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                    <input type="password" required/>
                    <label>Password</label>
                </div>
                <div class="remember-forgotten">
                    <label class="terms"><input type="checkbox"/> I agree to the <a href="#">terms & conditions</a>
                    </label>
                </div>
                <button type="submit" class="btn">Register</button>      
                <div class="login-register">
                    <p> Already have an account? 
                        <a href="#" 
                        class="login-link" onClick={ToggleSwitch}> Login</a>
                    </p>
                </div>         
            </form>
        </div>
    </div>
    )
}

export default Auth