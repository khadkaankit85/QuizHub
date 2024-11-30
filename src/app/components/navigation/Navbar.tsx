import Link from "next/link";
import styles from "./Navbar.module.css";
export default function () {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.navbutton}>
        QuizHub
      </Link>
      <div className={styles.navinputdiv}>
        <input className={styles.navinput} placeholder="Enter Game Code" />
        <button className={`${styles.searchbutton} ${styles.navbutton}`}>
          Join
        </button>
      </div>
      <div className={styles.navbuttonsection}>
        <button className={`${styles.navbutton} ${styles.loginbutton}`}>
          Login
        </button>
        <button className={`${styles.navbutton} ${styles.signupbutton}`}>
          Signup
        </button>
      </div>
    </nav>
  );
}
