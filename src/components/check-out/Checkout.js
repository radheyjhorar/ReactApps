import React from "react";
import { Box, Button, Grid, Link, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import GppGoodIcon from "@mui/icons-material/GppGood";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import NotificationsIcon from '@mui/icons-material/Notifications';
import StarIcon from '@mui/icons-material/Star';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const Checkout = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Grid container px={3}>
        <Grid item sm={8}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
              expandIcon={null}
              sx={{
                backgroundColor: "#1976d2",
                color: "#fff"
              }}
            >
              <Box sx={{
                backgroundColor: "#fff",
                // backgroundColor: "#d8d8d8b5",
                width: '20px',
                height: '20px',
                textAlign: 'center',
                borderRadius: '3px',
                mr: 2,
              }} 
              color='#1976d2'>
                1
              </Box>
              <Typography textTransform="uppercase">
                Login or Signup
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
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
                    and 
                    <Link underline="none">Privacy Policy. </Link>
                  </Typography>
                  <Box>
                    <Button
                      fullWidth 
                      variant="contained" 
                      sx={{
                        mt: 3,
                        py: 2,
                        fontSize: '1rem'
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
                    component={'span'}
                    color={"#7a7a7a"}
                  >
                    Advantages of our secure login
                  </Typography>
                  </Box>
                  <Box display={'flex'} alignItems={'center'} my={1}>
                    <LocalShippingIcon sx={{mr: 1}} color="primary"/>
                    <Typography
                      variant="body"
                      component={'span'}
                    >
                      Easily Track Orders, Hassle free Returns
                    </Typography>
                  </Box>
                  <Box display={'flex'} alignItems={'center'} my={2}>
                    <NotificationsIcon sx={{mr: 1}} color="primary"/>
                    <Typography
                      variant="body"
                      component={'span'}
                    >
                      Get Relevant Alerts and Recommendation
                    </Typography>
                  </Box>
                  <Box display={'flex'} alignItems={'center'} my={1}>
                    <StarIcon sx={{mr: 1}} color="primary"/>
                    <Typography
                      variant="body"
                      component={'span'}
                    >
                      Wishlist, Reviews, Ratings and more.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <br />
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
              expandIcon={null}
              // sx={{
              //   backgroundColor: "#1976d2",
              //   color: "#fff"
              // }}
            >
              <Box sx={{
                // backgroundColor: "#fff",
                backgroundColor: "#d8d8d8b5",
                width: '20px',
                height: '20px',
                textAlign: 'center',
                borderRadius: '3px',
                mr: 2,
              }} 
              color='#1976d2'>
                2
              </Box>
              <Typography textTransform="uppercase">
                Delivery Address
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse
              </Typography>
            </AccordionDetails>
          </Accordion>
          <br />
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
              expandIcon={null}
              // sx={{
              //   backgroundColor: "#1976d2",
              //   color: "#fff"
              // }}
            >
              <Box sx={{
                // backgroundColor: "#fff",
                backgroundColor: "#d8d8d8b5",
                width: '20px',
                height: '20px',
                textAlign: 'center',
                borderRadius: '3px',
                mr: 2,
              }} 
              color='#1976d2'>
                3
              </Box>
              <Typography textTransform="uppercase">Order Summary</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse
              </Typography>
            </AccordionDetails>
          </Accordion>
          <br />
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              aria-controls="panel4d-content"
              id="panel4d-header"
              expandIcon={null}
              // sx={{
              //   backgroundColor: "#1976d2",
              //   color: "#fff"
              // }}
            >
              <Box sx={{
                // backgroundColor: "#fff",
                backgroundColor: "#d8d8d8b5",
                width: '20px',
                height: '20px',
                textAlign: 'center',
                borderRadius: '3px',
                mr: 2,
              }} 
              color='#1976d2'>
                4
              </Box>
              <Typography textTransform="uppercase">Payment Options</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item sm={4} py={2} pl={5}>
          <Box display={"flex"} alignItems={"center"}>
            <GppGoodIcon sx={{ fontSize: "3rem", color: "grey" }} />
            <Typography
              variant="body1"
              component="span"
              display={"block"}
              ml={3}
              fontWeight={500}
              lineHeight={"normal"}
            >
              Safe and Secure Payments. Easy returns. 100% Aunthentic products.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Checkout;

/* <Grid container mt={8} justifyContent='center'>
        <Grid width="40vw">
          <Box>
            <h1>Page 1</h1>
          </Box>
        </Grid>
        <Grid width="40vw">
          <Box textAlign="center">
            <Button
              variant="contained"
              sx={{ color: "white", width: "70%", alignItems: "center" }}
            >
              <AppleIcon />
              <Typography ml={1} variant="subtitle1" component="p">
                {" "}
                Pay{" "}
              </Typography>
            </Button>
          </Box>

          <Box sx={{ display: "flex" }}>
            <Divider sx={{ my: 2, width: "70%", marginInline: "auto" }}>
              Or pay with card
            </Divider>
          </Box>

          <Box>
            <Box width="70%" marginInline="auto">
              <Typography variant="h6" component="p" mb={1}>
                Shipping information
              </Typography>

              <TextField
                fullWidth
                id="demo-helper-text-aligned"
                label="Email"
                size="small"
              />
            </Box>

            <Box width="70%" marginInline="auto" my={2}>
              <Typography
                variant="subtitle1"
                component="p"
                sx={{ color: "#7a7a7a" }}
              >
                Shipping address
              </Typography>

              <TextField
                sx={{ my: 1 }}
                fullWidth
                id="demo-helper-text-aligned"
                label="Name"
                size="small"
              />
              <TextField
                fullWidth
                id="demo-helper-text-aligned"
                label="Country"
                size="small"
              />
              <TextField
                sx={{ my: 1 }}
                fullWidth
                id="demo-helper-text-aligned"
                label="Address"
                size="small"
              />
              <Typography
                variant="subtitle"
                component="p"
                sx={{ color: "#7a7a7a" }}
              >
                Enter address manually
              </Typography>
            </Box>

            <Box width="70%" marginInline="auto" my={2}>
              <Typography variant="h6" component="p" mb={1}>
                Payment Details
              </Typography>

              <Typography
                variant="subtitle"
                component="p"
                sx={{ color: "#7a7a7a" }}
              >
                Card Information
              </Typography>

              <TextField
                sx={{ my: 1 }}
                fullWidth
                id="demo-helper-text-aligned"
                label="Card Number"
                size="small"
              />
              <Box width="100%">
                <TextField
                  sx={{ mb: 1, width: "50%" }}
                  id="demo-helper-text-aligned"
                  label="MM / YY"
                  size="small"
                />
                <TextField
                  sx={{ mb: 1, width: "50%" }}
                  id="demo-helper-text-aligned"
                  label="CVC"
                  size="small"
                />
                <FormGroup>
                  <FormControlLabel
                    required
                    control={<Checkbox />}
                    label="Billing address same as shipping"
                  />
                </FormGroup>
              </Box>
            </Box>
          </Box>
          <Box textAlign="center">
            <Button
              variant="contained"
              sx={{ color: "white", width: "70%"}}
            >
              <Typography ml={1} variant="subtitle1" component="p">
                Pay $134.00
              </Typography>
            </Button>
          </Box>
        </Grid>
      </Grid> */
