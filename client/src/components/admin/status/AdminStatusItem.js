import React from 'react'
import Button from '@material-ui/core/Button';

export default function StatusItem(props){
    const {id,username,useraddress,userphone_number,name,price,img,size,quantity,date,time,status,paypalstatus} = props
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
          <div class="order-background">
         <div className="order-container">
              <div class="set-absolute">
                    id order : #54684135874
              </div>
              <div className="order-detail">
                  <div className="order-detail-left">
                      <div className="order-info">
                          <span>Customer name: </span>
                          <span>{username}</span>
                      </div>
                      <div className="order-info">
                          <span>Phone number: </span>
                          <span>{userphone_number}</span>
                      </div>
                      <div className="order-info">
                          <span>Paid: </span>
                          <span>{paypalstatus}</span>
                      </div>
                  </div>
                  <div className="order-detail-right">
                      <div className="order-info">
                          <span>Address: </span>
                          <span>{useraddress}</span>
                      </div>
                      <div className="order-info">
                          <span>Date time: </span>
                          <span>{date + " " + time}</span>
                      </div>
                      <div className="order-info">
                          <span>Status: </span>
                          <span>{status}</span>
                      </div>
                  </div>
              </div>
              <div className="order-product">
                  <div className="order-product-container">
                      <div className="order-product-image">
                          <img src={img}/>
                      </div>
                      <div className="order-product-details">
                          <div className="order-product-details-name">{name}</div>
                          <div className="order-product-details-sizexquantity">{size} x {quantity}</div>
                          <div className="order-product-details-price">${price}</div>
                      </div>
                  </div>
              </div>
              <div className="order-button">
                  <div class="order-button-container">
                      <button class="btn-wait" onClick={Waiting}>
                          WAITING
                      </button>
                      <button class="btn-delivery" onClick={Delivering}>
                          DELIVERING
                      </button>
                      <button class="btn-done" onClick={Done}>
                          DONE
                      </button>
                  </div>
              </div>
         </div>
     </div>
        )
   

    
}