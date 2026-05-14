import Layout from "@/components/app/layout";
import DailyTaskTrack from "@/components/Timetracker/DailyTaskTrack";
import EarnedCard from "@/components/Timetracker/earned";
import ProjectsCard from "@/components/Timetracker/projecttt";
import Newcomponent from "@/components/Timetracker/screencasts/Newcomponent";
import TimesheetTable from "@/components/Timetracker/TimeSheetTable";
import Timehours from "@/components/Timetracker/Totalhourscard";
import TrmFirst from "@/components/Timetracker/trmfirst";
import Weeklyactivity from "@/components/Timetracker/Weeklyactivity";

function MainLayout({ children }: { children: React.ReactNode }) {
  return <Layout>{children}</Layout>;
}

const TimeTracker = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 p-4">
        {/* Top Timer Row */}
        <TrmFirst />

        {/* 2-column grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Left Column */}
          <div className="grid grid-rows-4 gap-4">
            <div className="bg-gray-100 dark:bg-gray-800 rounded shadow p-4">
              <Timehours />
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded shadow p-4">
              <Weeklyactivity />
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded shadow p-4">
              <EarnedCard
                amount={1240}
                percentChange={12.5}
                weeklyData={[40, 65, 30, 80, 55, 70, 60]}
              />
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded shadow p-4">
              <ProjectsCard
                total={18}
                percentChange={-6.2}
                points="0,20 15,10 30,18 45,8 60,14 75,6 100,12"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-2 grid grid-rows-4 gap-4">
            {/* Right Row 1 spans 2 rows */}
            <div className="bg-gray-200 dark:bg-gray-900 p-4 rounded shadow row-span-2">
              <Newcomponent />
            </div>

            {/* Right Row 2 spans 2 rows */}
            <div className="bg-gray-200 dark:bg-gray-900 p-4 rounded shadow row-span-2">
              <TimesheetTable/>
            </div>
          </div>
        </div>

        {/* Full-width row below the grid */}
        <div className="bg-gray-300 dark:bg-gray-700 rounded shadow w-full p-4">
          <DailyTaskTrack/>
        </div>
      </div>
    </MainLayout>
  );
};

export default TimeTracker;
