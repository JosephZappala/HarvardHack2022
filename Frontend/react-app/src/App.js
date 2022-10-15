import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate, Link} from 'react-router-dom';

import UserPage from './Pages/UserPage';
import Friends from './Pages/Friends';
import Library from './Pages/Library';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import EditPage from './Pages/EditPage';
import Nav from './Nav'

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

import Grid from '@mui/material/Grid';







const darkTheme = createTheme({
    palette: {
      
        mode: 'dark',
      
    },
  });
  
function App() {
  
  

return (

    
  

    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <Grid container spacing={2}>
  <Grid item xs={2}>
  <React.Fragment>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            decade1
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent></TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            decade2
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent></TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            decade3
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent></TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            decade4
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent></TimelineContent>
        </TimelineItem>
      </Timeline>
    </React.Fragment>
  </Grid>
  <Grid item xs={10}>
  { 
    <Fragment>
    <Nav></Nav>

    <Routes>
        <Route path='/'  element={<h1>WELCOME</h1>} />
        <Route path='/mypage' element={<UserPage />} />
        <Route path='/friends' element={<Friends />} />
        <Route path='/library' element={<Library /> } />
        <Route path='/settings' element={<></> } />
        <Route path='/editpage' element={<EditPage />} />
    </Routes>
    </Fragment>
}       
  </Grid>
</Grid>


       
  
    </ThemeProvider>
   
);
}
  
export default App;


