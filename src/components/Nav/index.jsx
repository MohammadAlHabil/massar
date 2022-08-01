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
import "./style.css";

const pages = ["الرئيسية", "خدماتنا", "من نحن", "لشركائنا", "تواصل معنا"];

export default function Nav() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [small, setSmall] = useState(false);

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
              {pages.map((page) => (
                <Button key={page} sx={{ my: 2 }}>
                  {page}
                </Button>
              ))}
            </Box>
          </Box>

          <Box className="nav-buttons" sx={{ flexGrow: 0, display: "flex" }}>
            <Button className="btn-join-us" sx={{ my: 2 }}>
              انضم لنا
            </Button>
            <Button
              startIcon={<WhatsappOutlined />}
              variant="contained"
              className="btn-whatsapp"
              sx={{ my: 2 }}>
              <a href="https://api.whatsapp.com/send?phone=0503327164">
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
              {pages.map((page) => (
                <MenuItem key={page}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
