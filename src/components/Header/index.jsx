// import Nav from "../Nav";
import Typewriter from "typewriter-effect";
import { Box, Typography, Button, Container } from "../../mui-modules.js";
import headerImg from "../../assets/images/header-image.png";
import { WhatsappOutlined } from "../../mui-icons.js";
import "./style.css";

export default function Header() {
  return (
    <>
      <Container maxWidth="xl">
        <Box className="container-header">
          <Box className="container-header-content" sx={{ mt: "60px" }}>
            <Typography className="header-title" variant="h2" gutterBottom>
              <Typewriter
                options={{
                  strings: [
                    "أفضل الخدمات والاستشارات نقدمها لك الأن",
                    "حلول تقنية لتسهيل الاستشارات",
                  ],
                  autoStart: true,
                  deleteSpeed: 0.01,
                  loop: true,
                  delay: 75,
                }}
              />
            </Typography>

            <Typography
              className="header-body"
              variant="subtitle1"
              gutterBottom
              component="div"
              sx={{ color: "#747474" }}>
              هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
              سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات
              في الصفحة التي يقرأها.
            </Typography>
            <Button
              startIcon={<WhatsappOutlined />}
              variant="contained"
              className="btn-whatsapp"
              sx={{ my: 2 }}>
              <a href="https://api.whatsapp.com/send?phone=0503327164">
                طلب خدمة
              </a>
            </Button>
            <Box className="container-counter">
              <Box className="counter-item">
                <Box className="wrap-number">
                  <Typography variant="h4">+100</Typography>
                </Box>
                <Typography variant="h5">خدمة شهرياً</Typography>
              </Box>
              <Box className="counter-item">
                <Box className="wrap-number">
                  <Typography variant="h4">237</Typography>
                </Box>
                <Typography variant="h5">مستشار</Typography>
              </Box>
            </Box>
          </Box>
          <Box className="container-header-image">
            <img src={headerImg} alt="header" />
          </Box>
        </Box>
      </Container>
    </>
  );
}
