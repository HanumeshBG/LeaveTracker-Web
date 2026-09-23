import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay, addDays } from "date-fns";
import { enUS } from "date-fns/locale";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchLeaveData } from "../utils/leaveSlices/leaveSlice";
import { useMemo, useEffect, useState } from "react";
import LeaveModal from "./LeaveModal";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const MyLeaves = () => {
    let { data, loading, error } = useSelector((state) => state.leaves)
    const dispatch = useDispatch()

    const [selectedLeave, setSelectedLeave] = useState(null);

    useEffect(() => {
      // if(!data){
        dispatch(fetchLeaveData())
      // }
    }, [dispatch])

    // const events = [
    //     {
    //     id: 1,
    //     title: "Sick Leave - John",
    //     start: new Date(2026, 8, 8),
    //     end: new Date(2026, 8, 9),
    //     category: "Sick Leave",
    //     status: "Approved",
    //     },
    //     {
    //     id: 2,
    //     title: "Casual Leave - David",
    //     start: new Date(2026, 8, 12),
    //     end: new Date(2026, 8, 14),
    //     category: "Casual Leave",
    //     status: "Pending",
    //     },
    //     {
    //     id: 3,
    //     title: "Personal Leave - Smith",
    //     start: new Date(2026, 8, 18),
    //     end: new Date(2026, 8, 20),
    //     category: "Personal Leave",
    //     status: "Approved",
    //     },
    // ];

    // Always make sure leaves is an array
    const leaves = Array.isArray(data?.data) ? data?.data : [];

    // Convert database leaves -> calendar events
    const events = useMemo(() => {
      return leaves?.filter((leave) => leave.FromDate && leave.ToDate)
        .map((leave) => {
          const startDate = new Date(leave.FromDate);
          const endDate = new Date(leave.ToDate);
          // react-big-calendar treats end date as exclusive
          const calendarEndDate = addDays(endDate, 1);
          return {
            id: leave._id,
            title: `${leave.LeaveDescription}`,
            start: startDate,
            end: calendarEndDate,
            allDay: true,
            category: leave.LeaveCategory,
            status: leave.LeaveStatus,
            leave,
          };
        });
    }, [leaves]);

    if(!leaves.length > 0){
      return <div>Loading...</div>
      // return<ShimmerLeaveCard />
    }

    if (loading) {
      return (
        <div className="bg-white rounded-2xl p-6 shadow">
          <div className="h-6 w-48 bg-gray-200 rounded animate-pulse mb-6" />
          <div className="h-[600px] bg-gray-100 rounded-xl animate-pulse" />
        </div>
      );
    }

    if (error) {
      return (
        <div className="bg-white rounded-2xl p-6 shadow">
          <p className="text-red-500">
            Failed to load leaves: {error}
          </p>
        </div>
      );
    }

    const eventStyleGetter = (event) => {
    let backgroundColor = "#3b82f6";

    if (event.category === "Sick Leave") {
      backgroundColor = "#ef4444";
    }

    if (event.category === "Casual Leave") {
      backgroundColor = "#f59e0b";
    }

    if (event.category === "Personal Leave") {
      backgroundColor = "#10b981";
    }

    return {
        style: {
            backgroundColor,
            borderRadius: "6px",
            border: "none",
            color: "white",
            padding: "2px 5px",
        },
        };
    };

    // Click event
    const handleSelectEvent = (event) => {
      setSelectedLeave(event.leave);
    };

    return (
      <>
        <div className="backdrop-blur-md rounded-2xl shadow-md p-5 w-full h-full m-1">
          <h2 className="text-xl font-semibold mb-5">
              Leave Calendar
          </h2>
          <div className="h-[650px]">
              <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              defaultView="month"
              views={["month", "week", "day"]}
              popup
              eventPropGetter={eventStyleGetter}
              selectable={false}
              onSelectEvent={handleSelectEvent}
              tooltipAccessor={(event) =>
                `${event.title}`
              }
              />
          </div>
        </div>

        {/* Modal */}
        {selectedLeave && (
          <LeaveModal
            leave={selectedLeave}
            onClose={() => setSelectedLeave(null)}
            // onStatusChange={handleStatusChange}
          />
        )}
      </>
    );
}

export default MyLeaves