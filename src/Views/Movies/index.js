import { Movies } from "../list-de-films";
import classes from "styles/movies.module.css";
import { useEffect, useState } from "react";
import "react-responsive-modal/styles.css";
import ModalComponent from "components/modal";
import { useDispatch } from "react-redux";
import { setDislikedMovies, setMovies } from "redux/actions/moviesActions";
import swal from "sweetalert";
import NavBar from "components/navBar";
const MoviesList = (props) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [language, setLanguage] = useState("");
  const [vote, setVote] = useState();
  const [overview, setOverview] = useState("");
  const [filtredWord, setFiltredWord] = useState("");
  const [likedMovieList, setLikedMovieList] = useState([]);
  const [disLikedMovieList, setDislikedMovieList] = useState([]);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  //  function to open the modal
  const onOpenModal = (title, date, language, vote, overview) => {
    setOpen(true);
    setTitle(title);
    setDate(date);
    setLanguage(language);
    setVote(vote);
    setOverview(overview);
  };

  //  function to setSearch
  const handelChange = (e) => {
    setFiltredWord(e.target.value);
  };

  //  function to close modal
  const onCloseModal = () => setOpen(false);

  //  function to get search result
  const newMovies = Movies.filter((movie) => {
    return movie.title?.toLowerCase().includes(filtredWord);
  });

  //  function to set liked movies in store redux
  function like(movie) {
    const index = likedMovieList.indexOf(movie);
    if (index === -1) {
      setLikedMovieList([...likedMovieList, movie]);
      dispatch(setMovies([...likedMovieList, movie]));

      console.log("ghada", [...likedMovieList, movie]);
      swal({
        title: "Done!",
        text: "Movie added to liked Movies List!",
        icon: "success",
      });
    } else {
      swal("Movie is already added to liked movies list!");
    }
  }
  //  function to set disliked movies in store redux
  function dislike(movie) {
    const index = disLikedMovieList.indexOf(movie);
    if (index === -1) {
      setDislikedMovieList([...disLikedMovieList, movie]);
      dispatch(setDislikedMovies([...disLikedMovieList, movie]));
      swal({
        title: "Done!",
        text: "Movie added to disliked Movies List!",
        icon: "success",
      });
    } else {
      swal("Movie is already added to disliked movies list!");
    }
  }
  useEffect(() => {
    if (filtredWord.length !== 0 && newMovies.length === 0) {
      setError(true);
    } else setError(false);
  }, [filtredWord.length, newMovies.length]);

  return (
    <div className={classes.project}>
      <NavBar handelChange={handelChange} />

      <div className={classes.firstDiv}></div>
      {error === true ? (
        <div className={classes.error}>
          {" "}
          <span style={{ color: "red" }}>Nothing to schow:Movie not found</span>
        </div>
      ) : null}
      <div className={classes.cards}>
        <ModalComponent
          open={open}
          onClose={onCloseModal}
          title={title}
          date={date}
          overview={overview}
          language={language}
          vote={vote}
          like={like}
          dislike={dislike}
        />
        {newMovies.length !== 0 && newMovies.length + 1 !== Movies.length ? (
          <>
            {newMovies.map((movie) => (
              <div
                onClick={() =>
                  onOpenModal(
                    movie.title,
                    movie.release_date,
                    movie.original_language,
                    movie.vote_average,
                    movie.overview
                  )
                }
                className={classes.card}
              >
                <img
                  className={classes.image}
                  src={require("../../img/img24.jpg")}
                  alt=""
                />
              </div>
            ))}
          </>
        ) : (
          <>
            {error === false ? (
              <>
                {Movies.map((movie) => (
                  <div
                    onClick={() =>
                      onOpenModal(
                        movie.title,
                        movie.release_date,
                        movie.original_language,
                        movie.vote_average,
                        movie.overview
                      )
                    }
                    className={classes.card}
                  >
                    <img
                      className={classes.image}
                      src={require("../../img/img2.jpg")}
                      //src={require(movie.path)}
                      alt=""
                    />
                  </div>
                ))}
              </>
            ) : null}
          </>
        )}
      </div>
    </div>
  );
};

export default MoviesList;
