import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import GppGoodIcon from "@mui/icons-material/GppGood";

import LoginFirst from "./LoginCheck.js/LoginFirst";
import LogedIn from "./LoginCheck.js/LogedIn";
import PriceDetails from "./PriceDetails/PriceDetails";
import DeliveryAddress from "./DeliveryAddress/DeliveryAddress";
import OrderSummary from "./OrderSummary/OrderSummary";
import ConfirmationEmail from "./OrderSummary/ConfirmationEmail";
import PaymentOptions from "./PaymentOptions/PaymentOptions";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AddGiftCard from "./AddGiftCard/AddGiftCard";

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
  <MuiAccordionSummary {...props} sx={{ py: 1 }} />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
  borderBottom: "1px solid rgba(0, 0, 0, .125)",
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderBottom: "1px solid rgba(0, 0, 0, .125)",
}));

const Checkout = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const [AccoTitle, setAccoTitle] = useState("");

  function AccordionTitle(msg) {
    setAccoTitle(msg);
  }

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
                color: "#fff",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#fff",
                  // backgroundColor: "#d8d8d8b5",
                  width: "20px",
                  height: "20px",
                  textAlign: "center",
                  borderRadius: "3px",
                  mr: 2,
                }}
                color="#1976d2"
              >
                1
              </Box>
              <Typography textTransform="uppercase">{AccoTitle}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {/* <LoginFirst AccordionTitle={AccordionTitle}/> */}
              <LogedIn AccordionTitle={AccordionTitle} />
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
              <Box
                sx={{
                  // backgroundColor: "#fff",
                  backgroundColor: "#d8d8d8b5",
                  width: "20px",
                  height: "20px",
                  textAlign: "center",
                  borderRadius: "3px",
                  mr: 2,
                }}
                color="#1976d2"
              >
                2
              </Box>
              <Typography textTransform="uppercase">
                Delivery Address
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ m: 0, p: 0 }}>
              <Typography>
                <DeliveryAddress />
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
              <Box
                sx={{
                  // backgroundColor: "#fff",
                  backgroundColor: "#d8d8d8b5",
                  width: "20px",
                  height: "20px",
                  textAlign: "center",
                  borderRadius: "3px",
                  mr: 2,
                }}
                color="#1976d2"
              >
                3
              </Box>
              <Typography textTransform="uppercase">Order Summary</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <OrderSummary />
            </AccordionDetails>
            <AccordionDetails sx={{ mt: 2, borderTop: "1px solid #ddd" }}>
              <ConfirmationEmail />
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
              <Box
                sx={{
                  // backgroundColor: "#fff",
                  backgroundColor: "#d8d8d8b5",
                  width: "20px",
                  height: "20px",
                  textAlign: "center",
                  borderRadius: "3px",
                  mr: 2,
                }}
                color="#1976d2"
              >
                4
              </Box>
              <Typography textTransform="uppercase">Payment Options</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <PaymentOptions />
            </AccordionDetails>
          </Accordion>
          <br/>
          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              aria-controls="panel5d-content"
              id="panel5d-header"
              expandIcon={null}
              // sx={{
              //   backgroundColor: "#1976d2",
              //   color: "#fff"
              // }}
            >
              <Box
                sx={{
                  // backgroundColor: "#fff",
                  backgroundColor: "#d8d8d8b5",
                  width: "20px",
                  height: "20px",
                  textAlign: "center",
                  borderRadius: "3px",
                  mr: 2,
                }}
                color="#1976d2"
              >
                {expanded ? <RemoveIcon fontSize="small" /> : <AddIcon fontSize="small" /> }
              </Box>
              <Typography textTransform="uppercase">Add Gift Card</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <AddGiftCard />
            </AccordionDetails>
          </Accordion>

        </Grid>
        <Grid item sm={4} pl={5}>
          <Box>
            <PriceDetails />

            <Box display={"flex"} alignItems={"center"} py={2}>
              <GppGoodIcon sx={{ fontSize: "3rem", color: "grey" }} />
              <Typography
                variant="body1"
                component="span"
                display={"block"}
                ml={3}
                fontWeight={500}
                lineHeight={"normal"}
              >
                Safe and Secure Payments. Easy returns. 100% Aunthentic
                products.
              </Typography>
            </Box>
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
