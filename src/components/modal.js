import classes from "styles/movies.module.css";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const ModalComponent = (props) => {
  const open = props.open;
  const title = props.title;
  const date = props.date;
  const language = props.language;
  const vote = props.vote;
  const overview = props.overview;
  const like = props.like;
  const dislike = props.dislike;
  const onClose = props.onClose;

  return (
    <Modal open={open} onClose={onClose} center>
      <h2
        style={{
          color: "black",
          fontWeight: "bold",
          fontFamily: "Book Antiqua",
        }}
      >
        Movie Details
      </h2>
      <div className={classes.container}>
        <div className={classes.littleCard}>
          <img
            className={classes.modalImage}
            src={require("../img/img2.jpg")}
            alt=""
          />
          <button className={classes.downloadButton}>
            <span className={classes.textButton}>watch and download</span>
          </button>
        </div>

        <div style={{ width: "100%", height: "15rem", marginTop: "2%" }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <h2 className={classes.movieTitle}>{title} </h2>
            <h5 className={classes.moviedate}>({date}) </h5>
          </div>
          <table>
            <tr>
              <td className={classes.rowTitle}>languge</td>
              <td className={classes.rowContent}>{language}</td>
            </tr>
            <tr>
              <td className={classes.rowTitle}>vote</td>
              <td className={classes.rowContent}>{vote}</td>
            </tr>
            <tr>
              <td className={classes.rowTitle}>overview</td>
              <td className={classes.rowContent}>{overview}</td>
            </tr>
          </table>
          <div className={classes.buttonDisplay}>
            <button onClick={() => like(title)} className={classes.likeButton}>
              {/*<ThumbUpIcon style={{color:'green'}}></ThumbUpIcon>*/}
              <span style={{ color: "green", fontWeight: "bold" }}>TOP</span>
            </button>
            <button
              onClick={() => dislike(title)}
              className={classes.likeButton}
            >
              <span style={{ color: "red", top: -1, fontWeight: "bold" }}>
                FLOP
              </span>
              {/*<ThumbDownIcon style={{color:'red'}}></ThumbDownIcon>*/}
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalComponent;
