import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "styles/feed.module.css";
const HomepageContainer = () => {
  const [youShouldNotPass, setYouShouldNotPass] = useState("NOPE");
  const [tryAgain, setTryAgain] = useState(false);
  const [counter, setCounter] = useState(0);
  let navigate = useNavigate();
  const mellon = () => {
    if (youShouldNotPass === "NOPE") {
      setTryAgain(true);
      setCounter(counter + 1);
    }
  };
  if (tryAgain === true && counter === 2) {
    return navigate("/login");
  }
  return (
    <div className={classes.content}>
      <div className={classes.div}>
        <div className={classes.title}>
          Test technique alternant Flying For You
        </div>
        <button className={classes.button} onClick={() => mellon()}>
          {tryAgain ? "Connecte moi ! (page login)" : "Commencer le test"}
        </button>
        {tryAgain && <div>Tu ne pensais pas que ce serait si simple ? ...</div>}
      </div>
    </div>
  );
};

export default HomepageContainer;
