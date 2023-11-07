import { Box, Button, Divider, Typography } from '@mui/material';
import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import DeleteIcon from '@mui/icons-material/Delete';

const MyWishlist = () => {
  return (
    <div>
      <Box py={3} px={4} >
        <Typography variant='h6' component={'span'}>My Wishlist (4)</Typography>
      </Box>
      <Divider />

      <Box
        py={3}
        px={4}
        display={'flex'}
        alignItems={'center'}
      >
        <Box>
          <img
            style={{objectFit: 'contain'}}
            width={'100px'}
            height={'100px'}
            src='https://rukminim2.flixcart.com/image/312/312/xif0q/shoe/x/6/r/7-ogc-4520022-41-woodland-black-original-imagu2eh29vnbxcg.jpeg?q=70'
            alt='Product Image'  
          />
        </Box>
        <Box ml={2} width={'100%'}>
          <Box display={'flex'} alignItems={'center'}>
            <Typography fontSize={'1.3rem'} mb={'2px'}>Wodland Loafers For Men</Typography>
            <Button sx={{ml: 'auto', px: 0}}>
              <DeleteIcon sx={{color: '#888'}}/>
            </Button>
          </Box>
          
          <Box
            pl={'6px'}
            pr={'2px'}
            py={'1px'}
            display={'flex'}
            width={'fit-content'}
            sx={{
              backgroundColor: '#388e3c',
              color: '#fff',
              borderRadius: 1
            }}
          >
            <Typography>3.4</Typography>
            <StarIcon sx={{fontSize: '1.2rem', ml: '3px', mt: '0.5px'}}/>
          </Box>
          <Box
            display={'flex'}
            mt={2}
          >
            <Box display={'flex'} alignItems={'center'} mr={1}>
              <CurrencyRupeeIcon sx={{fontSize: '1.4rem', fontWeight: 'bold'}}/>
              <Typography fontSize={'1.4rem'} fontWeight={'500'}>1,995</Typography>
            </Box>

            <Box display={'flex'} alignItems={'center'} mr={1} color={'#999'}>
              <CurrencyRupeeIcon sx={{fontSize: '1.1rem'}}/>
              <Typography fontSize={'1.1rem'}>3,995</Typography>
              <Divider sx={{width: '60px', ml: '-3.65rem', borderBottomWidth: '2px', borderColor: '#999'}}/>
            </Box>
            
            <Box mt={'5px'} ml={1}>
              <Typography fontWeight={'bold'} color={'#388e3c'}>50% Off</Typography>
            </Box>
            
          </Box>
        </Box>
      </Box>
      <Divider />

    </div>
  )
}

export default MyWishlist