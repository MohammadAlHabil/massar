import { Link } from "react-router-dom";
import { Box, Typography, Container } from "../../mui-modules.js";
import TitleSection from "../TitleSection";
import WhoUsImg from "../../assets/images/who-us.png";
import { ArrowBackOutlined } from "../../mui-icons";
import "./style.css";

export default function WhoUs() {
  return (
    <Container maxWidth="xl">
      <Box className="margin__top-section who-us">
        <Box data-aos="fade-right" className="who-us__content">
          <Box className="who-us__content-text">
            <TitleSection style="right" title="من نحن" />
            <Typography className="who-us__title">
              هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
              سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات
              في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها
              تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد
              محتوى نصي، هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص
              مقروء.
            </Typography>
            <Link to="/">
              <Typography variant="body1" component="span">
                قراءة المزيد
              </Typography>
              <ArrowBackOutlined className="who-us__icon" />
            </Link>
          </Box>
        </Box>
        <Box data-aos="fade-left" className="who-us__img">
          <img src={WhoUsImg} alt="who-us" />
        </Box>
      </Box>
    </Container>
  );
}
