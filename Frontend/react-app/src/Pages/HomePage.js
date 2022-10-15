import {React} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



function HomePage() {

  return (
    <div >
      <h1>Welcome</h1>
      <TextField
        id="userName"
        label="Name"
        />
    <Button onClick={() => {sessionStorage.setItem("user", document.getElementById("userName").value);document.getElementById("userName").value = ""}}>Sign In</Button>
      
    </div>
  );
}
  
export default HomePage;