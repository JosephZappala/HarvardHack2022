import {React, useState, useEffect, Fragment} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from './Pages.module.css';
import { useNavigate } from 'react-router-dom';


function Friends() {
  let [friends, setFriends] = useState(null)
  const [addOpen, setAddOpen] = useState(false);
  const [reqOpen, setReqOpen] = useState(false);
  const [people, setPeople] = useState(null);
  const [requests, setRequests] = useState(null);
  const handleAddClose = () => setAddOpen(false);
  const handleReqClose = () => setReqOpen(false);
  const navigate = useNavigate()


  const style = {
        position: 'absolute',
        borderRadius: '5%',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        height: '70%',
        bgcolor: 'green',
        opacity: 0.8,
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

  function openPopUpAdd() {
    
      fetch("/api/users", {
        headers:{
          "accepts":"application/json",
        }
      })
      .then(response => response.json())
      .then(data => setPeople(data.message))
    
    setAddOpen(true)
  }

  function openPopUpReq() {
    
    fetch("/api/reqs", {
      headers:{
        "accepts":"application/json",
        "name": sessionStorage.getItem("user")
      }
    })
    .then(response => response.json())
    .then(data => setRequests(data.message))
  
  setReqOpen(true)
}

function addFriend(friend) {
    
  fetch("/api/acceptreqs", {
    'method':'POST',
    headers:{
      "accepts":"application/json",
      "name": sessionStorage.getItem("user"),
      "friend": friend
    }
  })
  
}

function addRequest(friend) {
    
  fetch("/api/makereq", {
    'method':'POST',
    headers:{
      "accepts":"application/json",
      "name": sessionStorage.getItem("user"),
      "friend": friend
    }
  })
  
}

  useEffect(() => {
    fetch("/api/friends", {
      headers:{
        "accepts":"application/json",
        "name": sessionStorage.getItem("user")
      }
    })
    .then(response => response.json())
    .then(data => setFriends(data.message))
  },[])

  return (
    <div >
      <h1>My Friends</h1>
      <button className={styles.topButtons} style={{width:"40%"}} onClick={openPopUpAdd}>Add New Friend</button>
      <button className={styles.topButtons} style={{width:"40%"}} onClick={openPopUpReq}>View Requests</button>
      <Modal
                open={addOpen}
                onClose={handleAddClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    
                    <Typography id="modal-modal-description" sx={{ width: "100%" }}>
                        <h1>Search New Friends</h1>
                        {people === null ? (<p>No people with that name found</p>):(
                        <ul>
                          {people.map((key) => 
                          <Fragment>
                            <li className={styles.searchPeople}>{key}</li>
                            <button onClick={addFriend(key)} style={{float:"right"}}>Add Friend</button>
                            </Fragment>
                          )}
                          
                        </ul>)}
                    </Typography>
                </Box>
            </Modal>
        <Modal
                open={reqOpen}
                onClose={handleReqClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    
                    <Typography id="modal-modal-description" sx={{ width: "100%" }}>
                        <h1>View Requests</h1>
                        {requests === null ? (<p>You have no requests</p>):(
                          requests.map((key) => 
                            <button onClick={addRequest(key)} className={styles.searchItem}>{key}</button>
                          )
                          
                        )}
                    </Typography>
                </Box>
            </Modal>
      {friends === null ? (<p>You have no friends</p>):(
      
        friends.map((key) => 
          <button onClick={() => navigate('/page/' + key)}className={styles.searchItem}>{key}</button>
        )
        
      )}
      
    </div>
  );
}
  
export default Friends ;