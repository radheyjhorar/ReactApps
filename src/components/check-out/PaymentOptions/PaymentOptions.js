import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Box } from "@mui/material";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import UPI from "../../payment/UPI";
import PaidIcon from '@mui/icons-material/Paid';

const PaymentOptions = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Box>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="firstAcco"
            name="radio-buttons-group"
          >
            <Box>
              <MuiAccordion
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
                    label={<Box display={'flex'}>
                      <Box display={'flex'} alignItems={'center'}>
                        <PaidIcon/>
                      </Box>
                      <Box>
                        <Typography ml={1} variant="h6" component={'span'}>UPI</Typography>
                      </Box>
                    </Box>}
                    sx={{width: '100%'}}
                  />
                </MuiAccordionSummary>
                <MuiAccordionDetails>
                  <UPI />
                </MuiAccordionDetails>
              </MuiAccordion>
              <MuiAccordion
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
                    label="SecondAcco Item #2"
                    sx={{width: '100%'}}
                  />
                </MuiAccordionSummary>
                <MuiAccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                    blandit leo lobortis eget.
                  </Typography>
                </MuiAccordionDetails>
              </MuiAccordion>
              <MuiAccordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <MuiAccordionSummary
                  aria-controls="panel3d-content"
                  id="panel3d-header"
                >
                  <FormControlLabel
                    value="thirdAcco"
                    control={<Radio />}
                    label="ThirdAcco Item #3"
                    sx={{width: '100%'}}
                  />
                </MuiAccordionSummary>
                <MuiAccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                    blandit leo lobortis eget.
                  </Typography>
                </MuiAccordionDetails>
              </MuiAccordion>
            </Box>
          </RadioGroup>
        </FormControl>
      </Box>
    </div>
  );
};

export default PaymentOptions;
