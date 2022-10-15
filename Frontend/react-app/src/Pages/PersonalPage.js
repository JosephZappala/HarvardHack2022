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
      <img src={wall} className={styles.mainImage} alt="Main Wall"></img>
      <Items />
      </div>
      
      
    </div>
  );
}
  
export default PersonalPage ;