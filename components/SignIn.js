import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { login } from '../reducers/user';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

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
        })
    };


    return (
        <div>
            <FontAwesomeIcon icon={faXmark} />
            <input onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername} type="text" placeholder="Username" id="signInUsername"/>
            <input onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} type="password" placeholder="Password" id="signInPassword"/>
            <button id="Sign in" onClick={() => handleSignIn()}>Sign in</button>
        </div>
    )
}

export default SignIn;