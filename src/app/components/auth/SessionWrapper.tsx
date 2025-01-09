"use client";
import { SessionProvider } from "next-auth/react";
import { useEffect } from "react";
export default function ({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => {
          console.log(
            "Service Worker registered with scope:",
            registration.scope,
          );
        })
        .catch((error) => {
          console.error("Service Worker registration failed:", error);
        });
    }
  }, []);
  return <SessionProvider>{children}</SessionProvider>;
}
