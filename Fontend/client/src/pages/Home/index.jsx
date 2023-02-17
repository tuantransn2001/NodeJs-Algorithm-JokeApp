import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header/index.jsx";
import style from "./Home.module.css";
import IntroTextArea from "./IntroTextArea/index.jsx";
import JokeStory from "./JokeStory/index.jsx";
import Footer from "./Footer/index.jsx";
import HomeContext from "./HomeContext.js";
const Home = (props) => {
  const [stories, setStories] = useState([]);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

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

  return (
    <HomeContext.Provider
      value={{
        stories,
        currentStoryIndex,
        setCurrentStoryIndex,
        isNoMoreStoryToShow: currentStoryIndex > stories.length - 1,
      }}
    >
      <div className={style.homeWrapper}>
        <Header />
        <IntroTextArea />
        <JokeStory />
        <Footer />
      </div>
    </HomeContext.Provider>
  );
};

export default Home;

// ? User Vote -> Open modal && set cookie to track user has voted the story ( with Vote again and Switch to next story btns ) ->
// ? Click Vote again - close modal && reset cookie
// ? Click switch to next story - close modal && switch to next
// ? ...
// ? Out of story => display "That's all the jokes for today! Come back another day!"
