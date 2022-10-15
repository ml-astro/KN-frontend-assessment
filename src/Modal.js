import React from "react";

const Modal = (props) => {
  const updatedData = {...props.data};
  const sendUpdatedData = () => {
    props.onOrderUpdate({...updatedData, prevId: props.data.orderNo});
    props.onClose();
  }
  
  const updateData = (event) => {
    event.target.id === "orderno" && (updatedData.orderNo = event.target.value);
    event.target.id === "date" && (updatedData.date = event.target.value);
    event.target.id === "customer" &&
      (updatedData.customer = event.target.value);
    event.target.id === "tracking" &&
      (updatedData.trackingNo = event.target.value);
    event.target.id === "status" && (updatedData.status = event.target.value);
    event.target.id === "consignee" &&
      (updatedData.consignee = event.target.value);
  };

  return (
    <React.Fragment>
      <div className="backdrop" onClick={sendUpdatedData}></div>
      <div className="modal">
        <form>
          <div>
            <label htmlFor="orderNo">orderNo:</label>
            <br />
            <input
              type="text"
              id="orderno"
              defaultValue={props.data.orderNo}
              onChange={updateData}
            />
          </div>
          <div>
            <label htmlFor="date">date:</label>
            <br />
            <input
              type="text"
              id="date"
              defaultValue={props.data.date}
              onChange={updateData}
            />
          </div>
          <div>
            <label htmlFor="customer">customer:</label>
            <br />
            <input
              type="text"
              id="customer"
              defaultValue={props.data.customer}
              onChange={updateData}
            />
          </div>
          <div>
            <label htmlFor="tracking">trackingNo:</label>
            <br />
            <input
              type="text"
              id="tracking"
              defaultValue={props.data.trackingNo}
              onChange={updateData}
            />
          </div>
          <div>
            <label htmlFor="consignee">consignee:</label>
            <br />
            <input
              type="text"
              id="consignee"
              defaultValue={props.data.consignee}
              onChange={updateData}
            />
          </div>
          <div>
            <label htmlFor="status">status:</label>
            <br />
            <input
              type="text"
              id="status"
              defaultValue={props.data.status}
              onChange={updateData}
            />
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Modal;
