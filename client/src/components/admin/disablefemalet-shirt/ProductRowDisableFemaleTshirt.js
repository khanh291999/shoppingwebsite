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
    
export default function ProductRowDisableFemaleTshirt(props){
    const handledeleteDisableProduct = () => {
        props.deleteDisableProduct(props.product.id)
    }
    const handleaddOnSaleProduct = () => {
        const {name,price,image,size} = props.product
        props.addOnSaleProduct(props.product.id,name,image,price,size)
    }
    const handleOnSale = () =>{
        handledeleteDisableProduct();
        handleaddOnSaleProduct();
      
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
    <div className="table-cell" style={{justifyContent: "center"}}>
        <ColorButton variant="contained" color="secondary" className="onsale-button" onClick={handleOnSale}>
            On sale
        </ColorButton>
    </div>
 
</div>

}