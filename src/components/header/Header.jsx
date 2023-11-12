import styles from "./Header.module.scss";
import Logo from "../../assets/img/dico.png";
import Button from "../button/Button";

function Header() {
  return (
    <header className={styles}>
      <div className={styles.logo}>
        <img src={Logo} alt="Logo" />
        <h1>scrumpoker</h1>
      </div>
      <ul>
        <li>Sign Up</li>
        <li>Login</li>
        <Button className={styles.button} variant={"primary"} label={"New Game"}/>
      </ul>
    </header>
  );
}

export default Header;
