import Layout from "@/components/app/layout";
import First from "@/components/Project/First";
import Second from "@/components/Project/Second";
import Third from "@/components/Project/Third";
import Fourth from "@/components/Project/Fourth";
import Fifth from "@/components/Project/Fifth";
import Sixth from "@/components/Project/Sixth";
import Seventh from "@/components/Project/Seventh";
import Eight from "@/components/Project/Eight";
import Ninth from "@/components/Project/Ninth";
import Tenth from "@/components/Project/Tenth";

function MainLayout({ children }: { children: React.ReactNode }) {
  return <Layout>{children}</Layout>; 
}

const Project = () => {
  return (
    <MainLayout>
      <div className="space-y-4">

        {/* ===== TOP GRID (1–5) ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-min border rounded-lg overflow-hidden">

          <div className="h-32 flex items-center justify-center border-b lg:border-r">
            <First />
          </div>

          <div className="h-32 flex items-center justify-center border-b lg:border-r">
            <Second />
          </div>

          <div className="h-32 flex items-center justify-center border-b lg:border-r">
            <Third />
          </div>

          <div className="lg:row-span-6 flex items-center justify-center border-b lg:border-l">
            <Fourth />
          </div>

          <div className="sm:col-span-2 lg:col-span-3 border-b p-4">
            <Fifth />
          </div>
        </div>

        {/* ===== MIDDLE GRID (6 & 7) ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">

          <div className="lg:col-span-3 border rounded-lg p-4">
            <Sixth />
          </div>

          <div className="lg:col-span-1 border rounded-lg p-4">
            <Seventh />
          </div>

        </div>

        {/* ===== BOTTOM GRID (8 = 1fr, 9 = 1.5fr, 10 = 1.5fr) ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr_1.5fr]">

          <div className="border rounded-lg p-4">
            <Eight />
          </div>

          <div className="border rounded-lg p-4">
            <Ninth />
          </div>

          <div className="border rounded-lg p-4">
            <Tenth />
          </div>

        </div>
        

      </div>
    </MainLayout>
  );
};

export default Project;
