export default function OngoingDelivery() {
  return (
    <div className="mt-8 bg-white shadow-sm rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Ongoing Delivery</h2>
      <div className="space-y-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <p>
            Shipment number: <span className="font-semibold">#001234ABCD</span>
          </p>
          <p>Category: Electronic</p>
          <p>Route: 87 Vern Ddu Lane - 15 Vicar Lane</p>
          <p>Distance: 60.41 km | Weight: 25kg</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <p>
            Shipment number: <span className="font-semibold">#00123456LKJ</span>
          </p>
          <p>Category: Furniture</p>
          <p>Route: 40 Broomfield Place - 44 Helland Bridge</p>
          <p>Distance: 75.2 km | Weight: 50kg</p>
        </div>
      </div>
    </div>
  );
}
