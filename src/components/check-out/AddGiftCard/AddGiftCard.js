import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

const AddGiftCard = () => {
  return (
    <div>
      <Box ml={6}>
        <Box display={'flex'} alignItems={'center'}>
          <TextField label="Voucher Number" />
          <TextField sx={{mx: 2}} label="Voucher Pin" />
          <Button variant='contained' size='large' sx={{py: 1.3, px: 6, fontSize: '1.2rem'}}>Apply</Button>
        </Box>
        <Box mt={2}>
          <Typography
            sx={{fontWeight: '500', color: '#888'}}
          >
            You can use maximum of 15 gift card per transaction.
          </Typography>
        </Box>
      </Box>
      
    </div>
  )
}

export default AddGiftCard