import React, { useState } from "react";
import { Box, Grid, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import AddIcon from '@mui/icons-material/Add';
import AddNewAddress from "./AddNewAddress";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  // borderBottom: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary {...props} sx={{ py: 1 }} />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(0, 0, 0, .05)"
      : "rgba(0, 0, 0, .03)",
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
  // borderBottom: "1px solid rgba(0, 0, 0, .125)",
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  // borderBottom: "1px solid rgba(0, 0, 0, .125)",
}));

const RadioLable = (
  <Box display={"flex"}>
    <Typography fontWeight={"bold"}>Radhey Jhorar</Typography>
    <Box
      mx={1}
      px={1}
      borderRadius={1}
      sx={{
        backgroundColor: "#ddd",
      }}
      textTransform={"uppercase"}
      fontSize={"0.9rem"}
      fontWeight={"bold"}
      color={"#555"}
      mt={"auto"}
    >
      Home
    </Box>
    <Typography fontWeight={"bold"}>9518852747</Typography>
  </Box>
);

const DeliveryAddress = () => {
  const [expanded, setExpanded] = React.useState("panel1");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Box>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          style={{borderBottom: '1px solid #ddd'}}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Box>
              <FormControlLabel control={<Radio />} label={RadioLable} />
              <Typography ml={4}>Address Address Address Address Address Address </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
          <Button
              variant="contained"
              sx={{
                ml: 5,
                py: 1.5,
                px: 8,
                fontSize: "1rem",
                fontWeight: 'bold',
                textTransform: 'uppercase',

              }}
            >
              Delivery Here
            </Button>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box mt={2}>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
          style={{borderTop: '1px solid #ddd'}}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
              <Box display={'flex'}>
                <AddIcon color="primary"/>
                <Typography color={'primary'} ml={2}>Add new address</Typography>
              </Box>
          </AccordionSummary>
          <AccordionDetails>
            <AddNewAddress/>
          </AccordionDetails>
        </Accordion>
      </Box>
    </div>
  );
};

export default DeliveryAddress;
