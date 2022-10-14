import React, { useEffect, useState } from "react";
import Order from "./Order";
import "./App.css";

//https://my.api.mockaroo.com/shipments.json?key=5e0b62d0
function App() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetchOrders();
  }, []);

  async function fetchOrders() {
    setIsLoading(true);
    const response = await fetch("Shipments.json");
    const data = await response.json();
    setIsLoading(false);
    setOrders(data);
  }

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
              return <Order data={order} key={order.orderNo}></Order>;
            })}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default App;
