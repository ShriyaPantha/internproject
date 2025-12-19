import React from "react";
import Layout from "@/components/app/layout";
import Down from "@/components/Homepage/Down";
import Left from "@/components/Homepage/Left";
import Middle from "@/components/Homepage/Middle";
import Right from "@/components/Homepage/Right";
import Largecol from "@/components/Homepage/Largecol";
import Smallcol from "@/components/Homepage/Smallcol";
import MapChart from "@/components/Homepage/MapChart";
import StorageActivityColumn from "@/components/Homepage/StorageActivityColumn";

function MainLayout({ children }: { children: React.ReactNode }) {
  return <Layout>{children}</Layout>;
}

const Homepage = () => {
  return (
    <MainLayout>
      <div className="max-w-[1400px] mx-auto space-y-0 overflow-x-hidden">
        <div className="-mx-7 px-7 border-b ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1.5fr_2fr] gap-6">
            <Left />

            <div className="flex flex-col gap-6">
              <div className="flex gap-6 flex-wrap">
                <Middle className="flex-1 min-w-0" />
                <Right className="flex-1 min-w-0" />
              </div>

              <Down className="w-full max-w-full" />
            </div>
          </div>
        </div>

        {/* ------------ Share Market Section (Full Border) ------------ */}
        <div className="-mx-7 px-7 border-b ">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Largecol
                title="Share Market Overview"
                date="Dec 2, 2025"
                description="Monitor the overall stock market trends, indices, and performance metrics of key sectors."
                progress={68}
              />
            </div>

            <div className="flex flex-col gap-4">
              <Smallcol />
            </div>
          </div>
        </div>

        {/* ------------ MAP + STORAGE SECTION (Full Border) ------------ */}
        <div className="-mx-7 px-7 border-b-2 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div><MapChart /></div>
            <div><StorageActivityColumn /></div>
          </div>
        </div>

      </div>
      <div className="px-7 py-7 text-sm text-gray-600 flex justify-between">
        <p>
          Thankyou For Creating With <strong>Aurora</strong> | 2025@
          <span className="text-blue-400"> Themewagon</span>
        </p>

        <span>v1.8.0-rc.1</span>
      </div>
    </MainLayout>
  );
};

export default Homepage;
