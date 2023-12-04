import React from "react";
import {
  Box,
  Grid,
  Typography,
  IconButton,
  Button,
  TextField,
} from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ErrorIcon from "@mui/icons-material/Error";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeliveryTime from "./DeliveryTime";
import { incrementQuantity, decrementQuantity, removeItem } from '../../redux/slices/cartSlice'
import { useDispatch } from 'react-redux'

const CartProduct = ({ id, image, title, price, quantity=0 }) => {

  const dispatch = useDispatch();
  console.log("Dispatch:", incrementQuantity)

  return (
    <Box width={'-webkit-fill-available'}>
      <Grid container>
        <Grid item sm={2} p={2} textAlign={"-webkit-center"}>
          <Box
            width={"110px"}
            height={"110px"}
            display={"flex"}
            alignItems={"center"}
          >
            <img
              width={"100%"}
              height={"100%"}
              style={{ objectFit: "contain" }}
              src={image}
              alt='item'
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
                noWrap
              >
                {title}
              </Typography>
            </Box>
            <Box>
              <Typography color={"#878787"} mt={1}>
                Rating...
              </Typography>
            </Box>

            <Box display={"flex"} alignItems={"center"} pt={2}>
              <Typography
                pr={2}
                variant="h6"
                component={"span"}
                alignItems={"center"}
                display={"flex"}
              >
                <CurrencyRupeeIcon fontSize={"inherit"} />
                {/* {(item.price * item.quantity).toFixed(2)} */}
                {price}
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
              <ErrorIcon sx={{ fontSize: 20, ml: "2px", color: "#388e3c" }} />
            </Box>
          </Box>
        </Grid>

        <Grid item sm={4} p={2}>
          <DeliveryTime />
        </Grid>
      </Grid>

      <Box display={"flex"}>
        <Box p={1} display={"flex"}>
          <Box>
            <IconButton onClick={() => dispatch(decrementQuantity(id))}>
              <RemoveIcon />
            </IconButton>
          </Box>

          <Box mx={1} alignItems={"center"} display={"flex"}>
            <TextField
              disabled
              value={quantity}
              size="small"
              sx={{ width: "3rem" }}
              inputProps={{
                style: {
                  textAlign: "center",
                  padding: "4px",
                },
              }}
            />
          </Box>

          <Box>
            <IconButton onClick={() => dispatch(incrementQuantity(id))}>
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
          <Button 
            size="large" 
            sx={{ fontSize: "1.2rem" }}
            onClick={() => dispatch(removeItem(id))}
          >
            Remove
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CartProduct;
