import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "Mon", leaves: 2 },
  { day: "Tue", leaves: 8 },
  { day: "Wed", leaves: 3 },
  { day: "Thu", leaves: 4 },
  { day: "Fri", leaves: 1 },
  { day: "Sat", leaves: 1 },
  { day: "Sun", leaves: 0 },
];

const WeeklyChart = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="font-semibold mb-3">Weekly Leave Pattern</h2>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="leaves" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeeklyChart;