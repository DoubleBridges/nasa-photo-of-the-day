import React, { useState, useEffect } from "react";
import axios from "axios"
import Header from "./Components/Header/Header";
import Picture from "./Components/Picture/Picture";
import TextBox from "./Components/TextBox/TextBox";
import SlideShow from './Components/SlideShow/SlideShow';

import "./App.scss";

function App() {

  const [image, setImage] = useState("Loading ...");
  const [title, setTitle] = useState("Photo");
  const [explanation, setExplanation] = useState("Photo Information");
  const [copyright, setCopyright] = useState("NASA");
  const [hdImage, setHdImage] = useState("Loading ...");

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=2q5URYbgOYRnKTFzW73zaqkAgmHzXSq5b5YCPJb4')
      .then(res => {
        setHdImage(res.data.hdurl)
        setTitle(res.data.title)
        setImage(res.data.url)
        setCopyright(res.data.copyright)
        setExplanation(res.data.explanation)
        console.log(res)

      })
      .catch(err => console.log(err))

  }, [])

  const hiRes = () => setImage(hdImage)


  return (
    <div className="App">
      <Header />
      <Picture
        image={image}
        title={title}
        clicked={hiRes} />
      <TextBox
        explanation={explanation} />
      <SlideShow />
    </div>
  );
}

export default App;
