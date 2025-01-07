import { authOptions } from "@/app/api/(home)/auth/[...nextauth]/route";
import { getServerSession, Session } from "next-auth";

const page = async () => {
  const session: Session | null = await getServerSession(authOptions);
  if (!session) return <div>no session</div>;
  return (
    <div className="flex items-center justify-center h-screen">
      this is your profile and go to settings from here = {" \n "}
      <a href="/dashboard/profile/settings"> settings</a>
    </div>
  );
};
export default page;
