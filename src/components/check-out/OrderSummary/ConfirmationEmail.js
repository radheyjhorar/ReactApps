import { Box, Button, Typography } from '@mui/material'
import React from 'react';

const ConfirmationEmail = () => {
  return (
    <div>
      <Box display={'flex'}>
        <Box display={'flex'} alignItems={'center'}>
          <Typography pl={2} fontSize={'1.2rem'}>Order confirmatin email will be sent to <b>test@gmail.com</b></Typography>
        </Box>

        <Box ml={'auto'}>
          <Button
            variant='contained'
            size='large'
            sx={{px: 8, py: 1.5, fontSize: '1.2rem'}}
          >
            Continue
          </Button>
        </Box>
      </Box>
    </div>
  )
}

export default ConfirmationEmail