"use client";
import React, { useState } from "react";
import styles from "./register.module.css";
import Container from "../components/container/Container";
import { Checkbox } from "antd";
import Image from "next/image";
import Google from "../assets/google.svg";
import Facebook from "../assets/facebook.svg";
import Whatsapp from "../assets/whatsapp.svg";
import oldCar from "../assets/oldCar.svg";
const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleRegister = () => {
    if (!fullName || !email || !password || !phoneNumber || !acceptTerms) {
      alert("no");
      return;
    }
  };

  return (
    <div className={styles.rParent}>
      <Container>
        <div className={styles.titles}>
          <div className={styles.createAccount}>
            <h1>Create Account</h1>
            <p>Register to enjoy all the features</p>
          </div>
          <div className={styles.welcome}>
            <h1>Welcome to our Website</h1>
          </div>
        </div>
        <div className={styles.inputs}>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <Checkbox onChange={(e) => setAcceptTerms(e.target.checked)}>
            I Accept the terms
          </Checkbox>
          <div onClick={handleRegister} className={styles.register}>
            Register
          </div>
          <p style={{ marginLeft: 100, color: "#6D758F" }}>or sign up with</p>
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
          <div style={{ marginTop: "-100px" }} className={styles.carpic}>
            <Image src={oldCar} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Register;
