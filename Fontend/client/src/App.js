import React, { useEffect } from "react";
import Home from "./pages/Home";
import "./App.css";

function App() {
  useEffect(() => {
    document.title = "Joke Single Serving App";
  }, []);

  return (
    <div style={styles.container}>
      <Home />
    </div>
  );
}

export default App;

const styles = {
  container: {
    margin: "0",
    padding: "0",
    // width: "100vw",
    // height: "100vh",
    // backgroundColor: "#AAB7B8",
  },
};
