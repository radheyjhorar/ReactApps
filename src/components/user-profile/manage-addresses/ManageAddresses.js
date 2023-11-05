import { Box, Typography } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ManageAddresses = () => {
  return (
    <div>
      <Box>
        <Typography variant="h6" component={"div"}>
          Manage Addresses
        </Typography>
        <Box
          display={"flex"}
          alignItems={"center"}
          border={"1px solid #ddd"}
          borderRadius={1}
          py={2}
          my={2}
        >
          <AddIcon sx={{ mx: 1.5 }} color="primary" />
          <Typography
            textTransform={"uppercase"}
            color={"primary"}
            fontWeight={"500"}
          >
            Add New Address
          </Typography>
        </Box>

        <Box>
          <Box
            p={2.5}
            border={"1px solid #ddd"}
            borderRadius={1}
          >
            <Box display={'flex'} alignItems={'center'}>
              <Typography
                sx={{
                  backgroundColor: "#ddd",
                  color: '#777',
                  display: 'inline-block',
                  fontWeight: '500',
                  px: 1,
                  borderRadius: '2px',
                }}
              >
                Home
              </Typography>

              <MoreVertIcon sx={{ml: 'auto'}}/>

            </Box>
            
            <Box display={'flex'} py={1.5}>
              <Typography fontWeight={'500'} mr={2}>User Name</Typography>
              <Typography fontWeight={'500'}>+919988776655</Typography>
            </Box>

            <Box>
              <Typography>User Address User Address User Address <strong>123456</strong></Typography>
            </Box>
          </Box>
          
        </Box>
      </Box>
    </div>
  );
};

export default ManageAddresses;
