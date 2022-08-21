import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  AppBar,
  Container,
  Toolbar,
  IconButton,
  MenuItem,
  Typography,
  Menu,
  Button,
  SvgIcon,
} from "../../mui-modules.js";
import logo from "../../assets/images/logo.png";
import { MenuOutlined, WhatsappOutlined } from "../../mui-icons.js";
import { v4 as uuidv4 } from "uuid";
import "./style.css";

const pages = [
  {
    label: "الرئيسية",
    to: "home",
  },
  {
    label: "خدماتنا",
    to: "services",
  },
  {
    label: "من نحن",
    to: "about-us",
  },
  {
    label: "لشركائنا",
    to: "join-us",
  },
  {
    label: "تواصل معنا",
    to: "contact",
  },
];

export default function Nav() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [small, setSmall] = useState(false);

  const handleScroll = (id) => {
    const item = document.getElementById(id);
    window.scrollTo({ top: item.offsetTop - 80, behavior: "smooth" });
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 200) setSmall(true);
        else setSmall(false);
      });
    }
  });

  return (
    <AppBar position="static" className={`app-bar ${small ? "small" : ""}`}>
      <Container maxWidth="xl" className="container-tool-bar">
        <Toolbar disableGutters className="tool-bar">
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>

          <Box
            className="container-nav-items"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Box>
              {pages.map(({ label, to }) => (
                <Button
                  key={uuidv4()}
                  onClick={() => handleScroll(to)}
                  sx={{ my: 2 }}>
                  {label}
                </Button>
              ))}
            </Box>
          </Box>

          <Box className="nav-buttons" sx={{ flexGrow: 0, display: "flex" }}>
            <Button className="btn-join-us" sx={{ my: 2 }}>
              <a
                rel="noreferrer"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdDsxOLOD1Y_aFae2Hqpy8zhuuRiLV0RPwWBYPl8Prb_io7Mw/viewform?usp=sf_link"
                target="_blank">
                انضم لنا
              </a>
            </Button>
            <Button
              startIcon={<WhatsappOutlined />}
              variant="contained"
              className="btn-whatsapp"
              sx={{ my: 2 }}>
              <a
                rel="noreferrer"
                href="https://api.whatsapp.com/send?phone=0503327164"
                target="_blank">
                طلب خدمة
              </a>
            </Button>
          </Box>

          <Box
            className="nav-menu"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            id="hi">
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}>
              <SvgIcon
                component={MenuOutlined}
                sx={{ color: "#000" }}
                fontSize="small"
              />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}>
              {pages.map(({ label, to }) => (
                <MenuItem key={uuidv4()}>
                  <Typography
                    onClick={() => handleScroll(to)}
                    textAlign="center">
                    {label}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
