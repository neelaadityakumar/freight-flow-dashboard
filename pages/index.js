"use client";
import dynamic from "next/dynamic";
import Sidebar from "../components/Sidebar";
import DashboardOverview from "../components/DashboardOverview";
import OngoingDelivery from "@/components/OngoingDelivery";
import TrackingOrder from "@/components/TrackingOrder";
import Topbar from "@/components/Topbar";

// Dynamically import the DeliveryMap component, with SSR disabled
const DeliveryMap = dynamic(() => import("@/components/DeliveryMap"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-6 bg-gray-100">
        <Topbar />
        <DashboardOverview />
        <div className="flex items-start">
          <div className="basis-1/2">
            <OngoingDelivery />{" "}
          </div>
          <div className="basis-1/2 mt-8 ml-8">
            <DeliveryMap />
          </div>{" "}
        </div>

        <TrackingOrder />
      </div>
    </div>
  );
}
