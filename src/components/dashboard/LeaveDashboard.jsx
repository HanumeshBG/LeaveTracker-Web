import WeeklyChart from "./WeeklyChart";
import MonthlyChart from "./MonthlyChart";
import LeaveSummaryGrid from "./LeaveSummaryGrid";

const LeaveDashboard = () => {
  return (
    <div className="p-6 space-y-6 bg-gray-100 min-h-screen">

      {/* Header */}
      <div className="flex justify-between items-center bg-white p-2 rounded-xl shadow-xl">
        <h1 className="text-xl font-semibold">Leave</h1>
        <button className="btn btn-primary">Apply Leave</button>
      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-6">
        <WeeklyChart />
        <MonthlyChart />
      </div>

      {/* Cards */}
      <LeaveSummaryGrid />

    </div>
  );
};

export default LeaveDashboard;