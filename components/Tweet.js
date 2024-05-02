import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Tweet(props) {
  return (
    <div>
      <div className={styles.row}>
        <div className={styles.namePublication}>
          <img className={styles.logoAvatar} src="avatar-1.jpg" />
          <h6>John Doe @JohnLeProf . 5 hours</h6>
        </div>
        <p>Lorem ipsum dolor sit.</p>
        <FontAwesomeIcon icon={faHeart} />
      </div>
    </div>
  );
}

export default Tweet;
