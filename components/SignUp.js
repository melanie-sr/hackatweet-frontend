import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { login } from '../reducers/user';


function SignUp () {
 const dispatch = useDispatch();

    const [signUpFirstname, setSignUpFirstname] = useState('');
    const [signUpUsername, setSignUpUsername] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');


    fetch('http://localhost:3000/users/signup', {

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstname: signUpFirstname, username: signUpUsername, password: signUpPassword }),
    }).then(res =>res.json())
    .then(data => {
        if (data.result) {
            dispatch(login({ username: signUpUsername, token: data.token }));
            setSignUpFirstname('');
            setSignUpUsername('');
            setSignUpPassword('');
        }
    })

    return (
        <div>
            <FontAwesomeIcon icon={faXmark} />
            <input onChange={(e) =>setSignUpFirstname(e.target.value)} value={signUpFirstname} type="text" placeholder="Firstname" id="signUpFirstname"/>
            <input onChange={(e) =>setSignUpUsername(e.target.value)} value={signUpUsername} type="text" placeholder="Username" id="signUpUsername"/>
            <input onChange={(e) =>setSignUpPassword(e.target.value)} value={signUpPassword} type="password" placeholder="Password" id="signUpPassword"/>
            <button id="Sign up">Sign up</button>
        </div>
    )
}

export default SignUp;