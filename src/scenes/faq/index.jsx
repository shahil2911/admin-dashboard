import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What is React.js?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            React.js is a JavaScript library for building user interfaces,
            developed by Facebook. It allows developers to create reusable UI
            components and efficiently manage the state of their applications.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What are the key features of React.js?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Some key features of React.js include:
            <ul>
              <li>Component-based architecture</li>
              <li>Virtual DOM for efficient rendering</li>
              <li>JSX syntax for writing components</li>
              <li>Unidirectional data flow</li>
              <li>React hooks for managing state and side effects</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How does React.js differ from other JavaScript frameworks?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Unlike traditional JavaScript frameworks like Angular or Ember, React
            focuses solely on the view layer of an application. It encourages
            the use of a unidirectional data flow and allows developers to
            compose complex UIs from small, reusable components.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What are React hooks?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            React hooks are functions that enable developers to use state and
            other React features in functional components. They allow for a
            cleaner and more concise way of managing component state and
            side-effects compared to class components.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How can I learn React.js?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            There are many resources available for learning React.js, including
            official documentation, online tutorials, and courses on platforms
            like Udemy and Coursera. Additionally, practicing by building
            small projects and contributing to open-source projects can help
            reinforce your understanding.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
