import OrderCard from "../../components/admin/OrderCard";

const ORDERS_DATA = [
  {
    id: "ORD001",
    date: "Mar 26, 2026",
    time: "10:30 AM",
    customerName: "John Doe",
    customerId: "STU001",
    status: "Preparing",
    total: 22.97,
    items: [
      { name: "Classic Burger", quantity: 2, price: 17.98, note: "No onions please" },
      { name: "Iced Coffee", quantity: 1, price: 4.99 }
    ]
  },
  {
    id: "ORD002",
    date: "Mar 26, 2026",
    time: "11:15 AM",
    customerName: "Jane Smith",
    customerId: "STU002",
    status: "Ready",
    total: 26.97,
    items: [
      { name: "Margherita Pizza", quantity: 1, price: 12.99 },
      { name: "Chocolate Cake", quantity: 2, price: 13.98 }
    ]
  }
];

export default function Orders() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Orders Management</h1>
        <p className="text-gray-500">Monitor and update order statuses</p>
      </div>

      <div className="space-y-2">
        {ORDERS_DATA.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
}