import React from "react";
import Layout from "@/components/app/layout";
import Upside from "@/components/HRM/Upside";
import LeftTopComponent from "@/components/HRM/LeftTopComponent";
import LeftBottomComponent from "@/components/HRM/LeftBottomComponent";
import RightComponent from "@/components/HRM/RightComponent";
import Downside from "@/components/HRM/Downside";
import HeadcountMetrics from "@/components/HRM/Headcountmetrics";
import RecentResignations from "@/components/HRM/RecentResignations";

function MainLayout({ children }: { children: React.ReactNode }) {
  return <Layout>{children}</Layout>;
}

const HRM = () => {
  return (
    <MainLayout>
      <div className="space-y-6">

        {/* TOP */}
        <Upside />
        <Downside />

        {/* LEFT + RIGHT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* LEFT */}
          <div className="md:col-span-8 flex flex-col gap-6">
            <div className="bg-white rounded shadow p-4">
              <LeftTopComponent />
            </div>

            <div className="bg-white rounded shadow p-4">
              <LeftBottomComponent />
            </div>
          </div>

          {/* RIGHT */}
          <div className="md:col-span-4 bg-white rounded shadow p-4">
            <RightComponent />
          </div>
        </div>

        {/* ✅ TWO COLUMNS BELOW ENTIRE PAGE */}
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="bg-white rounded shadow p-4 min-h-[180px]">
            <HeadcountMetrics/>
          </div>

          <div className="bg-white rounded shadow p-4 min-h-[180px]">
            <RecentResignations/>
          </div>
        </div>

      </div>
    </MainLayout>
  );
};

export default HRM;
