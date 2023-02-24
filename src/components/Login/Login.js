import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

const Login = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const usernameChangeHandler = (event) => {
        setUserName(event.target.value);
        // console.log(username);
    }

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    }

    const loginHandler = () => {
        console.log("here");
        if(username === "evan" && password === "1234"){
            alert("Login done");
        } else console.log("error");
    }

    
    return(
        <React.Fragment>
            <TextField name="username" label="Name" type="text" value={username} onChange={usernameChangeHandler} />
            <TextField name="password" label="Password" type="text" value={password} onChange={passwordChangeHandler} onSubmit={loginHandler} />
            <Button variant='contained' onClick={loginHandler}> Hello World </Button>
        </React.Fragment>
    );
}

export default Login 