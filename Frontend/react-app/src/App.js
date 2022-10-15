import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import UserPage from './Pages/UserPage';
import Friends from './Pages/Friends';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import EditPage from './Pages/EditPage';



const darkTheme = createTheme({
    palette: {
      
        mode: 'dark',
      
    },
  });
  
function App() {

return (
  

    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
       <Router>
        <Navbar />
            <Routes>
                <Route path='/'  element={<h1>WELCOME</h1>} />
                <Route path='/mypage' element={<UserPage />} />
                <Route path='/friends' element={<Friends />} />
                <Route path='/blogs' element={<></> } />
                <Route path='/settings' element={<></> } />
                <Route path='/editpage' element={<EditPage />} />
            </Routes>
        </Router>
  
    </ThemeProvider>
   
);
}
  
export default App;