export default function DashboardOverview() {
  return (
    <div className="grid grid-cols-4 gap-6 mt-6">
      <div className="bg-white shadow-sm p-6 rounded-lg">
        <h3>Total Shipments</h3>
        <p className="text-2xl font-semibold">6,521</p>
      </div>
      <div className="bg-white shadow-sm p-6 rounded-lg">
        <h3>Total Orders</h3>
        <p className="text-2xl font-semibold">10,105</p>
      </div>
      <div className="bg-white shadow-sm p-6 rounded-lg">
        <h3>Revenue</h3>
        <p className="text-2xl font-semibold">$12,167</p>
      </div>
      <div className="bg-white shadow-sm p-6 rounded-lg">
        <h3>Delivered</h3>
        <p className="text-2xl font-semibold">1,840</p>
      </div>
    </div>
  );
}
