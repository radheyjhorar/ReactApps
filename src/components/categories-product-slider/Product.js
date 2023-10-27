import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Rating from "@mui/material/Rating";
import { Button, createTheme, ThemeProvider } from "@mui/material";


const Product = (props) => {
  const theam = createTheme({
    components: {
      MuiTypography: {
        variants: [
          {
            props: {
              variant: "body2",
            },
            style: {
              fontSize: 11,
            },
          },
          {
            props: {
              variant: "body3",
            },
            style: {
              fontSize: 9,
            },
          },
        ],
      },
    },
  });

  console.log(props)
 

  return (
    <div style={{ padding: 4, width: '260px' }}>
      <Grid item xs={3}>
        <ThemeProvider theme={theam}>
          <Paper elevation={3}>
            <Box style={{ height: '200px' }} >
              <img 
                style={{ width: '-webkit-fill-available',borderRadius: '6px 6px 0 0' ,  height: 'inherit', objectFit: 'cover' }} 
                src={props.product.image} 
                alt={props.product.name} 
              />
            </Box>
            <Box p={1}>
              <Typography variant="subtitle" component="h2">
                {props.product.name}
              </Typography>
              <Typography variant="subtitle1" component="p">
                {props.product.description}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <CurrencyRupeeIcon fontSize="small"/>
                <Typography variant="h6" component="p">
                {props.product.price}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }} my={1}>
                <Rating
                  name="read-only"
                  value="4.5"
                  readOnly
                  precision={0.5}
                  size="small"
                />
                <Typography variant="body2" component="p" marginLeft={0.5}>
                  4.5
                </Typography>
                <Typography variant="body3" component="p" marginLeft={1.5}>
                  (4.5 reviews)
                </Typography>
              </Box>
              <Box>
                <Button variant="contained" size="small" sx={{ mr: 2, width: '40%'}} >Buy Now</Button>
                <Button variant="contained" size="small" sx={{float: 'right'}} >Add to Cart+</Button>
              </Box>
            </Box>
          </Paper>
        </ThemeProvider>
      </Grid>
    </div>
  );
};

export default Product;
