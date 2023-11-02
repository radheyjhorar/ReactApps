import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import ReplayIcon from '@mui/icons-material/Replay';

const CashOnDelivery = () => {
  return (
    <div>
      <Box ml={4}>
        <Box
          width={'70%'}
          sx={{
            border: '1px solid #e87d10',
            p: 1,
            borderRadius: '4px',
            backgroundColor: '#fff2f2'
          }}
        >
          <Typography>Due to handling costs, a nominal free of $5 will be charged</Typography>
        </Box>

        <Box width={'70%'} display={'flex'} my={2} alignItems={'center'}>
          <Box
            width={'30%'}
            display={'flex'}
            border={'1px solid #aaa'}
            borderRadius={1}
            height={'3.45rem'}
            alignItems={'center'}
          >
            <Box width={'70%'} textAlign={'center'}>
              <Typography fontSize={'2.6rem'} color={'yellowgreen'}>184</Typography>
            </Box>
            <Box ml={'auto'}>
              <ReplayIcon
                fontSize='large'
                sx={{
                  color:'#1976d2',
                  mr: 1,
                }}
            />
            </Box>
          </Box>

          {/* <Box width={'30%'} mx={'auto'}> */}
            <TextField label="Enter the characters"  sx={{width: '30%', mx: 'auto'}} 
            />
          {/* </Box> */}

          <Box width={'30%'}>
            <Button variant='contained' sx={{py: 1.9}} fullWidth>Confirm Order</Button>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default CashOnDelivery