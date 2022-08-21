import { Link } from "react-router-dom";
import { Box, Typography, Container } from "../../mui-modules.js";
import TitleSection from "../TitleSection";
import WhoUsImg from "../../assets/images/who-us.png";
import { ArrowBackOutlined } from "../../mui-icons";
import "./style.css";

export default function WhoUs() {
  return (
    <Container id="about-us" maxWidth="xl">
      <Box className="margin__top-section who-us">
        <Box data-aos="fade-right" className="who-us__content">
          <Box className="who-us__content-text">
            <TitleSection style="right" title="من نحن" />
            <Typography className="who-us__title">
              مسار الأعمال شركة سعودية متخصصة تأسست في المدينة المنورة في عام
              2022م، وتقدم الخدمات القانونية والإدارية والمالية، للأفراد
              والمنشآت الصغيرة والمتوسطة عبر فريقها المالي والإداري المتخصص
              والقادر على تقديم حلول مبتكرة مبنية على أحدث الوسائل العلمية
              والمنهجية والتي تساهم في تطوير عمل المنظّمات، وتحسين أدائها، كما
              يقوم فريقها القانوني بتقديم الخدمات القانونية كافة وفق معايير
              محددة تهدف الى تنفيذ كافة الخدمات بسهولة ويسر لطالب الخدمة، كما
              تستهدف مسار الأعمال استخدام أحدث أدوات التحول الرقمي وفق أعلى
              معايير التكامل التقني المبني على أسس تنظيمية متسقة ومتناغمة للوصول
              الى التفرد في خدماتها محليا وعالميا.
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
