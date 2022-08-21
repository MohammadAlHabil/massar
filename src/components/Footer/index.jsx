import { Box, Button, Typography, Container } from "../../mui-modules";
import { Email, LinkedIn, Twitter, Facebook } from "../../mui-icons";
import logo from "../../assets/images/logo.png";
import "./style.css";

export default function Footer() {
  return (
    <Container maxWidth="xl">
      <Box data-aos="fade-up" className="margin__top-section footer__container">
        <Box className="footer">
          <Box className="footer__content">
            <Box className="footer__logo">
              <img src={logo} alt="logo" className="logo" />
            </Box>
            <Typography variant="body1" component="span">
              نعمل في أرجاء المملكة في خدمة القطاعات التجارية والأفراد ورجال
              الأعمال والمستثمرين
            </Typography>
            <Box className="footer__social">
              <Box className="footer__social-icons">
                <Email />
                <LinkedIn />
                <Twitter />
                <Facebook />
              </Box>
            </Box>
          </Box>
          <Box className="footer__subscribe">
            <Typography variant="h6" component="span">
              اشترك بالنشرة البريدية
            </Typography>
            <form className="form" onSubmit={() => {}}>
              <Box className="text-field">
                <label>بريدك الالكتروني</label>
                <input
                  className="input"
                  type="email"
                  placeholder="example@example.com"
                  required></input>
              </Box>

              <Button
                type="submit"
                variant="contained"
                className=" button btn-whatsapp">
                اشتراك
              </Button>
            </form>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
