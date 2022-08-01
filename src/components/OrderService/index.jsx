import {
  Box,
  Typography,
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
  Container,
  useMediaQuery,
} from "../../mui-modules";
import TitleSection from "../TitleSection";
import { orderServiceList } from "../../utils";
import "./style.css";
import { useTheme } from "@mui/material/styles";

export default function OrderService() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  if (!matches) {
    return (
      <Container maxWidth="xl">
        <Box
          data-aos="zoom-in-up"
          className="margin__top-section order-service">
          <TitleSection title="كيف تطلب خدمة" />
          <Timeline position="alternate">
            <ul>
              {orderServiceList.map((item, index) => (
                <li key={index}>
                  <TimelineItem className="time-line">
                    <TimelineSeparator className="time-separator">
                      <TimelineConnector className="time-connector" />
                      <TimelineDot className="time-dot">{item.id}</TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineOppositeContent className="time-line-item">
                      <Box className="order-service__icon-mobile">
                        {item.icon}
                      </Box>
                      <Typography variant="subtitle1">{item.title}</Typography>
                      <Typography variant="body2" className="time-desc">
                        {item.description}
                      </Typography>
                    </TimelineOppositeContent>
                  </TimelineItem>
                </li>
              ))}
            </ul>
          </Timeline>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl">
      <Box data-aos="zoom-in-up" className="margin__top-section order-service">
        <TitleSection title="كيف تطلب خدمة" />
        <Timeline position="alternate">
          {orderServiceList.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent
                className={`time-line-item ${
                  index % 2 === 0 ? "even-item" : "odd-item"
                }`}>
                <Typography variant="h6">{item.title}</Typography>
                <Typography className="time-desc">
                  {item.description}
                </Typography>
                <Box
                  className={`order-service__icon ${
                    index % 2 === 0 ? "even-icon" : "odd-icon"
                  }`}>
                  {item.icon}
                </Box>
              </TimelineOppositeContent>
              <TimelineSeparator className="time-separator">
                <TimelineConnector className="time-connector" />
                <TimelineDot className="time-dot">{item.id}</TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent />
            </TimelineItem>
          ))}
        </Timeline>
      </Box>
    </Container>
  );
}
