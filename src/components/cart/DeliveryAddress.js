import React from "react";
import { Box, Typography, Button } from "@mui/material";

const DeliverAddress = () => {
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          borderBottom: "1px solid #ccc",
          backgroundColor: "#fff",
          borderRadius: 1,
          py: 1.5,
          px: 2,
          display: "flex",
        }}
      >
        <Box>
          <Box display={"flex"} alignItems={"center"}>
            <Typography mr={1}>Deliver to:</Typography>
            <Typography fontWeight={"bold"}>Radhey Jhorar, 125102</Typography>
            <Box
              mx={1}
              px={1.2}
              py={0.8}
              borderRadius={1}
              sx={{
                backgroundColor: "#ddd",
              }}
              textTransform={"uppercase"}
              fontSize={"0.8rem"}
              color={"#555"}
            >
              Home
            </Box>
          </Box>

          <Box mt={0.5} display={"inline-block"}>
            <Typography color={"#777"}>
              Main bus stand karamsana, karamsana, Ellenabad
            </Typography>
          </Box>
        </Box>

        <Box ml={"auto"} my={"auto"}>
          <Button variant="outlined" size="large">
            Change
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default DeliverAddress;
