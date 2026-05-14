import React from "react";
import ActiveReferrals from "@/components/Analytics/ActiveRefferals";
import BounceRate from "@/components/Analytics/BounceRate";
import Conversion from "@/components/Analytics/Conversion";
import TotalVisitors from "@/components/Analytics/TotalVisitors";
import UsersChart from "@/components/Analytics/UsersChart";
import Layout from "@/components/app/layout";

// EXISTING BOTTOM COMPONENTS
import LeftBottomComponent from "@/components/Analytics/LeftBottomComponent";
import RightBottomComponent from "@/components/Analytics/RightBottomComponent";

// NEW COMPONENTS
import LeftTopNew from "@/components/Analytics/LeftTopNew";
import LeftBottomNew from "@/components/Analytics/LeftBottom";
import RightNew from "@/components/Analytics/Rightnew";

// MAP COMPONENT (NEW)
import Map from "@/components/Analytics/Map";

function MainLayout({ children }: { children: React.ReactNode }) {
  return <Layout>{children}</Layout>;
}

const Analytics = () => {
  return (
    <MainLayout>

      {/* ================= EXISTING CONTENT (UNCHANGED) ================= */}
      <div className="grid grid-cols-12">

        <div className="col-span-4 grid grid-cols-2 overflow-hidden">
          <div className="px-6 py-6 border">
            <TotalVisitors />
          </div>
          <div className="px-6 py-6 border">
            <BounceRate />
          </div>
          <div className="px-6 py-6 border">
            <Conversion />
          </div>
          <div className="px-6 py-6 border">
            <ActiveReferrals />
          </div>
        </div>

        <div className="col-span-8 border p-6">
          <div className="flex gap-6 border-b pb-4">
            <h3 className="font-semibold text-blue-600">New Users</h3>
            <h3 className="font-semibold">Avg. Session</h3>
            <h3 className="font-semibold">Subscribers</h3>
            <h3 className="font-semibold">Page View</h3>
          </div>
          <div className="h-[300px] mt-4">
            <UsersChart />
          </div>
        </div>

      </div>

      {/* ================= EXISTING BOTTOM (UNCHANGED) ================= */}
      <div className="grid grid-cols-2">
        <div className="bg-white border p-4">
          <LeftBottomComponent />
        </div>
        <div className="bg-white border p-4">
          <RightBottomComponent />
        </div>
      </div>

      {/* ================= NEW SECTION (UNCHANGED) ================= */}
      <div className="grid grid-cols-12 grid-rows-2">

        {/* LEFT COLUMN – TWO ROWS */}
        <div className="col-span-6 row-span-1 bg-white border p-4">
          <LeftTopNew />
        </div>

        <div className="col-span-6 row-span-2 bg-white border p-4">
          <LeftBottomNew />
        </div>

        {/* RIGHT COLUMN – ONE ROW */}
        <div className="col-span-6 row-span-2 bg-white border p-4">
          <RightNew />
        </div>

      </div>

      {/* ================= MAP ROW (NEW, SAFE ADDITION) ================= */}
      <div className=" bg-white border p-4">
        <Map />
      </div>

    </MainLayout>
  );
};

export default Analytics;
