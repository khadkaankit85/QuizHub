import Link from "next/link";
import styles from "./Navbar.module.css";
import Searchbar from "./Searchbar";
export default function () {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={`${styles.navbutton} text-[#8e4bb1] font-bold`}>
        QuizHub
      </Link>
      <Searchbar />
      <div className={styles.navbuttonsection}>
        <Link
          href="/auth/login"
          className={`${styles.navbutton} ${styles.loginbutton}`}
        >
          Login
        </Link>
        <Link
          href="/auth/signup"
          className={`${styles.navbutton} ${styles.signupbutton}`}
        >
          Signup
        </Link>
      </div>
    </nav>
  );
}
