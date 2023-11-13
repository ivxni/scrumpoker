import styles from "./Footer.module.scss";
import Diconium from "../../assets/img/dic.png";

function Footer() {
  return (
    <footer className={styles}>
      <div className={styles.footer__menu}>
        <div className={styles.footer__menu__container}>
          <img src={Diconium} alt="diconium"></img>
          <ul>
            <h3>Product</h3>
            <li>Start new game</li>
            <li>FAQs</li>
          </ul>
          <ul>
            <h3>Connect</h3>
            <li>Contact us</li>
            <li>What is planning poker?</li>
          </ul>
          <ul>
            <h3>Legal</h3>
            <li>Imprint</li>
            <li>Cookie policy</li>
          </ul>
        </div>
        <span></span>
      </div>
      <span>©2023 diconium GmbH</span>
    </footer>
  );
}

export default Footer;
