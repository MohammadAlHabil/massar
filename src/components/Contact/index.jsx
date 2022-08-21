import { Box, Button, Typography, Container } from "../../mui-modules";
import TitleSection from "../TitleSection";
import { contactInfo } from "../../utils";
import "./style.css";

const TextWithIcon = ({ info }) => {
  return (
    <Box display="flex" flexDirection="column" sx={{ m: 2 }}>
      <Typography sx={{ mb: 1 }} variant="h6">
        {info.title}
      </Typography>
      {info.list.map((item, index) => {
        return (
          <Box key={index} display="flex">
            <Box className="info-icons">{item.icon}</Box>
            <Typography variant="body1">{item.text}</Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default function Contact() {
  return (
    <Container id="contact" maxWidth="xl">
      <Box className="margin__top-section container-contact">
        <Box data-aos="fade-left" className="contact__content">
          <TitleSection style="right" title="ابق على تواصل معنا" />
          <form
            action="https://formsubmit.co/mohammadalhabil1999@gmail.com"
            method="POST"
            className="form">
            <Box className="text-field">
              <label>اسمك الكامل</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="محمد أحمد خليل"
                required></input>
            </Box>
            <Box className="text-field">
              <label>بريدك الالكتروني</label>
              <input
                name="email"
                className="input"
                type="email"
                placeholder="example@example.com"
                required></input>
            </Box>
            <Box className="text-field">
              <label>رسالتك</label>
              <textarea
                name="message"
                className="textarea"
                placeholder="اكتب رسالتك هنا..."
                required></textarea>
            </Box>
            <input type="hidden" name="_subject" value="مسار الاعمال"></input>
            <input type="hidden" name="_captcha" value="false"></input>
            <input type="hidden" name="_next" value={``}></input>
            <Typography variant="body1" component="span">
              سيتم الرد على رسالتك عبر ايميلك بعد مراجعتها من الدعم الفني
            </Typography>
            <Button
              type="submit"
              variant="contained"
              className="button btn-whatsapp">
              ارسال
            </Button>
          </form>
        </Box>
        <Box data-aos="fade-right" className="contact__info">
          {contactInfo.map((item, index) => (
            <TextWithIcon info={item} key={index} />
          ))}
        </Box>
      </Box>
    </Container>
  );
}
