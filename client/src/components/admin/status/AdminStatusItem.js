import React, {useContext} from 'react'
import adminContext from "../../../context/adminContext";
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const ColorButton = withStyles((theme) => ({
    root: {
        margin: '5px',
        backgroundColor: '#282828',
        color: '#fff',
        width: '100px',
        '&:hover': {
            backgroundColor: '#fff',
            color: '#282828'
        },
    },
    }))(Button);

export default function StatusItem(props){
  const { adminData, setadminData } = useContext(adminContext);
    const {id,username,useraddress,userphone_number,name,price,img,size,quantity,date,time,status,paypalstatus,editedby} = props
    const Waiting = () => {
      const status = "Confirming"
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
                    {date}
                </div>
                <div className="admin-status-table-cell">
                  {username}
                </div>
                <div className="admin-status-table-cell">
                  {useraddress}
                </div>
                <div className="admin-status-table-cell">
                    {paypalstatus}
                </div>
                <div className="admin-status-table-cell">
                  Total Price
                </div>
                <div className="admin-status-table-cell">
                  {userphone_number}
                </div>
                <div className="admin-status-table-cell">
                    {status}
                </div>
                <div className="admin-status-table-cell">
                    {editedby}
                </div>
                <div className="admin-status-table-cell">
                  <div style={{display: 'flex'}}>
                    <div style={{flexDirection: 'column', textAlign:'center'}}>
                      <ColorButton variant="outlined" onClick={Waiting}>
                        Waiting
                      </ColorButton>
                      <ColorButton variant="outlined" onClick={Delivering}>
                        Shipping
                      </ColorButton>
                    </div>
                    <div style={{flexDirection: 'column', textAlign:'center'}}>
                      <ColorButton variant="outlined" onClick={Done}>
                        Done
                      </ColorButton>
                      <ColorButton variant="outlined" onClick={Done}>
                        Details
                      </ColorButton>
                    </div>
                  </div>
                </div>
            </div>
        ) 
}