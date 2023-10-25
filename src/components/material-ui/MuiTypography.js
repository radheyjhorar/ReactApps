import React from "react";
import './MuiTypography.css';
import { Typography } from "@mui/material";


function MuiTypography() {
  return (
    <div>
       <Typography variant="h1">H1 Heading</Typography>
       <Typography variant="h2">H2 Heading</Typography>
       <Typography variant="h3">H3 Heading</Typography>
       <Typography variant="h4">H4 Heading</Typography>
       <Typography variant="h5">H5 Heading</Typography>
       <Typography variant="h6">H6 Heading</Typography>

       <Typography variant="sub-title1">Sub Title1</Typography>
       <Typography variant="sub-title2">Sub Title2</Typography>
    </div>
  )
}

export default MuiTypography;