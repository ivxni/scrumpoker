import { Link } from "react-router-dom";

import styles from "./Home.module.scss";
import Button from "../../components/button/Button";

function Home() {
  return (
    <div className={styles.home}>
      <h1>Scrum Poker for agile teams</h1>
      <span>Simple and fun point estimations.</span>
      <Link to={"/new-room"}>
        <Button variant={"primary"} label={"Create Room"} />
      </Link>
    </div>
  );
}

export default Home;
