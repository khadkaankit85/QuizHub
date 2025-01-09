import { authOptions } from "@/app/api/(home)/auth/[...nextauth]/route";
import { ProfileBanner } from "@/app/components/dashboard/ProfileBanner";
import Navbar from "@/app/components/dashboardNavbar/Navbar";
import { getServerSession, Session } from "next-auth";

const page = async () => {
  const session: Session | null = await getServerSession(authOptions);
  if (!session) return <div>no session</div>;
  return (
    <>
      <Navbar />
      <div className="flex border-2 border-black items-center justify-center w-2/3  mx-auto mt-6">
        <ProfileBanner />
      </div>
    </>
  );
};
export default page;
