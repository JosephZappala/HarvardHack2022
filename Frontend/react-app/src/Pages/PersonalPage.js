import {React} from 'react';
import wall from './Images/MainWall.jpeg';
import Items from './Items';
import styles from './Pages.module.css';

function PersonalPage() {

 

  return (
    <div >
      <h1>My Page</h1>
      <button> Add New Item</button>
      <div id="mainRoom"> 
      <img src={wall} draggable="false" className={styles.mainImage} alt="Main Wall"></img>

      <Items xcord={400} ycord={-400} albumImg="https://i.scdn.co/image/ab67616d0000b2734718e2b124f79258be7bc452"></Items>
      </div>
      
      
    </div>
  );
}
  
export default PersonalPage ;