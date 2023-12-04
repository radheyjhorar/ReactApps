import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import PriceDetails from "./PriceDetails";
import GppGoodIcon from "@mui/icons-material/GppGood";
import DeliveryAddress from "./DeliveryAddress";
import CartProduct from "./CartProduct";
import { } from '../../redux/slices/cartSlice';
import { useSelector } from "react-redux";

const Cart = () => {
  const items = useSelector((state) => state.cart.cart);
  console.log("cart: ", items);

  const [cart, setCart] = useState([
    {
      id: 1,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: { rate: 4.1, count: 259 },
      quantity: 2,
    },
    {
      id: 2,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      rating: { rate: 4.7, count: 500 },
      quantity: 2,
    },
    {
      id: 3,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: { rate: 3.9, count: 120 },
      quantity: 2,
    },
  ]);

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const cartEmpty = false;
  const cartItem = items;

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

                      item={item} 
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
              <PriceDetails item={cart} />
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

      <h2>Your Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {items?.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>{item.quantity}</td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Total: ${calculateTotal()}</p>
    </div>
  );
};

export default Cart;
