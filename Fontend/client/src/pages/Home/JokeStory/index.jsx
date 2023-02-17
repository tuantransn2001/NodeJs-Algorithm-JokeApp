import React, { useContext, useState } from "react";
import style from "./JokeStory.module.css";
import Modal from "../Modal";
import useCookie from "react-use-cookie";
import HomeContext from "../HomeContext";
const JokeStory = (props) => {
  const {
    stories,
    currentStoryIndex,
    isNoMoreStoryToShow,
    setCurrentStoryIndex,
  } = useContext(HomeContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [userVote, setUserVote] = useCookie("vote", "didn't vote yet");

  const handleGetUserVoteAndOpenModal = (userVote) => {
    setUserVote(userVote);
    setModalVisible(true);
  };

  const handleRefreshApp = () => {
    setUserVote("vote", "Refresh");
    setCurrentStoryIndex(0);
  };

  const renderButtons = () => {
    if (isNoMoreStoryToShow) {
      return (
        <button
          className={`button medium ${style.resetJokeStoryButton}`}
          onClick={handleRefreshApp}
        >
          Read Joke Again
        </button>
      );
    }

    return (
      <div className={style.buttonWrapper}>
        <button
          className={`button medium ${style.funnyButton}`}
          onClick={() => {
            handleGetUserVoteAndOpenModal("funny");
          }}
        >
          This Is Funny!
        </button>
        <button
          className={`button medium ${style.notFunnyButton}`}
          onClick={() => {
            handleGetUserVoteAndOpenModal("not funny");
          }}
        >
          This Is Not Funny.
        </button>
      </div>
    );
  };

  return (
    <>
      <div className={style.wrapper}>
        <p className="paragraph">{stories[currentStoryIndex]?.story}</p>

        {renderButtons()}
      </div>

      <Modal
        modalVisible={modalVisible}
        setUserVote={setUserVote}
        setModalVisible={setModalVisible}
      />
    </>
  );
};

export default JokeStory;
