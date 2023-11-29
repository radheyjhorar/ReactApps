import React, { useState } from "react";
import { Typography, Box, Divider } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const PriceDetails = ({ item }) => {
  const totalItem = item.length;

  let productsTotalPrice = 0;
  let prices = item.map(({ price, quantity }) => price.toFixed(2) * quantity);
  prices.forEach((e) => (productsTotalPrice += e));

  const deliveryCharges = 60;
  const packagingCharge = 20;
  const deliveryChargesApplyOrNot = productsTotalPrice >= 200 ? true : false;

  const cartTotalPrice = deliveryChargesApplyOrNot
    ? productsTotalPrice + packagingCharge
    : productsTotalPrice + deliveryCharges + packagingCharge;

  return (
    <div>
      <Box boxShadow={4}>
        <Box py={2} px={3}>
          <Typography
            textTransform={"uppercase"}
            color={"#8a8a8a"}
            variant="h6"
            component={"div"}
          >
            Price details
          </Typography>
        </Box>
        <Divider />
        <Box py={2} px={3}>
          <Box display={"flex"} pb={2}>
            <Typography fontSize={"1.2rem"}>
              Price ({totalItem} {totalItem <= 1 ? "item" : "items"})
            </Typography>
            <Typography ml={"auto"} fontSize={"1.2rem"} display={'flex'} alignItems={'center'}>
              <CurrencyRupeeIcon fontSize="inherit"/>{productsTotalPrice}
            </Typography>
          </Box>

          <Box display={"flex"} pb={2}>
            <Typography fontSize={"1.2rem"}>Delivery Charges</Typography>
            <Typography display={"flex"} ml={"auto"} fontSize={"1.2rem"}>
              {deliveryChargesApplyOrNot ? (
                <Box display={"flex"}>
                  <del style={{ color: "#8a8a8a", display: 'flex', alignItems: 'center' }}>
                    <CurrencyRupeeIcon fontSize="inherit"/>{deliveryCharges}
                  </del>
                  <Typography ml={1} color={"green"} fontSize={"1.2rem"}>
                    FREE
                  </Typography>
                </Box>
              ) : (
                deliveryCharges
              )}
            </Typography>
          </Box>

          <Box display={"flex"} pb={2}>
            <Typography fontSize={"1.2rem"}>Packaging Charge</Typography>
            <Typography ml={"auto"} fontSize={"1.2rem"} display={'flex'} alignItems={'center'}>
            <CurrencyRupeeIcon fontSize="inherit"/>{packagingCharge}
            </Typography>
          </Box>

          <Divider />

          <Box display={"flex"} pt={2}>
            <Typography
              fontSize={"1.4rem"}
              fontWeight={"500"}
              component={"div"}
              color={"#4c4c4c"}
            >
              Total Payable
            </Typography>
            <Typography
              ml={"auto"}
              fontSize={"1.4rem"}
              fontWeight={"500"}
              component={"div"}
              color={"#4c4c4c"}
              display={'flex'}
              alignItems={'center'}
            >
              <CurrencyRupeeIcon fontSize="inherit"/>{cartTotalPrice}
            </Typography>
          </Box>
        </Box>

        <Divider />

        <Box py={2} px={3} display={"flex"} color={"green"}>
          <Typography variant="h6">Your Total Savings on this order</Typography>
          <Typography variant="h6" ml={"auto"}>
            ---------
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default PriceDetails;
