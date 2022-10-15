import {React} from 'react';
import wall from './Images/MainWall.jpeg';
import Items from './Items';
import styles from './Pages.module.css';
import { useNavigate } from "react-router-dom"

function UserPage() {
  const navigate = useNavigate()

  return (
    <div >
      <h1>My Page</h1>
      <button onClick={() => navigate("/editpage")}> Edit Page </button>
      <div id="mainRoom"> 
      <img src={wall} draggable="false" className={styles.mainImage} alt="Main Wall"></img>
      
      <Items notEdit={true} albumName="Starboy" link="https://open.spotify.com/album/2ODvWsOgouMbaA5xf0RkJe" xcord={400} ycord={-400} albumImg="https://i.scdn.co/image/ab67616d0000b2734718e2b124f79258be7bc452"></Items>
      <Items notEdit={true} xcord={600} ycord={-200} albumName="Starboy" albumImg="https://i.scdn.co/image/ab67616d0000b2732fa664d9cb5f838d11cbd998"></Items>

      </div>
      
    </div>
  );
}
  
export default UserPage ;