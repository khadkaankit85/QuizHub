"use client";
import Link from "next/link";
import styles from "./box.module.css";
import quiz from "../../../../public/images/quiz.png";
import facebook from "../../../../public/images/facebook.png";
import google from "../../../../public/images/google.png";
import Image from "next/image";
import { signIn } from "next-auth/react";
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
          <button
            onClick={() =>
              signIn("google", {
                redirecturl: "dashboard",
              })
            }
            className={styles.button}
          >
            <Image src={google} alt="google" width={40} height={40} />
            Continue with Google
          </button>
          <button
            onClick={() => {
              signIn("facebook", {
                redirecturl: "/dashboard",
              });
            }}
            className={styles.button}
          >
            <Image src={facebook} alt="facebook" width={50} height={50} />
            Continue with facebook
          </button>
        </div>
      </div>
      <p>
        {" "}
        don't have an account? <Link href="/auth/signup">signup</Link>
      </p>
    </main>
  );
}
