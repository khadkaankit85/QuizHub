import Image from "next/image";
import styles from "./Body.module.css";
import quizimage from "../../../../public/images/quiz.webp";

function Hero() {
  return (
    <section className={styles.headdiv}>
      <h2 className={styles.headline}>
        Challenge Your Friends, Prove Your Knowledge, and Win the Crown!
      </h2>
      <p className={styles.subheadline}>
        Get ready for a live, fast-paced multiplayer quiz experience. Compete
        with players worldwide or create private rooms to challenge your
        friends. Test your brainpower across diverse categories—fun, knowledge,
        and victory await!
      </p>
      <Image
        src={quizimage}
        alt="quiz"
        width={500}
        height={500}
        className={styles.mainimage}
      />
      <div>
        <button className={styles.joinnowbtn}>Create a Room</button>
      </div>
    </section>
  );
}

function Zero() {
  return (
    <section className={styles.middiv}>
      <h3 className={styles.midheadline}>
        Quiz, Play, and Have Fun with Friends!
      </h3>
      <p className={styles.midsubheadline}>
        Have fun with friends like never before! Quickly create a room, select a
        topic from a variety of exciting categories, and share the QR code to
        invite your friends instantly. Customize the quiz by choosing the number
        of questions, and let the fun begin. Whether it’s a casual hangout or a
        competitive showdown, our platform makes every moment memorable!
      </p>
    </section>
  );
}

export default function () {
  return (
    <main className={styles.main}>
      <Hero />
      <Zero />
    </main>
  );
}
