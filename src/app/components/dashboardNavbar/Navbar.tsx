"use client";
import styles from "../dashboardNavbar/Navbar.module.css";
import Logo from "../home/Logo";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

import search from "../../../../public/search.png";
import cross from "../../../../public/multiply.png";
import threeline from "../../../../public/threeline.png";
import { Home, Recent } from "../home/Icons";

import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

export default function Navbar() {
  function handleSearch() {
    console.log("handling search");
  }
  function toggleProfile() {
    setShowProfile(!showProfile);
  }

  const pathname = usePathname();

  const [showProfile, setShowProfile] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.logodiv}>
        <Link href="/" className={styles.logo}>
          QuizHub
        </Link>
      </div>
      <div className={styles.searchbar}>
        <input className={styles.navinput} />
        <button
          className={styles.searchbutton}
          onClick={() => {
            handleSearch();
          }}
        >
          <Image
            height={40}
            width={40}
            src={search}
            className={styles.searchImage}
            alt="search"
          />
        </button>
      </div>
      <div className={styles.links}>
        <ul className={styles.navLinks}>
          <li>
            {/* all the image changes can be made dynamic using css which is more efficient  */}
            <Link href="/dashboard" className="navlinkButton">
              <Image
                alt="homeicon"
                width={40}
                height={40}
                src={
                  pathname == "/dashboard" ? Home("purple") : Home("regular")
                }
              />{" "}
              Home
            </Link>
          </li>
          <li>
            <Link href="/dashboard/recent" className="navlinkButton">
              <Image
                alt="homeicon"
                width={40}
                height={40}
                src={
                  pathname == "/dashboard/recent"
                    ? Recent("purple")
                    : Recent("regular")
                }
              />
              Recent
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.navbuttondiv}>
        <button className={styles.navbutton} onClick={() => toggleProfile()}>
          <Image
            src={showProfile ? cross : threeline}
            width={40}
            height={40}
            alt="navbutton"
          />
        </button>
      </div>
      {showProfile && (
        <div className={`${styles.profilediv} ${styles.popin}`}>
          <Link href="/dashboard/profile">
            <Image
              src="/images/profile.png"
              alt="profile"
              width={30}
              height={30}
            />
            Profile
          </Link>
          <button
            onClick={() => {
              signOut();
            }}
          >
            <Image
              src="/images/logout.png"
              alt="profile"
              width={30}
              height={30}
            />
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}
