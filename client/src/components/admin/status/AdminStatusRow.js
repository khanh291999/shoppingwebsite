import React from 'react'
import AdminStatusItem from './AdminStatusItem'
export default function AdminStatusRow(props){

    const {name,address,phone_number,status,product} = props.productss
    return  (
        product.map(productitem=>{
            return(
                <AdminStatusItem
                name={productitem.name}
                price={productitem.price}
                img={productitem.img}
                size={productitem.size}
                quantity={productitem.quantity}
                status={status}
                username={name}
                useraddress={address}
                userphone_number={phone_number}
                />
            )
        })
    )
   

}