import styles from "./Quizcard.module.css";
import Link from "next/link";

export const Quizcard = (props: {}) => {
  return (
    <Link href="/play" className={styles.card}>
      this is the quiz card
    </Link>
  );
};
