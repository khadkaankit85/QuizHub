import Link from "next/link";
import styles from "./box.module.css";
import facebook from "../../../../public/images/facebook.png";
import google from "../../../../public/images/google.png";
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
          <p>Create an account really quickly</p>
        </div>
        <div className={styles.buttonsdiv}>
          <Link href="/auth/google" className={styles.button}>
            <Image src={google} alt="google" width={40} height={40} />
            Continue with Google
          </Link>
          <Link href="/auth/facebook" className={styles.button}>
            <Image src={facebook} alt="facebook" width={50} height={50} />
            Continue with facebook
          </Link>
        </div>
      </div>
      <p>
        {" "}
        already have an account? <Link href="/auth/login">login</Link>
      </p>
    </main>
  );
}
