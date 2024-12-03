"use client";
import Image from "next/image";
import styles from "./box.module.css";
import { signIn } from "next-auth/react";
import google from "../../../../public/images/google.png";
//import facebook from "../../../../public/images/facebook.png";
export default function SignInButtons() {
  return (
    <div className={styles.buttonsdiv}>
      <button onClick={() => signIn("google")} className={styles.button}>
        <Image src={google} alt="google" width={40} height={40} />
        Continue with Google
      </button>
      {/* <Link href="/auth/facebook" className={styles.button}> */}
      {/*   <Image src={facebook} alt="facebook" width={50} height={50} /> */}
      {/*   Continue with facebook */}
      {/* </Link> */}
    </div>
  );
}
