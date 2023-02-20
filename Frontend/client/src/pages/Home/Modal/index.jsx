import React, { useContext } from "react";
import style from "./Modal.module.css";
import { getCookie } from "react-use-cookie";
import HomeContext from "../HomeContext";
import axios from "axios";

const Modal = (props) => {
  const { setCurrentStoryIndex, stories, currentStoryIndex } =
    useContext(HomeContext);
  const userVote = getCookie("vote");
  const { modalVisible, setModalVisible, setUserVote } = props;

  const handleVoteAgain = () => {
    setUserVote("user vote have been cleared");
    setModalVisible(false);
  };
  const handleSwitchToNextJoke = () => {
    const currentStoryId = stories[currentStoryIndex].id;
    axios
      .put(`http://localhost:5000/joke-story/${currentStoryId}/${userVote}`)
      .then((response) => {
        setCurrentStoryIndex((prev) => prev + 1);
        setModalVisible(false);
      });
  };

  return (
    <div
      style={{ display: !modalVisible ? "none" : "flex" }}
      className={style.wrapper}
    >
      <div className={style.contentWrapper}>
        <span className={style.content}>
          {`We stored your vote: ${
            userVote === "funny" ? "Funny" : "Not Funny"
          }`}
        </span>
        <div className={style.buttonWrapper}>
          <button
            className={"button small"}
            onClick={() => {
              handleVoteAgain();
            }}
          >
            Vote Again
          </button>
          <button
            className={"button small"}
            onClick={() => {
              handleSwitchToNextJoke();
            }}
          >
            Next Joke
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
