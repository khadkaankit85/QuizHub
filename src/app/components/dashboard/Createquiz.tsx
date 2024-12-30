import Link from "next/link";
import styles from "./Quizcard.module.css";
export const Createquiz = () => {
  return (
    <Link href="/dashboard/create" className={styles.card}>
      this is the create quiz card
    </Link>
  );
};
