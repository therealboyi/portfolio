// components/Footer/Footer.tsx
import React from "react";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer__content"]}>
        <p>&copy; 2024 My Portfolio. All rights reserved.</p>
        <ul className={styles["footer__links"]}>
          <li className={styles["footer__link-item"]}>
            <a href="#" className={styles["footer__link"]}>
              Privacy Policy
            </a>
          </li>
          <li className={styles["footer__link-item"]}>
            <a href="#" className={styles["footer__link"]}>
              Terms of Service
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
