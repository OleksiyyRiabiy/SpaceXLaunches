import React from "react";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.LogoContainer}>
        <img
          className={styles.Image}
          alt="SpaceX"
          src="https://spacex-launches-with-pagination.vercel.app/_next/image?url=%2Fspacex-logo-black-and-white.png&w=384&q=75"
        />
      </div>
    </div>
  );
};

export default Header;
