import React from "react";
import Home from "./pages/Home";
import "./App.css";
function App() {
  return (
    <div style={styles.container}>
      <Home />
    </div>
  );
}

export default App;

const styles = {
  container: {
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
};
