import React from 'react'

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
        {email}
    </div>
    <div className="table-cell">
       {password}
    </div>
    <div className="table-cell">
        {displayName}
    </div>
    <div className="table-cell">
        {address}
    </div>
    <div className="table-cell">
        {phoneNumber}
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