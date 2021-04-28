import React from 'react'
import '../../../assets/adminstaffcontrol.css'
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

export default function ProductRowStaffControl(props){
    const handleUpdate = () => {
        props.updateIsEditting(props.admin.id)
    }
    const handleDelete = () => {
        props.deleteAdmin(props.admin.id)
    }
    
    // const handleAddDisableProduct = () => {
    //     const {name,price,image,size} = props.product
    //     props.addDisableProduct(props.product.id,name,image,price,size)
    // }
    // const handleDisable = () =>{
    //     handleAddDisableProduct();
    //     handleDelete();
    // }   

    const {email,password,displayName,type} = props.admin
    return  <div className="table-rows">
    <div className="table-cell">
        {displayName}
    </div>
    <div className="table-cell">
        {password.substring(0,10)}...
    </div>
    <div className="table-cell">
        {email}
    </div>
    <div className="table-cell">
        {type}
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