import React, { useState, useEffect } from "react";
import axios from "axios"
import PageHeader from "./Components/Header/Header";
import Image from "./Components/Image/Image/Image.js";
import TextBox from "./Components/TextBox/TextBox";
import ImageDate from './Components/ImageDate/ImageDate'

import { Grid, GridItem } from 'styled-grid-component'


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
        console.log(res.data.url)
      })
      .catch(err => console.log(err))

  }, [date])


  if (!imgData)
    return <div>Loading ... </div>

  return (
    <Grid className="App"
      width="100%"
      height="100vh"
      templateColumns="1fr 300px 300px 1fr"
      templateRows="80px 600px 80px 150px 1fr 1fr"
      rowGap="20px"
      style={{
        backgroundImage: `url(${imgData.url})`,
        backgroundSize: "cover",

      }}
    >
      <GridItem column="1 / 5" row="1 / 2">
        <PageHeader />
      </GridItem>
      <GridItem column="2 / 4" row="2/ / 3">
        <Image
          isVideo={imgData.media_type === "video"}
          image={imgData.url}
          title={imgData.title}
          date={imgData.date}
        />
      </GridItem>
      <GridItem column="2 / 4" row="3 / 4">
        <ImageDate
          pickDate={datePick} />
      </GridItem>
      <GridItem column="2 / 4" row="4 / 5">
        <TextBox
          explanation={imgData.explanation}
        />
      </GridItem>
    </Grid>
  );
}


export default App;
