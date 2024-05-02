import styles from '../styles/Home.module.css';
import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Modal from 'react-modal';

function Login() {

    const [signUpOpen, setSignUpOpen] = useState(false)
    const [signInOpen, setSignInOpen] = useState(false)

    const handleOpenSignUp = () => {
        setSignUpOpen(true)
    }
    const handleCloseSignUp = () => {
        setSignUpOpen(false)
    }

    const handleOpenSignIn = () => {
        setSignInOpen(true)
    }
    const handleCloseSignIn = () => {
        setSignInOpen(false)
    }


  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>See what's</h1>
        <h1 className={styles.title}>happening</h1>
        <h2>Join Hackatweet today.</h2>
        <button onClick={handleOpenSignUp}>Sign up</button>
        <Modal isOpen={signUpOpen} onRequestClose={handleCloseSignUp}><SignUp/></Modal>
        <p>Already have an account ?</p>
        <button onClick={handleOpenSignIn}>Sign in</button>
        <Modal isOpen={signInOpen} onRequestClose={handleCloseSignIn}><SignIn/></Modal>
      </main>
    </div>
  );
}

export default Login;