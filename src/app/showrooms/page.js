import React from "react";
import styles from "./showrooms.module.css";
import Container from "../components/container/Container";
import Header2 from "../components/header2/Header";
import Filter from "../components/filter/Filter";
import StoreCard from "../components/storecard/StoreCard";
import { Flex } from "antd";
const Showroom = () => {
  return (
    <div>
      <Container>
        <Header2 />
        <div className={styles.showroomcontainer}>
          <Filter />
          <div className={styles.storecardcontainer}>
            <StoreCard />
            <StoreCard />
            <StoreCard />
            <StoreCard />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Showroom;
