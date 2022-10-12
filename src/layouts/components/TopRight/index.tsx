// libs
import React from "react";
import { Dropdown, Menu } from "antd";
// components
import TextLink from "~/commons/TextLink";
import LocationIcon from "~/assets/icons/LocationIcon";
// others
import styles from "./TopRight.module.scss";

const menu = (
  <Menu
    items={[
      {
        key: "1",
        label: <span>English</span>,
      },
      {
        key: "2",
        label: <span>Tiếng Việt</span>,
      },
    ]}
  />
);

const TopRight: React.FC = () => {
  return (
    <div className={styles["header-top-right"]}>
      <div className={styles["header-top-item"]}>
        <LocationIcon />
        <TextLink href="/login" text="Cửa hàng ở gần bạn" />
      </div>
      <Dropdown
        overlay={menu}
        placement="bottom"
        arrow={{ pointAtCenter: true }}
      >
        <div className={styles["header-top-item"]}>English</div>
      </Dropdown>
      <div className={styles["header-top-item"]}>Đăng nhập</div>
      <div className={styles["header-top-item"]}>Đăng ký</div>
    </div>
  );
};

export default TopRight;
