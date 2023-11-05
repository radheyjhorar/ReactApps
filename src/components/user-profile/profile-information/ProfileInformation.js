import {
  Box,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const ProfileInformation = () => {
  return (
    <div>
      <Box>
        <Box>
          <Box display={"flex"} alignItems={"center"}>
            <Typography variant="h6" component={"span"}>
              Personal Information
            </Typography>

            <Button>Edit</Button>
          </Box>

          <Box display={"flex"} alignItems={"center"} py={2}>
            <Box mr={2}>
              <TextField label="First Name" disabled />
            </Box>
            <Box>
              <TextField label="Last Name" disabled />
            </Box>
          </Box>

          <Box py={2}>
            <Typography>Your Gender</Typography>
            <Box py={1}>
              <RadioGroup row>
                <FormControlLabel
                  value={"Male"}
                  control={<Radio />}
                  label="Male"
                  disabled
                />
                <FormControlLabel
                  value={"Female"}
                  control={<Radio />}
                  label="Female"
                  disabled
                />
              </RadioGroup>
            </Box>
          </Box>
        </Box>

        <Box py={2}>
          <Box display={"flex"} alignItems={"center"}>
            <Typography variant="h6" component={"span"}>
              Email Address
            </Typography>

            <Button>Edit</Button>
          </Box>
          <Box py={2}>
            <TextField label="useEmail@gmail.com" disabled/>
          </Box>
        </Box>

        <Box py={4}>
          <Box display={"flex"} alignItems={"center"}>
            <Typography variant="h6" component={"span"}>
              Mobile Number
            </Typography>

            <Button>Edit</Button>
          </Box>
          <Box py={2}>
            <TextField label="+919988776655" disabled/>
          </Box>
        </Box>

        <Box py={4}>
          FAQs page
        </Box>

        <Box mt={8}>
          <Button>Deactivate Account</Button>
        </Box>

      </Box>
    </div>
  );
};

export default ProfileInformation;
