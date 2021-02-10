import React from 'react'

export default function ProductRowDisableJacket(props){
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
    <div className="table-cell">
        <button className="btn text-danger" onClick={handleOnSale}>
                On sale
        </button>
    </div>
 
</div>

}