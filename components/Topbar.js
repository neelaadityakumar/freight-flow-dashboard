export default function Topbar() {
  return (
    <div className="flex justify-between items-center bg-white px-6 py-4 shadow-sm">
      <div className="text-xl font-semibold">Dashboard</div>
      <div className="flex space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          + New Shipments
        </button>
        <div className="flex items-center space-x-2">
          <img
            src="/avatar.jpg"
            className="w-8 h-8 rounded-full"
            alt="user-avatar"
          />
          <span>Ismael Maddox</span>
        </div>
      </div>
    </div>
  );
}
