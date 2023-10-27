import React from 'react';
import { Box, Button, Divider, Grid, TextField, Typography } from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';

const Checkout = () => {
  return (
    <div style={{marginBottom: '20rem'}}>
      <Grid container mt={8}>
        <Grid width='49vw'>
          <Box>
            <h1>Page 1</h1>
          </Box>
        </Grid>
        <Grid width='49vw'>
          <Box textAlign='center'>
            <Button
              variant='contained'
              sx={{color: 'white',
                  width: '70%',
                  alignItems: 'center',

              }}
              >
                <AppleIcon /><Typography ml={1} variant='subtitle1' component='p'> Pay </Typography> 
            </Button>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Divider sx={{my:4, width:'70%', marginInline: 'auto'}}>Or pay with card</Divider>
          </Box> 
          <Box>
            <Box width='70%' marginInline='auto'>
              <Typography variant='h5' component='p' mb={3}>Shipping information</Typography>
              <TextField
                sx={{ width: '-webkit-fill-available' }}
                id="standard-basic"
                label="Email"
                variant="standard"
              />

              <Typography variant='h6' component='p' mt={4} sx={{color: '#7a7a7a'}}>Shipping address</Typography>
              <TextField
                sx={{ width: '-webkit-fill-available' }}
                id="standard-basic"
                label="Name"
                variant="standard"
              />
              <TextField
                sx={{ width: '-webkit-fill-available' }}
                id="standard-basic"
                label="Country"
                variant="standard"
              />
              <TextField
                sx={{ width: '-webkit-fill-available' }}
                id="standard-basic"
                label="Address"
                variant="standard"
              />
              <Typography 
                variant='subtitle2' 
                component='p' 
                sx={{color: '#7a7a7a'}}
              >
                Enter address manually
              </Typography>

            </Box>
          </Box>
          
        </Grid>
      </Grid>
    </div>
  )
}

export default Checkout;