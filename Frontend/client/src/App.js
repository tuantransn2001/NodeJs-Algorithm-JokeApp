import React, { useEffect } from "react";
import Home from "./pages/Home";
import "./App.css";

function App() {
  useEffect(() => {
    document.title = "Joke Single Serving App";
  }, []);

  return (
    <div className="app_container">
      <Home />
    </div>
  );
}

export default App;
