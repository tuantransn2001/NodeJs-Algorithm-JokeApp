import React from "react";
import style from "./Header.module.css";
const Header = (props) => {
  return (
    <header id={style.header}>
      <img
        className={style.logo}
        alt="logo"
        src={require("../../../assets/clientAssets/logo.png")}
      />
      <div className={style.info}>
        <div className={style.content}>
          <span className={style.title}>Handicrafted by</span>
          <span className={style.name}>Jim HLS</span>
        </div>
        <img
          className={style.avatar}
          alt="avatar"
          src={require("../../../assets/clientAssets/avatar.png")}
        />
      </div>
    </header>
  );
};

export default Header;
