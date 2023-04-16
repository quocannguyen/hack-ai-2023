import React from "react";
import { Link } from "react-router-dom";
import styles from './styles/login.module.css'

const Login = () => {
    return(
       <div className = {styles.wrapper}>
            <div className = {styles.title}>
                Welcome!
            </div>
            <form action = "#">
                <div className={styles.field}>
                    <input type = "text" required/>
                    <label>Username</label>
                </div>
                <div className = {styles.field}>
                    <input type = "password" required/>
                    <label>Password</label>
                </div>
                <div className = {styles.content}>
                    <div className = {styles.checkbox}>
                        <input type = "checkbox" id = "remember-me"/>
                        <label for = "remember-me">Remember Me</label>
                    </div>
                    <div className = {styles.passLink}>
                        <Link to='input'>Forgot Password?</Link>
                    </div>
                </div>
                <div className = {styles.field}>
                    <Link to={'input'}><input type = "submit" value = "Login"/></Link>
                </div>
                <div className = {styles.signupLink}>
                     Not a member?  <Link to={'signup'}>Signup Now</Link>
                </div>
            </form>
        </div>
    )
}

export default Login;