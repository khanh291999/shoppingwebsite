import React from 'react'

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
        {email}
    </div>
    <div className="table-cell">
       {password}
    </div>
    <div className="table-cell">
        {displayName}
    </div>
    <div className="table-cell">
        {type}
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