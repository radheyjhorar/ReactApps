import { Box, FormLabel, Typography } from "@mui/material";
import * as React from "react";
import Radio from "@mui/material/Radio";

const UPI = () => {
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <Box ml={4}>
        <Box>
          <Typography variant="h6" component="span">
            Choose an option
          </Typography>
        </Box>
        <Box>
          <Box display={"flex"}>
            <Radio
              checked={selectedValue === "PhonePe"}
              onChange={handleChange}
              value="PhonePe"
              name="radio-buttons"
              inputProps={{ "aria-label": "PhonePe" }}
            />
            <Typography display={"flex"} alignItems={"center"}>
              PhonePe
            </Typography>
          </Box>
          <Box display={"flex"}>
            <Radio
              checked={selectedValue === "YourUpiId"}
              onChange={handleChange}
              value="YourUpiId"
              name="radio-buttons"
              inputProps={{ "aria-label": "YourUpiId" }}
            />
            <Typography display={"flex"} alignItems={"center"}>
              Your UPI Id
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default UPI;
