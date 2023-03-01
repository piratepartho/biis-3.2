import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React from 'react'
import ComplaintSubmissionSubform1 from './ComplaintSubmissionSubform1';
import ComplaintSubmissionSubform2 from './ComplaintSubmissionSubform2';
import ComplaintSubmissionSubform3 from './ComplaintSubmissionSubform3';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const steps = ['Add Subject', 'Add Details', 'Review your complaint'];



const theme = createTheme();

export default function ComplaintSubmissionForm() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const [newComplaint, setNewComplaint] = React.useState({
    subject : '',
    body : '',
    location : '',
    anonymity : false,
  });

  const onChangeHandler = (event) => {
    setNewComplaint({...newComplaint, [event.target.name]: event.target.value});
    console.log(newComplaint);
  }

  const anonymityChangeHandler = (value) => {
    setNewComplaint({...newComplaint, anonymity: value});
    console.log(newComplaint);
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <ComplaintSubmissionSubform1 onChangeHandler={onChangeHandler} anonymityChangeHandler = {anonymityChangeHandler} />;
      case 1:
        return <ComplaintSubmissionSubform2 onChangeHandler={onChangeHandler} />;
      case 2:
        return <ComplaintSubmissionSubform3 complaint={newComplaint} />;
      default:
        throw new Error('Unknown step');
    }
  }


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Submit a complaint
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Your complaint has been submitted successfully
              </Typography>
              <Typography variant="subtitle1">
                Thank you for your concern. We are Looking into it. Your ticket number is #2001539.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Confirm' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </ThemeProvider>
  );
}