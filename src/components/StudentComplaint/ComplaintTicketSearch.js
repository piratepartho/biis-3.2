import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import ComplaintTicketSearchInfo from './ComplaintTicketSearchInfo';

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





const theme = createTheme();

export default function ComplaintTicketSearch() {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
            <Typography component="h1" variant="h4" align="center">
                Search Ticket
            </Typography>

            <TextField fullWidth label="Search" id="search" />
            <Box sx={{ height: 50 }} />
            
            

            <React.Fragment>
              <ComplaintTicketSearchInfo/>
              
            </React.Fragment> 
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}