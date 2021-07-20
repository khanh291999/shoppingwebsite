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

export default function ProductRowUserControl(props){
    const handleUpdate = () => {
        props.updateIsEditting(props.user.id)
    }
    const handleDelete = () => {
        props.deleteUser(props.user.id)
    }
    // const handleAddDisableProduct = () => {
    //     const {name,price,image,size} = props.product
    //     props.addDisableProduct(props.product.id,name,image,price,size)
    // }
    // const handleDisable = () =>{
    //     handleAddDisableProduct();
    //     handleDelete();
    // }   

    const {email,password,displayName,address,phoneNumber} = props.user
    return  <div className="table-rows">
    <div className="table-cell">
        {displayName.length > 18 ? 
            displayName.substring(0,18) + "...":
            displayName
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
        {phoneNumber.length > 18 ? 
            phoneNumber.substring(0,18) + "...":
            phoneNumber
        }
    </div>
    <div className="table-cell" style={{placeSelf: 'center'}}>
        <ColorButton variant="contained" color="secondary" className="edit-button" onClick={handleUpdate}>
                Edit
        </ColorButton>
        <ColorButton variant="contained" color="primary" className="disable-button" onClick={handleDelete}>
                Delete
        </ColorButton>
    </div>
 
</div>

}