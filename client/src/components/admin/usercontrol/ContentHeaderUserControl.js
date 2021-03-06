import { Button } from '@material-ui/core';
import React from 'react';

export default function ContentHeaderUserControl(props) { 
    const handleClick = () => {
        props.toggleModal();
    }
    return (
        <>
            <div className="content-header color">
                <h3>Users</h3>
                <Button variant="contained" color="primary" onClick={handleClick}>+ Add</Button>
            </div>
            
        </>
    )
    
}
