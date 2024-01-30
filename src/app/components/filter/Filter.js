import React from "react";
import styles from "./Filter.module.css";
import Filtersvg from "../../assets/filter.svg";
import Image from "next/image";
const Filter = () => {
  return (
    <div className={styles.filterP}>
      <div className={styles.headings}>
        <div className={styles.title}>
          <h1>Showrooms Filter</h1>
        </div>
        <div className={styles.elems}>
          <div className={styles.elem}>
            <h2>Location</h2>
            <Image src={Filtersvg} />
          </div>
          <div className={styles.elem}>
            <h2>Rating</h2>
            <Image src={Filtersvg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
