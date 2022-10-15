import {React, useState, useEffect} from 'react';


function Friends() {
  let [friends, setFriends] = useState(null)

  useEffect(() => {
    fetch("/friendlist", {
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
      {friends === null ? (<p>You have no friends</p>):(
      <ul>
        {friends.map((key, index) => 
          <li>{key}</li>
        )}
        
      </ul>)}
      
    </div>
  );
}
  
export default Friends ;