import { Avatar, Box, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'

const UserProfile = ({ user }) => {

  return (
    <div>
      <Box>
        <Grid container>

          <Grid item sm={3}>
            <Box>
              <Avatar></Avatar>
            </Box>
          </Grid>

          <Grid item sm={9}></Grid>

        </Grid>

        <Typography>User Name</Typography>
        <Typography>user@gmail.com</Typography>
        <Typography>User Address User Address User Address</Typography>
      </Box>
    </div>
  )
}

export default UserProfile;