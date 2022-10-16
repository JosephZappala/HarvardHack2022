import {React, useState, useEffect} from 'react';
import wall from './Images/MainWall.jpeg';
import seven from './Images/pink70.jpg';

import eight from './Images/80s.png';
import nine from './Images/Terminator90s.png';
import zero from './Images/2000s.png';
import ten from './Images/2010s.jpg';
import twentie from './Images/2020s.png';


import Items from './Items';
import styles from './Pages.module.css';
import { useNavigate } from "react-router-dom"

function UserPage(props) {
  let [items, setItems] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    fetch("/api/page", {
      headers:{
        "accepts":"application/json",
        "name": sessionStorage.getItem("user")
      }
    })
    .then(response => response.json())
    .then(data => setItems(data.message))
  },[])

  return (
    <div >
      <h1>{sessionStorage.getItem("user")}'s Page</h1>
      {(sessionStorage.getItem("user") === null || sessionStorage.getItem("user") !== props.account) ? (<p></p>):(<button className={styles.topButtons} style={{width:"90%"}}onClick={() => navigate("/editpage")}> Edit Page </button>)}
      <div id="mainRoom"> 
      <img src={wall} draggable="false" className={styles.mainImage} alt="Main Wall"></img>
      {items === null ? (<p></p>):(
      
      items.map((key) => 
        <Items notEdit={true} albumName={key[1]} link={key[5]} xcord={key[7]} ycord={key[8]} albumImg={key[4]}></Items>
        ))
      }

      </div>
      <div id="20s"> 
      <img src={twentie} draggable="false" className={styles.mainImage} alt="Locked"></img>
      {items === null ? (<p></p>):(
      
      items.map((key) => 
        <Items notEdit={true} albumName={key[1]} link={key[5]} xcord={key[7]} ycord={key[8]} albumImg={key[4]}></Items>
        ))
      }
      </div>
      <div id="10s"> 
      <img src={ten} draggable="false" className={styles.mainImage} alt="Locked"></img>
      {items === null ? (<p></p>):(
      
      items.map((key) => 
        <Items notEdit={true} albumName={key[1]} link={key[5]} xcord={key[7]} ycord={key[8]} albumImg={key[4]}></Items>
        ))
      }
      </div>
      <div id="00s"> 
      <img src={zero} draggable="false" className={styles.mainImage} alt="Locked"></img>
      {items === null ? (<p></p>):(
      
      items.map((key) => 
        <Items notEdit={true} albumName={key[1]} link={key[5]} xcord={key[7]} ycord={key[8]} albumImg={key[4]}></Items>
        ))
      }
      </div>
      <div id="90s"> 
      <img src={nine} draggable="false" className={styles.mainImage} alt="Locked"></img>
      {items === null ? (<p></p>):(
      
      items.map((key) => 
        <Items notEdit={true} albumName={key[1]} link={key[5]} xcord={key[7]} ycord={key[8]} albumImg={key[4]}></Items>
        ))
      }

      </div>
      <div id="80s"> 
      <img src={eight} draggable="false" className={styles.mainImage} alt="Locked"></img>
      {items === null ? (<p></p>):(
      
      items.map((key) => 
        <Items notEdit={true} albumName={key[1]} link={key[5]} xcord={key[7]} ycord={key[8]} albumImg={key[4]}></Items>
        ))
      }

      </div>
      <div id="70s"> 
      <img src={seven} draggable="false" className={styles.mainImage} alt="Locked"></img>
      {items === null ? (<p></p>):(
      
      items.map((key) => 
        <Items notEdit={true} albumName={key[1]} link={key[5]} xcord={key[7]} ycord={key[8]} albumImg={key[4]}></Items>
        ))
      }

      </div>
      
    </div>
  );
}
  
export default UserPage ;