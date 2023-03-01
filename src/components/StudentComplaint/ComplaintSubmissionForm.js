import { AppBar, FormControlLabel } from "@mui/material";
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
import * as React from "react";
import MultipleSelectChip from "./MultipleSelectChip";
import MySidebar from "../Sidebar/MySidebar";
import { Toolbar } from "@mui/material";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";

const theme = createTheme();
const cookies = new Cookies();

export default function ComplaintSubmissionForm() {
  const [locList, setLocList] = useState([]);
  const [location, setLocation] = useState("");
  const [anonymity, setAnonymity] = useState(false);
  const [locationId, setLocationId] = useState([]);

  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");


  useEffect(() => {
    axios
      .get(`https://biis-backend.onrender.com/student/complaint/locations`, {
        headers: {
          Authorization: `Bearer ${cookies.get("TOKEN")}`,
        },
      })
      .then((response) => {
        setLocList(response.data.map((location) => location.location_name));
        setLocationId(...locationId, response.data.map((location) => location));
        console.log(locList);
      })
      .catch((error) => {
        alert("location fetch failure, please reload");
      });
  }, []);


  const handleChange = (event) => {
    // setAge(event.target.value);
    setLocation(event.target.value);
  };

  const anonymityChangeHandler = () => {
    setAnonymity(!anonymity);
  }

  const subjectChangeHandler = (event) => {
    setSubject(event.target.value);
  }

  const bodyChangeHandler = (event) => {
    setBody(event.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(subject,body,location,anonymity);
    
    console.log(locationId);
    const id = (locationId.find(locationArr => locationArr.location_name === location)._id);
    console.log(id);

    axios
      .post(`https://biis-backend.onrender.com/student/complaint`, {
        subject: subject,
        complaint_body: body,
        location: {
          _id: id,
          location_name: location,
        },
        tags: [{
          _id: "63f9f8fb0cfe50339f9ab44a",
          tag_name: "Food Quality"
        }],
        headers: {
          Authorization: `Bearer ${cookies.get("TOKEN")}`,
        },
      })
      .then((response) => {
        console.log(response);
        alert("submitted\n");
      })
      .catch((error) => {
        console.log(error);
        alert("submission invalid");
      });

  }


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
              onChange={subjectChangeHandler}
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
                  return <MenuItem value={location} key={location} >{location}</MenuItem>
                })};
              </Select>
            </FormControl>
          </Grid>
          <Box sx={{ height: 20 }} />
          {/* <Grid>
            <MultipleSelectChip />
          </Grid> */}
          <Box sx={{ height: 20 }} />
          {/* </Grid> */}
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox color="secondary" name="anonymity" value="yes" onChange={anonymityChangeHandler} />
              }
              label="Proceed as anonymous"
            />
          </Grid>
          <Box sx={{ height: 20 }} />
          <Grid>
            {location !== "" && <Button variant="contained" onClick={submitHandler}>Submit</Button>}
            {location === "" && <Button variant="disabled">Submit</Button>}
          </Grid>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
