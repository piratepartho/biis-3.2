import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { FormControl, TextField } from '@mui/material';
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const usernameChangeHandler = (event) => {
        setUserName(event.target.value);
        // console.log(username);
    }

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    }

    const loginHandler = () => {
        if(username === "e" && password === "1"){
            navigate("/student/");
        } else alert("login error");
    }

    return(
        <React.Fragment>
            <FormControl>
                <TextField name="username" label="Name" type="text" value={username} onChange={usernameChangeHandler} />
                <TextField name="password" label="Password" type="text" value={password} onChange={passwordChangeHandler} onSubmit={loginHandler} />
                <Button variant='contained' onClick={loginHandler}> Login    </Button>
            </FormControl>  
        </React.Fragment>
    );
}

export default Login;