import { Button } from '@material-ui/core';
import React from 'react';

export default function ContentHeaderJean(props) { 
    const handleClick = () => {
        props.toggleModal();
    }
    return (
        <>
            <div className="content-header color">
                <h3>Products</h3>
                <Button variant="contained" color="primary" onClick={handleClick}>+ Add</Button>
            </div>
            
        </>
    )
    
}
