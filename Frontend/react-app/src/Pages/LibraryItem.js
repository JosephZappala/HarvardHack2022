import { React, useState } from 'react';
import styles from './Pages.module.css';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';



function LibraryItem(props) {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    function openPopUp() {
        setOpen(true)
    }

    const style = {
        position: 'absolute',
        borderRadius: '5%',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60%',
        height: '80%',
        bgcolor: '#3344aa',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };


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




            <button id={props.index} onClick={openPopUp} className={styles.libraryItem} style={{ backgroundImage: 'url(' + props.albumImg + ')', backgroundSize: "contain" }}>
            </button>

        </div>

    );
}

export default LibraryItem;