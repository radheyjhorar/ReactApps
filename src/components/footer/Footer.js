import React from "react";
import './Footer.css'
import { Box, Container, Grid, Typography } from "@mui/material";
import CopyRight from "../copy-right/CopyRight";

export const Footer = () => {
  return (
    <footer>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          backgroundColor: "primary.main",
          color: "white",
          py: "1rem",
        }}
      >
        <Container maxWidth="lg">
          <Grid container direction="column" alignItems="center">
            <Grid item xs={12}>
              <Typography variant="h5">Shopify App</Typography>
            </Grid>
            <Grid item xs={12}>
              <CopyRight />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
