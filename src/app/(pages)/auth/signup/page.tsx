import SignupBox from "@/app/components/auth/SignupBox";
import styles from "./../auth.module.css";
export default function () {
  return (
    <section className={styles.section}>
      <SignupBox />
    </section>
  );
}
