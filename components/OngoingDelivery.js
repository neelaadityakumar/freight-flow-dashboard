export default function OngoingDelivery({ data }) {
  return (
    <div className="mt-8 bg-white shadow-sm rounded-lg p-6 max-h-[365px] overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">Ongoing Delivery</h2>
      <div className="space-y-4">
        {data.map((order, index) => (
          <div
            key={index}
            className="flex justify-between p-4 bg-gray-50 rounded-lg"
          >
            <div className="basis-3/4 mr-4">
              <p>
                Shipment number:{" "}
                <span className="font-semibold">{order.orderId}</span>
              </p>
              <p>
                <span className="text-green-500">&#9679;</span> {order.origin} ➔{" "}
                {order.destination}
              </p>
            </div>{" "}
            <div className="">
              <img
                src="/static/truck.png"
                alt="Truck"
                className="w-28 h-auto object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
