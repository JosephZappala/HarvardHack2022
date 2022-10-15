import {React, useState, useEffect} from 'react';
import wall from './Images/MainWall.jpeg';
import Items from './Items';
import styles from './Pages.module.css';
import { useNavigate } from "react-router-dom"

function UserPage(props) {
  let [items, setItems] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    fetch("/api/page", {
      headers:{
        "accepts":"application/json"

      },
      body: JSON.stringify({
        name: props.account,
        
      })
    })
    .then(response => response.json())
    .then(data => setItems(data.message))
  },[])

  return (
    <div >
      {(sessionStorage.getItem("user") === null || sessionStorage.getItem("user") !== props.account) ? (<h1>{sessionStorage.getItem("user")}'s Page</h1>):(<h1>My Page</h1>)}
      {(sessionStorage.getItem("user") === null || sessionStorage.getItem("user") !== props.account) ? (<p></p>):(<button onClick={() => navigate("/editpage")}> Edit Page </button>)}
      <div id="mainRoom"> 
      <img src={wall} draggable="false" className={styles.mainImage} alt="Main Wall"></img>
      {items === null ? (<p></p>):(
      
      items.map((key) => 
        <Items notEdit={true} albumName={key.albumName} link={key.link} xcord={key.xcord} ycord={key.ycord} albumImg={key.albumImg}></Items>
        ))
      }

      </div>
      
    </div>
  );
}
  
export default UserPage ;