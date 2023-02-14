import React, { useState, useEffect } from "react";
import LoadingPage from "../Loading/index.jsx";
import ModalPopUp from "../../components/Modal/index.jsx";
import axios from "axios";

const Home = (props) => {
  const [stories, setStories] = useState([]);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [userVote, setUserVote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
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
        setStories((prev) => [...prev, ...response.data]);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(true);
      });
  }, []);

  useEffect(() => {
    document.cookie = `vote=${userVote}`;
  }, [userVote]);

  const Story = (props) => {
    const StoryContent = () => {
      if (stories.length !== 0) {
        return (
          <div>
            <div style={styles.jokeContentWrapper}>
              <span style={styles.jokeTitle}>
                {stories[currentStoryIndex].title}
              </span>
              <span style={styles.jokeSubTitle}>
                {stories[currentStoryIndex].subTitle}
              </span>
            </div>
            <div style={styles.jokeStoryWrapper}>
              <span style={styles.jokeStory}>
                {stories[currentStoryIndex].story}
              </span>
            </div>
            <div style={styles.buttons}>
              <button
                style={styles.buttonFunny}
                onClick={() => {
                  handleOpenModalAndSetCookieAndGetCurrentStory(true);
                }}
              >
                <span style={styles.buttonContent}>This Is Funny</span>
              </button>
              <button
                style={styles.buttonNotFunny}
                onClick={() => {
                  handleOpenModalAndSetCookieAndGetCurrentStory(false);
                }}
              >
                <span style={styles.buttonContent}>This Is Not Funny</span>
              </button>
            </div>
          </div>
        );
      }
    };
    let isNoMoreStoryToShow = currentStoryIndex > stories.length - 1;
    return isNoMoreStoryToShow ? (
      <div style={styles.noMoreStoryWrapper}>
        <span style={styles.noMoreStoryText}>
          That's all the jokes for today!
        </span>
        <span style={styles.noMoreStoryText}>Come back another day!</span>
      </div>
    ) : (
      <StoryContent />
    );
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <img
          style={styles.logo}
          src={require("../../assets/clientAssets/logo.png")}
        />
        <div style={styles.info}>
          <div style={styles.content}>
            <span style={styles.title}>Handicrafted by</span>
            <span style={styles.name}>Tuấn</span>
          </div>
          <img
            style={styles.avatar}
            src={require("../../assets/clientAssets/avatar.png")}
          />
        </div>
      </div>
      <Story />
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

const styles = {
  container: {
    width: "100%",
    height: "100%",
  },
  // ? ======================== Header ========================
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
  },
  logo: {
    width: "30px",
    height: "30px",
  },
  info: { display: "flex", flexDirection: "row", gap: "6px" },
  content: { display: "flex", flexDirection: "column", alignItems: "flex-end" },
  title: { color: "#c4c3d0" },
  name: { color: "#6c7b8b" },
  avatar: { width: "40px", height: "40px", borderRadius: "50px" },
  // ? ======================== Joke content ========================
  jokeContentWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
    padding: "80px 10px",
  },
  jokeTitle: {
    fontSize: "18px",
    fontWeight: "500",
    color: "#ffffff",
    spanAlign: "center",
  },
  jokeSubTitle: {
    fontSize: "14px",
    fontWeight: "40px",
    color: "#ffffff",
    spanAlign: "center",
  },
  jokeStoryWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    alignItems: "center",
    justifyContent: "center",

    padding: "40px 20px",
    height: "270px",
    overflowY: "scroll",
  },

  buttons: {
    display: "flex",
    marginTop: "20px",
    paddingHorizontal: "20px",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "12px",
  },
  buttonContent: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#ffffff",
  },
  buttonFunny: {
    backgroundColor: "#6495ed",
    padding: "20px 10px",
    width: "50%",
    borderRadius: "4px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonNotFunny: {
    backgroundColor: "#74c365",
    padding: "20px 10px",
    width: "50%",
    borderRadius: 4,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  noMoreStoryWrapper: {
    padding: "80px 10px",
    backgroundColor: "green",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
  },
  noMoreStoryText: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#ffffff",
    spanAlign: "center",
  },
};

// ? User Vote -> Open modal && set cookie to track user has voted the story ( with Vote again and Switch to next story btns ) ->
// ? Click Vote again - close modal && reset cookie
// ? Click switch to next story - close modal && switch to next
// ? ...
// ? Out of story => display "That's all the jokes for today! Come back another day!"
