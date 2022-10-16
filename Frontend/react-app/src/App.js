import React, { Fragment } from 'react';
import './App.css';
import styles from './Pages/Pages.module.css';

import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate, Link} from 'react-router-dom';

import UserPage from './Pages/UserPage';
import Friends from './Pages/Friends';
import Library from './Pages/Library';
import Login from './Pages/Login';
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
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';




import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import Typography from '@mui/material/Typography';

import Grid from '@mui/material/Grid';
import SearchResult from './Pages/SearchResults';
import HomePage from './Pages/HomePage';







const darkTheme = createTheme({
    palette: {
      
        mode: 'dark',
      
    },
  });



  
  
function App() {


  

return (

  

    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
  

<Grid container spacing={2}  >




  <Grid item xs={2} color = "white" fontFamily={"Apple Color Emoji"} align = 'left'>

  <React.Fragment>

  <Paper
      sx={{
        p: 2,
        maxWidth: 250,
        margin: 3,
        flexGrow: 1,
        backgroundColor: '#1db954',
        // textAlign: 'center',
        // align: 'left',
        justifyContent: 'flex-end' 
      }}
    >


  <Timeline position="alternate" align="left">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' ,flex: 0.2, align : "left" }}
          align="right"
          
          variant="body2"
          color="text.secondary"
        >
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot  sx={{
           
        }}>
            <LibraryMusicIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '80px', px: 2 , color : 'black', fontSize : 15, fontWeight: 700}}>
          <Typography variant="h6" component="span" >
            1970s
          </Typography>
          <Typography> Catch you on the flip side</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0',flex: 0.2, align : "left" }}
          variant="body2"
          color="text.secondary"
        >
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" >
            <LibraryMusicIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '80px', px: 4, align : "left"  }}>
          <Typography variant="h6" component="span">
            1980s
          </Typography>
          <Typography> Gnarly</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <LibraryMusicIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '80px', px: 2 }}>
          <Typography variant="h6" component="span">
            1990s
          </Typography>
          <Typography>Get jiggy</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
            <LibraryMusicIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '80px', px: 4, align : "left" }}>
          <Typography variant="h6" component="span">
            2000s
          </Typography>
          <Typography>BFF </Typography>
        </TimelineContent >
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="primary">
            <LibraryMusicIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '80px', px: 2, align : "left" }}>
          <Typography variant="h6" component="span" fontFamily={'sans-serif'}>
            2010s
          </Typography>
          <Typography> Chillax</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
          <TimelineDot color="primary">
            <LibraryMusicIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '80px', px: 4, align : "left" }}>
          <Typography variant="h6" component="span">
            2020s
          </Typography>
          <Typography> Slaps</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </Paper>
    </React.Fragment>
  </Grid>



  <Grid item xs={10}>


<Fragment>
<Nav></Nav>
    <div className={styles.appBackground}>
    <Routes>
        <Route path='/'  element={<HomePage />} />
        <Route path='/mypage' element={<UserPage account={sessionStorage.getItem("user")}/>} />
        <Route path='/friends' element={<Friends />} />
        <Route path='/library' element={<Library /> } />
        <Route path='/settings' element={<></> } />
        <Route path='/editpage' element={<EditPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/search' element={<SearchResult />} />
    </Routes>
    </div>
    </Fragment>
       
  </Grid>
</Grid>
  
    </ThemeProvider>
   
);
}
  
export default App;


