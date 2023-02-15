import React, { useState, useEffect } from "react";
import ModalPopUp from "../../components/Modal/index.jsx";
import { styles } from "./style";
import axios from "axios";

const Home = (props) => {
  const [stories, setStories] = useState([]);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [userVote, setUserVote] = useState(null);
  const [currentStoryOnClick, setCurrentStoryOnClick] = useState({});
  const handleOpenModalAndSetCookieAndGetCurrentStory = (voteType) => {
    // ? Store Vote type && Save to cookie
    setUserVote(voteType);
    setModalVisible(true);
    setCurrentStoryOnClick((prev) => {
      return { ...prev, ...stories[currentStoryIndex] };
    });
  };
  // ? Handle call api
  useEffect(() => {
    axios
      .get("http://localhost:5000/joke-story")
      .then((response) => {
        setStories((prev) => [...response.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    document.cookie = `vote=${userVote}`;
  }, [userVote]);

  const Story = (props) => {
    let isNoMoreStoryToShow = currentStoryIndex > stories.length - 1;

    return (
      <>
        <div style={styles.jokeContentWrapper}>
          <span style={styles.jokeTitle}>
            {isNoMoreStoryToShow
              ? `That's all the jokes for today!`
              : `A joke a day keep the doctor away`}
          </span>
          <span style={styles.jokeSubTitle}>
            {isNoMoreStoryToShow
              ? `Come back another day!`
              : `If you joke wrong way,your teeth have to pay. Serious`}
          </span>
        </div>
        <div style={styles.section}>
          {isNoMoreStoryToShow ? (
            ""
          ) : (
            <>
              <div style={styles.jokeStoryWrapper}>
                <span style={styles.text}>
                  {stories[currentStoryIndex]?.story}
                </span>
              </div>
              <div style={styles.buttonsWrapper}>
                <button
                  style={styles.button}
                  onClick={() => {
                    handleOpenModalAndSetCookieAndGetCurrentStory(true);
                  }}
                >
                  This Is Funny!
                </button>
                <button
                  style={{ ...styles.button, backgroundColor: "#29b363" }}
                  onClick={() => {
                    handleOpenModalAndSetCookieAndGetCurrentStory(false);
                  }}
                >
                  This Is Not Funny.
                </button>
              </div>
            </>
          )}
        </div>
      </>
    );
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <img
          style={styles.logo}
          src={require("../../assets/clientAssets/logo.png")}
        />
        <div style={styles.info}>
          <div style={styles.content}>
            <span style={styles.title}>Handicrafted by</span>
            <span style={styles.name}>Jim HLS</span>
          </div>
          <img
            style={styles.avatar}
            src={require("../../assets/clientAssets/avatar.png")}
          />
        </div>
      </header>
      <Story />
      <div style={styles.footerContent}>
        <p style={styles.text}>
          This app is created as part of HLsolutions program. The materials
          contained on this website are provided for general information only
          and do not constitute any from of advice.HLS assumes no responsibility
          for the accuracy of any particular statement and accepts no liability
          for any loss damage which many arise from reliance on the information
          contained on this site.
        </p>
        <span style={styles.copyRightText}>Copyright 2021 HLS</span>
      </div>
      <ModalPopUp
        userVote={userVote}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setUserVote={setUserVote}
        setCurrentStoryIndex={setCurrentStoryIndex}
        currentStoryOnClick={currentStoryOnClick}
      />
    </div>
  );
};

export default Home;

// ? User Vote -> Open modal && set cookie to track user has voted the story ( with Vote again and Switch to next story btns ) ->
// ? Click Vote again - close modal && reset cookie
// ? Click switch to next story - close modal && switch to next
// ? ...
// ? Out of story => display "That's all the jokes for today! Come back another day!"
