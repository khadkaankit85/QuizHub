import Link from "next/link";
import styles from "./Navbar.module.css";
import Searchbar from "./Searchbar";
export default function () {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.navbutton}>
        QuizHub
      </Link>
      <Searchbar />
      <div className={styles.navbuttonsection}>
        <Link
          href="/login"
          className={`${styles.navbutton} ${styles.loginbutton}`}
        >
          Login
        </Link>
        <Link
          href="/signup"
          className={`${styles.navbutton} ${styles.signupbutton}`}
        >
          Signup
        </Link>
      </div>
    </nav>
  );
}
