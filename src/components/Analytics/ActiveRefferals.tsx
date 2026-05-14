import { Share2 } from "lucide-react";

const ActiveReferrals = () => {
  return (
    <div className="p-6">
      <h3 className="font-semibold mb-4">Active Referrals</h3>

      <div className="flex items-center gap-3">
        <div className="p-3 rounded-lg bg-cyan-100 text-cyan-600">
          <Share2 />
        </div>
        <span className="text-2xl font-semibold">470</span>
      </div>

      <p className="text-sm text-gray-500 mt-4">
        See all inbound <span className="text-blue-600">Referral links</span>
      </p>
    </div>
  );
};

export default ActiveReferrals;
