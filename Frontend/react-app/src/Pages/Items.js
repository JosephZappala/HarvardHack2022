import {React, useState} from 'react';
import styles from './Pages.module.css';
import Draggable from "react-draggable";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


function Items(props) {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
    function openPopUp(doc) {
      if (props.notEdit) {
        setOpen(true)
      }
      else {

        var rect = doc.getElementById(props.uri).getBoundingClientRect()
  
        var left = rect.left - 17.65625 - 225;
        var top = rect.top + window.scrollY - 1137.28125 + 173.40625;
        var dict ={};
        if (sessionStorage.getItem("changingPage") !== null) {
          dict = JSON.parse(sessionStorage.getItem("changingPage"));
        }
        dict[props.uri] = [left, top]
        sessionStorage.setItem("changingPage", JSON.stringify(dict))
  
      }
    }

    return (
      <div style={{height: 0,width: 0}}>
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
          
          <button id={props.uri} onClick={() => openPopUp(document)} className={styles.item} style={{backgroundImage: 'url(' + props.albumImg + ')', backgroundSize: "contain"}}>
          </button>
            
        </div>
        </Draggable>
        
      </div>
    );
  }
  
  export default Items;