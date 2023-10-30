import {
  Box,
  Button,
  FormControlLabel,
  Radio,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";

const city = [
  {
    value: "Jaipur",
    label: "Jaipur",
  },
  {
    value: "Chandigarh",
    label: "Chandigarh",
  },
  {
    value: "Sri Ganganagar",
    label: "Sri Ganganagar",
  },
  {
    value: "Dehli",
    label: "Dehli",
  },
];

const state = [
  {
    value: "Rajasthan",
    label: "Rajasthan",
  },
  {
    value: "Haryana",
    label: "Haryana",
  },
  {
    value: "Punjab",
    label: "Punjab",
  },
];

const BillingAddress = () => {
  const [billingInfo, setBillingInfo] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    locationType: "home",
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBillingInfo({
      ...billingInfo,
      [name]: value,
    });

  };

  return (
    <div>
      <Box pl={6}>
        <h2>Billing Address</h2>
        <form>
          <Box display={"flex"} width={"570px"} py={2}>
            <Box width={"48%"}>
              <TextField
                type="text"
                label="First Name"
                name="firstName"
                value={billingInfo.firstName}
                onChange={handleChange}
                fullWidth
              />
            </Box>
            <Box ml={"auto"} width={"48%"}>
              <TextField
                type="text"
                label="Last Name"
                name="lastName"
                value={billingInfo.lastName}
                onChange={handleChange}
                fullWidth
              />
            </Box>
          </Box>
          <Box width={"570px"}>
            <Box>
              <TextField
                type="text"
                label="Address"
                fullWidth
                name="address"
                value={billingInfo.address}
                onChange={handleChange}
              />
            </Box>
          </Box>
          <Box display={"flex"} width={"570px"} py={2}>
            <Box width={"48%"}>
              <TextField
                type="text"
                name="city"
                value={billingInfo.city}
                onChange={handleChange}
                select
                label="City"
                defaultValue="City"
                fullWidth
              >
                {city.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
            <Box ml={"auto"} width={"48%"}>
              <TextField
                type="text"
                name="state"
                value={billingInfo.state}
                onChange={handleChange}
                select
                label="State"
                defaultValue="State"
                fullWidth
              >
                {state.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
          </Box>
          <Box display={"flex"} width={"570px"} pb={2}>
            <Box width={"48%"}>
              <TextField
                type="text"
                label="Postal Code"
                name="postalCode"
                value={billingInfo.postalCode}
                onChange={handleChange}
                fullWidth
              />
            </Box>
            <Box ml={"auto"} width={"48%"}>
              <TextField
                type="text"
                label="Country"
                name="country"
                value={billingInfo.country}
                onChange={handleChange}
                fullWidth
              />
            </Box>
          </Box>
          <Box ml={1}>
            <Box> 
              <Typography variant="subtitle2" color={"#7c7c7c"}>
                Address Type
              </Typography>
            </Box>
            <Box display={"flex"}>
              <Box>
                <FormControlLabel
                  control={
                    <Radio 
                    checked={billingInfo.locationType === "home"}
                      value="home"
                      onChange={handleChange}
                      name="locationType"
                    />
                  }
                  label="Home (All day delivery)"
                />
              </Box>
              <Box>
                <FormControlLabel
                  
                  control={
                    <Radio 
                    checked={billingInfo.locationType === "work"}
                      value="work"
                      onChange={handleChange}
                      name="locationType"
                    />
                  }
                  label="Work (Delivery between 10 AM -5 PM)"
                />
              </Box>
            </Box>
            <Box display={"flex"} mt={4} mb={2}>
              <Box>
                <Button
                  variant="contained"
                  sx={{
                    py: 1.5,
                    px: 6,
                    fontSize: "1rem",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  Save and Delivery here
                </Button>
              </Box>
              <Box ml={4}>
                <Button
                  sx={{
                    py: 1.5,
                    px: 6,
                    fontSize: "1rem",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  Cancel
                </Button>
              </Box>
            </Box>
          </Box>
        </form>
      </Box>
    </div>
  );
};

export default BillingAddress;
