import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import { Container } from '@mui/material';

export const App = (props) => {
    return (
        <Container>
            {/* show navbar */}
            {/* <Login /> */}
            <Routes>
                <Route path='/' element={<Login/>}/>
            </Routes>
        </Container>
    );
}

export default App;