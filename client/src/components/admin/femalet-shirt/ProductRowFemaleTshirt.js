import React from 'react'

export default function ProductRowFemaleTshirt(props){
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
    <div className="table-cell">
        <button className="btn text-primary" onClick={handleUpdate}>
                Edit
        </button>
        <button className="btn text-danger" onClick={handleDisable}>
                Disable Product
        </button>
    </div>
 
</div>

}