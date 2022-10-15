import React from 'react';
import styles from './Pages.module.css';
import Draggable from "react-draggable";


function Items() {

    return (
      <div >
        
        <Draggable
        handle=".handle"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        grid={[5, 5]}
        scale={1}
        >
        <div className='handle'><p className={styles.record}></p></div>
        
        </Draggable>
        
      </div>
    );
  }
  
  export default Items;