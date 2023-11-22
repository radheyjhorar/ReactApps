import React from "react";
import data from "./products.json";
import { Box, Button, Typography } from "@mui/material";
import "./Products.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ProductCategories from "./productCategories/ProductCategories";

const Products = () => {
  return (
    <div>
      <Box sx={{ backgroundColor: "#fff" }} m={2}>
        <Box>
          <Typography p={2} variant="h5" fontWeight={"bold"} component={"h4"}>
            Product Category Name
          </Typography>
        </Box>
        <Box display={"flex"} px={2} pb={1} overflow={'hidden'}>
          {data.map((e) => {
            return <ProductList key={e.id} {...e} />;
          })}
        </Box>
      </Box>
    </div>
  );
};

export default Products;

export const ProductList = ({ title, image, price, description }) => {
  return (
    <Box>
      <Box p={1}>
        <Box width={"216px"}>
          <Box mx={1}>
            <Box className="product-box">
              <Box height={"180px"} display={"flex"} justifyContent={"center"}>
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
                  whiteSpace={'nowrap'}
                  overflow={'hidden'}
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
  );
};
