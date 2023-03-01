import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";

import Box from "@mui/material/Box";

import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";

import * as React from "react";
import { useNavigate } from "react-router";
import { Button } from "@mui/material";
import Cookies from "universal-cookie";

const drawerWidth = 240;
const cookies = new Cookies();

const MySidebar = (props) => {
  const elements = ["Search", "File A Complaint"];
  const urls = ["/student/search", "/student/submit"];
  const navigate = useNavigate();
  const logout = () => {
    cookies.remove("TOKEN", { path: "/" });
    navigate("/");
  }
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {elements.map((text, index) => (
            <ListItem
              key={index}
              disablePadding
              onClick={() => navigate(urls[index])}
            >
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
      <Button type="submit" color='warning' onClick={() => logout()}>
        Logout
      </Button> 
    </Drawer>
  );
};

export default MySidebar;
