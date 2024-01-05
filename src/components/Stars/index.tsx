import classes from "./index.module.scss";
const Stars = () => {
  return (
    <div className={`w-full fixed top-0 left-0 `}>
      <div className={`${classes.stars}`}></div>
    </div>
  );
};

export default Stars;
