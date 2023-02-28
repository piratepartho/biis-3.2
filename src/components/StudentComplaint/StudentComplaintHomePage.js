import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import MySidebar from '../Sidebar/MySidebar';
import ComplaintSubmissionForm from './ComplaintSubmissionForm';

// const drawerWidth = 240;
const sidebarElements = ['Search', 'File a Complaint'];

export default function StudentComplaintHomePage() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            BIIS Complaint Management System
          </Typography>
        </Toolbar>
      </AppBar>
      <MySidebar elements={sidebarElements}/>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <ComplaintSubmissionForm />
      </Box>
    </Box>
  );
}
