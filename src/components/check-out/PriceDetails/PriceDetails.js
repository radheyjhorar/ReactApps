import { Typography, Box, Divider } from "@mui/material";
import React from "react";

const PriceDetails = () => {
  return (
    <div>
      <Box boxShadow={4} >
        <Box py={2} px={3}  >
          <Typography
              textTransform={'uppercase'}
              color={'#8a8a8a'}
              variant="h6"
              component={'div'}
            >
              Price details
            </Typography>
        </Box>
        <Divider/>
        <Box py={2} px={3}>
          <Box display={'flex'} pb={2}>
            <Typography
              fontSize={'1.2rem'}
            >
              Price (2 items)
            </Typography>
            <Typography
              ml={'auto'}
              fontSize={'1.2rem'}
            >
              $36,398
            </Typography>
          </Box>
          
          <Box display={'flex'} pb={2}>
            <Typography
              fontSize={'1.2rem'}
            >
              Delivery Charges
            </Typography>
            <Typography
              display={'flex'}
              ml={'auto'}
              fontSize={'1.2rem'}
            >
              <del style={{color:"#8a8a8a"}}>$80</del>
              <Typography ml={1} color={'green'} fontSize={'1.2rem'}> FREE</Typography>
            </Typography>
          </Box>

          <Box display={'flex'} pb={2}>
            <Typography
              fontSize={'1.2rem'}
            >
              Packaging Charge
            </Typography>
            <Typography
              ml={'auto'}
              fontSize={'1.2rem'}
            >
              $69
            </Typography>
          </Box>

          <Divider/>

          <Box display={'flex'} pt={2}>
            <Typography
              fontSize={'1.4rem'}
              fontWeight={'500'}
              component={'div'}
              color={'#4c4c4c'}
            >
              Total Payable
            </Typography>
            <Typography
              ml={'auto'}
              fontSize={'1.4rem'}
              fontWeight={'500'}
              component={'div'}
              color={'#4c4c4c'}
            >
              $36,467
            </Typography>
          </Box>
        </Box>

        <Divider/>

        <Box py={2} px={3}>
          <Typography
              variant="h6"
              component={'div'}
              color={'green'}
            >
              Your Total Savings on this order $8,632
            </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default PriceDetails;
