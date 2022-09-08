import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./style.css";
import classes from "styles/login.module.css";
const LoginContainer = () => {
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();
  const onSubmit = () => {
    navigate("/movies-list");
  };

  return (
    <div className={classes.div}>
      <div className={classes.container}>
        <div className={classes.body}>
          <h4 className={classes.padawan}> Bienvenue Jeune Padawan</h4>
        </div>
        <form
          style={{ display: "flex", flexDirection: "column", minWidth: "100%" }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            required
            className={classes.loginInput}
            {...register("firstName")}
            placeholder="First Name"
          />
          <input
            type="password"
            required
            className={classes.loginInput}
            {...register("Password")}
            placeholder="Password"
          />
          <button className={classes.button} type="submit">
            <span className={classes.buttonText}>Accéder à la suite</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginContainer;
