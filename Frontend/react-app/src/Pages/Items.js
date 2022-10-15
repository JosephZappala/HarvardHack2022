import {React, useState} from 'react';
import styles from './Pages.module.css';
import Draggable from "react-draggable";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


function Items(props) {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
    function openPopUp() {
      if (props.notEdit) {
        setOpen(true)
      }
    }

    return (
      <div >
        <Popup position="center" open={open} closeOnDocumentClick onClose={closeModal} >
          
          <div className={styles.leftOfPopUp}>
            <img src={props.albumImg} alt="Album Cover Not Found"></img>
          </div >
            <div className={styles.rightOfPopUp}>
              <h2>{props.albumName}</h2>
              <button onClick={() => window.location.href=props.link}>Open spotify</button>
          </div>
          
            
        </Popup>
        
        <Draggable
        handle=".handle"
        disabled={props.notEdit}
        defaultPosition={{x: props.xcord, y: props.ycord}}
        position={null}
        grid={[5, 5]}
        scale={1}
        >
        <div className='handle'>
          
          <button  onClick={openPopUp} className={styles.record} style={{backgroundImage: 'url(' + props.albumImg + ')', backgroundSize: "contain"}}>
                <div className={styles.recordMiddle} ></div>
          </button>
            
        </div>
        </Draggable>
        
      </div>
    );
  }
  
  export default Items;