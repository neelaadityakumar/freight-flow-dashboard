export default function TrackingOrders() {
  return (
    <div className="mt-8 bg-white shadow-sm rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Tracking Order</h2>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="py-2">Order ID</th>
            <th className="py-2">Category</th>
            <th className="py-2">Arrival Time</th>
            <th className="py-2">Weight</th>
            <th className="py-2">Fee</th>
            <th className="py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#001234ABCD</td>
            <td>Electronic</td>
            <td>7/1/2023</td>
            <td>25kg</td>
            <td>$1,050</td>
            <td>Delivered</td>
          </tr>
          <tr>
            <td>#002345KLKH</td>
            <td>Furniture</td>
            <td>7/1/2023</td>
            <td>50kg</td>
            <td>$2,200</td>
            <td>Pending</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
