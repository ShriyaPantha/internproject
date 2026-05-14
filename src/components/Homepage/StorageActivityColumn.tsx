import StorageChart from "./chart";
import { ThreeDots } from "../ui/threedot";
import { DropdownMenuRadioGroupDemo } from "../ui/lastmonth";
import { FaDollarSign, FaShoppingCart, FaQuestionCircle, FaTag } from 'react-icons/fa';
import { FileQuestionMarkIcon, FolderIcon, RocketIcon } from "lucide-react";

const activities = [
  {
    icon: <FaDollarSign className="w-3 h-3 text-white" />,
    title: "An item was sold!",
    description: "See, track, and monitor product purchase details based on user visits, navigation, and engagement on-site.",
    time: "2s ago",
    color: "bg-blue-700",
  },
  {
    icon: <FaShoppingCart className="w-3 h-3 text-white" />,
    title: "Product out on the Amazon Market",
    description: "Organize your inventory, track and monitor the availability of products on your site as well as in the Amazon Marketplace to reach out better.",
    time: "5m ago",
    color: "bg-blue-700",
  },
  {
    icon: <FaQuestionCircle className="w-3 h-3 text-white" />,
    title: "You responded to a support ticket",
    description: "Get updates on resolved and unresolved support tickets all at once for easier customer service and communications..",
    time: "2 hr ago",
    color: "bg-blue-700",
  },
  {
    icon: <FaTag className="w-3 h-3 text-white" />,
    title: "Sale on the summer collection has started",
    description: "Monitor all your sales products for a better overview on how your seasonal sales campaigns perform all over..",
    time: "2 hr ago",
    color: "bg-blue-700",
  },
  {
    icon: <FaDollarSign className="w-3 h-3 text-white" />,
    title: "A distributer sold an item",
    description: "Keep track of redistributed products for a concise view of your revenue growth and your suppliers..",
    time: "2 hr ago",
    color: "bg-blue-700",
  },
  {
    icon: <FolderIcon className="w-3 h-3 text-white" />,
    title: "A new Supplier Added",
    description: "Keep track of all the suppliers and relevant communication at a click’s length for enhanced production and sustainable supply..",
    time: "2 hr ago",
    color: "bg-blue-700",
  },
  {
    icon: <RocketIcon className="w-3 h-3 text-white" />,
    title: "A new product was launched",
    description: "Find all your new released products and services at the same place for simple monitoring and tracking for sustainable growth..",
    time: "2 hr ago",
    color: "bg-blue-700",
  },
  {
    icon: <FileQuestionMarkIcon className="w-3 h-3 text-white" />,
    title: "You got a new recommendation",
    description: "Track and monitor how your customers behave across the site to improve the user engagement on your business website..",
    time: "2 hr ago",
    color: "bg-blue-700",
  },
];

const StorageActivityColumn = () => {
  return (
    <div className="px-6 py-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 space-y-8 border-l border-gray-200 dark:border-gray-700 rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-2xl">Storage Usage</h2>
        <ThreeDots />
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400">
        Product categories occupying warehouse space
      </p>

      <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
        <StorageChart />
      </div>

      {/* Recent Activities */}
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-xl">Recent Activities</h3>
        <DropdownMenuRadioGroupDemo />
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400">Details on shopping composition</p>

      {/* Scrollable Section */}
      <div className="mt-4 max-h-115 overflow-y-auto pr-2 custom-scrollbar space-y-5">
        {activities.map((activity, index) => (
          <div key={index} className="flex gap-4 group">
            <div className="relative flex flex-col items-center">
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full ${activity.color} group-hover:shadow-md`}
              >
                {activity.icon}
              </div>

              {index < activities.length - 1 && (
                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-0.5 h-full bg-gray-200 dark:bg-gray-700"></div>
              )}
            </div>

            <div className="flex-1 pb-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h4 className="font-semibold text-base">{activity.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">{activity.description}</p>
                </div>
                <span className="text-xs text-gray-400 dark:text-gray-500 ml-4 whitespace-nowrap">{activity.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scrollbar Style */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        @media (prefers-color-scheme: dark) {
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #4b5563;
          }
        }
      `}</style>
    </div>
  );
};

export default StorageActivityColumn;
