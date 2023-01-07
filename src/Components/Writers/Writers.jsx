import styles from "./Writers.module.css";
//import Writer from "./Writer/Writer"
import writerAvatar from "../../img/just2102_avatar.png";
import { NavLink } from "react-router-dom";

const Writers = (props) => {
//   let numberOfPages = Math.ceil(props.totalWriters / props.writersOnPage);
//   let pages = [];
//   for (let i = 1; i <= numberOfPages; i++) {
//     pages.push(i);
//   }
  let pagesMapped = props.pages.map((page) => {
    return (
      <span
        onClick={() => props.onPageClick(page)}
        className={
          page === props.currentPage ? styles.active_page : styles.inactive_page
        }
      >
        {page}
      </span>
    );
  });
  let writersMapped = props.writers.map((writer) => {
    return (
      <div className={styles.writer}>
        <NavLink to={`/articles/${writer.id}`}>
        <div className={styles.writer_avatar}>
          <img
            src={writer.avatar}
            alt=""
          />
        </div>
        </NavLink>
        <div className={styles.writer_username}>{writer.username}</div>
        {writer.followed === true ? (
          <button
            className={styles.unfollow_button}
            disabled={props.followingInProgress === writer.id}
            onClick={() => props.onUnfollow(writer.id)}
          >
            Following
          </button>
        ) : (
          <button
            className={styles.follow_button}
            disabled={props.followingInProgress === writer.id}
            onClick={() => props.onFollow(writer.id)}
          >
            Not following
          </button>
        )}
      </div>
    );
  });
  return (
    <div className={styles.writers}>
      <div className={styles.pages}>{pagesMapped}</div>
      {writersMapped}
    </div>
  );
};

export default Writers;
