import { useEffect} from "react";
import LeaveCard from "./LeaveCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchAdminSetting } from "../../utils/settingsSlices/adminSettingSlice";
import ShimmerLeaveCard from "./ShimmerLeaveCard";

const LeaveSummaryGrid = () => {
  const adminSetting = useSelector((state) => state.adminSetting.data)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!adminSetting) {
      dispatch(fetchAdminSetting())
    }
  }, [dispatch,adminSetting])

  if(!adminSetting){
    // return <div>Loading...</div>
    return<ShimmerLeaveCard />
  }

  const leaves = [
    { title: "Sick Leave", available: (adminSetting.tsicklcount - 4), consumed: 4, total: adminSetting.tsicklcount, carryforword: adminSetting.cfsicklcount, color: "#f87171" },
    { title: "Personal Leave", available: (adminSetting.tpersonallcount - 3), consumed: 3, total: adminSetting.tpersonallcount, carryforword: adminSetting.cfpersonallcount, color: "#34d399" },
    { title: "Casual Leave", available: (adminSetting.tcasuallcount - 0), consumed: 0, total: adminSetting.tcasuallcount, carryforword: adminSetting.cfcasuallcount, color: "#fbbf24" },
    { title: "Other Leave", available: (adminSetting.totherlcount - 6), consumed: 6, total: adminSetting.totherlcount, carryforword: adminSetting.cfotherlcount, color: "#60a5fa" },
    { title: "Maternity Leave", available: (adminSetting.tmaternitylcount - 2), consumed: 2, total: adminSetting.tmaternitylcount, carryforword: 0, color: "#fb923c" },
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