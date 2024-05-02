import styles from '../styles/Home.module.css';
import Login from './Login';
import SignIn from './SignIn';
import SignUp from './SignUp';

function Home() {
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </div>
  );
}

export default Home;
