import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import Tweet from "./Tweet";
import { logout } from "../reducers/user";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

function Home() {
  const [newTweet, setNewTweet] = useState("");
  const [tweetData, setTweetData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.value);

<<<<<<< HEAD
  const user = useSelector((state) => state.user.value)
  console.log('user is', user);
  
=======
>>>>>>> tweet
  const handleLogout = () => {
    dispatch(logout());
    router.push("/");
  };

  const handleTweet = () => {
    fetch("http://localhost:3000/tweet/newTweet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: user.token, message: newTweet }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("coucou", data);
        setNewTweet("");
        setRefresh(!refresh);
      });
  };

  useEffect(() => {
    fetch("http://localhost:3000/tweet/getTweets")
      .then((response) => response.json())
      .then((data) => {
        setTweetData(data.tweet);
      });
  }, [refresh]);

  const tweets = tweetData.map((tweet, i) => {
    console.log("tweet is", tweet);
    return (
      <Tweet
        key={i}
        firstname={tweet.user.firstname}
        username={tweet.user.username}
        tweet={tweet.message}
      />
    );
  });

  return (
    <div className={styles.containerHome}>
      <div className={styles.personnal}>
        <img className={styles.logoTwitter} src="rettiwt.png" alt="Logo twitter"/>
        <div className={styles.containerIdentity}>
          <div className={styles.identity}>
            <img
              className={styles.logoAvatar}
              src="avatar-1.jpg"
              alt="avatar"
            />
            <div className={styles.name}>
<<<<<<< HEAD
              <span className={styles.firstname}>{user.firstname}</span>
              <span className={styles.username}>@.{user.username}</span> 
=======
              <span>{user.firstname}</span>
              <span>@.{user.username}</span>
>>>>>>> tweet
            </div>
          </div>
          <button className={styles.btnLogout} onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
      <div className={styles.addTweet}>
        <h1 className={styles.title}>Home</h1>
        <textarea
          className={styles.input}
          onChange={(e) => setNewTweet(e.target.value)}
          type="text"
          placeholder="What's up?"
          maxLength="280"
          rows="2"
          value={newTweet}
        ></textarea>
        <div className={styles.nombreBtn}>
          <span>0/280</span>
          <button onClick={() => handleTweet()} className={styles.btnTweet}>
            Tweet
          </button>
        </div>
      </div>
      <div className={styles.msgContainer}>{tweets}</div>
      <div className={styles.trend}>
        <h2 className={styles.title}>Trends</h2>
      </div>
    </div>
  );
}

export default Home;
