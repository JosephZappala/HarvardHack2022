import React from 'react';
import styles from './Pages.module.css';
import Draggable from "react-draggable";


function Items(props) {

    return (
      <div >
        
        <Draggable
        handle=".handle"
        defaultPosition={{x: props.xcord, y: props.ycord}}
        position={null}
        grid={[5, 5]}
        scale={1}
        >
        <div className='handle'>
            <div className={styles.record} style={{backgroundImage: 'url(' + props.albumImg + ')', backgroundSize: "contain"}}>
                <div className={styles.recordMiddle} ></div>
            </div>
        </div>
        </Draggable>
        
      </div>
    );
  }
  
  export default Items;