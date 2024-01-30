import React from "react";
import styles from "./StoreCard.module.css";
import Container from "../container/Container";
import Image from "next/image";
import img from "../../assets/ac50a969324ad1d5ce83eaa5cf085bbd.PNG";
import stars from "../../assets/stars.svg";
import location from "../../assets/location.svg";
import contact from "../../assets/contact.svg";
import { FaArrowRight } from "react-icons/fa6";
const StoreCard = () => {
  return (
    <div className={styles.storecardP}>
      <Container>
        <div className={styles.card}>
          <Image
            style={{
              width: "100%",
              height: 200,
              objectFit: "cover",
              borderRadius: "16px 16px 0px 0px ",
            }}
            src={img}
          />
          <div className={styles.cardhead}>
            <div className={styles.cardtitle}>
              <h1>AL-KASID AGENCY</h1>
              <Image style={{ fontSize: 50 }} src={stars} />
            </div>
            <div className={styles.location}>
              <Image src={location} />
              <p>location:Baghdad</p>
            </div>
            <div className={styles.contact}>
              <Image src={contact} />
              <p>contact:077000655</p>
            </div>
            <div className={styles.cardbutton}>
              <p>Explore Cars</p>
              <FaArrowRight style={{ color: "white", paddingLeft: 5 }} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default StoreCard;
