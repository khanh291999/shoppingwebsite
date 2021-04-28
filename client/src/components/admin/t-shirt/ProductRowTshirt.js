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

export default function ProductRowTshirt(props){
    const handleUpdate = () => {
        props.updateIsEditting(props.product.id)
    }
    const handleDelete = () => {
        props.deleteProduct(props.product.id)
    }
    const handleAddDisableProduct = () => {
        const {name,price,image,size} = props.product
        props.addDisableProduct(props.product.id,name,image,price,size)
    }
    const handleDisable = () =>{
        handleAddDisableProduct();
        handleDelete();
    }  

    const {id,name,price,image} = props.product
    return  <div className="table-rows">
    <div className="table-cell">
        {id}
    </div>
    <div className="table-cell">
       {name}
    </div>
    <div className="table-cell">
        {price}$
    </div>
    <div className="table-cell">
        <img alt="" src={image} />
    </div>
    <div className="table-cell" style={{placeSelf: 'center'}}>
        <ColorButton variant="contained" color="secondary" className="edit-button" onClick={handleUpdate}>
                Edit
        </ColorButton>
        <ColorButton variant="contained" color="primary" className="disable-button" onClick={handleDisable}>
                Disable
        </ColorButton>
    </div>
 
</div>

}