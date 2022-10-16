import {React, useState, useEffect} from 'react';
import wall from './Images/MainWall.jpeg';
import Items from './Items';
import styles from './Pages.module.css';

function EditPage() {
  let [items, setItems] = useState(null)
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
  function save() {
    if (sessionStorage.getItem("changingPage") === null) {
      return
    }
    var body = JSON.parse(sessionStorage.getItem("changingPage"));
    sessionStorage.removeItem("changingPage")
    
    return fetch('/api/saveroom',{
            'method':'POST',
             headers : {
            'Content-Type':'application/json',
            'name': sessionStorage.getItem("user")
      },
      body:JSON.stringify(body)})

    }

  return (
    <div >
      <h1>My Page</h1>
      <button className={styles.topButtons} style={{width:"40%"}}> Add New Item</button>
      <button className={styles.topButtons} style={{width:"40%"}}onClick={() =>save(document)}> Save Room Layout</button>

      <div id="mainRoom"> 
      <img src={wall} draggable="false" className={styles.mainImage} alt="Main Wall"></img>
      {items === null ? (<p></p>):(
      
      items.map((key) => 
      <Items uri={key[0]} notEdit={false} xcord={key[7]} ycord={key[8]} albumImg={key[4]}></Items>
        ))
      }
      </div>
      
    </div>
  );
}
  
export default EditPage ;