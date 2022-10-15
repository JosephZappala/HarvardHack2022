import { React, useState, useEffect } from 'react';
import styles from './Pages.module.css';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { prominent } from 'color.js'
import { rgbToHex } from '@mui/material';



function SearchResultItem(props) {
    const [color1, setColor1] = useState();
    const [color2, setColor2] = useState();
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        borderRadius: '5%',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60%',
        height: '80%',
        bgcolor: 'white',
        opacity: 1,
        //background: ('repeating-linear-gradient( 45deg, ' + color2 + ', ' + color2 + ' 5px, ' + color1 + '5px, ' + color1 + ' 25px )'),
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };


    function openPopUp() {
        prominent(props.albumImg, { amount: 7 }).then(color => {
            var count = 0
            for (let i = 0; i < color.length; i ++) {
                if ((color[i][0] + color[i][1] + color[i][2] > 80) && (color[i][0] + color[i][1] + color[i][2]  < 600))  {
                    if (count === 0) {

                        setColor1("rgb(" + (color[i][0]).toString() + "," + (color[i][1]).toString() + "," + (color[i][2]).toString() + ')')
                        style['bgcolor'] = rgbToHex(color1)
                    }
                    else {
                        setColor2("rgb(" + (color[i][0]).toString() +"," +  (color[i][1]).toString() + "," + (color[i][2]).toString() + ')')
                        break
                    }
                    count ++
                }
            }
            console.log(color1)

            })
          
        setOpen(true)
    }

    

    return (
        <div >
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    
                    <Typography id="modal-modal-description" sx={{ width: "100%" }}>
                        <div className={styles.leftOfPopUp}>
                            <img src={props.albumImg} style={{width:"320%"}} alt="Album Cover Not Found"></img>
                        </div >
                        <div className={styles.rightOfPopUp}>
                            <h2>{props.albumName}</h2>
                            <button onClick={() => window.location.href = props.link}>Open spotify</button>
                        </div>
                    </Typography>
                </Box>
            </Modal>




            <button id={props.index} onClick={openPopUp} className={styles.searchItem} >{props.albumName} <p className={styles.searchItemArtist}>{props.artist}</p>
            </button>

        </div>

    );
}

export default SearchResultItem;