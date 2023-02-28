import Box from "@mui/material/Box";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import * as React from "react";

const steps = ["Pending", "In Progress", "Resolved"];

export default function ComplaintTicketSearchInfo(props) {
  return (
    <React.Fragment>
      {/* <Box sx={{ width: "100%" }}>
        <Stepper activeStep={1} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box> */}
      <Box sx={{ height: 20 }} />
      <Typography variant="h6" gutterBottom>
        Status
      </Typography>
      <Typography variant="body1" gutterBottom>
        {props.complaint.status}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Subject
      </Typography>
      <Typography variant="body1" gutterBottom>
        {props.complaint.subject}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Body
      </Typography>
      <Typography variant="body1" gutterBottom>
        {props.complaint.body}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Location
      </Typography>
      <Typography variant="body1" gutterBottom>
        {props.complaint.location}
      </Typography>
    </React.Fragment>
  );
}
