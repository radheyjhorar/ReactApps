import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import Home from '../../pages/HomePage/Home'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <>
      <Box textAlign={'center'} py={4}>
        <Typography variant='h6' component={'div'}>
          Your cart is empty Plese continue shoping
        </Typography>
        <Box pt={4}>
          <Link to='/'>
            <Button variant='contained'>Continue Shoping</Button>
          </Link>
        </Box>
      </Box>
    </>
  )
}

export default EmptyCart