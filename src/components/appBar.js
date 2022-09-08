import React from "react";
import { Link } from "react-router-dom";
import classes from "styles/movies.module.css";

function AppBar(props) {
  return (
    <div
      style={{
        alignItems: "start",
        position: "fixed",
        zIndex: 1,
        width: "100%",
      }}
    >
      <ul className={classes.navbarUl}>
        <li className={classes.navbarLi}>
          <Link to="/movies-list" className={classes.navbarTitle}>
            fly For You Movies
          </Link>
        </li>
        <li className={classes.navbarLi}>
          <Link to="/likedMovies" className={classes.navbarA}>
            Favorite Movies
          </Link>
        </li>
        <li className={classes.navbarLi}>
          <Link to="/dislikedMovies" className={classes.navbarA}>
            Disliked Movies
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default AppBar;
