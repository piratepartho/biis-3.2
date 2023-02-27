import { FormControl } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import * as React from 'react';

export default function ComplaintSubmissionForm() {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  const [loc, setLoc] = React.useState('');

  const handleChange = (event) => {
    setLoc(event.target.value);
  };
  return (
    <Box
      component="form"
      sx={{
        // width: 300,
        '& .MuiTextField-root': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-required"
          label="Subject"
          
        />

        


        
      </div>
      
      <div>
        <TextField
          id="outlined-required"
          label="Body"
          multiline
          rows={4}
          maxRows={10}
        />
      </div>
      
      <div>
        <FormControl sx={{ m: 1, width: 150 }} size="small">
          <InputLabel id="demo-simple-select-autowidth-label">Location</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={loc}
            onChange={handleChange}
        
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
        
        {/* <FormControl sx={{ m: 1, width: 150 }} size="small">
          <InputLabel id="demo-simple-select-autowidth-label">Tag</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={tag}
            onChange={handleChange}
        
            label="Tag"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Twenty</MenuItem>
            <MenuItem value={21}>Twenty one</MenuItem>
            <MenuItem value={22}>Twenty one and a half</MenuItem>
          </Select>
        </FormControl> */}
      </div>

      <div>
        <FormGroup>
          <FormControlLabel control={<Switch defaultChecked />} label="Anonymity" />
        </FormGroup>
        <Button variant="outlined">Submit</Button>
      </div>

        
        
      
    </Box>
  );
}