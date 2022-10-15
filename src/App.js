import React, { useEffect, useState } from "react";
import Order from "./Order";
import "./App.css";

function App() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetchOrders();
  }, []);

  async function fetchOrders() {
    setIsLoading(true);
    const response = await fetch("https://my.api.mockaroo.com/shipments.json?key=5e0b62d0");
    const data = await response.json();
    setIsLoading(false);
    setOrders(data);
  }

  const updateOrder = updatedOrder => {
    let tempOrders = [...orders];
    const orderIndex = orders.findIndex(order => {return order.orderNo === updatedOrder.prevId});
    tempOrders[orderIndex] = {...updatedOrder, prevId: null};
    setOrders(tempOrders);
  }


  const deleteOrder = orderNo => {
    let tempOrders = [...orders];
    const orderIndex = tempOrders.findIndex(order => {return order.orderNo === orderNo});
    tempOrders.splice(orderIndex,1);
    setOrders(tempOrders);
  };

  return (
    <React.Fragment>
      <table>
        <thead>
          <tr>
            <th>ORDERNO</th>
            <th>DELIVERYDATE</th>
            <th>CUSTOMER</th>
            <th>TRACKINGNO</th>
            <th>STATUS</th>
            <th>CONSIGNEE</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {isLoading && (
            <tr>
              <td>Loading...</td>
            </tr>
          )}
          {!isLoading &&
            orders.map((order) => {
              return (
                <Order
                  data={order}
                  onDelete={deleteOrder}
                  key={order.orderNo}
                  onUpdate={updateOrder}
                ></Order>
              );
            })}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default App;
