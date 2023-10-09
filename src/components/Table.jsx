import React, { useState, useEffect } from "react";
import { Dotsignal } from "./dotsignal";
import axios from "axios";

const Table = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://dukaan-api1-production.up.railway.app/orders")
      .then((response) => {
        setOrders(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="w-full overflow-y-auto h-[300px] mt-3 ">
      <table className="w-full  h-[300px]">
        <thead className="h-[50px]">
          <tr className="bg-[#F2F2F2] rounded-lg">
            <th className="text-left pl-4 text-[#4D4D4D] ">Order ID</th>
            <th className="text-left text-[#4D4D4D] ">Status</th>
            <th className="text-left text-[#4D4D4D] ">Transaction ID</th>
            <th className="text-left text-[#4D4D4D] ">Refund Date</th>
            <th className="text-right pr-4 text-[#4D4D4D] ">Order Amount</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr
              key={order.orderId}
              className="border-b border-[#E6E6E6] h-[40px]"
            >
              <td className="text-left pl-4 min-w-[100px] w-1/5 text-[#146EB4] font-semibold  ">
                #{order.orderId}
              </td>
              <td className="text-left w-1/5 flex items-center space-x-2 mt-[8px]  min-w-[100px] ">
                <div>
                  <Dotsignal status={order.status} />
                </div>
                <p className="text-[#1A181E]">{order.status}</p>
              </td>
              <td className="text-left w-1/5 text-[#4D4D4D]  min-w-[100px] ">
                {order.transactionId}
              </td>
              <td className="text-left w-1/5 text-[#4D4D4D]  min-w-[100px] ">
                {order.refundDate}
              </td>
              <td className="text-right pr-4 w-1/5 text-[#1A181E]  min-w-[100px] ">
                {order.orderAmount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
