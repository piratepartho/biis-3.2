import { Container } from '@mui/material';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Login from './components/Login/Login';
import ReviewerHomePage from './components/Reviewer/ReviewerHomePage';
import StudentSearchComplaint from './components/StudentComplaint/StudentSearchComplaint';
import ComplaintSubmissionForm from './components/StudentComplaint/ComplaintSubmissionForm';


export const App = (props) => {
    return (
        <Container>
            {/* show navbar */}
            {/* <Login /> */}
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/reviewer' element={<ReviewerHomePage/>}/>
                <Route path='/student' element={<StudentSearchComplaint/>}/>
                <Route path='/student/search' element={<StudentSearchComplaint/>}/>
                <Route path='/student/submit' element={<ComplaintSubmissionForm/>}/>
            </Routes>
        </Container>
    );
}

export default App;