import React from 'react'
import { Typography, Link } from '@mui/material';

function CopyRight(props) {
  return (
    <div>
     <Typography variant="subtitle1" align="center" {...props}>
        {new Date().getFullYear()}
        {' '}
        {'Copyright©'}
        {' '}
       <Link color="inherit" href="#">
         ShopiFy
       </Link>{' '}
       {'.'}
     </Typography>
    </div>
  );
}

export default CopyRight;