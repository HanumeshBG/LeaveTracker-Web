import LeaveCard from "./LeaveCard";

const LeaveSummaryGrid = () => {
  const leaves = [
    { title: "Sick Leave", available: 9, consumed: 3, total: 12, color: "#f87171" },
    { title: "Earned Leave", available: 5, consumed: 3, total: 8, color: "#34d399" },
    { title: "Casual Leave", available: 5, consumed: 0, total: 5, color: "#fbbf24" },
    { title: "Unpaid Leave", available: "∞", consumed: 6, total: 6, color: "#60a5fa" },
    { title: "Floater Leave", available: 3, consumed: 2, total: 5, color: "#fb923c" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {leaves.map((leave, i) => (
        <LeaveCard key={i} {...leave} />
      ))}
    </div>
  );
};

export default LeaveSummaryGrid;