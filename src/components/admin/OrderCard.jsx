import { updateOrderStatus } from "../../api/adminApi";

export default function OrderCard({ order, refreshOrders }) {
  // Helper to determine status badge colors
  const statusColors = {
    Pending: "bg-gray-100 text-gray-600",
    Preparing: "bg-blue-100 text-blue-600",
    Ready: "bg-green-100 text-green-600",
    Completed: "bg-purple-100 text-purple-600",
  };

  const handleStatusChange = async (e) => {
    const newStatus = e.target.value;

    try {
      await updateOrderStatus(order._id, newStatus.toLowerCase());
      refreshOrders();
    } catch (error) {
      console.error("Failed to update status", error);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-bold text-gray-800">Order {order._id}</h3>
          <p className="text-sm text-gray-500">
            {new Date(order.createdAt).toLocaleDateString()} -{" "}
            {new Date(order.createdAt).toLocaleTimeString()}
          </p>
          <p className="text-sm text-gray-600 mt-1">
            Customer:{" "}
            <span className="font-semibold text-gray-800">
              {order.userId?.name || "Student"}
            </span>
          </p>
        </div>

        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            statusColors[
              order.status.charAt(0).toUpperCase() +
                order.status.slice(1)
            ]
          }`}
        >
          {order.status}
        </span>
      </div>

      {/* Items */}
      <div className="bg-gray-50/50 rounded-lg border border-gray-100 p-4 mb-4">
        <h4 className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-3">
          Items
        </h4>

        <div className="space-y-3">
          {order.items.map((item, index) => (
            <div
              key={index}
              className="flex justify-between text-sm text-gray-700"
            >
              <div>
                <p className="font-medium">
                  {item.quantity}x {item.name}
                </p>
                {item.specialInstructions && (
                  <p className="text-xs text-gray-400 italic">
                    Note: {item.specialInstructions}
                  </p>
                )}
              </div>
              <p className="font-medium">
                ${item.price?.toFixed(2)}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-3 pt-3 border-t border-gray-200 flex justify-between items-center">
          <span className="font-bold text-gray-800 text-sm">
            Total
          </span>
          <span className="font-bold text-orange-600">
            ${order.totalPrice?.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Status Update */}
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-gray-700">
          Update Status:
        </span>
        <select
          defaultValue={
            order.status.charAt(0).toUpperCase() +
            order.status.slice(1)
          }
          onChange={handleStatusChange}
          className="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block p-2 transition-all cursor-pointer"
        >
          <option value="Pending">Pending</option>
          <option value="Preparing">Preparing</option>
          <option value="Ready">Ready</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
    </div>
  );
}