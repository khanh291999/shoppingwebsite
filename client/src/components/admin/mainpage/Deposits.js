import React, { useState, useEffect }  from "react";
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import axios from "axios"

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
    var today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
  const classes = useStyles();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/cart").then(res=>{
      setData(res.data)
  })
  }, []);
  let todayData = data.filter(function (item) {
    return item.date == date;
  });
  let allTotal = todayData.reduce((a,v) =>  a = a + v.allTotal , 0 )
  allTotal = Math.round(allTotal * 100)/100;

  // const classes = useStyles();
  // const [data, setData] = useState([]);
  // const [todayData, setTodayData] = useState([]);
  // useEffect(() => {
  //   axios.get("http://localhost:8080/cart").then(res=>{
  //     setData(res.data)
  // })
  // }, []);

  // data.map((item)=>{
  //   if (item.date === today){
  //     todayData.push(item);
  //   }
  // })

  // let allTotal = todayData.reduce((a,v) =>  a = a + v.allTotal , 0 )
  // allTotal = Math.round(allTotal * 100)/100;
  
  return (
    <React.Fragment>
      <Title>Recent Deposits</Title>
      <Typography component="p" variant="h4">
        $ {allTotal}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on {date}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}