import LeaveSummaryGrid from "./LeaveSummaryGrid";

const EmployeeDashboard = () => {
  return (
    <div className="p-6 space-y-6">

      <h1 className="text-xl font-semibold">My Dashboard</h1>

      {/* Quick Actions */}
      <button className="btn btn-primary">Apply Leave</button>

      {/* Personal Summary */}
      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="card p-4 shadow">Total: 24</div>
        <div className="card p-4 shadow">Used: 10</div>
        <div className="card p-4 shadow">Remaining: 14</div>
        <div className="card p-4 shadow">Pending: 2</div>
      </div> */}

      {/* Cards */}
      <LeaveSummaryGrid />

    </div>
  );
};

export default EmployeeDashboard;