import LeaveSummaryGrid from "./LeaveSummaryGrid";

const EmployeeDashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-xl font-semibold">My Dashboard</h1>
      <LeaveSummaryGrid />
    </div>
  );
};

export default EmployeeDashboard;