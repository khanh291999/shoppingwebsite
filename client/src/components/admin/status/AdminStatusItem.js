import React from 'react'

export default function StatusItem(props){
    const {username,useraddress,userphone_number,name,price,img,size,quantity,status} = props
        return(
            <div className="admin-status-table-rows">
                <div className="admin-status-table-cell">
                  {username}
                </div>
                <div className="admin-status-table-cell">
                  {useraddress}
                </div>
                <div className="admin-status-table-cell">
                  {userphone_number}
                </div>
                <div className="admin-status-table-cell">
                  {name}
                </div>
                <div className="admin-status-table-cell">
                {price}$
                </div>
                <div className="admin-status-table-cell">
                    {size}
                </div>
                <div className="admin-status-table-cell">
                    <img src={img} />
                </div>
                <div className="admin-status-table-cell">
                    {quantity}
                </div>
                <div className="admin-status-table-cell">
                    {status}
                </div>
                
            </div>
        )
   

    
}