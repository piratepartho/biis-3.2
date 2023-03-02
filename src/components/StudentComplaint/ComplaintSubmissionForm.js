import React from 'react'
import { useEffect, useState } from "react";
import { AppBar, FormControlLabel, Modal } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import MySidebar from "../Sidebar/MySidebar";
import { Toolbar } from "@mui/material";
import Cookies from "universal-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const theme = createTheme();
const cookies = new Cookies();

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

let modalMessage = "No message to show";
let redirectTo = "/student";

export default function ComplaintSubmissionForm() {
  const navigate = useNavigate();
  const [locList, setLocList] = useState([]);
  const [location, setLocation] = useState("");
  const [anonymity, setAnonymity] = useState(false);
  const [locationId, setLocationId] = useState([]);

  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const [showModal, setShowModal] = useState(false);

  const redirectHandler = () => {
    navigate(redirectTo);
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/student/complaint/locations`, {
        headers: {
          Authorization: `Bearer ${cookies.get("TOKEN")}`,
        },
      })
      .then((response) => {
        setLocList(response.data.map((location) => location.location_name));
        setLocationId(
          ...locationId,
          response.data.map((location) => location)
        );
        console.log(locList);
      })
      .catch((error) => {
        setShowModal(true);
        modalMessage="Location Fetch Failed. Try Again";
        redirectTo="/";
      });
  }, []);

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const anonymityChangeHandler = () => {
    setAnonymity(!anonymity);
  };

  const subjectChangeHandler = (event) => {
    setSubject(event.target.value);
  };

  const bodyChangeHandler = (event) => {
    setBody(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(subject, body, location, anonymity);

    console.log(locationId);
    const id = locationId.find(
      (locationArr) => locationArr.location_name === location
    )._id;
    console.log(id);
    console.log(cookies.get("TOKEN"));

    axios
      .post(
        `${process.env.REACT_APP_API_URL}/student/complaint`,
        {
          params: {
            subject: subject,
            complaint_body: body,
            location: {
              _id: id,
              location_name: location,
            },
            tags: [
              {
                _id: "63f9f8fb0cfe50339f9ab44a",
                tag_name: "Food Quality",
              },
            ],
            anonymity: anonymity,
          },
        },
        {
          headers: {
            authorization: `Bearer ${cookies.get("TOKEN")}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        modalMessage =
          "Complaint Submitted. Token : " + response.data.data.complaint_token;
        setShowModal(true);
        // alert("Submitted, Your Token: " + response.data.data.complaint_token);
      })
      .catch((error) => {
        setShowModal(true);
        modalMessage = "Submission Failed.";
      });

    setSubject("");
    setBody("");
    setLocation("");
    setAnonymity(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            BIIS Complaint Management System
          </Typography>
        </Toolbar>
      </AppBar>

      <MySidebar />

      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            File a complaint
          </Typography>
          <Grid item xs={12}>
            <TextField
              required
              id="subject"
              name="subject"
              label="subject"
              fullWidth
              variant="standard"
              onChange={subjectChangeHandler}
            />
          </Grid>
          <Box sx={{ height: 20 }} />
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
              onChange={bodyChangeHandler}
            />
          </Grid>
          <Box sx={{ height: 20 }} />
          <Grid>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                {location === "" ? "Location" : location}
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                onChange={handleChange}
                label="Location"
                value={location}
              >
                {locList.map((location) => {
                  return (
                    <MenuItem value={location} key={location}>
                      {location}
                    </MenuItem>
                  );
                })}
                ;
              </Select>
            </FormControl>
          </Grid>
          <Box sx={{ height: 20 }} />
          <Box sx={{ height: 20 }} />
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  color="secondary"
                  name="anonymity"
                  value="yes"
                  onChange={anonymityChangeHandler}
                />
              }
              label="Proceed as anonymous"
            />
          </Grid>
          <Box sx={{ height: 20 }} />
          <Grid>
            {location !== "" && subject !== "" && body !== "" && (
              <Button variant="contained" onClick={submitHandler}>
                Submit
              </Button>
            )}
            {(location === "" || subject === "" || body === "") && (
              <Button variant="disabled">Submit</Button>
            )}
          </Grid>
        </Paper>
        <Modal open={showModal} onClose={redirectHandler}>
          <Box
            m={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={style}
          >
            <Grid container>
              <Grid item align="center" sx={{width:"100%"}}>
                <Typography>
                  {modalMessage}
                </Typography>
              </Grid>
              <Box width="100%"></Box>
              <Grid item xs={4}  />
              <Grid item align="center" sx={{pt:2, width:"100%"}}>
                <Button onClick={redirectHandler} variant="contained">
                  Ok
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Modal>
      </Container>
    </ThemeProvider>
  );
}
