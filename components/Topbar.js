import { useState } from "react";
import NewShipmentModal from "./NewShipmentModal";
import {
  ChatBubbleLeftEllipsisIcon,
  CogIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
// Topbar Component
export default function Topbar({ setData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center bg-white px-6 py-4 shadow-sm">
        <div className="text-xl font-semibold">Dashboard</div>
        <div className="flex items-center space-x-6">
          <div className="flex -space-x-2">
            <img
              src="https://picsum.photos/200"
              className="w-8 h-8 rounded-full border-2 border-white"
              alt="avatar1"
            />
            <img
              src="https://picsum.photos/202"
              className="w-8 h-8 rounded-full border-2 border-white"
              alt="avatar2"
            />
            <img
              src="https://picsum.photos/201"
              className="w-8 h-8 rounded-full border-2 border-white"
              alt="avatar3"
            />
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center border-2 border-white">
              +40
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <ChatBubbleLeftEllipsisIcon alt="Bell Icon" className="w-6 h-6" />
            <MagnifyingGlassIcon alt="Search Icon" className="w-6 h-6" />
            <CogIcon alt="Cog Icon" className="w-6 h-6" />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center pr-6 py-4">
        <div className="bg-gray-200 p-1 rounded-lg">
          {" "}
          <button className="bg-white px-6 py-1 rounded-lg">Overviews</button>
          <button className="px-4 py-1 rounded-lg">Tracking</button>
        </div>
        <div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            onClick={handleOpenModal}
          >
            + New Shipment
          </button>
          {isModalOpen && (
            <NewShipmentModal onClose={handleCloseModal} setData={setData} />
          )}{" "}
        </div>
      </div>
    </div>
  );
}
