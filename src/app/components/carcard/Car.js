import React from "react";
import styles from "./Car.module.css";
import Image from "next/image";
import car from "../../assets/bmw-x6-m-facelift-2023-fahrbericht-01.jpg";
import bmw from "../../assets/BMW.svg.png";

const Car = () => {
  return (
    <div className={styles.carcardP}>
      <div className={styles.cardcontainer}>
        <div className={styles.carcard}>
          <div className={styles.carimg}>
            <Image
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 4,
              }}
              src={car}
            />
          </div>
          <div className={styles.carinfo}>
            <h3>BMW</h3>
            <h3>X6</h3>
            <h3>2023</h3>
            <Image
              style={{ width: 50, height: 50, objectFit: "cover" }}
              src={bmw}
            />
            <h3>51000$</h3>
          </div>
          <div className={styles.buybtn}>BUY </div>
        </div>
      </div>
    </div>
  );
};

export default Car;
