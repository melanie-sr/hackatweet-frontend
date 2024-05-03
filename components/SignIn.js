import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { login } from '../reducers/user';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Login.module.css';


function SignIn () {
    const dispatch = useDispatch();

    const [signInUsername, setSignInUsername] = useState('');
    const [signInPassword, setSignInPassword] = useState('');


    const handleSignIn = () => {
        fetch('http://localhost:3000/users/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: signInUsername, password: signInPassword }),
        }).then(response => response.json())
        .then(data => {
            if (data.result) {
                dispatch(login({ username: signInUsername, token: data.token }));
                setSignInUsername('');
                setSignInPassword('');
            }
        }).then(<link rel="stylesheet" href="/home" />) //? -- à tester

    };


    return (
        <div>
            <div className={styles.faXmark}>
                <FontAwesomeIcon icon={faXmark} />
            </div>
            <div className={styles.modalsStyle}>
                <img className={styles.logo2} src="Logo-twitter-blanc-png-800x800.png" alt="Logo" />
                <h2>Connect to Hackatweet</h2>
                <div className={styles.inputs}>
                    <input className={styles.input} onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername} type="text" placeholder="Username" id="signInUsername"/>
                    <input className={styles.input} onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} type="password" placeholder="Password" id="signInPassword"/>
                    <button className={styles.button} id="Sign in" onClick={() => handleSignIn()}>Sign in</button>
                </div>
            </div>
        </div>
    )
}

export default SignIn;