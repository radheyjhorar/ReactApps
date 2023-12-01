import React, { useEffect } from 'react';
import './ProductCategories.css';
import { Box, Typography } from '@mui/material';
//import data from '../products/products.json';
import { useSelector } from 'react-redux';
import Product from '../products/Product';


const filterData = (dataName, data) => {
  return data && data.filter((x) => x.category === dataName);
};




const ProductCategories = (props) => {
  const selector = useSelector((state) => state);
  const data = [] && selector.product.data;
  console.log("Product Cat: ", data)

  // useEffect(() => {

  // }, [])

  const jeweleries = filterData("jewelery", data);
  const menClothing = filterData("men's clothing", data);
  const womenClothing = filterData("women's clothing", data);
  const electronics = filterData("electronics", data);


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
          {proCategory && proCategory.map((e) => {
            return <Product key={e.id} {...e} />
          })}
        </Box>
      </Box>
    </div>
  );
};