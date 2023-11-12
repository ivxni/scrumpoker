import styles from "./Home.module.scss";
import Button from "../../components/button/Button";

function Home() {
  return (
    <div className={styles.home}>
      <h1>Scrum Poker for agile teams</h1>
      <span>Simple and fun point estimations.</span>
      <Button variant={"primary"} label={"Create Room"}/>
    </div>
  );
}

export default Home;
