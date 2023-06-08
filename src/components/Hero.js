import React, { useEffect, useState } from "react";
import { Box, Container, Slide } from "@mui/material";
import axios from "axios";
import Header from "./Header";
const imageStyle = {
  width: "100vw",
  height: "100vh",
  backgroundImage:
    'url("https://images.unsplash.com/photo-1510936111840-65e151ad71bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1190&q=80")',
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  opacity: "0.8",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: -1,
};

const textStyling = {
  position: "absolute",
  top: "50%",
  left: "50%",
  color: "white",
  fontweight: "bold",
  textShadow: "-1px 1px 10px rgba(0, 0, 0, 0.75)",
  fontFamily: "'Courgette', cursive",
};

function Hero() {
  const [heroData, setHeroData] = useState([]);

  useEffect(() => {
    axios
      .request({
        url: "http://localhost:3030/hero",
        method: "GET",
      })
      .then((response) => {
        console.log(response);
        setHeroData(response.data);
      });
  }, []);

  return (
    <Container fixed>
      <Header />
      <Box sx={imageStyle}>
        <Box sx={textStyling}>
          {heroData.map((hero, index) => (
            <Slide direction="right" in={true} timeout={500} key={index}>
              <div>
                <h1>{hero.title}</h1>
                <h2>{hero.text}</h2>
              </div>
            </Slide>
          ))}
        </Box>
      </Box>

    </Container>
  );
}

export default Hero;
