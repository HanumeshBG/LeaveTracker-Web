import WeeklyChart from "./WeeklyChart";
import MonthlyChart from "./MonthlyChart";
import LeaveSummaryGrid from "./LeaveSummaryGrid";
import AdminDashboard from "./AdminDashboard";
import EmployeeDashboard from "./EmployeeDashboard";

const LeaveDashboard = () => {
    const userRole = "employee"; // This would come from your auth logic

  return (
    <div className="p-6 space-y-6 bg-gray-100 min-h-screen w-full m-auto">
      {userRole === "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
    </div>
  );
};

export default LeaveDashboard;