import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import PersonalPage from './Pages/PersonalPage';
import Friends from './Pages/Friends';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route path='/'  element={<h1>WELCOME</h1>} />
        <Route path='/mypage' element={<PersonalPage />} />
        <Route path='/friends' element={<Friends />} />
        <Route path='/blogs' element={<PersonalPage />} />
        <Route path='/settings' element={<PersonalPage />} />
        <Route path='/create' element={<PersonalPage />} />
    </Routes>
    </Router>
);
}
  
export default App;