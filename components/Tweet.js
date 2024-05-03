import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Tweet.module.css";
import { useState } from "react";

function Tweet(props) {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    console.log("click");
    setLiked(!liked);
  };
  let styleHeart = "";
  if (liked) {
    styleHeart = { color: "#e74c3c" };
  } else {
    styleHeart = { color: "black" };
  }

  return (
    <div>
      <div className={styles.row}>
        <div className={styles.namePublication}>
          <img className={styles.logoAvatar} src="avatar-1.jpg" />
          <h6>{props.username} @JohnLeProf . 5 hours</h6>
        </div>
        <div className={styles.logo}>
          <p>{props.tweet}</p>
          <FontAwesomeIcon
            onClick={() => handleLike()}
            icon={faHeart}
            style={styleHeart}
          />
          <FontAwesomeIcon icon={faTrashCan} />
        </div>
      </div>
    </div>
  );
}

export default Tweet;
