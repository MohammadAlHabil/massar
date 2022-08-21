import React from "react";
import banner from "../../assets/images/banner.png";
import { Box, Container } from "../../mui-modules.js";
import "./style.css";

export default function Banner() {
  return (
    <Container maxWidth="xl" className="margin__top-section">
      <Box className="container-banner">
        <img src={banner} alt="logo" />
      </Box>
    </Container>
  );
}
