import { ShoppingBag, DollarSign, TrendingUp, Users } from "lucide-react";
import StatCard from "../../components/admin/StatCard";
import RecentOrders from "../../components/admin/RecentOrders";

export default function Dashboard() {
  return (
    <div className="p-6 md:p-8">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <p className="text-gray-500 mb-6">
        Welcome back! Here's your restaurant overview
      </p>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Orders Today"
          value="3"
          icon={<ShoppingBag />}
          color="bg-blue-100 text-blue-600"
        />

        <StatCard
          title="Revenue Today"
          value="$61.93"
          icon={<DollarSign />}
          color="bg-green-100 text-green-600"
        />

        <StatCard
          title="Popular Item"
          value="Classic Burger"
          icon={<TrendingUp />}
          color="bg-orange-100 text-orange-600"
        />

        <StatCard
          title="Active Users"
          value="24"
          icon={<Users />}
          color="bg-purple-100 text-purple-600"
        />
      </div>

      <RecentOrders />
    </div>
  );
}