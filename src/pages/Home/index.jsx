import {
  Nav,
  Header,
  OurServices,
  OrderService,
  WhoUs,
  OurTeam,
  JoinUs,
  Contact,
  Footer,
  OurAddress,
  Banner,
} from "../../components";
import { Box } from "../../mui-modules.js";
import { NorthOutlined } from "../../mui-icons.js";
import { useEffect, useState } from "react";
import "./style.css";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 200) setIsScrolled(true);
        else setIsScrolled(false);
      });
    }
  });

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <Nav />
      <Box className="home">
        {isScrolled && (
          <Box onClick={scrollToTop} className="top-arrow">
            <NorthOutlined />
          </Box>
        )}
        <Header />
        <OurServices />
        <OrderService />
        <Banner />
        <WhoUs />
        <OurTeam />
        <JoinUs />
        <Contact />
        <OurAddress />
        <Footer />
      </Box>
    </>
  );
}
