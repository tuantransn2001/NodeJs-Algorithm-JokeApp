import * as React from "react";
import { Button, Typography, Modal } from "@material-ui/core";
import { getCookieValueByKey } from "../../common";
import axios from "axios";
import { styles } from "../../pages/Home/style";
import "./style.css";

export default function ModalPopUp(props) {
  const {
    modalVisible,
    setModalVisible,
    setUserVote,
    userVote,
    setCurrentStoryIndex,
    currentStoryOnClick,
  } = props;

  const handleVoteAgain = () => {
    setModalVisible(!modalVisible);
    setUserVote(null);
  };

  const handleSwitchToNextStory = () => {
    // ? Save user vote and dispatch to database
    axios
      .put(
        `http://localhost:5000/joke-story/${currentStoryOnClick?.id}/${userVote}`
      )
      .then((response) => {
        const { status } = response;
        if (status === 201) {
          // ? Dispatch success
          setCurrentStoryIndex((prev) => {
            return prev + 1;
          });
          setModalVisible(!modalVisible);
          setUserVote(null);
        }
      });
  };

  return (
    <Modal
      open={modalVisible}
      onClose={setModalVisible(modalVisible)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="modal-size">
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {userVote ? `This joke is funny!` : `This joke is not funny!`}
        </Typography>
        <div className="btn-wrapper">
          <button style={styles.button} onClick={handleVoteAgain}>
            Vote Again
          </button>
          <button style={styles.button} onClick={handleSwitchToNextStory}>
            Next Joke
          </button>
        </div>
      </div>
    </Modal>
  );
}
