// libs
import React from "react";
import ShoppingCartOutlined from "@ant-design/icons/ShoppingCartOutlined";
// components
import ImageLink from "~/commons/ImageLink";
import TopLeft from "../TopLeft";
import TopRight from "../TopRight";
// others
import logo from "~/assets/images/logo.png";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles["header-wrapper"]}>
      <div className={styles["header-wrapper-inner"]}>
        <div className={styles["header-top"]}>
          <TopLeft />
          <TopRight />
        </div>
        <div className={styles["header-bottom"]}>
          <div className={styles["header-bottom-left"]}>
            <ImageLink href="/" src={logo} width={161} height={30} alt="logo" />
          </div>
          <div className={styles["header-bottom-middle"]}>
            <input type="text" />
          </div>
          <div className={styles["header-bottom-right"]}>
            <ShoppingCartOutlined />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
