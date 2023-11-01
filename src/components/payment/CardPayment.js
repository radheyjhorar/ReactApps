import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from '@mui/material/InputAdornment';
import HelpIcon from '@mui/icons-material/Help';

const months = [
  {
    value: "1",
    label: "1",
  },
  {
    value: "2",
    label: "2",
  },
  {
    value: "3",
    label: "3",
  },
  {
    value: "4",
    label: "4",
  },
  {
    value: "5",
    label: "5",
  },
  {
    value: "6",
    label: "6",
  },
  {
    value: "7",
    label: "7",
  },
  {
    value: "8",
    label: "8",
  },
  {
    value: "9",
    label: "9",
  },
  {
    value: "10",
    label: "10",
  },
  {
    value: "11",
    label: "11",
  },
  {
    value: "12",
    label: "12",
  },
];

const years = [
  {
    value: "1",
    label: "2000",
  },
  {
    value: "2",
    label: "2001",
  },
  {
    value: "3",
    label: "2002",
  },
  {
    value: "4",
    label: "2003",
  },
  {
    value: "5",
    label: "2004",
  },
  {
    value: "6",
    label: "2005",
  },
  {
    value: "7",
    label: "2006",
  },
  {
    value: "8",
    label: "2007",
  },
  {
    value: "9",
    label: "2008",
  },
  {
    value: "10",
    label: "2009",
  },
  {
    value: "11",
    label: "2010",
  },
];

const CardPayment = () => {
  return (
    <div>
      <Box width={"60%"} ml={4}>
        <Box>
          <TextField variant="outlined" label="Enter Card Number" fullWidth />
        </Box>
        <Box display={"flex"} my={2}>
          <Box
            sx={{
              width: "60%",
              // border: "1px solid #ccc",
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box width={"42%"} mr={"auto"}>
              <TextField
                disabled
                label="Valid thru"
                fullWidth
                sx={{ alignItems: "center" }}
              />
            </Box>

            <Box display={"flex"} width={"55%"} ml={"auto"}>
              <TextField select label="MM" sx={{ width: "40%", mr: "auto" }}>
                {months.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField select label="YY" sx={{ width: "55%" }}>
                {years.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
          </Box>

          <Box sx={{ width: "38%" }} ml={"auto"}>
            <TextField
              variant="outlined"
              label="CVV"
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <HelpIcon sx={{fontSize: '2rem', color: '#aaa'}}/>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>
        <Box>
          <Button variant="contained" sx={{py: 1.2, px: 8, fontSize: '1.2rem'}}>Pay $399</Button>
        </Box>
        <Box py={3}>
          <Typography fontSize={'1.2rem'} component={'span'} color={'#999'}>Add and secure your card as per RBI guidlines</Typography>
        </Box>
      </Box>
    </div>
  );
};

export default CardPayment;
