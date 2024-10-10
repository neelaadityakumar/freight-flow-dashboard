"use client";
import dynamic from "next/dynamic";
import Sidebar from "../components/Sidebar";
import DashboardOverview from "../components/DashboardOverview";
import OngoingDelivery from "@/components/OngoingDelivery";
import TableComponent from "@/components/TableComponent";
import Topbar from "@/components/Topbar";
import { useState } from "react";
import { useAuth } from "@/context/Auth";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { convertToDate } from "@/helper";
import { mockData } from "@/constant";
const DeliveryMap = dynamic(() => import("@/components/DeliveryMap"), {
  ssr: false,
});

export default function Home() {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [isLoggedIn, router]);

  const [data, setData] = useState([
    ...mockData.map((item) => {
      return {
        ...item,
        arrivalTime: convertToDate(item.arrivalTime),
      };
    }),
  ]);
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-6 bg-gray-100">
        <Topbar setData={setData} />
        <DashboardOverview data={data} />
        <div className="flex items-start">
          <div className="basis-1/2">
            <OngoingDelivery data={data} />
          </div>
          <div className="basis-1/2 mt-8 ml-8">
            <DeliveryMap />
          </div>
        </div>
        <TableComponent data={data} />
      </div>
    </div>
  );
}
