"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export const NotFound = () => {
  return (
    <div className="flex gap-6 items-center justify-center flex-col h-screen w-screen">
      <DotLottieReact
        src="/images/4041.lottie"
        loop
        autoplay
        className="size-[80%]"
      />
      <h2 className="text-3xl font-bold text-black notFoundAnimated">
        Did you get lost? Let's go{" "}
        <a
          href="/dashboard"
          className="text-[#8e4bb1] hover:text-[#5c1982] transition-all duration-300"
        >
          {" "}
          home
        </a>
      </h2>
    </div>
  );
};
export default NotFound;
