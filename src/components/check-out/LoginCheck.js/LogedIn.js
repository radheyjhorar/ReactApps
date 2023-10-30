import React from "react";
import { Grid, TextField, Typography, Link, Box, Button } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import NotificationsIcon from "@mui/icons-material/Notifications";
import StarIcon from "@mui/icons-material/Star";

const LogedIn = ({ AccordionTitle }) => {
  AccordionTitle("Login");
  return (
    <div>
      <Grid container pl={6} pt={3} pr={2} pb={1}>
        <Grid item sm={5}>
          <Box display={"flex"} mb={2}>
            <Typography mr={2} variant="body" component="div" color={"#7a7a7a"}>
              Name
            </Typography>
            <Typography variant="body" component="div">
              Radhey Jhorar
            </Typography>
          </Box>
          <Box display={"flex"}>
            <Typography mr={2} variant="body" component="div" color={"#7a7a7a"}>
              Phone
            </Typography>
            <Typography variant="body" component="div">
              +919518852747
            </Typography>
          </Box>
          <Box mt={2}>
            <Typography variant="body1" fontWeight={"bold"} component={"span"}>
              <Link underline="none">Logout & Sign in to another account</Link>
            </Typography>
          </Box>
          <Box>
            <Button
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                py: 1.4,
                fontSize: "1rem",
              }}
            >
              Continue Checkout
            </Button>
          </Box>
        </Grid>
        <Grid item sm={5} ml={"auto"}>
          <Box>
            <Typography
              variant="subtitle1"
              component={"span"}
              color={"#7a7a7a"}
            >
              Advantages of our secure login
            </Typography>
          </Box>
          <Box display={"flex"} alignItems={"center"} my={1}>
            <LocalShippingIcon sx={{ mr: 1 }} color="primary" />
            <Typography variant="body" component={"span"}>
              Easily Track Orders, Hassle free Returns
            </Typography>
          </Box>
          <Box display={"flex"} alignItems={"center"} my={2}>
            <NotificationsIcon sx={{ mr: 1 }} color="primary" />
            <Typography variant="body" component={"span"}>
              Get Relevant Alerts and Recommendation
            </Typography>
          </Box>
          <Box display={"flex"} alignItems={"center"} my={1}>
            <StarIcon sx={{ mr: 1 }} color="primary" />
            <Typography variant="body" component={"span"}>
              Wishlist, Reviews, Ratings and more.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Typography
        mt={2}
        ml={6}
        variant="subtitle1"
        fontWeight={'bold'}
        component="div"
        color={"#8c8c8c"}
      >
        Please note that upon clicking "Logout" you will lose all items in cart and will be redirected to 
        home page.
      </Typography>
    </div>
  );
};

export default LogedIn;
