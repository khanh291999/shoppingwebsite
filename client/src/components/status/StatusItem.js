import React from 'react'

export default function StatusItem(props){
    const {name,price,img,size,quantity,status,date,time, paypalstatus} = props
        return(
            <div className="client-table-rows">
                <div className="client-table-cell">
                  {name}
                </div>
                <div className="client-table-cell">
                {price}$
                </div>
                <div className="client-table-cell">
                    {size}
                </div>
                <div className="client-table-cell">
                    <img alt="" src={img} />
                </div>
                <div className="client-table-cell">
                    {quantity}
                </div>
                <div className="client-table-cell">
                    {status}
                </div>
                <div className="client-table-cell">
                    {date}
                </div>
                <div className="client-table-cell">
                    {time}
                </div>
                <div className="client-table-cell">
                    {paypalstatus}
                </div>
            </div>
        )
   

    
}