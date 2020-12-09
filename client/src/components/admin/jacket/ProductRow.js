import React from 'react'

export default function ProductRow(props){
    const handleDelete = () => {
        props.deleteProduct(props.product.id)
    }
    const handleUpdate = () => {
        props.updateIsEditting(props.product.id)
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
        <img src={image} />
    </div>
    <div className="table-cell">
        <button className="btn text-primary" onClick={handleUpdate}>
                Edit
        </button>
        <button className="btn text-danger" onClick={handleDelete}>
                Delete
        </button>
    </div>
 
</div>

}