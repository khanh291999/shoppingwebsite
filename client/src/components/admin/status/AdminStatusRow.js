import React from 'react'
import AdminStatusItem from './AdminStatusItem'
export default function AdminStatusRow(props){
 
    const {id,name,address,phone_number,product,date,time,status,paypalstatus} = props.productss
   
    
    console.log('id',props.productss.id);
    return  (
        product.map(productitem=>{
            return(
                <AdminStatusItem
                id={id}
                name={productitem.name}
                price={productitem.price}
                img={productitem.img}
                size={productitem.size}
                quantity={productitem.quantity}
                status={productitem.status}
                username={name}
                useraddress={address}
                userphone_number={phone_number}
                date={date}
                time={time}
                status={status}
                paypalstatus={paypalstatus}
                updateStatusDelivering={props.updateStatusDelivering}
                updateStatusDone={props.updateStatusDone}
                updateStatusWaiting={props.updateStatusWaiting}
                />
            )
        })
    )
   

}