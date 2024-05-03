import styles from '../styles/Login.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { login } from '../reducers/user';
import { useRouter } from 'next/router';


function SignIn () {
    const dispatch = useDispatch();
    const router = useRouter();

    const [signInFirstname, setSignInFirstname] = useState('');
    const [signInUsername, setSignInUsername] = useState('');
    const [signInPassword, setSignInPassword] = useState('');


    const handleSignIn = () => {
            fetch('http://localhost:3000/users/signin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({firstname: signInFirstname, username: signInUsername, password: signInPassword }),
            }).then(response => response.json())
            .then(data => {
                if (data.result) {
                    dispatch(login({ firstname: signInFirstname, username: signInUsername, token: data.token }));
                    setSignInFirstname('');
                    setSignInUsername('');
                    setSignInPassword('');
                    router.push('/home')
                }
            })

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