import LoginBox from "@/app/components/auth/LoginBox";
import styles from "./../auth.module.css";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/(home)/auth/[...nextauth]/route";

export default async function () {
  const session = await getServerSession(authOptions);
  if (session) {
    console.log(session);
    redirect(`/dashboard`);
  }
  return (
    <section className={styles.section}>
      <LoginBox />
    </section>
  );
}
