import React from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import Picture from "./Components/Picture/Picture";
import TextBox from "./Components/TextBox/TextBox";
import SlideShow from './Components/SlideShow/SlideShow';

function App() {
  return (
    <div className="App">
      <Header />
      <Picture />
      <TextBox />
      <SlideShow />
    </div>
  );
}

export default App;
