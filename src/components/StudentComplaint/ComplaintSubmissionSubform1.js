import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useState, useEffect } from 'react';

export default function ComplaintSubmissionSubform1(props) {
  const [anonymity, setAnonymity] = useState(true);
  const anonymityChangeHandler = (event) => {
    setAnonymity(!anonymity);
  }

  useEffect(()=>{
    props.anonymityChangeHandler(anonymity);
  },[anonymity]);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Add Subject
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="subject"
            name="subject"
            label="subject"
            fullWidth
            variant="standard"
            onChange={props.onChangeHandler}
          />
        </Grid>
        
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="anonymity" onChange={anonymityChangeHandler}/>
            }
            label="Proceed as anonymous"
          />

          
        </Grid>
      </Grid>
    </React.Fragment>
  );
}