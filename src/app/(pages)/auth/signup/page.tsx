import SignupBox from "@/app/components/auth/SignupBox";
import styles from "./../auth.module.css";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/(home)/auth/[...nextauth]/route";

export default async function SignUpPage() {
  const session = await getServerSession(authOptions);
  if (session) {
    console.log(session);
    redirect(`/dashboard`);
  }
  return (
    <section className={styles.section}>
      <SignupBox />
    </section>
  );
}
