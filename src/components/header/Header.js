import React from "react";
import { AppBar, Box, Button, Tab, Tabs, Toolbar } from "@mui/material";
import Badge from "@mui/material/Badge";
import { styled, alpha } from "@mui/material/styles";
import FitbitIcon from "@mui/icons-material/Fitbit";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Avatar from "@mui/material/Avatar";
import Navbar from "./Navbar/Navbar";

const Header = () => {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -2,
      top: 1,
      padding: "0 2px",
      backgroundColor: "#F84F31",
      color: "#fff",
    },
  }));

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  return (
    <div style={{display: 'block', clear:'both', }}>
      <AppBar>
        <Toolbar>
          <Box>
            <FitbitIcon fontSize="large" sx={{ marginLeft: 4 }} />
          </Box>
          <Tabs sx={{ marginX: "auto" }} textColor="#fff">
            <Tab label="Products" />
            <Tab label="Services" />
            <Tab label="ContactUS" />
            <Tab label="About Us" />
          </Tabs>
          <Box>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>

          {/* If user SignIn */}
          {/* <Box sx={{ marginX: 3 }}>
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={4} sx={{ color: "#fff" }}>
                <ShoppingCartIcon fontSize="large"/>
              </StyledBadge>
            </IconButton>
          </Box>
          <Box sx={{ marginRight: 3 }}>
            <Avatar src="/broken-image.jpg" />
          </Box> */}

          {/* If user signUp */}
          <Box mx={2}>
            <Button sx={{marginX: 2}} color="secondary" variant="contained">Login</Button>
            <Button variant="contained" color="secondary">Signup</Button>
          </Box>
        </Toolbar>
        <Navbar />
      </AppBar>
    </div>
  );
};

export default Header;
