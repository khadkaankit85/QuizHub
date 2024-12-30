import Image from "next/image";
import styles from "./Quizcard.module.css";
import Link from "next/link";
import { formatNumberToReadable } from "@/app/utils/Utils";

interface QuizcardProps {
  quizId: string;
  title: string;
  stars: number;
  tags: string[];
  imageLink?: string;
  questionCount: number;
  playercount: number;
}

export const Quizcard = ({
  quizId,
  title,
  stars,
  tags,
  imageLink,
  questionCount,
  playercount,
}: QuizcardProps) => {
  return (
    <Link
      href={`/play/${quizId}`}
      className={`${styles.card} ${styles.quizcard}`}
    >
      <Image
        src={imageLink ? imageLink : "/images/snowman.jpg"}
        alt="snowman"
        width="500"
        height="300"
        className={styles.quizcardImage}
      />
      <div className={styles.quizDescriptionDiv}>
        <p className={styles.quizTags}>
          {tags.map((tag, index) => {
            return <span key={index}>{tag}</span>;
          })}
        </p>
        <h4 className={styles.quizTitle}>{title}</h4>
        <p className={styles.quizInformation}>
          <span>{formatNumberToReadable(stars)} stars</span>{" "}
          <span>{formatNumberToReadable(playercount)} plays</span>{" "}
          <span>{formatNumberToReadable(questionCount)} questions</span>{" "}
        </p>
      </div>
    </Link>
  );
};
