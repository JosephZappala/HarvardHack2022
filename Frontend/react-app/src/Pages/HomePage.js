import {React} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import myGif from './Images/SignIn.gif';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';



function HomePage() {
  const navigate = useNavigate()

  return (
    <div >
      <h1>Welcome</h1>

     

    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        marginRight:"-75px",
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode = 'rgb(165, 107, 65)',
      }}
    >
        
     
            <Grid container spacing={2}>


            <Grid item xs={8}>
              <img src={myGif} alt="my-gif" />
            </Grid>
            <Grid item xs={4}>
            <TextField
      
      id="userName"
      label="Name"
      />
  
    <Button onClick={() => {sessionStorage.setItem("user", document.getElementById("userName").value);document.getElementById("userName").value = "";navigate('/mypage')}}>Sign In</Button>
            </Grid>
          </Grid>



    </Paper>
      
      
    </div>
  );
}
  
export default HomePage;