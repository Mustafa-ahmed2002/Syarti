"use client";
import React, { useState } from "react";
import styles from "./signin.module.css";
import Container from "../components/container/Container";
import Image from "next/image";
import Google from "../assets/google.svg";
import Facebook from "../assets/facebook.svg";
import Whatsapp from "../assets/whatsapp.svg";
import oldCar from "../assets/oldCar.svg";
const Signin = () => {
  const handleSignIn = () => {
    if (!email || !password) {
      return alert("no");
    }
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className={styles.rParent}>
      <Container>
        <div className={styles.titles}>
          <div className={styles.createAccount}>
            <h1>Sign In</h1>
            <p>We are happy to have you back</p>
          </div>
          <div className={styles.welcome}>
            <h1>Welcome to our Website</h1>
          </div>
        </div>
        <div className={styles.inputs}>
          <input
            type="text"
            placeholder="Email Or Phone Number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div onClick={handleSignIn} className={styles.register}>
            Sign In
          </div>
          <p style={{ marginLeft: 100, color: "#6D758F" }}>Forget Password?</p>
        </div>
        <div className={styles.signup}>
          <div className={styles.icons}>
            <Image
              style={{ width: 30, height: 30, cursor: "pointer" }}
              src={Google}
            />
            <Image
              style={{ width: 30, height: 30, cursor: "pointer" }}
              src={Facebook}
            />
            <Image
              style={{ width: 30, height: 30, cursor: "pointer" }}
              src={Whatsapp}
            />
          </div>
          <div style={{ marginTop: "300px" }} className={styles.carpic}>
            <Image src={oldCar} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Signin;
