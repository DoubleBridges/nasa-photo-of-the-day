import React, { useState, useEffect } from "react";
import axios from "axios"
import Header from "./Components/Header/Header";
import Image from "./Components/Image/Image/Image";
import TextBox from "./Components/TextBox/TextBox";
import SlideShow from './Components/SlideShow/SlideShow';
import ImageDate from './Components/ImageDate/ImageDate'

import "./App.scss";

function App() {

  const getToday = () => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }

    if (mm < 10) {
      mm = '0' + mm;
    }

    today = `${yyyy}-${mm}-${dd}`;
    return today
  }



  const [imgData, setimgData] = useState();
  const [date, setDate] = useState(getToday);

  const datePick = () => {
    const inputDate = document.querySelector("#date-input")
    setDate(inputDate.value)
    inputDate.value = ''
  }


  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=2q5URYbgOYRnKTFzW73zaqkAgmHzXSq5b5YCPJb4&date=${date}`)
      .then(res => {
        setimgData(res.data)
      })
      .catch(err => console.log(err))

  }, [date])


  if (!imgData)
    return <div>Loading ... </div>

  return (
    <div className="App">
      <Header />
      <Image
        isVideo={imgData.media_type === "video"}
        image={imgData.url}
        title={imgData.title}
        date={imgData.date}
      />
      <ImageDate
        pickDate={datePick} />
      <TextBox
        explanation={imgData.explanation}
      />
      <SlideShow />
    </div>
  );
}


export default App;
