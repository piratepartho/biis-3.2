import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export default function ComplaintSubmissionSubform1() {
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
            // autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        
        
        
        
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Proceed as anonymous"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}