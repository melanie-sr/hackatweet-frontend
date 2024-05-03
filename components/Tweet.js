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
    styleHeart = { color: "#000000" };
  }

  return (
    <div>
      <div className={styles.row}>
        <div className={styles.namePublication}>
          <img className={styles.logoAvatar} src="avatar-1.jpg" />
          <h6 className={styles.text}>
            {props.firstname} @{props.username} . 5 hours
          </h6>
        </div>
        <p style={{ color: "white" }}>{props.tweet}</p>
        <div className={styles.logo}>
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
