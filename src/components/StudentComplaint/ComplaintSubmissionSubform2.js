// import { TextareaAutosize } from '@mui/material';
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useEffect,useState } from "react";
import axios from "axios";
import { SelectChangeEvent } from "@mui/material/Select";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export default function ComplaintSubmissionSubform2(props) {
  const [location, setLocation] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    axios
    .get(`https://biis-backend.onrender.com/student/complaint/locations`, {
      headers: {
        Authorization: `Bearer ${cookies.get("TOKEN")}`,
      },
    })
    .then((response) => {
      setLocationList( response.data.map((location) => location.location_name) );
      console.log(locationList);
    })
    .catch((error) => {
      alert("location fetch failure, please reload");
    });
  },[])

  const locationChange = () => {
    props.onChangeHandler({location})
  }


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Tell us about your complaint in details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="body"
            label="Details of your complaint"
            fullWidth
            autoComplete="Details of your complaint"
            variant="standard"
            name="body"
            multiline
            rows={4}
          />
        </Grid>
        <Grid>
          <FormControl variant="standard" sx={{ m: 3, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">Location</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              label="Location"
            > 
              <MenuItem value="">
                <em>None</em>
                </MenuItem>
              {locationList.map((location) => (
                <MenuItem key={location} onClick={locationChange}>{location}</MenuItem>
              ))}
              
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
