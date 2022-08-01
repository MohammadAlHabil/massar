import { useState } from "react";
import { Box, Typography, Container } from "../../mui-modules.js";
import TitleSection from "../TitleSection";
import { addresses } from "../../utils";
import Map from "./Map";
import { LocationOnOutlined, PhoneAndroidOutlined } from "../../mui-icons";
import "./style.css";

export default function OurAddress() {
  const [selected, setSelected] = useState(1);
  const [position, setPosition] = useState([
    21.48664535441055, 39.193601540270635,
  ]);

  const handleChangeAddress = (position, value) => {
    setPosition(position);
    setSelected(value);
  };

  const Address = ({ address: { position, value, location, phone } }) => {
    return (
      <Box
        onClick={() => handleChangeAddress(position, value)}
        className={`our-address__content ${
          selected === value ? "selected" : ""
        }`}>
        <Box className="our-address__content-details">
          <LocationOnOutlined />
          <Typography component="span">{location}</Typography>
        </Box>
        <Box className="our-address__content-details">
          <PhoneAndroidOutlined />
          <Typography component="span">{phone}</Typography>
        </Box>
      </Box>
    );
  };

  return (
    <Container maxWidth="xl">
      <Box className="margin__top-section our-address">
        <TitleSection title="فروعنا" />
        <Box className="our-address__content-container">
          {addresses.map((address, index) => (
            <Address key={index} address={address} />
          ))}
        </Box>
        <Box className="our-address__map">
          <Map position={position} />
        </Box>
      </Box>
    </Container>
  );
}
