import { useState } from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { convertToDate } from "@/helper";
export default function NewShipmentModal({ onClose, setData }) {
  const [shipmentData, setShipmentData] = useState({
    orderId: "#00123456LKJ",
    origin: "40 Broomfield Place",
    destination: "44 Helland Bridge",
    category: "Clothing",
    arrivalTime: "7/1/2023",
    weight: "50kg",
    route: "11 Walden Road → 39 Grenoble Road",
    fee: "$800",
    status: "Ongoing",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShipmentData({ ...shipmentData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Shipment Data:", shipmentData);

    setData((prevData) => [
      ...prevData,
      { ...shipmentData, arrivalTime: convertToDate(shipmentData.arrivalTime) },
    ]);
    onClose();
  };

  return (
    <div className="fixed z-[10000] max-h-screen overflow-y-auto inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">New Shipment</h2>
          <button onClick={onClose}>
            <XCircleIcon className="w-6 h-6 cursor-pointer" />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Order ID</label>
            <input
              type="text"
              name="orderId"
              value={shipmentData.orderId}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 mt-1"
              placeholder="Enter Order ID"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Origin</label>
            <input
              type="text"
              name="origin"
              value={shipmentData.origin}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 mt-1"
              placeholder="Enter Origin"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Destination</label>
            <input
              type="text"
              name="destination"
              value={shipmentData.destination}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 mt-1"
              placeholder="Enter Destination"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Category</label>
            <input
              type="text"
              name="category"
              value={shipmentData.category}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 mt-1"
              placeholder="Enter Category"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Arrival Time</label>
            <input
              type="text"
              name="arrivalTime"
              value={shipmentData.arrivalTime}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 mt-1"
              placeholder="Enter Arrival Time"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Weight</label>
            <input
              type="text"
              name="weight"
              value={shipmentData.weight}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 mt-1"
              placeholder="Enter Weight"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Route</label>
            <input
              type="text"
              name="route"
              value={shipmentData.route}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 mt-1"
              placeholder="Enter Route"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Fee</label>
            <input
              type="text"
              name="fee"
              value={shipmentData.fee}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 mt-1"
              placeholder="Enter Fee"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
          >
            Save Shipment
          </button>
        </form>
      </div>
    </div>
  );
}
