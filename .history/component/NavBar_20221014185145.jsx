import { useRouter } from "next/router";
import styles from "../styles/NavBar.module.css";

function NavBar() {
  const router = useRouter();
  return (
    <div className={styles.main}>
      <div onClick={() => router.push("/")}>Home</div>
      <div onClick={() => router.push("/feed")>Feed</div>
      <div onClick={() => router.push("/")>More..</div>
    </div>
  );
}

export default NavBar;
