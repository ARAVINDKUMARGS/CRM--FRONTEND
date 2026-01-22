import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

import "../styles/reports.css";

export default function Reports() {
    const data = [
  { month: "Jan", actual: 45000, target: 50000 },
  { month: "Feb", actual: 52000, target: 48000 },
  { month: "Mar", actual: 48000, target: 51000 },
  { month: "Apr", actual: 61000, target: 55000 },
  { month: "May", actual: 56000, target: 58000 },
  { month: "Jun", actual: 68000, target: 60000 }
];

  return (
    <div className="reports">

      <div className="reports-header">
        <div>
          <h1>Reports & Analytics</h1>
          <p>Track performance and analyze business metrics</p>
        </div>
        <button className="export-btn">Export Report</button>
      </div>

      {/* Stat Cards */}
      <div className="reports-stats">
        <div className="stat-card">
          <span>Revenue YTD</span>
          <h2>$328,000</h2>
          <small className="green">+18.2% vs last year</small>
        </div>

        <div className="stat-card">
          <span>Deals Closed</span>
          <h2>48</h2>
          <small className="green">+15.2% vs last month</small>
        </div>

        <div className="stat-card">
          <span>Avg Deal Size</span>
          <h2>$6,833</h2>
          <small className="green">+8.5% vs last month</small>
        </div>

        <div className="stat-card">
          <span>Win Rate</span>
          <h2>68%</h2>
          <small className="green">+5.3% vs last month</small>
        </div>
      </div>

      {/* Chart Placeholder */}
      <div className="chart-card">
        <h3>Sales Performance vs Target</h3>
        <div className="chart-card">
  <h3>Sales Performance vs Target</h3>

  <ResponsiveContainer width="100%" height={260}>
    <BarChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="actual" fill="#3b82f6" />
      <Bar dataKey="target" fill="#8b5cf6" />
    </BarChart>
  </ResponsiveContainer>
</div>

      </div>

      {/* Team Performance */}
      <div className="table-card">
        <h3>Team Performance</h3>
        <table>
          <thead>
            <tr>
              <th>Team Member</th>
              <th>Deals Closed</th>
              <th>Revenue Generated</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Smith</td>
              <td>24</td>
              <td className="green">$48,500</td>
            </tr>
            <tr>
              <td>Sarah Lee</td>
              <td>21</td>
              <td className="green">$42,100</td>
            </tr>
            <tr>
              <td>Mike Johnson</td>
              <td>18</td>
              <td className="green">$36,200</td>
            </tr>
            <tr>
              <td>Emily Davis</td>
              <td>15</td>
              <td className="green">$31,800</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}
