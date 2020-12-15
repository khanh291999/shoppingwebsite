import React from 'react'

export default function StatusItem(props){
    const {name,price,img,size,quantity,status,date,time} = props
        return(
            <div className="table-rows">
                <div className="table-cell">
                  {name}
                </div>
                <div className="table-cell">
                {price}$
                </div>
                <div className="table-cell">
                    {size}
                </div>
                <div className="table-cell">
                    <img src={img} />
                </div>
                <div className="table-cell">
                    {quantity}
                </div>
                <div className="table-cell">
                    {status}
                </div>
                <div className="table-cell">
                    {date}
                </div>
                <div className="table-cell">
                    {time}
                </div>
            </div>
        )
   

    
}