import { getServerSession, Session } from "next-auth";
import styles from "./profile.module.css";
import { authOptions } from "@/app/api/(home)/auth/[...nextauth]/route";
import Image from "next/image";
export const ProfileBanner = async () => {
  const session: Session | null = await getServerSession(authOptions);

  if (!session) return <div>no session</div>;

  const userImage = session.user.image;
  const userName = session.user.name;
  const userEmail = session.user.email;

  return (
    <div className={styles.banner}>
      <div className={styles.bannerLeftSide}>
        <Image src={userImage} width={100} height={100} alt="your profile" />
        <div>
          <p>{userName}</p>
          <p>{userEmail}</p>
        </div>
      </div>
      <div className={styles.bannerRightSide}></div>
    </div>
  );
};
