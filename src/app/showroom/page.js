import React from "react";
import styles from "./showroom.module.css";
import Car from "../components/carcard/Car";
import Container from "../components/container/Container";
import Header2 from "../components/header2/Header";
import Filter from "../components/filter/Filter";
const page = () => {
  return (
    <div>
      <Header2 />
      <div className={styles.theshowroomcontainer}>
        <Filter />
        <div className={styles.thecardcontainer}>
          <Car />
        </div>
      </div>
    </div>
  );
};

export default page;
