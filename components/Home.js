import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Tweet from "./Tweet";

function Home() {
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
              <span>Name</span>
              <span>@Name</span>
            </div>
          </div>
          <button className={styles.btnLogout}>Logout</button>
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
      <div className={styles.msgContainer}>{Tweet}</div>
      <div className={styles.trend}>
        <h2 className={styles.title}>Trends</h2>
      </div>
    </div>
  );
}

export default Home;
