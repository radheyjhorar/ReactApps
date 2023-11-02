import { Box, Button, Grid, Radio, TextField, Typography } from "@mui/material";
import React from "react";
import MenuItem from "@mui/material/MenuItem";

const banks = [
  {
    id: "1",
    name: "HDFC Bank",
  },
  {
    id: "2",
    name: "ICICI Bank",
  },
  {
    id: "3",
    name: "State Bank of India",
  },
  {
    id: "4",
    name: "Axis Bank",
  },
  {
    id: "5",
    name: "Kotak Mahindra Bank",
  },
];

const NetBanking = () => {
  return (
    <div>
      <Box ml={4}>
        <Box>
          <Typography variant="h6">Popular Bank</Typography>
          <Grid container display={"flex"}>
            {banks.map((option) => (
              <Grid item sm={4} display={"flex"} alignItems={"center"}>
                <Radio key={option.id} value={option.name} sx={{ pl: 0 }} />
                <Typography>{option.name}</Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box my={2}>
          <Typography variant="h6">Other Banks</Typography>
          <Box width={"50%"}>
            <TextField
              variant="filled"
              fullWidth
              select
              label="---Select Bank---"
              defaultValue="---Select Bank---"
            >
              {banks.map((option) => (
                <MenuItem key={option.id} value={option.name}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>
            <Button
              variant="contained"
              size="large"
              sx={{ my: 2, fontSize: "1.3rem", px: 8 }}
            >
              Pay $399
            </Button>
          </Box>
          <Typography fontWeight={'500'} color={'#888'} component={'span'}>
              This instrument has low success, use UPI or cards for better experience
            </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default NetBanking;
