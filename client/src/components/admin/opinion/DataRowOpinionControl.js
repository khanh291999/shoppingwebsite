import React from 'react'
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const ColorButton = withStyles((theme) => ({
    root: {
        margin: '0 5px',
        backgroundColor: '#282828',
        '&:hover': {
            backgroundColor: '#fff',
            color: '#282828'
        },
    },
    }))(Button);

export default function DataRowOpinionControl(props){
    const handleUpdate = () => {
        props.updateIsEditting(props.opinion.id)
    }
    // const handleAddDisableProduct = () => {
    //     const {name,price,image,size} = props.product
    //     props.addDisableProduct(props.product.id,name,image,price,size)
    // }
    // const handleDisable = () =>{
    //     handleAddDisableProduct();
    //     handleDelete();
    // }   

    const {email,password,username,address,opinion} = props.opinion
    return  <div className="table-rows">
    <div className="table-cell">
        {username.length > 18 ? 
            username.substring(0,18) + "...":
            username
        }
    </div>
    <div className="table-cell">
        {email.length > 18 ? 
            email.substring(0,18) + "...":
            email
        }
    </div>
    <div className="table-cell">
        {address.length > 18 ? 
            address.substring(0,18) + "...":
            address
        }
    </div>
    <div className="table-cell">
        {opinion.length > 18 ? 
            opinion.substring(0,18) + "...":
            opinion
        }
    </div>
    <div className="table-cell" style={{placeSelf: 'center'}}>
        <ColorButton variant="contained" color="secondary" className="edit-button" onClick={handleUpdate}>
                View Details
        </ColorButton>
    </div>
 
</div>

}