import React from 'react'
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, red, yellow } from '@material-ui/core/colors';

const WaitingButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700],
    },
    width:50
  },
}))(Button);


const DeliveringButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(yellow[500]),
    backgroundColor: yellow[500],
    '&:hover': {
      backgroundColor: yellow[700],
    },
   
  },
}))(Button);

const DoneButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
    width:50
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function StatusItem(props){
  const classes = useStyles();
    const {username,useraddress,userphone_number,name,price,img,size,quantity,date,time,status} = props
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
                    {status}
                </div>
                <div className="admin-status-table-cell">
                    <WaitingButton variant="contained" color="primary" className={classes.margin} onClick={Waiting}>
                     Waiting
                    </WaitingButton>
                    <DeliveringButton variant="contained" color="primary" className={classes.margin} onClick={Delivering}>
                     Delivering
                    </DeliveringButton>
                    <DoneButton variant="contained" color="primary" className={classes.margin} onClick={Done}>
                    Done
                    </DoneButton>
                </div>
                
            </div>
        )
   

    
}