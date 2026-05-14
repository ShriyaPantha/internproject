import { UserPlus } from "lucide-react";

const NewContacts = () => {
  return (
    <div className="h-full px-4 sm:px-12 py-4 sm:py-12 flex flex-col justify-center items-center sm:items-start">
      <h4 className="text-lg font-semibold">New Contacts</h4>
      <UserPlus className="text-orange-500 mb-3 mt-3" size={32} />
      <p className="text-2xl font-bold">105</p>
      <p className="text-xs text-gray-400 mt-2">Accounts opened</p>
    </div>
  );
};

export default NewContacts;
