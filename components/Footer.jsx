import classes from "../styles/Footer.module.css";
import Link from 'next/link'

const Footer = () => {
  return <div className={classes.footer}>Product Development Accelerated by&nbsp;<Link href="https://opensourcelabs.io/"><a target="_blank">OS Labs</a></Link> &emsp;&nbsp; | &emsp;&nbsp;  Issues or concerns? Report them to our&nbsp;<Link href="https://github.com/"><a target="_blank">GitHub</a></Link></div>;
};

export default Footer;
