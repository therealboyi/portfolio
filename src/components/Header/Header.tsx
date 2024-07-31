// components/Header/Header.tsx
import React from "react";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles["header"]}>
      <div className={styles["header__logo"]}>
        <h1>My Portfolio</h1>
      </div>
      <nav className={styles["header__nav"]}>
        <ul className={styles["header__nav-list"]}>
          <li className={styles["header__nav-item"]}>
            <a href="#" className={styles["header__nav-link"]}>
              Home
            </a>
          </li>
          <li className={styles["header__nav-item"]}>
            <a href="#" className={styles["header__nav-link"]}>
              About
            </a>
          </li>
          <li className={styles["header__nav-item"]}>
            <a href="#" className={styles["header__nav-link"]}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
