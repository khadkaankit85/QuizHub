import { Quizcard } from "@/app/components/dashboard/Quizcard";
import Navbar from "@/app/components/dashboardNavbar/Navbar";
import styles from "./dashboard.module.css";
import { Createquiz } from "@/app/components/dashboard/Createquiz";
export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <section className={styles.cards}>
        <Createquiz />
        <Quizcard />
      </section>
    </div>
  );
}
