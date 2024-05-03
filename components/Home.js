import styles from "../styles/Home.module.css";
import Tweet from "./Tweet";
import { logout } from "../reducers/user";
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();
  const dispatch = useDispatch();


  const user = useSelector((state) => state.user.value)
  
  const handleLogout = () => {
    dispatch(logout());
    router.push('/')
  };
 


  return (
    <div className={styles.containerHome}>
      <div className={styles.personnal}>
        <img
          className={styles.logoTwitter}
          src="rettiwt.png"
          alt="Logo twitter"
        />
        <div className={styles.containerIdentity}>
          <div className={styles.identity}>
            <img
              className={styles.logoAvatar}
              src="avatar-1.jpg"
              alt="avatar"
            />
            <div className={styles.name}>
              <span>{user.firstname}</span>
              <span>@.{user.username}</span> 
            </div>
          </div>
          <button className={styles.btnLogout} onClick={handleLogout}>Logout</button>
        </div>
      </div>
      <div className={styles.addTweet}>
        <h1 className={styles.title}>Home</h1>
        <textarea
          className={styles.input}
          type="text"
          placeholder="What's up?"
          maxLength="280"
          rows="2"
        ></textarea>
        <div className={styles.nombreBtn}>
          <span>0/280</span>
          <button className={styles.btnTweet}>Tweet</button>
        </div>
      </div>
      <div className={styles.msgContainer}>
        <Tweet />
      </div>
      <div className={styles.trend}>
        <h2 className={styles.title}>Trends</h2>
      </div>
    </div>
  );
}

export default Home;
