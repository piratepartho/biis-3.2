import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const steps = [
  'Pending',
  'In Progress',
  'Resolved',
];

export default function ComplaintTicketSearchInfo() {
  return (
    <React.Fragment>
      <Box sx={{ width: '100%' }}>
                <Stepper activeStep={1} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>
            <Box sx={{ height: 50 }} />
      <Typography variant="h6" gutterBottom>
        Subject
      </Typography>
      <Typography variant="body1" gutterBottom>kisu ekta subject</Typography>
      <Typography variant="h6" gutterBottom>
        Details
      </Typography>
      <Typography variant="body1" gutterBottom>sakib bhai amare rag dise ;-;</Typography>
      <Typography variant="h6" gutterBottom>
        Location
      </Typography>
      <Typography variant="body1" gutterBottom>Sher e Bangla Hall</Typography>
      
    </React.Fragment>
  );
}