// import * as React from 'react';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Container } from "../routes/MainRoutes";
import { FAQData } from "../utils/constants/constants";
import styled from "styled-components";
const FAQ = () => {
  return (
    <>
      <Container>
        <Style>
        {FAQData.map((item) => (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
        </Style>
      </Container>
    </>
  );
};

export default FAQ;

const Style = styled.div`
    width: 810px;
`