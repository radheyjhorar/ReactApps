import React from "react";
import data from "./products.json";
import { Box, Button, Typography } from "@mui/material";
import "./Products.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const filterData = (dataName) => {
  return data.filter((x) => x.category === dataName);
};
const jeweleries = filterData("jewelery");
const menClothing = filterData("men's clothing");
const womenClothing = filterData("women's clothing");
const electronics = filterData("electronics");

const Products = () => {
  return (
    <div>
      {byCategory("Jewelery", jeweleries)}
      {byCategory("Men's Clothing", menClothing)}
      {byCategory("Women's Clothing", womenClothing)}
      {byCategory("Electronics", electronics)}
    </div>
  );
};
export default Products;


const byCategory = (proTitle, proCategory) => {
  return (
    <div>
      <Box sx={{ backgroundColor: "#fff" }} m={2} mb={0}>
        <Box>
          <Typography p={2} variant="h4" fontWeight={"bold"} component={"div"}>
            {proTitle}
          </Typography>
        </Box>
        <Box display={"flex"} px={2} pb={1} overflow={"hidden"}>
          {proCategory.map((e) => {
            return <ProductList key={e.id} {...e} />
          })}
        </Box>
      </Box>
    </div>
  );
};


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
  );
};
