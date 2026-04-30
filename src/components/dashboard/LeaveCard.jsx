// LeaveCard.jsx
const LeaveCard = (leave) => {
    const { title, available, consumed, total, color } = leave;
  const percentage = (consumed / total) * 100;

  return (
    <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center">
      <h3 className="font-medium mb-2">{title}</h3>

      {/* Circle */}
      <div className="relative w-20 h-20">
        <div
          className="radial-progress"
          style={{
            "--value": percentage,
            "--size": "80px",
            "--thickness": "10px",
            color: color
          }}
        >
        </div>
      </div>

      {/* Stats */}
      <div className="text-xs mt-3 text-center">
        <p>Available: {available}</p>
        <p>Consumed: {consumed}</p>
        <p>Annual: {total}</p>
      </div>
    </div>
  );
};

export default LeaveCard;