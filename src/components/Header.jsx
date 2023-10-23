

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CallIcon from "@mui/icons-material/Call";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { Stack } from "@mui/material";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import { ListItemIcon } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LftDrawer from "./LftDrawer";
// const pages = ["Home", "Services","About", "Blog"];
const pages = [
{
  name: 'Home',
    link: '/#home',
  },
{
  name: 'Services',
    link: '/#services',
  },
{
  name: 'About',
    link: '/#home',
  },
{
  name: 'Contact Us',
  link: '/#contact',
  },
]; 
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Header() {
  const appBarStyle = {
    backgroundColor: "rgba(255,255,255,0.9)",

    backdropFilter: "blur(5px)",
    boxShadow: "rgba(0, 0, 0, 0.3) 0px 2px 4px 0px",
  };
  const appBarStyle1 = {
    color: "red",
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  

  return (
    <AppBar position="sticky" sx={appBarStyle}>
      <Container maxWidth="xl">
        <Stack
          p={2}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexDirection={"row"}
        >
          <Link to={"/"}>
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "orangered",
                textDecoration: "none",
              }}
            >
              Noida PG
            </Typography>
          </Link>

          <Stack display={{xs:'none',sm:'flex'}} flexDirection={"row"} gap={2}>
            <a href={"/#home"}>
              <ListItemIcon sx={{ marginRight: "10px", cursor: "pointer" }}>
                <HomeIcon style={{ color: "orangered", fontSize: "20px" }} />
                <h6 style={{ color: "orangered" }}>HOME</h6>
              </ListItemIcon>
            </a>
            <a href={"/#services"} scroll={true}>
              <ListItemIcon sx={{ marginRight: "10px", cursor: "pointer" }}>
                <MiscellaneousServicesIcon
                  style={{ color: "orangered", fontSize: "20px" }}
                />
                <h6 style={{ color: "orangered" }}>SERVICES</h6>
              </ListItemIcon>
            </a>
            <a href={"/#home"}>
              <ListItemIcon sx={{ marginRight: "10px", cursor: "pointer" }}>
                <MiscellaneousServicesIcon
                  style={{ color: "orangered", fontSize: "20px" }}
                />
                <h6 style={{ color: "orangered" }}>ABOUT</h6>
              </ListItemIcon>
            </a>
            <a href={"/#contact"}>
              <ListItemIcon sx={{ marginRight: "10px", cursor: "pointer" }}>
                <CallIcon style={{ color: "orangered", fontSize: "20px" }} />
                <h6 style={{ color: "orangered" }}> CONTACT</h6>
              </ListItemIcon>
            </a>
          </Stack>
          {/* <LftDrawer/> */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon style={{ color: "orangered" }} />
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
                display: { xs: "block", md: "flex" },
              }}
            >
              {/* {pages.map((page) => (
                <MenuItem
                  key={page}
                  sx={appBarStyle1}
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}

              {pages.map((page) =>
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <a href={page.link}> {page.name}</a>
                </MenuItem>
              )}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              color: "orangered !important",
              textDecoration: "none",
            }}
          >
         Noida PG
          </Typography>

          <Stack flexDirection={"row"} gap={3} alignItems={"center"}>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
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
                  display: { xs: "block", md: "flex" },
                }}
              >
                {/* {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))} */}
                {pages.map((page) =>
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <a href={page.link} className="text-black"> {page.name}</a>
                  </MenuItem>
                )}
              </Menu>
            </Box>
            <Link to={"/booking"}>
              <h6
                style={{
                  borderRadius: "5px",
                  padding: "8px",
                  background: "orangered",
                }}
              >
                Book Now
              </h6>
            </Link>
            <Box sx={{ flexGrow: 0 }}>

              <Link to={"/login"}>
                <h6
                  style={{
                    borderRadius: "5px",
                    padding: "8px",
                    background: "orangered",
                  }}
                >
                  Sign In
                </h6>
              </Link>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </AppBar>
  );
}
export default Header;