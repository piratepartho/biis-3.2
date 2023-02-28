// import { TextareaAutosize } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import MultipleSelectChip from './MultipleSelectChip';



export default function ComplaintSubmissionSubform2() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
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
            multiline
            rows={4}
          />
        </Grid>
        <Grid>

        <FormControl variant="standard" sx={{ m: 3, minWidth: 120 }}>
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
        <Grid>
          <MultipleSelectChip/>
        </Grid>
        
      </Grid>
    </React.Fragment>
  );
}