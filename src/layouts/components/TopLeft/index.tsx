// libs
import React from "react";
// components
import TopItem from "../TopLeftItem";
// data sources
import dataSource from "~/dataSources/header-top-left";
// others
import styles from "./TopLeft.module.scss";

const TopLeft = () => {
  return (
    <div className={styles["header-top-left"]}>
      {dataSource.map(({ index }) => (
        <TopItem key={index} index={index} />
      ))}
    </div>
  );
};

export default TopLeft;
