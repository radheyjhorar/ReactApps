import React, { useState, useRef, useEffect } from "react";
import './header.css';
import {
  AppBar,
  Badge,
  Box,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Navbar from "./Navbar/Navbar";
import SideDrawer from "../drawer/SideDrawer";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import SignInSignUp from "../sign-in-sign-up/SignInSignUp";
import cartIcon from '../../assets/images/cart.svg';
import { useSelector } from 'react-redux';

const Header = (props) => {

  const cart = useSelector((state) => state.cart.cart);
  console.log("Header", cart);

  const getTotalQuantity = () => {
    let total = 0
    cart.forEach(item => {
      total += item.quantity
    })
    return total
  }

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

  const [value, setValue] = useState();

  const theme = useTheme();

  const isMatchMedium = useMediaQuery(theme.breakpoints.down("md"));

  const PAGES = ["Products", "Services", "ContactUS", "About Us"];

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "auto",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };


  const [height, setHeight] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    setHeight(ref.current.clientHeight);
  });

  return (
    <header>
      <div style={{ display: "block", clear: "both" }}>
        <AppBar ref={ref}>
          <Toolbar>
            {isMatchMedium ? (
              <>
                <Box display={"flex"} alignItems="center">
                  <ShoppingCartCheckoutIcon fontSize="large" />
                  <Typography variant="h6" component="h1" ml={1}>
                    ShopiFy
                  </Typography>
                </Box>
                <Box marginLeft={"auto"}>
                  <SideDrawer />
                </Box>
              </>
            ) : (
              <>
                <Box display={"flex"} alignItems="center">
                  <ShoppingCartCheckoutIcon fontSize="large" />
                  <Typography variant="h6" component="h1" ml={1}>
                    ShopiFy
                  </Typography>
                </Box>
                <Box sx={{ marginX: "auto" }}>
                  <Tabs
                    value={value}
                    onChange={(e, value) => setValue(value)}
                    textColor="#fff"
                    TabIndicatorProps={{ style: { background: "white" } }}
                  >
                    {PAGES.map((page, index) => (
                      <Tab label={page} key={index} />
                    ))}
                  </Tabs>
                </Box>
                <Box sx={{ width: "10%" }}>
                  <Box sx={{ width: "fit-content", float: "right" }}>
                    <Search>
                      <SearchIconWrapper>
                        <SearchIcon />
                      </SearchIconWrapper>
                      <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ "aria-label": "search", width: "0ch" }}
                      />
                    </Search>
                  </Box>
                </Box>
                <Box ml={4} mr={1}>
                  <Badge badgeContent={getTotalQuantity() || 0} color="secondary" sx={{ cursor: 'pointer' }}>
                    <img src={cartIcon} alt="cart.svg" />
                  </Badge>
                </Box>

                <Box mx={1}>
                  <SignInSignUp />
                </Box>
              </>
            )}
          </Toolbar>
        </AppBar>
        <Navbar headerHeight={height} />
      </div>
    </header>
  );
};

export default Header;
