import classes from "../styles/DemoScreenshare.module.css";

const DemoScreenshare = () => {
  return (
    <div className={classes.demoScreenshare}>
      <iframe
        src="https://streamable.com/e/qte3e9"
        width="1500px"
        height="550px"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default DemoScreenshare;
