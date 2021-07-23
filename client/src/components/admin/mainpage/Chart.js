import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const date = new Date();
const [month, day, year] = [date.getMonth()+1, date.getDate(), date.getFullYear()];
const today = year+ '-' + month + '-' + day;

export default function Chart() {
  const theme = useTheme();
  const [carts, setCarts] = useState([]);
  let todayCart = [];
  let cartArray = carts.slice(0);

  let cartData = [
    createData('00:00', 0),
    createData('24:00', undefined),
  ];

  //get data
  useEffect(() => {
    axios.get("http://localhost:8080/cart").then(res=>{
      setCarts(res.data)
    })
    .catch(e=>{
      console.log(e)
    })
  });
  

  // console.log(today);
  // console.log(todayCart[todayCart.length - 1]);
  

  //reverse the response data to have the 
  cartArray.map((cart)=>{
    if (cart.date === today){
      const item = createData(cart.time,cart.allTotal);
      cartData.push(item);
      todayCart.push(cart);
    }
  })

  //reset cart data after one day 
  if (todayCart.length > 1){
    if(todayCart[todayCart.length - 1].date !== today){
      cartData = [
        cartData.splice(1),
        cartData.splice(cartData.length -1)
      ];
    }
  }

  //sort time in cart data
  cartData.sort((a,b) => (a.time > b.time) ? 1 : ((b.time > a.time) ? -1 : 0))

  return (
    <React.Fragment>
      <Title>Today</Title>
      <ResponsiveContainer>
        <LineChart
          data={cartData}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Sales ($)
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}