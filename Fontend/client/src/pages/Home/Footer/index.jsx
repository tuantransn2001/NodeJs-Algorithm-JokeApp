import React from "react";
import style from "./Footer.module.css";
const Footer = (props) => {
  return (
    <footer id={style.footer}>
      <p className={`paragraph ${style.customParagraph}`}>
        This app is created as part of HLsolutions program. The materials
        contained on this website are provided for general <br></br> information
        only and do not constitute any from of advice.HLS assumes no
        responsibility for the accuracy of any particular statement and{" "}
        <br></br> accepts no liability for any loss damage which many arise from
        reliance on the information contained on this site.
      </p>
      <span className={style.copyRight}>Copyright 2021 HLS</span>
    </footer>
  );
};

export default Footer;
