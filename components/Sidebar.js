import {
  HomeIcon,
  TruckIcon,
  ShoppingCartIcon,
  ChatBubbleLeftEllipsisIcon,
  UsersIcon,
  QuestionMarkCircleIcon,
  CogIcon,
  CurrencyDollarIcon,
  ReceiptPercentIcon,
} from "@heroicons/react/24/outline";
import { useAuth } from "@/context/Auth";
export default function Sidebar() {
  const { logout } = useAuth();

  return (
    <div className="h-full bg-white w-64 flex flex-col justify-between">
      {/* Top Section */}
      <div>
        {/* Logo and User Info */}
        <div className="px-6 py-4">
          <h2 className="text-lg font-semibold">FreightFlow</h2>
          <p className="text-sm text-gray-500">Admin panel</p>
        </div>

        {/* User Profile */}
        <div className="px-6 py-2 flex items-center space-x-3">
          <img
            src="https://picsum.photos/200"
            alt="User"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-medium">Ismael Maddox</p>
            <p className="text-sm text-gray-500">Free plan</p>
          </div>
        </div>

        {/* Main Menu */}
        <ul className="mt-6">
          <p className="ml-4 mb-2">MAIN MENU</p>

          <li className=" cursor-pointer py-2 px-6 flex items-center text-gray-700 hover:bg-gray-100">
            <HomeIcon className="w-6 h-6 mr-3" />
            Dashboard
          </li>
          <li className=" cursor-pointer py-2 px-6 flex items-center text-gray-700 hover:bg-gray-100">
            <TruckIcon className="w-6 h-6 mr-3" />
            Shipments
          </li>
          <li className=" cursor-pointer py-2 px-6 flex items-center text-gray-700 hover:bg-gray-100 relative">
            <ShoppingCartIcon className="w-6 h-6 mr-3" />
            Orders
            <span className="absolute right-4 text-sm text-white bg-red-500 px-2 py-0.5 rounded-full">
              4
            </span>
          </li>
          <li className=" cursor-pointer py-2 px-6 flex items-center text-gray-700 hover:bg-gray-100 relative">
            <ChatBubbleLeftEllipsisIcon className="w-6 h-6 mr-3" />
            Messages
            <span className="absolute right-4 text-sm text-white bg-red-500 px-2 py-0.5 rounded-full">
              9+
            </span>
          </li>
          <li className=" cursor-pointer py-2 px-6 flex items-center text-gray-700 hover:bg-gray-100">
            <UsersIcon className="w-6 h-6 mr-3" />
            Customers
          </li>
          <li className=" cursor-pointer py-2 px-6 flex items-center text-gray-700 hover:bg-gray-100">
            <QuestionMarkCircleIcon className="w-6 h-6 mr-3" />
            Help & Support
          </li>
          <li className=" cursor-pointer py-2 px-6 flex items-center text-gray-700 hover:bg-gray-100">
            <CogIcon className="w-6 h-6 mr-3" />
            Settings
          </li>
        </ul>
      </div>

      {/* Payment Section */}
      <div className="mt-4">
        <p className="ml-4 mb-2">PAYMENT</p>
        <ul>
          <li className=" cursor-pointer py-2 px-6 flex items-center text-gray-700 hover:bg-gray-100">
            <ReceiptPercentIcon className="w-6 h-6 mr-3" />
            Taxes
          </li>
          <li className=" cursor-pointer py-2 px-6 flex items-center text-gray-700 hover:bg-gray-100">
            <CurrencyDollarIcon className="w-6 h-6 mr-3" />
            Payments
          </li>
        </ul>

        {/* Plan Upgrade */}
        <div className="px-6 py-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="font-medium">Upgrade & Unlock all features</p>
            <button className="mt-2 text-blue-600 flex items-center">
              Manage your plan
              <span className="ml-2">&#x27A1;</span>
            </button>
          </div>
        </div>
        <button onClick={logout} className="ml-10">
          Logout
        </button>
      </div>
    </div>
  );
}
