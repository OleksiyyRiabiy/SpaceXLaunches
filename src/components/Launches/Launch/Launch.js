import React from "react";

import styles from "./Launch.module.css";

const Launch = (props) => {
  const newDate = new Date(props.date);
  const date = `${("0" + newDate.getUTCDate()).slice(-2)}.${(
    "0" +
    (newDate.getUTCMonth() + 1)
  ).slice(-2)}.${newDate.getUTCFullYear()} ${(
    "0" + newDate.getUTCHours()
  ).slice(-2)}:${("0" + newDate.getUTCMinutes()).slice(-2)}`;
  const altImage =
    "https://p.kindpng.com/picc/s/85-858291_space-shuttle-rocket-ship-transparent-background-hd-png.png";

  return (
    <div className={styles.LaunchContainer}>
      <div className={props.success ? styles.LaunchSuccess : styles.LaunchFail}>
        <div className={styles.Patch}>
          <img
            className={styles.PatchImage}
            src={props.patch || altImage}
            alt="patch"
          />
        </div>
        <div className={styles.NameOfSpaceShip}>{props.name}</div>
        <div className={styles.Date}>{date}</div>
        <div className={styles.HorizontalLine}></div>
        <p className={styles.MissionDescription}>
          {props.details || "No Description :("}
        </p>
      </div>
    </div>
  );
};

export default Launch;
