import Layout from "@/components/app/layout";
import Can from "@/components/Hiring/Can";
import Candidate from "@/components/Hiring/Candidate";
import Meeting from "@/components/Hiring/Meeting";
import Myposition from "@/components/Hiring/Myposition";
import Newhires from "@/components/Hiring/Newhires";
import Pipeline from "@/components/Hiring/Pipeline";
import Welcome from "@/components/Hiring/Welcome";

function MainLayout({ children }: { children: React.ReactNode }) {
  return <Layout>{children}</Layout>;
}

const Hiring = () => {
  return (
    <MainLayout>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
        {/* Welcome component spans 2 columns on large screens */}
        <div className="lg:col-span-2 border">
          <Welcome />
        </div>

        {/* Candidate component */}
        <div className="border">
          <Candidate />
        </div>

        {/* Myposition component */}
        <div className="lg:row-span-2 border">
          <Myposition />
        </div>

        {/* Newhires */}
        <div className="border">
          <Newhires />
        </div>

        {/* Meeting */}
        <div className="border">
          <Meeting />
        </div>

        {/* Can spans 2 columns on large screens */}
        <div className="lg:col-span-2 border">
          <Can />
        </div>

        {/* Pipeline spans all columns */}
        <div className="col-span-full border">
          <Pipeline />
        </div>
      </div>
    </MainLayout>
  );
};

export default Hiring;
