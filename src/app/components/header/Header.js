import React from "react";
import styles from "./Header.module.css";
import { FaArrowRight } from "react-icons/fa6";
import { GiRaceCar } from "react-icons/gi";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.logo}>
        <GiRaceCar />
      </div>
      <div className={styles.nav}>
        <div className={styles.ul}>
          <ul>
            <li>Home</li>

            <li>Services</li>
            <li>
              <Link
                href="/showrooms"
                style={{ textDecoration: "none", color: "white" }}
              >
                Showrooms
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.btns}>
          <div className={styles.signin}>
            <Link
              href="/signin"
              style={{ textDecoration: "none", color: "white" }}
            >
              <p>Sign In</p>
            </Link>
          </div>
          <div className={styles.register}>
            <Link
              href="/register"
              style={{ textDecoration: "none", color: "white" }}
            >
              <p>Register</p>
            </Link>
            <FaArrowRight style={{ color: "white", paddingLeft: 5 }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
