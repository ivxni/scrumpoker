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
      <nav>
        <ul>
          <li>Login</li>
          <Button variant={"primary"} label={"Create Room"} />
        </ul>
      </nav>
    </header>
  );
}

export default Header;
