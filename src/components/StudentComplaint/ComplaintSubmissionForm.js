import { FormControlLabel } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import ComplaintSubmissionSubform1 from './ComplaintSubmissionSubform1';
import ComplaintSubmissionSubform2 from './ComplaintSubmissionSubform2';
import ComplaintSubmissionSubform3 from './ComplaintSubmissionSubform3';
import MultipleSelectChip from './MultipleSelectChip';

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

function getStepContent(step) {
  switch (step) {
    case 0:
      return <ComplaintSubmissionSubform1 />;
    case 1:
      return <ComplaintSubmissionSubform2 />;
    case 2:
      return <ComplaintSubmissionSubform3 />;
    default:
      throw new Error('Unknown step');
  }
}

const theme = createTheme();

export default function ComplaintSubmissionForm() {
  const [activeStep, setActiveStep] = React.useState(0);

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Company name
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            File a complaint
          </Typography>
          {/* <Grid container spacing={3}> */}
        <Grid item xs={12}>
          <TextField
            required
            id="subject"
            name="subject"
            label="subject"
            fullWidth
            // autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        
        
        
        
        
      {/* </Grid> */}
      <Box sx={{ height: 20 }} />
      {/* <Grid container spacing={3}> */}
        <Grid item xs={12}>
          <TextField
            required
            id="body"
            label="Details of your complaint"
            fullWidth
            autoComplete="Details of your complaint"
            variant="standard"
            multiline
            rows={4}
          />
        </Grid>
        <Box sx={{ height: 20 }} />
        <Grid>

        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Location"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        </FormControl>

        </Grid>
        <Box sx={{ height: 20 }} />
        <Grid>
          <MultipleSelectChip/>
        </Grid>
        <Box sx={{ height: 20 }} />
      {/* </Grid> */}
      <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Proceed as anonymous"
          />
        </Grid>
        <Box sx={{ height: 20 }} />
      <Grid>
      <Button variant="contained">Submit</Button>
      </Grid>

        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}