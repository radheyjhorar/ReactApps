import React from "react";
import { Box, Typography } from "@mui/material";

const DeliveryTime = () => {
  return (
    <div>
        <Box
          display={"flex"}
          sx={{ float: "inline-end" }}
          alignItems={"center"}
        >
          <Typography variant="subtitle1" component={"span"}>
            Delivery in 2 days
          </Typography>
          <Typography variant="subtitle1" component={"span"} mx={0.5}>
            ,
          </Typography>
          <Typography variant="subtitle1" component={"span"}>
            Thu | 23 Nov
          </Typography>
        </Box>
    </div>
  );
};

export default DeliveryTime;
