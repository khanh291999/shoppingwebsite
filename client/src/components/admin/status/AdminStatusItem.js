import React from 'react'
import Button from '@material-ui/core/Button';

export default function StatusItem(props){
    const {username,useraddress,userphone_number,name,price,img,size,quantity,date,time,status,paypalstatus} = props
    const Waiting = () => {
      const status = "Waiting for confirm"
      props.updateStatusWaiting(props.id,status)
   }
    const Delivering = () => {
      const status = "Delivering"
      props.updateStatusDelivering(props.id,status)
      console.log('id',props.id);
      
   }
    const Done = () => {
      const status = "Done"
        props.updateStatusDone(props.id,status)
    }
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
                    {date}
                </div>
                <div className="admin-status-table-cell">
                    {time}
                </div>
                <div className="admin-status-table-cell">
                    {paypalstatus}
                </div>
                <div className="admin-status-table-cell">
                    {status}
                </div>
                <div className="admin-status-table-cell">
                    <Button style={{marginRight:"5px"}} variant="outlined" onClick={Waiting}>
                     Waiting
                    </Button>
                    <Button style={{marginRight:"5px"}} variant="outlined" onClick={Delivering}>
                     Delivering
                    </Button>
                    <Button variant="outlined" onClick={Done}>
                    Done
                    </Button>
                </div>
                
            </div>
        )
   

    
}