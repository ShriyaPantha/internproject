import { Users } from "lucide-react";

const ActiveUsers = () => {
  return (
    <div className="h-full px-4 sm:px-8 md:px-12 py-4 sm:py-8 md:py-12 flex flex-col items-start">
      <h4 className="text-base sm:text-lg font-semibold">Active Users</h4>
      <Users className="text-blue-500 my-3" size={32} />
      <p className="text-xl sm:text-2xl font-bold">3,050</p>
      <p className="text-xs text-gray-400 mt-2">Avg daily logins</p>
    </div>
  );
};

export default ActiveUsers;
