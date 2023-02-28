import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import ComplaintTicketSearchInfo from "./ComplaintTicketSearchInfo";
import axios from "axios";
import Cookies from "universal-cookie";
import { useState } from "react";

const cookies = new Cookies();

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function ComplaintTicketSearch() {
  const [ticketVal, setTicketVal] = React.useState("");
  const [foundComplaint, setFoundComplaint] = React.useState(false);

  // const complaint = {subject: '', body: '', location: ''}

  const [complaint, setComplaint] = useState({});

  const ticketValHandler = (event) => {
    setTicketVal(event.target.value);
  };

  const submitTicketHandler = (e) => {
    e.preventDefault();

    axios
      .get(`http://localhost:5000/student/complaint/${ticketVal}`, {
        headers: {
          Authorization: `Bearer ${cookies.get("TOKEN")}`,
        },
      })
      .then((response) => {
        console.log(response);
        setComplaint({
          status: response.data.status,
          subject: response.data.subject,
          body: response.data.complaint_body,
          location: response.data.location.location_name,
        });
        setFoundComplaint(true);
      })
      .catch((error) => {
        console.log(error);
        alert("Invalid Ticket");
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography variant="h5" align="center">
            Search Ticket
          </Typography>
          <form onSubmit={submitTicketHandler}>
            <TextField
              fullWidth
              label="Search"
              id="search"
              value={ticketVal}
              onChange={ticketValHandler}
              sx ={{my:6 , border: '2px'}}
            />
            {/* <Box sx={{ height: 40 }} /> */}
          </form>
          <>
            {foundComplaint && (
              <ComplaintTicketSearchInfo complaint={complaint}/> 
              
            )}
          </>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
