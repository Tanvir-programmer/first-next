import Link from "next/link";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="cols-span-3 border-r-2 min-h-screen min-w-md">
        <h2>Navigation</h2>
        <div className="flex flex-col my-1 text-white">
          <Link
            className="py-2 px-4 w-full bg-gray-600"
            href={"dashboard/add-story"}
          >
            Add Story
          </Link>
          <Link
            className="py-2 px-4 w-full bg-gray-600 my-1"
            href={"dashboard/my-profile"}
          >
            My Profile
          </Link>
          <Link
            className="py-2 px-4 w-full bg-gray-600"
            href={"dashboard/settings"}
          >
            settings
          </Link>
        </div>
      </div>
      <div className="cols-span-9 min-w-screen relative ml-[400px]">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
