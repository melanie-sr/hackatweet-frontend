import styles from '../styles/Home.module.css';
import { useDispatch } from 'react-redux';
import SignIn from './SignIn';
import SignUp from './SignUp';

function Login() {
    const dispatch = useDispatch();

    const [signUpFirstname, setSignUpFirstname] = useState('');
    const [signUpUsername, setSignUpUsername] = useState('');
	const [signUpPassword, setSignUpPassword] = useState('');
	const [signInUsername, setSignInUsername] = useState('');
	const [signInPassword, setSignInPassword] = useState('');

    const handleSignUpClick = () => {
        fetch('http://localhost:3000/signup')//?----route ok ???
    }

    const handleSignUpClick () => {
        fetch('http://localhost:3000/signin', {//?----route ok ???
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                firstname: signUpFirstname, 
                username: signUpUsername, 
                password: signUpPassword 
            }),
        }).then(Response => Response.json())
            .then(data => {
                dispatch(/*reducer*/); // --- à compléter
            })
    }





  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>See what's</h1>
        <h1 className={styles.title}>happening</h1>
        <h2>Join Hackatweet today.</h2>
        <button id="Sign up" onClick={() => handleSignUpClick()}>Sign up</button>
        <p>Already have an account ?</p>
        <button id="Sign in" onClick={() => handleSignInClick()}>Sign in</button>
      </main>
    </div>
  );
}

export default Login;