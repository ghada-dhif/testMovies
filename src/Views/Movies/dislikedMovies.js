import React from "react";
import classes from "styles/movies.module.css";
import { useSelector } from "react-redux";
import AppBar from "components/appBar";

const DislikedMovies = () => {
  const dislikedMovies = useSelector((state) => state.allMovies.dislikedMovies);
  return (
    <div className={classes.project}>
      <AppBar />
      <div className={classes.firstDiv} />
      {dislikedMovies.length === 0 ? (
        <div
          style={{
            width: "100%",
            justifyContent: "center",
            display: "flex",
            marginTop: "25%",
          }}
        >
          <span style={{ color: "red", fontWeight: "bold" }}>
            disliked films list is empty
          </span>
        </div>
      ) : (
        <div className={classes.cards}>
          <>
            {dislikedMovies.map((movie) => (
              <div className={classes.card}>
                <img
                  className={classes.image}
                  src={require("../../img/img19.jpg")}
                  alt=""
                />
                <span className={classes.movieTitle}>{movie}</span>
              </div>
            ))}
          </>
        </div>
      )}
    </div>
  );
};
export default DislikedMovies;
