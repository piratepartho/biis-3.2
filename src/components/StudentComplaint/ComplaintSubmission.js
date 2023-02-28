import React from "react";
import { FormControl } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const defaultAnonimity = true;

const ComplaintSubmissionForm = () => {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [location, setLocation] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [anonymity, setAnonymity] = useState(defaultAnonimity);

  const subjectChangeHandler = (event) => {
    setSubject(event.target.value);
  };

  const bodyChangeHandler = (event) => {
    setBody(event.target.value);
  };

  const locationChangeHandler = (event) => {
    setLocation(event.target.value);
  };

  const submitComplaintHandler = () => {
    console.log({
      subject: subject,
      location: location,
      body: body,
      anonymity: anonymity,
    });
    // console.log('hello');
  };

  const anonymityChangeHandler = (event) => {
    setAnonymity(event.target.checked);
  };

  return (
    <React.Fragment>
      <Box
        component="form"
        sx={{
          // width: 300,
          "& .MuiTextField-root": { m: 1, width: "50ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-required"
            label="Subject"
            onChange={subjectChangeHandler}
          />
        </div>

        <div>
          <TextField
            id="outlined-required"
            label="Body"
            multiline
            rows={4}
            maxRows={10}
            onChange={bodyChangeHandler}
          />
        </div>

        <div>
          <FormControl sx={{ m: 1, width: 150 }} size="small">
            <InputLabel id="demo-simple-select-autowidth-label">
              Location
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={location}
              onChange={locationChangeHandler}
              label="Location"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Twenty</MenuItem>
              <MenuItem value={21}>Twenty one</MenuItem>
              <MenuItem value={22}>Twenty one and a half</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div>
          <FormGroup>
            {defaultAnonimity ? (
              <FormControlLabel
                onChange={anonymityChangeHandler}
                control={<Switch defaultChecked />}
                label="Anonymity"
              />
            ) : (
              <FormControlLabel
                onChange={anonymityChangeHandler}
                control={<Switch />}
                label="Anonymity"
              />
            )}
          </FormGroup>
          <Button variant="outlined" onClick={submitComplaintHandler}>
            Submit
          </Button>
        </div>
      </Box>
    </React.Fragment>
  );
};

export default ComplaintSubmissionForm;
