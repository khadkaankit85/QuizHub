import LoginBox from "@/app/components/auth/LoginBox";
import styles from "./../auth.module.css";
export default function () {
  return (
    <section className={styles.section}>
      <LoginBox />
    </section>
  );
}
