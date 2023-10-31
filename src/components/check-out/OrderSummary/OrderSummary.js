import React from "react";
import {
  Grid,
  TextField,
  Typography,
  Link,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const OrderSummary = () => {
  return (
    <div>
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
              <Typography variant="h6" component={"div"} fontWeight={"400"}>
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
              <ErrorIcon sx={{ fontSize: 20, ml: "2px", color: "#388e3c" }} />
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

          <Box display={'flex'} alignItems={'center'} ml={1}>
            <Button size="large" sx={{ fontSize: '1.2rem' }}>Remove</Button>
          </Box>
        </Box>
      </Grid>
    </div>
  );
};

export default OrderSummary;
