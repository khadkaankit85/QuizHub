import Image from "next/image";
import styles from "./settings.module.css";

export const Settings = () => {
  return (
    <div className={styles.settings}>
      <h3>
        <Image
          src="/images/settings.svg"
          alt="setting"
          width={27}
          height={27}
        />{" "}
        Settings
      </h3>
    </div>
  );
};
