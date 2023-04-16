import React from "react";
import { Link } from "react-router-dom";
import styles from './styles/login.module.css';

const Login = () => {
  return (
    <div className={styles.container}>
    <div className={styles.wrapper}>
      <div className={styles.title}>Welcome!</div>
      <form>
        <div className={styles.field}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" required />
        </div>
        <div className={styles.field}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" required />
        </div>
        <div className={styles.content}>
          <div className={styles.checkbox}>
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember Me</label>
          </div>
          <div className={styles.passLink}>
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </div>
        <div className={styles.field}>
          <Link to="/input">
            <input type="submit" value="Login" />
          </Link>
        </div>
        <div className={styles.signupLink}>
          Not a member? <Link to="/signup">Signup Now</Link>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Login;
