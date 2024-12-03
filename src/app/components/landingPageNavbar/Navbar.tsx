import Link from "next/link";
import styles from "./Navbar.module.css";
import Searchbar from "./Searchbar";
import { getServerSession, Session } from "next-auth";
import { authOptions } from "@/app/api/(home)/auth/[...nextauth]/route";
import Image from "next/image";
export default async function Navbar() {
  const session: Session | null = await getServerSession(authOptions);
  return (
    <nav className={styles.nav}>
      <Link href="/" className={`${styles.navbutton} text-[#8e4bb1] font-bold`}>
        QuizHub
      </Link>
      <Searchbar />
      {!session ? (
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
      ) : (
        <Link href="/dashboard" className={styles.profile}>
          <Image
            alt="yourpic baby"
            src={
              typeof session.user?.image === "string" ? session.user.image : ""
            }
            width={40}
            height={40}
          />
          <p className={styles.admin}>Admin</p>
        </Link>
      )}
    </nav>
  );
}
