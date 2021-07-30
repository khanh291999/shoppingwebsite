import React from "react";
import AdminStatusItem from "./AdminStatusItem";
export default function AdminStatusRow(props) {
  const {
    id,
    name,
    address,
    phone_number,
    product,
    date,
    time,
    status,
    paypalstatus,
    editedby,
    total,
    shippingfee,
    allTotal,
  } = props.productss;
  return product.map((productitem) => {
    return (
      <AdminStatusItem
        id={id}
        name={productitem.name}
        price={productitem.price}
        img={productitem.img}
        size={productitem.size}
        colorName={productitem.colorName}
        quantity={productitem.quantity}
        status={status}
        username={name}
        useraddress={address}
        userphone_number={phone_number}
        date={date}
        time={time}
        editedby={editedby}
        total={total}
        shippingfee={shippingfee}
        paypalstatus={paypalstatus}
        allTotal={allTotal.toFixed(2)}
        updateStatusDelivering={props.updateStatusDelivering}
        updateStatusDone={props.updateStatusDone}
        updateStatusWaiting={props.updateStatusWaiting}
      />
    );
  });
}
