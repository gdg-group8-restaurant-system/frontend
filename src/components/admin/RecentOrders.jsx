export default function RecentOrders() {
  return (
    <div className="bg-white rounded-xl border p-5 mt-6">
      <h2 className="font-semibold mb-4">Recent Orders</h2>

      {/* Order */}
      <div className="flex flex-col md:flex-row md:justify-between py-3 border-b">
        <div>
          <p className="font-medium">ORD001</p>
          <p className="text-sm text-gray-500">John Doe</p>
        </div>
        <div className="md:text-right">
          <p>$22.97</p>
          <p className="text-sm text-gray-500">Preparing</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between py-3 border-b">
        <div>
          <p className="font-medium">ORD002</p>
          <p className="text-sm text-gray-500">Jane Smith</p>
        </div>
        <div className="md:text-right">
          <p>$26.97</p>
          <p className="text-sm text-gray-500">Ready</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between py-3">
        <div>
          <p className="font-medium">ORD003</p>
          <p className="text-sm text-gray-500">John Doe</p>
        </div>
        <div className="md:text-right">
          <p>$11.99</p>
          <p className="text-sm text-gray-500">Completed</p>
        </div>
      </div>
    </div>
  );
}