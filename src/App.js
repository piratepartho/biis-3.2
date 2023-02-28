import { Container } from '@mui/material';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Login from './components/Login/Login';
import ReviewerHomePage from './components/Reviewer/ReviewerHomePage';
import StudentComplaintHomePage from './components/StudentComplaint/StudentComplaintHomePage';

export const App = (props) => {
    return (
        <Container>
            {/* show navbar */}
            {/* <Login /> */}
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/reviewer/' element={<ReviewerHomePage/>}/>
                <Route path='/student/' element={<StudentComplaintHomePage/>}/>
                {/* <Route path='/student/checkout' element={<Checkout/>}/> */}
            </Routes>
        </Container>
    );
}

export default App;