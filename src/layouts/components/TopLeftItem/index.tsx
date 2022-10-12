// libs
import React from "react";
// components
import TextLink from "~/commons/TextLink";
// data sources
import dataSource from "~/dataSources/header-top-left";
// others
import styles from "./TopLeftItem.module.scss";

interface Props {
  index: number;
}

const TopLeftItem = ({ index }: Props) => {
  const { href, text, blank } = dataSource[index];

  return (
    <div className={styles["top-item"]}>
      <TextLink href={href} text={text} blank={blank} />
    </div>
  );
};

export default TopLeftItem;
