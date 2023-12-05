import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import PriceDetails from "./PriceDetails";
import GppGoodIcon from "@mui/icons-material/GppGood";
import DeliveryAddress from "./DeliveryAddress";
import CartProduct from "./CartProduct";
import { useSelector } from "react-redux";

const Cart = () => {

  const items = useSelector((state) => state.cart.cart);
  let cartEmpty = items.length === 0;

  return (
    <div>
      <Box my={4}>
        <Grid container px={4} spacing={3}>
          <Grid item sm={8}>
            <Box sx={{ border: "0.1px solid #bbb", borderRadius: 1 }}>
              <DeliveryAddress />

              {cartEmpty ? (
                <Typography p={2} my={1} sx={{ backgroundColor: "white" }}>
                  Your Cart is empty Please add to cart some products
                </Typography>
              ) : (
                items?.map((item) => (
                  <Box
                    sx={{
                      width: "100%",
                      borderTop: "1px solid #ccc",
                      borderBottom: "1px solid #ccc",
                      backgroundColor: "#fff",
                      py: 1.5,
                      px: 2,
                      display: "flex",
                      my: 1.5,
                    }}
                  >
                    <CartProduct 
                      key={item.id}
                      id={item.id}
                      image={item.image}
                      title={item.title}
                      price={item.price}
                      quantity={item.quantity}
                    />
                  </Box>
                ))
              )}

              {/* Place Order Button div */}
              <Box
                sx={{
                  width: "100%",
                  borderTop: "1px solid #ccc",
                  backgroundColor: "#fff",
                  borderRadius: 1,
                  py: 1.5,
                  px: 2,
                  display: "flex",
                  position: "sticky",
                  bottom: 0,
                }}
              >
                <Box ml={"auto"}>
                  <Button
                    disabled={cartEmpty}
                    variant="contained"
                    sx={{ fontSize: "1.2rem", py: 2.5, px: 12 }}
                  >
                    Place Order
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Price details container */}
          <Grid item sm={4}>
            <Box
              sx={{
                border: "1px solid #ccc",
                backgroundColor: "#fff",
                borderRadius: 1,
              }}
            >
              <PriceDetails item={items} />
            </Box>
            <Box mt={2}>
              <Box display={"flex"} alignItems={"center"} py={2}>
                <GppGoodIcon sx={{ fontSize: "3rem", color: "grey" }} />
                <Typography
                  variant="body1"
                  component="span"
                  display={"block"}
                  ml={3}
                  fontWeight={500}
                  lineHeight={"normal"}
                >
                  Safe and Secure Payments. Easy returns. 100% Aunthentic
                  products.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Cart;
