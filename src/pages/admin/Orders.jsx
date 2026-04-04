import { useEffect, useState } from "react";
import OrderCard from "../../components/admin/OrderCard";
import { getAllOrders } from "../../api/adminApi";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const data = await getAllOrders();
      setOrders(data);
    } catch (error) {
      console.error("Error fetching orders", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">
          Orders Management
        </h1>
        <p className="text-gray-500">
          Monitor and update order statuses
        </p>
      </div>

      <div className="space-y-2">
        {orders.map((order) => (
          <OrderCard
            key={order._id}
            order={order}
            refreshOrders={fetchOrders}
          />
        ))}
      </div>
    </div>
  );
}