import React from "react";
import styles from "./Services.module.css";
import Image from "next/image";
import Buy from "../../assets/buy.svg";
import Fix from "../../assets/fix.svg";
import Wash from "../../assets/wash.svg";
import Car from "../../assets/car.svg";
const Services = () => {
  return (
    <div className={styles.sParent}>
      <div className={styles.title}>
        <h1>Services</h1>
      </div>
      <div className={styles.sHome}>
        <div className={styles.car}>
          <Image src={Car} />
        </div>
        <div className={styles.head}>
          <div className={styles.services}>
            <div className={styles.first}>
              <div className={styles.buy}>
                <Image src={Buy} />
                <h1>Buying Cars</h1>
              </div>
              <div className={styles.fix}>
                <Image src={Fix} />
                <h1>Fixing Cars</h1>
              </div>
            </div>
            <div className={styles.second}>
              <div className={styles.buy}>
                <Image src={Buy} />
                <h1>Spare Parts</h1>
              </div>
              <div className={styles.fix}>
                <Image src={Wash} />
                <h1>Washing Cars</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
