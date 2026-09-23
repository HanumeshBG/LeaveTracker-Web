import React from 'react'

const LeaveCardShimmer = () => {
  return (
    <div className="bgColor p-4 rounded-xl shadow flex flex-col items-center animate-pulse">
      
      {/* Title */}
      <div className="flex justify-center mb-3">
        <div className="h-5 w-28 rounded bg-gray-700" />
      </div>

      {/* Circular chart */}
      <div className="flex justify-center mb-5">
        <div className="h-[100px] w-[100px] rounded-full border-[15px] border-gray-700" />
      </div>

      {/* Details */}
      <div className="space-y-3">

        {/* Total */}
        <div className="flex items-center gap-2">
          <div className="h-4 w-12 rounded bg-gray-700" />
          <div className="h-8 w-12 rounded-full bg-gray-600" />
        </div>

        {/* Used */}
        <div className="flex items-center gap-2">
          <div className="h-4 w-12 rounded bg-gray-700" />
          <div className="h-8 w-12 rounded-full bg-gray-600" />
        </div>

        {/* Available */}
        <div className="flex items-center gap-2">
          <div className="h-4 w-20 rounded bg-gray-700" />
          <div className="h-8 w-12 rounded-full bg-gray-600" />
        </div>

        {/* Carry Forward */}
        <div className="flex items-center gap-2">
          <div className="h-4 w-28 rounded bg-gray-700" />
          <div className="h-8 w-12 rounded-full bg-gray-600" />
        </div>

      </div>
    </div>
  );
};

const ShimmerLeaveCard = () => {
  return (
    <div className="min-h-screen bg-black/30 p-8">

      {/* Dashboard heading */}
      <div className="h-7 w-44 rounded bg-gray-700 mb-8 animate-pulse" />

      {/* Cards */}
      <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-5
        gap-5
      ">
        {Array.from({ length: 5 }).map((_, index) => (
          <LeaveCardShimmer key={index} />
        ))}
      </div>

    </div>
  );
}

export default ShimmerLeaveCard