import {
  TruckIcon,
  CubeIcon,
  CurrencyDollarIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";

const computeStats = (data) => {
  const totalShipments = data.length;

  const uniqueOrders = new Set(data.map((order) => order.orderId));
  const totalOrders = uniqueOrders.size;

  const totalRevenue = data
    .map((order) => parseFloat(order.fee.replace("$", "").replace(",", "")))
    .reduce((acc, value) => acc + value, 0);

  const deliveredCount = data.filter(
    (order) => order.status === "Delivered"
  ).length;

  return {
    totalShipments,
    totalOrders,
    revenue: totalRevenue.toFixed(2),
    delivered: deliveredCount,
    shipmentsChange: 1.3,
    ordersChange: -2.1,
    revenueChange: 1.3,
    deliveredChange: -3.1,
  };
};
export default function DashboardOverview({ data }) {
  const stats = computeStats(data);
  return (
    <div className="grid grid-cols-4 gap-6 mt-6">
      {/* Total Shipments */}
      <div className="bg-white shadow-sm p-6 rounded-lg">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-gray-600">Total Shipments</h3>
          <TruckIcon className="w-6 h-6 text-blue-600" />
        </div>
        <p className="text-2xl font-semibold">{stats.totalShipments}</p>
        <p
          className={`text-sm ${
            stats.shipmentsChange >= 0 ? "text-green-600" : "text-red-600"
          }`}
        >
          vs Last Week{" "}
          {stats.shipmentsChange >= 0
            ? `+${stats.shipmentsChange}% ↗`
            : `${stats.shipmentsChange}% ↘`}
        </p>
      </div>

      {/* Total Orders */}
      <div className="bg-white shadow-sm p-6 rounded-lg">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-gray-600">Total Orders</h3>
          <CubeIcon className="w-6 h-6 text-blue-600" />
        </div>
        <p className="text-2xl font-semibold">{stats.totalOrders}</p>
        <p
          className={`text-sm ${
            stats.ordersChange >= 0 ? "text-green-600" : "text-red-600"
          }`}
        >
          vs Last Week{" "}
          {stats.ordersChange >= 0
            ? `+${stats.ordersChange}% ↗`
            : `${stats.ordersChange}% ↘`}
        </p>
      </div>

      {/* Revenue */}
      <div className="bg-white shadow-sm p-6 rounded-lg">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-gray-600">Revenue</h3>
          <CurrencyDollarIcon className="w-6 h-6 text-blue-600" />
        </div>
        <p className="text-2xl font-semibold">${stats.revenue}</p>
        <p
          className={`text-sm ${
            stats.revenueChange >= 0 ? "text-green-600" : "text-red-600"
          }`}
        >
          vs Last Week{" "}
          {stats.revenueChange >= 0
            ? `+${stats.revenueChange}% ↗`
            : `${stats.revenueChange}% ↘`}
        </p>
      </div>

      {/* Delivered */}
      <div className="bg-white shadow-sm p-6 rounded-lg">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-gray-600">Delivered</h3>
          <ClipboardDocumentCheckIcon className="w-6 h-6 text-blue-600" />
        </div>
        <p className="text-2xl font-semibold">{stats.delivered}</p>
        <p
          className={`text-sm ${
            stats.deliveredChange >= 0 ? "text-green-600" : "text-red-600"
          }`}
        >
          vs Last Week{" "}
          {stats.deliveredChange >= 0
            ? `+${stats.deliveredChange}% ↗`
            : `${stats.deliveredChange}% ↘`}
        </p>
      </div>
    </div>
  );
}
