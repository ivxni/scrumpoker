import { Link } from "react-router-dom";

import styles from "./Header.module.scss";
import Logo from "../../assets/img/dico.png";
import Button from "../button/Button";

function Header() {
  return (
    <header className={styles}>
      <Link to={"/"}>
        <div className={styles.logo}>
          <img src={Logo} alt="Logo" />
          <h1>scrumpoker</h1>
        </div>
      </Link>
      <nav>
        <ul>
          <Link to={"/login"}>
            <li>Login</li>
          </Link>
          <Link to={"/new-room"}>
          <Button variant={"primary"} label={"Create Room"} />
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
