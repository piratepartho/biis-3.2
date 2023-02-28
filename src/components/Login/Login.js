import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import axios from "axios";

const theme = createTheme();

const API = "http://localhost:5000";



const Login = (props) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const usernameChangeHandler = (event) => {
    setUserName(event.target.value);
    // console.log(username);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  async function postLoginResponse(username, password) {
    const response = await fetch(`${API}/login`, {
      method: "POST",
      mode: 'cors',
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      }
    });

    if(!response.ok){
        // console.log(response.status);
        console.log('here');
        throw new Error("error");
        return false;
    }

    const data = await response.json();
    console.log(data);
    return true;
    
  }

  const loginHandler = async (e) => {
    e.preventDefault();

    // try{
    //     postLoginResponse(username, password);
    //     // console.log("logged in");
    //     navigate("/student");
    // }
    // catch{
    //     // console.log("failed");
    //     navigate("/reviewer");
    // }
    
    
    

    fetch(`${API}/login`, {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.message === "login successful") {
          navigate("/student");
        }
      })
      .catch((err) => console.log("Error: " + err));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <Box
            component="form"
            onSubmit={loginHandler}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="ID"
              label="ID"
              name="ID"
              autoComplete="ID"
              autoFocus
              value={username}
              onChange={usernameChangeHandler}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={passwordChangeHandler}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
