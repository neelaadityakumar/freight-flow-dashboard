import {
  HomeIcon,
  TruckIcon,
  UserIcon,
  CogIcon,
} from "@heroicons/react/24/solid";

export default function Sidebar() {
  return (
    <div className="h-full bg-white w-64 shadow-md">
      <div className="px-6 py-4">
        <h2 className="text-xl font-semibold">FreightFlow</h2>
        <p className="text-sm">Admin Panel</p>
      </div>
      <ul className="mt-4">
        <li className="py-2 px-4 text-gray-700 flex items-center hover:bg-gray-100">
          <HomeIcon className="w-5 h-5 mr-2" />
          Dashboard
        </li>
        <li className="py-2 px-4 text-gray-700 flex items-center hover:bg-gray-100">
          <TruckIcon className="w-5 h-5 mr-2" />
          Shipments
        </li>
        <li className="py-2 px-4 text-gray-700 flex items-center hover:bg-gray-100">
          <UserIcon className="w-5 h-5 mr-2" />
          Customers
        </li>
        <li className="py-2 px-4 text-gray-700 flex items-center hover:bg-gray-100">
          <CogIcon className="w-5 h-5 mr-2" />
          Settings
        </li>
      </ul>
    </div>
  );
}
