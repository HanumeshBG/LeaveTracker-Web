import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", leaves: 50 },
  { month: "Feb", leaves: 150 },
  { month: "Mar", leaves: 220 },
  { month: "Apr", leaves: 180 },
  { month: "May", leaves: 140 },
  { month: "Jun", leaves: 300 },
  { month: "Jul", leaves: 400 },
  { month: "Aug", leaves: 100 },
  { month: "Sep", leaves: 200 },
  { month: "Oct", leaves: 300 },
  { month: "Nov", leaves: 350 },
  { month: "Dec", leaves: 250 },
];

const MonthlyChart = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="font-semibold mb-3">Monthly Leave Pattern</h2>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="leaves" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyChart;