import { Link } from "react-router-dom";

import styles from "./Home.module.scss";
import Button from "../../components/button/Button";

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.landing}>
        <div className={styles.container}>
          <h1>
            Scrum Poker for
            <br /> agile teams
          </h1>
          <span>Simple and fun point estimations.</span>
          <Link to={"/new-room"}>
            <Button variant={"primary"} label={"Create Room"} />
          </Link>
        </div>
        <div className={styles.video}>
          <div className={styles.row}>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
          </div>
          <div className={styles.row}>
            <div className={styles.card}></div>
            <div className={styles.table_container}>
              <div className={styles.table}>Reveal Cards</div>
            </div>
            <div className={styles.card}></div>
          </div>
          <div className={styles.row}>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
          </div>
          <div className={styles.row}>
            <div className={styles.card_fibo}>1</div>
            <div className={styles.card_fibo}>2</div>
            <div className={styles.card_fiboSelected}>3</div>
            <div className={styles.card_fibo}>5</div>
            <div className={styles.card_fibo}>8</div>
            <div className={styles.card_fibo}>13</div>
            <div className={styles.card_fibo}>?</div>
            <div className={styles.card_fibo}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
