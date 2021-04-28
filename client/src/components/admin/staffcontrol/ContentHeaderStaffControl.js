import { Button } from '@material-ui/core';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const ColorButton = withStyles((theme) => ({
    root: {
        fontWeight: 'bold',
        backgroundColor: '#282828',
        '&:hover': {
        backgroundColor: '#dbc7ae',
        },
    },
    }))(Button);

export default function ContentHeaderStaffControl(props) { 
    const handleClick = () => {
        props.toggleModal();
    }
    return (
        <>
            <div className="content-header color">
                <h3>Staffs</h3>
                <ColorButton variant="contained" color="primary" onClick={handleClick} className="add-button">+ Add</ColorButton>
            </div>
            
        </>
    )
    
}
