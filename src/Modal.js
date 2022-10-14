import React from "react";

const Modal = (props) => {
  return (
    <React.Fragment>
      <div className="backdrop" onClick={props.onClose}></div>
      <div className="modal">
        <form>
          <div>
            <label htmlFor="orderno">orderNo:</label>
            <br />
            <input
              type="text"
              id="orderno"
              defaultValue={props.data.orderNo}
              readOnly
            />
          </div>
          <div>
            <label htmlFor="date">date:</label>
            <br />
            <input
              type="text"
              id="date"
              defaultValue={props.data.date}
              readOnly
            />
          </div>
          <div>
            <label htmlFor="customer">customer:</label>
            <br />
            <input
              type="text"
              id="customer"
              defaultValue={props.data.customer}
              readOnly
            />
          </div>
          <div>
            <label htmlFor="tracking">trackingNo:</label>
            <br />
            <input
              type="text"
              id="tracking"
              defaultValue={props.data.trackingNo}
              readOnly
            />
          </div>
          <div>
            <label htmlFor="consignee">consignee:</label>
            <br />
            <input
              type="text"
              id="consignee"
              defaultValue={props.data.consignee}
              readOnly
            />
          </div>
          <div>
            <label htmlFor="status">status:</label>
            <br />
            <input type="text" id="status" defaultValue={props.data.status} readOnly/>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Modal;
