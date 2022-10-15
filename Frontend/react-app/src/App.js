import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import UserPage from './Pages/UserPage';
import Friends from './Pages/Friends';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';


const darkTheme = createTheme({
    palette: {
      
        mode: 'dark',
      
    },
  });
import EditPage from './Pages/EditPage';
  
function App() {

 

return (
  

    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
       <Router>
        <Navbar />
            <Routes>
                <Route path='/'  element={<h1>WELCOME</h1>} />
                <Route path='/mypage' element={<PersonalPage />} />
                <Route path='/friends' element={<Friends />} />
                <Route path='/blogs' element={<></> } />
                <Route path='/settings' element={<PersonalPage />} />
                <Route path='/create' element={<PersonalPage />} />
            </Routes>
        </Router>
  
    </ThemeProvider>
   
);
}
  
export default App;