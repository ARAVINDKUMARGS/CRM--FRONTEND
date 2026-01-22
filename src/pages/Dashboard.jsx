import "../styles/dashboard.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const salesData = [
  { month: "Jan", sales: 42000, leads: 120 },
  { month: "Feb", sales: 48000, leads: 140 },
  { month: "Mar", sales: 45000, leads: 130 },
  { month: "Apr", sales: 60000, leads: 180 },
  { month: "May", sales: 54000, leads: 160 },
  { month: "Jun", sales: 68000, leads: 200 },
];

const pipelineData = [
  { name: "Prospecting", value: 35 },
  { name: "Qualification", value: 25 },
  { name: "Proposal", value: 20 },
  { name: "Negotiation", value: 12 },
  { name: "Closed Won", value: 8 },
];

const COLORS = ["#3b82f6", "#8b5cf6", "#22c55e", "#f97316", "#10b981"];

export default function Dashboard() {
  return (
    <div className="dashboard">

      {/* Header */}
      <div className="page-header">
        <div>
          <h1>Dashboard Overview</h1>
          <p>Welcome back! Here's what's happening today.</p>
        </div>

        <select className="range-select">
          <option>Last 30 days</option>
          <option>Last 7 days</option>
          <option>This year</option>
        </select>
      </div>

      {/* Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <span>Total Revenue</span>
          <h2>$127,450</h2>
          <p className="positive">+12.5% vs last month</p>
        </div>

        <div className="stat-card">
          <span>Active Leads</span>
          <h2>342</h2>
          <p className="positive">+8.3% vs last month</p>
        </div>

        <div className="stat-card">
          <span>Deals Closed</span>
          <h2>48</h2>
          <p className="positive">+15.2% vs last month</p>
        </div>

        <div className="stat-card">
          <span>Conversion Rate</span>
          <h2>24.8%</h2>
          <p className="negative">-2.4% vs last month</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid-2">
        <div className="card">
          <h3>Sales & Leads Overview</h3>

          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={3} />
              <Line type="monotone" dataKey="leads" stroke="#8b5cf6" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h3>Pipeline Distribution</h3>

          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={pipelineData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                dataKey="value"
              >
                {pipelineData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

          <ul className="pipeline-legend">
            {pipelineData.map((item, index) => (
              <li key={item.name}>
                <span style={{ background: COLORS[index] }}></span>
                {item.name} – {item.value}%
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid-2 bottom-grid">
        <div className="card">
          <h3>Recent Activities</h3>

          <ul className="activity-list">
            <li>
              <div>
                <strong>John Smith</strong>
                <p>Closed deal with Acme Corp</p>
              </div>
              <span>$12,500</span>
            </li>

            <li>
              <div>
                <strong>Sarah Lee</strong>
                <p>Added new lead Tech Solutions Inc</p>
              </div>
              <span>$8,200</span>
            </li>

            <li>
              <div>
                <strong>Mike Johnson</strong>
                <p>Completed follow-up call</p>
              </div>
              <span>$6,200</span>
            </li>

            <li>
              <div>
                <strong>Emily Davis</strong>
                <p>Moved deal to Negotiation</p>
              </div>
              <span>$15,000</span>
            </li>
          </ul>
        </div>

        <div className="card">
          <h3>Team Leaderboard</h3>

          <ul className="leaderboard">
            <li>
              <span className="rank">1</span>
              John Smith <span className="amount">$48,500</span>
            </li>
            <li>
              <span className="rank">2</span>
              Sarah Lee <span className="amount">$42,100</span>
            </li>
            <li>
              <span className="rank">3</span>
              Mike Johnson <span className="amount">$36,200</span>
            </li>
            <li>
              <span className="rank">4</span>
              Emily Davis <span className="amount">$31,800</span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
}
