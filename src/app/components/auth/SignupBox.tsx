import Link from "next/link";
import styles from "./box.module.css";
import quiz from "../../../../public/images/quiz.png";
import Image from "next/image";
import SignInButtons from "./Loginbutton";

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
          <p>Create an account really quickly</p>
        </div>
        <SignInButtons />
      </div>
      <p>
        {" "}
        already have an account? <Link href="/auth/login">login</Link>
      </p>
    </main>
  );
}
