import Modal from "./Modal";
import { useState } from "react";
import React from "react";
import ReactDOM from "react-dom";

const Order = (props) => {
  const [showModal, toggleModal] = useState(false);
  const orderData = props.data;
  const modalHandler = () => {
    toggleModal(!showModal);
  };
  const deleteHandler = () => {
    props.onDelete(orderData.orderNo);
  }
  const updateOrder = order => {
    props.onUpdate(order);
  }

  return (
    <tr>
      <td>{orderData.orderNo}</td>
      <td>{orderData.date}</td>
      <td>{orderData.customer}</td>
      <td>{orderData.trackingNo}</td>
      <td>{orderData.status}</td>
      <td>{orderData.consignee}</td>
      <td>
        <img src="./detail.png" alt="view details" onClick={modalHandler}/>
        <img src="./delete.png" alt="delete order" onClick={deleteHandler}/>
      </td>
      {showModal && ReactDOM.createPortal(<Modal data={props.data} onOrderUpdate={updateOrder} onClose={modalHandler}></Modal>,document.getElementById('modal-portal'))}
    </tr>
  );
};

export default Order;
