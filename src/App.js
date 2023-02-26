import { Container } from '@mui/material';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Login from './components/Login/Login';
import ReviewerHomePage from './components/Reviewer/ReviewerHomePage';

export const App = (props) => {
    return (
        <Container>
            {/* show navbar */}
            {/* <Login /> */}
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/reviewer/' element={<ReviewerHomePage/>}/>
            </Routes>
        </Container>
    );
}

export default App;