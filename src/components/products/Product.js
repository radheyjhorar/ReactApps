import React from "react";
import "./Product.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { Box, Typography, Button } from "@mui/material";

const Products = ({ title, image, price, description }) => {
  return (
    <div>
    <Box>
        <Box p={1}>
          <Box width={"216px"}>
            <Box mx={1}>
              <Box className="product-box">
                <Box
                  height={"180px"}
                  display={"flex"}
                  justifyContent={"center"}
                >
                  <img
                    src={image}
                    alt={description}
                    style={{
                      objectFit: "contain",
                      scale: "0.9",
                      overflow: "hidden",
                    }}
                    width={"100%"}
                  />
                </Box>
                <Box p={1}>
                  <Typography
                    variant="body2"
                    fontWeight={"bold"}
                    color={"#00000090"}
                    whiteSpace={"nowrap"}
                    overflow={"hidden"}
                  >
                    {title}
                  </Typography>
                  <Box display={"flex"} alignItems={"center"}>
                    <CurrencyRupeeIcon
                      fontSize="body2"
                      sx={{ color: "#00000090" }}
                    />
                    <Typography
                      variant="body2"
                      fontWeight={"bold"}
                      color={"#00000090"}
                    >
                      {price}
                    </Typography>
                  </Box>
                </Box>
                <Button
                  sx={{ borderRadius: "0px 0px 5px 5px" }}
                  fullWidth
                  variant="contained"
                >
                  Add to cart+
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
export default Products;