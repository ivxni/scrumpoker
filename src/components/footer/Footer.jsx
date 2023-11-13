import styles from "./Footer.module.scss";
import Diconium from "../../assets/img/dic.png";

function Footer() {
  return (
    <footer className={styles}>
      <div className={styles.footer__menu}>
      <img src={Diconium} alt="diconium digial solutions"></img>
      <ul>
        <li>Imprint</li>
        <li>About</li>
      </ul>
      </div>
      <span>©2023 diconium GmbH</span>
    </footer>
  );
}

export default Footer;
