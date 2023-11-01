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

const UPI = () => {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Box ml={4}>
        <Box>
          <Typography variant="h6" component="span">
            Choose an option
          </Typography>
        </Box>
        <Box ml={1}>
          <Box>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="firstAcco"
                name="radio-buttons-group"
              >
                <Box>
                  <MuiAccordion
                    sx={{ boxShadow: "none" }}
                    expanded={expanded === "panel1"}
                    onChange={handleChange("panel1")}
                  >
                    <MuiAccordionSummary
                      aria-controls="panel1d-content"
                      id="panel1d-header"
                    >
                      <FormControlLabel
                        value="firstAcco"
                        control={<Radio />}
                        label={
                          <Typography fontSize={"1.2rem"} component={"span"}>
                            PhonePe
                          </Typography>
                        }
                        sx={{ width: "100%" }}
                      />
                    </MuiAccordionSummary>
                    <MuiAccordionDetails>
                      <Box ml={4}>
                        <Button
                          variant="contained"
                          size="large"
                          sx={{ px: 6, py: 1.5 }}
                        >
                          Continue
                        </Button>
                      </Box>
                    </MuiAccordionDetails>
                  </MuiAccordion>
                  <MuiAccordion
                    sx={{ boxShadow: "none" }}
                    expanded={expanded === "panel2"}
                    onChange={handleChange("panel2")}
                  >
                    <MuiAccordionSummary
                      aria-controls="panel2d-content"
                      id="panel2d-header"
                    >
                      <FormControlLabel
                        value="secondAcco"
                        control={<Radio />}
                        sx={{ width: "100%" }}
                        label={
                          <Typography fontSize={"1.2rem"} component={"span"}>
                            Your UPI ID
                          </Typography>
                        }
                      />
                    </MuiAccordionSummary>
                    <MuiAccordionDetails>
                      <Box ml={4}>
                        <TextField
                          sx={{ width: "50%" }}
                          label="Enter UPI ID"
                          InputProps={{
                            endAdornment: (
                              <InputAdornment>
                                <Button>Verify</Button>
                              </InputAdornment>
                            ),
                          }}
                        />
                        <Button
                          sx={{ height: "3.4rem", ml: 2, px: 6 }}
                          variant="contained"
                          size="large"
                        >
                          Pay $399
                        </Button>
                      </Box>
                    </MuiAccordionDetails>
                  </MuiAccordion>
                </Box>
              </RadioGroup>
            </FormControl>
          </Box>
          <Box mt={3}>
            <Typography 
              variant="h6"
              component={'span'}
              color={'#999'}
            >
              Pay by any UPI app
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default UPI;
