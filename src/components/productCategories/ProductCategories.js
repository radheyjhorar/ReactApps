import React from 'react';
import './ProductCategories.css';
import { Box, Typography } from '@mui/material';
import data from '../products/products.json';
import Product from '../products/Product';

const filterData = (dataName) => {
  return data.filter((x) => x.category === dataName);
};

const jeweleries = filterData("jewelery");
const menClothing = filterData("men's clothing");
const womenClothing = filterData("women's clothing");
const electronics = filterData("electronics");

const ProductCategories = (props) => {
  console.log('Product: ', props)
  return (
    <div>
      {byCategory("Jewelery", jeweleries)}
      {byCategory("Men's Clothing", menClothing)}
      {byCategory("Women's Clothing", womenClothing)}
      {byCategory("Electronics", electronics)}
    </div>
  );
};

export default ProductCategories;


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
            return <Product key={e.id} {...e} />
          })}
        </Box>
      </Box>
    </div>
  );
};