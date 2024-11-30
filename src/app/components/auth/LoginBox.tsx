import Link from "next/link";
import styles from "./box.module.css";
import quiz from "../../../../public/images/quiz.png";
import Image from "next/image";
export default function () {
  return (
    <main className={styles.main}>
      <div className={styles.top}>
        <Image
          src={quiz}
          alt="quiz"
          layout="responsive"
          width={500}
          height={500}
          className={styles.image}
        />
      </div>
      <div className={styles.bottom}>
        <div className={styles.texts}>
          <h3>Welcome To QuizHub</h3>
          <p>Log in to your account really quickly</p>
        </div>
        <div className={styles.buttonsdiv}>
          <Link href="/auth/google" className={styles.button}>
            Continue with Google
          </Link>
          <Link href="/auth/facebook" className={styles.button}>
            Continue with facebook
          </Link>
        </div>
      </div>
      <p>
        {" "}
        don't have an account? <a href="/auth/signup">signup</a>
      </p>
    </main>
  );
}
