import React from 'react'
import StatusItem from './StatusItem'
export default function StatusRow(props){

    const {product,status,date, time,paypalstatus} = props.productss
    return  (
        product.map(productitem=>{
            return(
                <StatusItem
                name={productitem.name}
                price={productitem.price}
                img={productitem.img}
                size={productitem.size}
                quantity={productitem.quantity}
                status={status}
                date={date}
                time={time}
                paypalstatus={paypalstatus}
                />
                
            )
        })
    )
   

}