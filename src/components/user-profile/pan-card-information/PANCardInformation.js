import { Box, Checkbox, FormControlLabel, Button, TextField, Typography } from '@mui/material';
import React from 'react'

const PANCardInformation = () => {
  return (
    <div>
      <Box>
        <Typography variant='h6' component={'span'}>PAN Card Information</Typography>
      </Box>
      <Box width={'40%'} my={2}>
        <TextField label='PAN Card Number' fullWidth/>
      </Box>
      <Box width={'40%'} my={2}>
        <TextField label='Full Name' fullWidth/>
      </Box>
      <Box width={'40%'} my={2}>
        <TextField 
          type='file'
          fullWidth 
          helperText="Upload PAN Card (Only JPEG file is allowed)"
        />
      </Box>
      <Box py={2}>
        <FormControlLabel
          control={<Checkbox sx={{mt: '-20px'}}/>}
          label="I do hereby declare that PAN furnished/stated above is correct and belongs to me, registered as an account holder with www.shopify.com. I further declare that I shall solely be held responsible for the consequences, in case of any false PAN declaration."
        />
      </Box>

      <Box py={2}>
        <Button size='large' variant='contained'>Upload</Button>
      </Box>

      <Box mt={8}>
        <Typography variant='h6' component={'span'} color={'primary'}>Read Terms & Conditions Of PAN Card Information</Typography>
      </Box>

    </div>
  )
}

export default PANCardInformation