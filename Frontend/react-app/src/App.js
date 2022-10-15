import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import UserPage from './Pages/UserPage';
import Friends from './Pages/Friends';
import EditPage from './Pages/EditPage';
  
function App() {
return (



    <Router>
    <Navbar />
    <Routes>
        <Route path='/'  element={<h1>WELCOME</h1>} />
        <Route path='/mypage' element={<UserPage />} />
        <Route path='/friends' element={<Friends />} />
        <Route path='/blogs' element={<></>} />
        <Route path='/settings' element={<></>} />
        <Route path='/create' element={<></>} />
        <Route path='/editpage' element={<EditPage />} />
    </Routes>
    </Router>
);
}
  
export default App;