import { Box, Typography } from "../../mui-modules.js";
import "./style.css";

export default function TitleSection({ title, style }) {
  return (
    <Box className={`${style} title-section`}>
      <Typography
        style={{ style }}
        variant="h5"
        className={`${style} title-section__title`}>
        {title}
      </Typography>
    </Box>
  );
}
