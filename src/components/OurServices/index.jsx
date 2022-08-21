import { useState } from "react";
import {
  Box,
  TabContext,
  Tabs,
  Tab,
  TabPanel,
  Container,
} from "../../mui-modules";
import {
  AccountBalanceOutlined,
  BadgeOutlined,
  BalanceOutlined,
} from "../../mui-icons";
import TitleSection from "../TitleSection";
import ServicesItems from "./ServicesItems";
import "./style.css";
import {
  legalServices,
  financialServices,
  administrativeServices,
} from "../../utils";

export default function OurServices() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabs = [
    {
      label: "خدمات قانونية",
      icon: <BalanceOutlined />,
      list: legalServices,
    },
    {
      label: "خدمات مالية",
      icon: <AccountBalanceOutlined />,
      list: financialServices,
    },
    {
      label: "خدمات إدارية",
      icon: <BadgeOutlined />,
      list: administrativeServices,
    },
  ];

  return (
    <Container id="services" maxWidth="xl">
      <Box
        data-aos="fade-up"
        className="margin__top-section container-our-services">
        <TitleSection title="خدماتنا" />
        <Box className="our-services">
          <TabContext value={`${value}`}>
            <fieldset className="our-services__fieldset">
              <legend align="center" className="our-services__legend">
                <Box>
                  <Tabs
                    variant="scrollable"
                    scrollButtons="auto"
                    value={value}
                    onChange={handleChange}
                    aria-label="our services tabs">
                    {tabs.map((tab, index) => (
                      <Tab
                        iconPosition="start"
                        key={index}
                        label={tab.label}
                        icon={tab.icon}
                        aria-label={tab.label}
                        className="our-services__tab"
                      />
                    ))}
                  </Tabs>
                </Box>
              </legend>
              <Box className="our-services__content">
                {tabs.map((item, index) => {
                  return (
                    <TabPanel key={index} value={`${index}`} index={index}>
                      <ServicesItems list={tabs[index].list} />
                    </TabPanel>
                  );
                })}
              </Box>
            </fieldset>
          </TabContext>
        </Box>
      </Box>
    </Container>
  );
}
