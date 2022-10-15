import {useRouter} from "next/router";
import styles from "../styles/NavBar.module.css";

function NavBar() {
  const router = useRouter();
  return (
    <div className={styles.main}>
      <div>Home</div>
      <div>Feed</div>
      <div>More..</div>
    </div>
  );
}

export default NavBar;
