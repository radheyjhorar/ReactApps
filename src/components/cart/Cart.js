import {
  Box,
  Button,
  Grid,
  Typography,
  IconButton,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import ErrorIcon from "@mui/icons-material/Error";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import PriceDetails from "../check-out/PriceDetails/PriceDetails";
import GppGoodIcon from "@mui/icons-material/GppGood";

const Cart = () => {
  const [cart, setCart] = useState([
    { id: 1, name: "Product 1", price: 10.99, quantity: 2 },
    { id: 2, name: "Product 2", price: 19.99, quantity: 1 },
  ]);

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div>
      <Box mb={4}>
        <Grid container px={4} spacing={3}>
          <Grid item sm={8}>
            <Box sx={{ border: "0.1px solid #bbb", borderRadius: 1 }}>
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
                    <Typography fontWeight={"bold"}>
                      Radhey Jhorar, 125102
                    </Typography>
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
                <Grid container>
                  <Grid item sm={2} p={2} textAlign={"-webkit-center"}>
                    <Box
                      width={"112px"}
                      height={"112px"}
                      display={"flex"}
                      alignItems={"center"}
                    >
                      <img
                        src="https://rukminim2.flixcart.com/image/100/100/jwfa5jk0/pendrive/pendrive/z/f/p/sandisk-sdcz50-128g-i35-original-imafh3xkevktvq4w.jpeg?q=90"
                        alt="Product Image"
                      />
                    </Box>
                  </Grid>
                  <Grid item sm={6}>
                    <Box p={2}>
                      <Box>
                        <Typography
                          variant="h6"
                          component={"div"}
                          fontWeight={"400"}
                        >
                          SanDisk Cruze Blade SDCZ50 64 GB Pen Drive
                        </Typography>
                      </Box>
                      <Box>
                        <Typography color={"#878787"} mt={1}>
                          Red, Black
                        </Typography>
                      </Box>

                      <Box display={"flex"} alignItems={"center"} pt={2}>
                        <Typography
                          pr={1}
                          variant="subtitle"
                          component={"span"}
                          color={"#888"}
                        >
                          <del>$1,100</del>
                        </Typography>
                        <Typography pr={2} variant="h6" component={"span"}>
                          $399
                        </Typography>

                        <Typography
                          pr={2}
                          variant="subtitle"
                          component={"span"}
                          fontWeight={"500"}
                          color={"#388e3c"}
                        >
                          63% Off
                        </Typography>
                        <Typography
                          variant="subtitle"
                          component={"span"}
                          fontWeight={"500"}
                          color={"#388e3c"}
                        >
                          5 Offers applied
                        </Typography>
                        <ErrorIcon
                          sx={{ fontSize: 20, ml: "2px", color: "#388e3c" }}
                        />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item sm={4} p={2}>
                    <Box
                      display={"flex"}
                      sx={{ float: "inline-end" }}
                      alignItems={"center"}
                    >
                      <Typography variant="subtitle1" component={"span"}>
                        Delivery in 2 days, Thu |
                      </Typography>

                      <Typography variant="subtitle" component={"span"} ml={1}>
                        <del style={{ color: "#8a8a8a" }}>$80</del>
                      </Typography>

                      <Typography
                        variant="subtitle"
                        component={"span"}
                        ml={"4px"}
                        color={"#388e3c"}
                      >
                        FREE
                      </Typography>
                    </Box>
                  </Grid>

                  <Box display={"flex"}>
                    <Box p={1} display={"flex"}>
                      <Box>
                        <IconButton>
                          <RemoveIcon />
                        </IconButton>
                      </Box>

                      <Box mx={1} alignItems={"center"} display={"flex"}>
                        <TextField
                          disabled
                          value="1"
                          size="small"
                          sx={{ width: "3rem" }}
                          inputProps={{
                            style: { textAlign: "center", padding: "4px" },
                          }}
                        />
                      </Box>

                      <Box>
                        <IconButton>
                          <AddIcon />
                        </IconButton>
                      </Box>
                    </Box>

                    <Box display={"flex"} alignItems={"center"} ml={1}>
                      <Button size="large" sx={{ fontSize: "1.2rem" }}>
                        Save for later
                      </Button>
                    </Box>

                    <Box display={"flex"} alignItems={"center"} ml={1}>
                      <Button size="large" sx={{ fontSize: "1.2rem" }}>
                        Remove
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              </Box>

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
                    variant="contained"
                    sx={{ fontSize: "1.2rem", py: 2.5, px: 12 }}
                  >
                    Place Order
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid item sm={4}>
            <Box
              sx={{
                border: "1px solid #ccc",
                backgroundColor: "#fff",
                borderRadius: 1,
              }}
            >
              <PriceDetails />
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
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
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
