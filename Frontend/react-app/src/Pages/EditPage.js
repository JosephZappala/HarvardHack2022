import {React} from 'react';
import wall from './Images/MainWall.jpeg';
import Items from './Items';
import styles from './Pages.module.css';

function EditPage() {

  function save() {
    if (sessionStorage.getItem("changingPage") === null) {
      return
    }
    var body = JSON.parse(sessionStorage.getItem("changingPage"));
    sessionStorage.removeItem("changingPage")
    
    return fetch('/saveroom',{
            'method':'POST',
             headers : {
            'Content-Type':'application/json'
      },
      body:JSON.stringify(body)})

    }

  return (
    <div >
      <h1>My Page</h1>
      <button> Add New Item</button>
      <button onClick={() =>save(document)}> Save Room Layout</button>

      <div id="mainRoom"> 
      <img src={wall} draggable="false" className={styles.mainImage} alt="Main Wall"></img>

      <Items index={1} notEdit={false} xcord={400} ycord={-1000} albumImg="https://i.scdn.co/image/ab67616d0000b2734718e2b124f79258be7bc452"></Items>
      <Items index={2} notEdit={false} xcord={600} ycord={-500} albumImg="https://i.scdn.co/image/ab67616d0000b2732fa664d9cb5f838d11cbd998"></Items>
      <Items index={3} notEdit={false} xcord={600} ycord={-500} albumImg="https://i.scdn.co/image/ab67616d0000b2732fa664d9cb5f838d11cbd998"></Items>
      <Items index={4} notEdit={false} xcord={600} ycord={-500} albumImg="https://i.scdn.co/image/ab67616d0000b2732fa664d9cb5f838d11cbd998"></Items>
      
      </div>
      
    </div>
  );
}
  
export default EditPage ;