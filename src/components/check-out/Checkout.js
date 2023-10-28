import React from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";

const Checkout = () => {
  return (
    <div style={{ marginBottom: "20rem" }}>
      <Grid container mt={8} justifyContent='center'>
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
      </Grid>
    </div>
  );
};

export default Checkout;
