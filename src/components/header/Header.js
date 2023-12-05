import React, { useState, useRef, useEffect } from "react";
import './header.css';
import {
  AppBar,
  Box,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material";
import Navbar from "./Navbar/Navbar";
import SideDrawer from "../drawer/SideDrawer";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import SignInSignUp from "../sign-in-sign-up/SignInSignUp";
import SearchWrapper from "./SearchWrapper";
import CartButton from "./CartButton";

const Header = () => {

  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatchMedium = useMediaQuery(theme.breakpoints.down("md"));
  const PAGES = ["Products", "Services", "ContactUS", "About Us"];


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
                  <SideDrawer pages = {PAGES}/>
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
                    <SearchWrapper />
                </Box>
                <Box ml={4} mr={1}>
                  <CartButton />
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
