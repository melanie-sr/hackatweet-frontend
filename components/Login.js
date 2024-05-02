import Link from "next/link";
import styles from "../styles/Home.module.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function Login() {
  //   const Modal = ({ isOpen, onClose }) => {
  //     if (!isOpen) {
  //       return null; // Don't render anything if the modal is closed
  //     }

  //   return;
  // };

  return (
    <div>
      <main className={styles.main}>
        <Link href="/home">Home</Link>
        <h1 className={styles.title}>See what's</h1>
        <h1 className={styles.title}>happening</h1>
        <h2>Join Hackatweet today.</h2>
        <button>Sign up</button>
        {/* <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <SignIn />
        </Modal>
        <p>Already have an account ?</p>
        <button>Sign in</button>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <SignUp />
        </Modal> */}
      </main>
    </div>
  );
}

export default Login;
