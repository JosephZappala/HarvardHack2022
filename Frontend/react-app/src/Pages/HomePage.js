import {React} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import myGif from './Images/SignIn.gif';
import Paper from '@mui/material/Paper';



function HomePage() {

  return (
    <div >
      <h1>Welcome</h1>

      <TextField
      
        id="userName"
        label="Name"
        />
    <Button onClick={() => {sessionStorage.setItem("user", document.getElementById("userName").value);document.getElementById("userName").value = ""}}>Sign In</Button>

    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode = 'rgb(165, 107, 65)',
      }}
    >
            <img src={myGif} alt="my-gif" />
     
    </Paper>
      
      
    </div>
  );
}
  
export default HomePage;