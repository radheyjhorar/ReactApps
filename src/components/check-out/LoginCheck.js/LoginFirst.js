import React from "react";
import { Grid, TextField, Typography, Link, Box, Button } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import NotificationsIcon from "@mui/icons-material/Notifications";
import StarIcon from "@mui/icons-material/Star";

const LoginFirst = ({AccordionTitle}) => {
  AccordionTitle("Login or Signup");
  return (
    <div>
      <Grid container pl={6} pt={3} pr={2} pb={1}>
        <Grid item sm={5}>
          <TextField
            fullWidth
            type="email"
            variant="standard"
            label="Enter Email/Mobile number"
            sx={{ mb: 3 }}
          />
          <Typography variant="body" component="div" color={"#7a7a7a"}>
            By continuing, you agree to our{" "}
            <Link underline="none">Terms of use </Link>
            and <Link underline="none">Privacy Policy.</Link>
          </Typography>
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
              Continue
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
    </div>
  );
};

export default LoginFirst;
