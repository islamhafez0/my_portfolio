import classes from "./index.module.scss";
export const Stars = () => {
  return (
    <div className={`${classes.bg_animation}`}>
      <div className={classes.stars}></div>
      <div className={classes.stars2}></div>
      <div className={classes.stars3}></div>
      <div className={classes.stars4}></div>
    </div>
  );
};
