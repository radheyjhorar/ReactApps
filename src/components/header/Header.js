import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material";
import Badge from "@mui/material/Badge";
import { styled, alpha } from "@mui/material/styles";
import FitbitIcon from "@mui/icons-material/Fitbit";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Avatar from "@mui/material/Avatar";
import Navbar from "./Navbar/Navbar";
import SideDrawer from "../drawer/SideDrawer";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import Modal from '@mui/material/Modal';
import SignIn from "../sign-in/SignIn";

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

  const [value, setValue] = useState();

  const theme = useTheme();

  const isMatchMedium = useMediaQuery(theme.breakpoints.down("md"));

  const PAGES = ["Products", "Services", "ContactUS", "About Us"];

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={{ display: "block", clear: "both" }}>
      <AppBar>
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
              <Box sx={{width: '10%'}} >
              <Box sx={{width: 'fit-content', float: 'right'}}>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search", width: '0ch'}}      
                  />
                </Search>
              </Box>
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
              <Box mx={1}>
                <Button
                  id="signInSignUpButton"
                  sx={{ marginX: 1 }}
                  color="secondary"
                  variant="contained"
                  onClick={handleOpen}
                >
                  Login/Signup
                </Button>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <SignIn/>
        </Box>
      </Modal>

    </div>
  );
};

export default Header;
