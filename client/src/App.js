import "./App.css";
import { useEffect } from "react";
import Header from "./Compents/Header";
import Posts from "./Compents/Posts";
function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <Posts />
      </div>
    </div>
  );
}

export default App;
