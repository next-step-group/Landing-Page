import classes from "../styles/TopTitleDescription.module.css";
import Image from "next/image";
import Link from "next/link";


const TopTitleDescription = () => {
  return (
    <>
    <div className={classes.titleContainer}>
      <div className="titleLogo">
      <Image src="https://i.ibb.co/0csqNyQ/logo-nobackground-5000.png" alt="Next Step Logo" width="300px" height="300px" quality="100" placeholder="blur" blurDataURL="empty"></Image>
      <h1>Next Step</h1>
      </div>
      <div className={classes.containerLeft}>  
      <h2 className={classes.underHeading}>
       Actionable metrics to guide your Next.js development decisions.
      </h2>
      <Link href="https://marketplace.visualstudio.com/items?itemName=NextStep.nextstep"><a target="_blank">
      <button className={classes.codeBtn}> 
      Download VS Code Extension
      </button>
      </a></Link>
      <Link href="https://www.npmjs.com/package/next-step-metrics"><a target="_blank">
      <button className={classes.npmBtn}>Download NPM package</button>
      </a></Link>
       </div>
      </div>
      <div className={classes.mainImage}>
      <h3>Next Step is a VS Code Extension that displays your website&apos;s Web Vitals directly into your console as you develop -- providing actionable data in real-time to guide your site-performance decisions.</h3>
      </div>
      </>
  );
};

export default TopTitleDescription;
