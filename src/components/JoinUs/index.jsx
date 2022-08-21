import { Box, Typography, Button, Container } from "../../mui-modules.js";
import TitleSection from "../TitleSection";
import JoinUsImg from "../../assets/images/join-us.png";
import "./style.css";

export default function JoinUs() {
  return (
    <Container id="join-us" maxWidth="xl">
      <Box className="margin__top-section container-join-us">
        <Box className="join-us">
          <Box className="join-us__content">
            <TitleSection style="right" title="انضم لنا كشريك" />
            <Typography variant="h6" className="join-us__content-title">
              تهتم المنصة بالكوادر والخبرات في أي من الخدمات التي تقدمها
            </Typography>
            <Typography variant="body1" className="join-us__content-body">
              نسعد بانضمامك لنا
            </Typography>
            <Button variant="contained" className="button btn-whatsapp">
              <a
                rel="noreferrer"
                href="https://docs.google.com/forms/d/e/1FAIpQLSfE72ww4PEROWWpPtI442dUADXvNQznxR4AUPV_pE02eqM-yA/viewform?usp=sf_link"
                target="_blank">
                انضم لنا
              </a>
            </Button>
          </Box>
          <Box className="join-us__img">
            <img src={JoinUsImg} alt="join us" />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
