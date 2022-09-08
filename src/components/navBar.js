import React from "react";
import { Link } from "react-router-dom";
import classes from "styles/movies.module.css";

function NavBar(props) {
  const handelChange = props.handelChange;
  return (
    <div
      style={{
        disolay: "flex",
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
        <li className={classes.navbarLi}>
          <li className={classes.navbarLi}>
            <input
              className={classes.searchInput}
              type="text"
              placeholder=" Search ... "
              onChange={(e) => handelChange(e)}
            ></input>
          </li>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
