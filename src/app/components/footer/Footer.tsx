import styles from "./Footer.module.css";
export default function () {
  return (
    <footer className={styles.footer}>
      <div className={styles.lastdiv}>
        <p className={styles.copyright}>&copy; 2024 QuizHub</p>
      </div>
    </footer>
  );
}
