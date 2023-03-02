import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import DoneIcon from '@mui/icons-material/Done';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { red } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import DetailedComplaintModal from './DetailedComplaintModal';
import TagChips from './TagChips';

export default function ComplaintCard() {


  return (
    // set a fixed height for the card
    // set a fixed width for the card
    
    <Card sx={{ width: 700, height: 250 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography variant="h5" color="text.secondary">
          This impressive paella is a perfect party dish 
        </Typography>
        <TagChips/>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="action taken into account">
          <DirectionsRunIcon/>
        </IconButton>
        <IconButton aria-label="done">
          <DoneIcon/>
        </IconButton>
        <IconButton aria-label="forward">
          <ForwardToInboxIcon/>
        </IconButton>
        <IconButton aria-label="markspam">
          <DeleteSweepIcon/>
        </IconButton>
        <DetailedComplaintModal/>
      </CardActions>
    </Card>
  );
}