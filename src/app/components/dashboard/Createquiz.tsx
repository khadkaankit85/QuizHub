import Link from "next/link";
import styles from "./quizcard.module.css";
import Image from "next/image";
export const Createquiz = () => {
  return (
    <Link
      href="/dashboard/create"
      className={`${styles.card} ${styles.createquizcard}`}
    >
      <Image
        src="/images/snowman.jpg"
        alt="snowman"
        width="500"
        height="500"
        className={styles.createCardImage}
      />
      <Image
        className={styles.addbutton}
        alt="add button"
        width={100}
        height={100}
        src="/images/addbutton.png"
      />
    </Link>
  );
};
