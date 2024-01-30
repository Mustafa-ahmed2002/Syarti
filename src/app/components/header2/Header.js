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
            <li>
              <Link
                style={{ textDecoration: "none", color: "#6d758f" }}
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              {" "}
              <Link
                style={{ textDecoration: "none", color: "#6d758f" }}
                href="/"
              >
                Services
              </Link>
            </li>
            <li>Showrooms</li>
          </ul>
        </div>
        <div className={styles.btns}>
          <div className={styles.signin}>
            <Link
              style={{ textDecoration: "none", color: "#6d758f" }}
              href="/signin"
            >
              <p>Sign In</p>
            </Link>
          </div>
          <div className={styles.register}>
            <Link
              style={{ textDecoration: "none", color: "#fff" }}
              href="/register"
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
