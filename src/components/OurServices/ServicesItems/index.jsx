import { Box, Typography } from "../../../mui-modules";
import "./style.css";

export default function ServicesItems({ list }) {
  return (
    <Box className="our-services__items">
      {list.map((item, index) => (
        <Box className="our-services__item" key={index}>
          <Box className="wrap-our-services__item-title">
            <Typography className="our-services__item-title" variant="h6">
              {item.title}
            </Typography>
          </Box>
          <Box className="our-services__item-elements">
            {item?.elements.map((element, elementIndex) => (
              <Box className="our-services__item-element" key={elementIndex}>
                <Typography variant="body1">{element}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
}
