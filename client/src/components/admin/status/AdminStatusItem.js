import React, {useContext} from 'react'
import Button from '@material-ui/core/Button';
import adminContext from "../../../context/adminContext";


export default function StatusItem(props){
  const { adminData, setadminData } = useContext(adminContext);
    const {id,username,useraddress,userphone_number,name,price,img,size,quantity,date,time,status,paypalstatus,editedby} = props
    const Waiting = () => {
      const status = "Waiting for confirm"
      const editedby = adminData.admin.displayName
      props.updateStatusWaiting(props.id,status,editedby)
   }
    const Delivering = () => {
      const status = "Delivering"
      const editedby = adminData.admin.displayName
      props.updateStatusDelivering(props.id,status,editedby)
   }
    const Done = () => {
      const status = "Done"
      const editedby = adminData.admin.displayName
        props.updateStatusDone(props.id,status,editedby)
    }
        return(
            <div className="admin-status-table-rows">
              <div className="admin-status-table-cell">
                  {id}
                </div>
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
                <div className="admin-status-table-cell">
                    {editedby}
                </div>
            </div>
        )
   

    
}