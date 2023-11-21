import React from "react";
import { data } from "./faqData";
import "./faq.css";
import { Box, Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Faq = () => {
  return (
    <>
      <Box display={'flex'} justifyContent={'center'}>
        <Box width={'60%'} textAlign={"center"}>
          <Typography variant="h4" fontWeight={'bold'} my={1} component={'h1'}>Faq Questions</Typography>
          {data.map((e) => {
            return <FaqAccordian key={e.id} {...e} />;
          })}
        </Box>
      </Box>
    </>
  );
};

export default Faq;



export const FaqAccordian = ({id, question, answer}) => {
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography sx={{ mx: 1 }}>
            {id}
          </Typography>
          <Typography>{question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography textAlign={'justify'} mx={1}>{answer}</Typography>
        </AccordionDetails>
      </Accordion>
    </>
  )
}
