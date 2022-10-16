import {React, useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from './Pages.module.css';


function Friends() {
  let [friends, setFriends] = useState(null)
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const style = {
        position: 'absolute',
        borderRadius: '5%',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        height: '70%',
        bgcolor: 'white',
        opacity: 0.8,
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

  function openPopUp() {
    setOpen(true)
  }

  useEffect(() => {
    fetch("/api/friends", {
      headers:{
        "accepts":"application/json"
      }
    })
    .then(response => response.json())
    .then(data => setFriends(data.message))
  },[])

  return (
    <div >
      <h1>My Friends</h1>
      <button onClick={openPopUp}>Add New Friend</button>
      <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    
                    <Typography id="modal-modal-description" sx={{ width: "100%" }}>
                        <h1>Search New Friends</h1>
                    </Typography>
                </Box>
            </Modal>
      {friends === null ? (<p>You have no friends</p>):(
      <ul>
        {friends.map((key) => 
          <li className={styles.searchItem}>{key}</li>
        )}
        
      </ul>)}
      
    </div>
  );
}
  
export default Friends ;