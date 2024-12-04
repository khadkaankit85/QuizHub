import styles from "../dashboardNavbar/Navbar.module.css";
import Logo from "../home/Logo";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.div1}>
        <Logo smallsize={"1.4"} largeSize={"2"} />
      </div>
      <div className={styles.div2}>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
