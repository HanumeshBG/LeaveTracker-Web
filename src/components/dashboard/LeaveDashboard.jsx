import WeeklyChart from "./WeeklyChart";
import MonthlyChart from "./MonthlyChart";
import LeaveSummaryGrid from "./LeaveSummaryGrid";
import AdminDashboard from "./AdminDashboard";
import EmployeeDashboard from "./EmployeeDashboard";

const LeaveDashboard = () => {
    const userRole = "employee"; // This would come from your auth logic

  return (
    <div className="space-y-6 min-h-screen w-full m-auto">
      {userRole === "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
    </div>
  );
};

export default LeaveDashboard;