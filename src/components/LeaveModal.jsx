const LeaveModal = ({leave, onClose, onStatusChange }) => {
  const status = leave.LeaveStatus?.toLowerCase();

    console.log("LeaveModal leave:", leave);
  const statusClass = {
    1:"bg-green-100 text-green-700",
    2:"bg-yellow-100 text-yellow-700",
    3:"bg-red-100 text-red-700",
  };

  return (
    <div className="fixed inset-0 z-50
        flex
        items-center
        justify-center
        bg-black/50
        px-4
      "
      onClick={onClose}
    >

      <div
        className="
          w-full
          max-w-lg
          bg-white
          rounded-2xl
          shadow-2xl
          p-6
        "
        onClick={(e) => e.stopPropagation()}
      >

        {/* Header */}
        <div className="flex items-center justify-between mb-6">

          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Leave Details
            </h2>

            <p className="text-sm text-gray-500">
              Employee leave information
            </p>
          </div>

          <button
            onClick={onClose}
            className="
              w-8
              h-8
              rounded-full
              bg-gray-100
              hover:bg-gray-200
              text-gray-600
            "
          >
            ✕
          </button>

        </div>


        {/* Employee */}
        <div className="mb-5">

          <p className="text-sm text-gray-500">
            Employee
          </p>

          <p className="text-lg font-semibold text-gray-800">
            {leave.uid.firstName} {leave.uid.lastName}
          </p>

        </div>


        {/* Details */}
        <div className="grid grid-cols-2 gap-5">

          <div>
            <p className="text-sm text-gray-500">
              Leave Category
            </p>

            <p className="font-medium text-gray-800">
              {leave.LeaveCategory}
            </p>
          </div>


          <div>
            <p className="text-sm text-gray-500">
              Number of Days
            </p>

            <p className="font-medium text-gray-800">
              {leave.number_days}
            </p>
          </div>


          <div>
            <p className="text-sm text-gray-500">
              Start Date
            </p>

            <p className="font-medium text-gray-800">
              {formatDate(leave.FromDate)}
            </p>
          </div>


          <div>
            <p className="text-sm text-gray-500">
              End Date
            </p>

            <p className="font-medium text-gray-800">
              {formatDate(leave.ToDate)}
            </p>
          </div>

        </div>


        {/* Reason */}
        <div className="mt-5">

          <p className="text-sm text-gray-500">
            Reason
          </p>

          <p className="text-gray-800 mt-1">
            {leave.LeaveReason || "No reason provided"}
          </p>

        </div>


        {/* Description */}
        {leave.LeaveDescription && (
          <div className="mt-5">

            <p className="text-sm text-gray-500">
              Description
            </p>

            <p className="text-gray-700 mt-1">
              {leave.LeaveDescription}
            </p>

          </div>
        )}


        {/* Status */}
        <div className="mt-5">

          <p className="text-sm text-gray-500 mb-2">
            Status
          </p>

          <span
            className={`
              inline-flex
              px-3
              py-1
              rounded-full
              text-sm
              font-medium
              ${statusClass[status] || "bg-gray-100 text-gray-700"}
            `}
          >
            {leave.LeaveStatus}
          </span>

        </div>


        {/* Actions */}
        {status === "pending" && (

          <div className="flex gap-3 mt-7">

            <button
              onClick={() => onStatusChange("Approved")}
              className="
                flex-1
                bg-green-500
                hover:bg-green-600
                text-white
                py-2.5
                rounded-lg
                font-medium
                transition
              "
            >
              Approve
            </button>


            <button
              onClick={() => onStatusChange("Rejected")}
              className="
                flex-1
                bg-red-500
                hover:bg-red-600
                text-white
                py-2.5
                rounded-lg
                font-medium
                transition
              "
            >
              Reject
            </button>

          </div>

        )}

      </div>

    </div>
  );
};


// Format date
const formatDate = (date) => {

  if (!date) return "-";

  return new Date(date).toLocaleDateString(
    "en-IN",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }
  );
};


export default LeaveModal;