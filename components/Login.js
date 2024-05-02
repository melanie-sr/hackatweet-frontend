import styles from '../styles/Login.module.css';
import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Modal from 'react-modal';

function Login() {

    const [signUpOpen, setSignUpOpen] = useState(false)
    const [signInOpen, setSignInOpen] = useState(false)

    const handleOpenSignUp = () => {setSignUpOpen(true)}
    const handleCloseSignUp = () => {setSignUpOpen(false)}
    const handleOpenSignIn = () => {setSignInOpen(true)}
    const handleCloseSignIn = () => {setSignInOpen(false)}


  return (
    <div>
      <main className={styles.main}>
        <div className={styles.leftSide}>
            <img className={styles.logo} src="Logo-twitter-blanc-png-800x800.png" alt="Logo" />
        </div>
        <div className={styles.rightSide}>
            <div className={styles.loginZone}>
                <img className={styles.logo} src="Logo-twitter-blanc-png-800x800.png" alt="Logo" />
                <h1 className={styles.title1}>See what's <br/>happening</h1>
                <h2 className={styles.title2}>Join Hackatweet today.</h2>
                <button className={styles.signUpButton} onClick={handleOpenSignUp}>Sign up</button>
                <Modal isOpen={signUpOpen} onRequestClose={handleCloseSignUp}><SignUp/></Modal>
                <p className={styles.p}>Already have an account ?</p>
                <button className={styles.signInButton} onClick={handleOpenSignIn}>Sign in</button>
                <Modal isOpen={signInOpen} onRequestClose={handleCloseSignIn}><SignIn/></Modal>
            </div>
        </div>
      </main>
    </div>
  );
}

export default Login;