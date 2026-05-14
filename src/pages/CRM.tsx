import Layout from "@/components/app/layout";
import CrmFirst from "@/components/Crm/crmfirst";

// LEFT GRID BOXES
import ActiveUsers from "@/components/Crm/ActiveUsers";
import NewContacts from "@/components/Crm/NewContacts";
import RenewalRate from "@/components/Crm/RenewalRate";
import Inventory from "@/components/Crm/Inventory";
import Delivered from "@/components/Crm/Delivered";
import AddNewKPI from "@/components/Crm/AddNewKPI";

// RIGHT BIG BOX
import RevenueChart from "@/components/Crm/RevenueChart";

// BELOW GRID COMPONENTS
import CustomerFeedback from "@/components/Crm/CustomerFeedback";
import LeadSources from "@/components/Crm/LeadSources";
import CustomerAcquisitionCost from "@/components/Crm/CustomerAcquisitionCost";
import FunnelTable from "@/components/Crm/FunnelTable";

// BOTTOM ROW
import Avg from "@/components/Crm/Avg";
import Monthly from "@/components/Crm/Monthly";

const CRM = () => {
  return (
    <Layout>
      <div className="pt-2 bg-gray-50 min-h-screen space-y-4">

        {/* ===== TOP FULL WIDTH ===== */}
        <CrmFirst />

        {/* ===== MAIN GRID (LEFT + RIGHT) ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-6 bg-white border overflow-hidden mt-4">

          {/* LEFT: 6 SMALL BOXES */}
          <div className="col-span-1 md:col-span-3 grid grid-cols-3 grid-rows-2 border-r lg:border-r border-gray-200 gap-2">
            <div className="h-48 border-b border-l"><ActiveUsers /></div>
            <div className="h-48 border-b border-l"><NewContacts /></div>
            <div className="h-48 border-b border-l"><RenewalRate /></div>
            <div className="h-48 border-l"><Inventory /></div>
            <div className="h-48 border-l"><Delivered /></div>
            <div className="h-48 border-l"><AddNewKPI /></div>
          </div>

          {/* RIGHT: BIG BOX */}
          <div className="col-span-1 md:col-span-3 mt-4 md:mt-0"><RevenueChart /></div>
        </div>

        {/* ===== NEW GRID BELOW ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

          {/* ROW 1 */}
          <div className="row-start-1 row-end-2 col-start-1 col-end-2 h-74 bg-white border px-8 py-4">
            <CustomerFeedback />
          </div>

          <div className="row-start-1 row-end-2 col-start-2 col-end-3 h-74 bg-white border p-4">
            <LeadSources />
          </div>

          {/* ROW 2 */}
          <div className="col-span-1 lg:col-span-2 bg-white border h-74 p-4">
            <CustomerAcquisitionCost />
          </div>

          <div className="row-start-1 row-end-3 h-148 bg-white border p-4">
            <FunnelTable />
          </div>
        </div>

        {/* ===== BOTTOM SECTION / FULL WIDTH ROWS ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div className="col-span-1 bg-white border p-4 h-80">
            <Avg/>
          </div>

          <div className="col-span-1 bg-white border p-4 h-80">
            <Monthly/>
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default CRM;
