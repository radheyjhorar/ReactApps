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
import PaidIcon from "@mui/icons-material/Paid";
import WalletIcon from "@mui/icons-material/Wallet";
import Wallets from "../../payment/Wallets";
import CardPayment from "../../payment/CardPayment";

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
                    sx={{ width: "100%" }}
                    label={
                      <Box display={"flex"}>
                        <Box display={"flex"} alignItems={"center"}>
                          <PaidIcon />
                        </Box>
                        <Box>
                          <Typography ml={1} variant="h6" component={"span"}>
                            UPI
                          </Typography>
                        </Box>
                      </Box>
                    }
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
                    sx={{ width: "100%" }}
                    label={
                      <Box display={"flex"}>
                        <Box display={"flex"} alignItems={"center"}>
                          <WalletIcon />
                        </Box>
                        <Box>
                          <Typography ml={1} variant="h6" component={"span"}>
                            Wallets
                          </Typography>
                        </Box>
                      </Box>
                    }
                  />
                </MuiAccordionSummary>
                <MuiAccordionDetails>
                  <Wallets />
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
                    sx={{ width: "100%" }}
                    label={
                      <Box>
                        <Typography
                          variant="h6"
                          component={"span"}
                        >
                          Credit / Debit / ATM Card
                        </Typography>
                      </Box>
                    }
                  />
                </MuiAccordionSummary>
                <MuiAccordionDetails>
                  <CardPayment />
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
