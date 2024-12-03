"use client";

import styles from "./Searchbar.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRef } from "react";
import { getUniqueId } from "@/app/utils/Utils";

const roomIdReg = new RegExp(/^[a-zA-Z]{1,10}\d{4}$/);
export default function () {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleJoinRequest() {
    const value = inputRef.current?.value;
    if (!value) return;
    else if (!roomIdReg.test(value)) {
      toast("Invalid room Id", { type: "error" });
      return;
    } else if (roomIdReg.test(value)) {
      toast("Joining the room id", { type: "info" });
    }
  }

  function handleEnter(e: React.KeyboardEvent<HTMLInputElement>) {
    return e.key === "Enter" ? handleJoinRequest() : "";
  }

  return (
    <div className={styles.navinputdiv}>
      <input
        className={styles.navinput}
        placeholder="Enter Game Code"
        ref={inputRef}
        onKeyDown={handleEnter}
      />
      <button onClick={handleJoinRequest} className={`${styles.searchbutton}`}>
        Join
      </button>
      <ToastContainer />
    </div>
  );
}
