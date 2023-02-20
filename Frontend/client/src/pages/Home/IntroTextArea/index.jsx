import React, { useContext } from "react";
import style from "./IntroTextArea.module.css";
import HomeContext from "../HomeContext";

const content = {
  show: {
    title: `A joke a day keep the doctor away`,
    subTitle: `If you joke wrong way,your teeth have to pay.(Serious)`,
  },
  noMoreToShow: {
    title: `That's all the jokes for today!`,
    subTitle: `Come back another day!`,
  },
};

const IntroTextArea = (props) => {
  const { isNoMoreStoryToShow } = useContext(HomeContext);

  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>
        {content[isNoMoreStoryToShow ? "noMoreToShow" : "show"].title}
      </h1>
      <h2 className={style.subTitle}>
        {content[isNoMoreStoryToShow ? "noMoreToShow" : "show"].subTitle}
      </h2>
    </div>
  );
};

export default IntroTextArea;
