import WeeklyChart from "./WeeklyChart";
import MonthlyChart from "./MonthlyChart";

const AdminDashboard = () => {
  return (
    <div className="p-6 space-y-6">

      <h1 className="text-xl font-semibold">Admin Dashboard</h1>

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-6">
        <WeeklyChart />
        <MonthlyChart />
      </div>

      {/* Team Overview */}
      <div className="card p-4 shadow bg-white rounded-xl">
        <h2 className="font-semibold mb-3">Team Leave Requests</h2>

        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Ravi</td>
              <td>Sick</td>
              <td><span className="badge badge-warning">Pending</span></td>
              <td className="flex gap-2">
                <button className="btn btn-success btn-sm">Approve</button>
                <button className="btn btn-error btn-sm">Reject</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default AdminDashboard;