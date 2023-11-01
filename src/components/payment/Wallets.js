import { Box, Typography, Button, TextField } from "@mui/material";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import InputAdornment from "@mui/material/InputAdornment";

const Wallets = () => {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Box ml={6} mb={4}>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="firstAcco"
              name="radio-buttons-group"
            >
              <Box>
                <MuiAccordion
                  disabled
                  sx={{ boxShadow: "none", backgroundColor: "#fff !important" }}
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <MuiAccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    <Box color={"black"} display={"flex"} alignItems={"center"}>
                      <Radio sx={{ pl: 0 }} />
                      <Typography fontSize={"1.2rem"} component={"span"}>
                        Phonepe Wallet
                      </Typography>
                    </Box>
                  </MuiAccordionSummary>
                </MuiAccordion>
                <Box ml={6} mt={"-0.4rem"} mb={2}>
                  <Typography
                    fontSize={"1.2rem"}
                    color={"#999"}
                    component={"span"}
                  >
                    Coming Soon
                  </Typography>
                </Box>

                <Box ml={'4px'}>
                <MuiAccordion
                  sx={{ boxShadow: "none", width: '50rem' }}
                  expanded={true}
                >
                  <MuiAccordionSummary
                    aria-controls="panel2d-content"
                    id="panel2d-header"
                  >
                    <FormControlLabel
                      value="secondAcco"
                      control={<Radio checked />}
                      sx={{ width: "100%" }}
                      label={
                        <Typography fontSize={"1.2rem"} component={"span"}>
                          Paytm Wallet
                        </Typography>
                      }
                    />
                  </MuiAccordionSummary>
                  <MuiAccordionDetails>
                    <Box ml={4}>
                      <TextField
                        sx={{ width: "50%" }}
                        label="Enter Paytm Wallet linked no."
                        defaultValue={'9518852747'}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment>
                              <Button>Link Now</Button>
                            </InputAdornment>
                          ),
                        }}
                      />
                      <Button
                        sx={{ height: "3.5rem", ml: 2, px: 6 }}
                        variant="contained"
                        size="large"
                        disabled
                      >
                        Continue
                      </Button>
                    </Box>
                  </MuiAccordionDetails>
                </MuiAccordion>
                </Box>
              </Box>
            </RadioGroup>
          </FormControl>
        </Box>
    </div>
  );
};

export default Wallets;
