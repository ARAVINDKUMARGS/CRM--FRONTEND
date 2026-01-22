import "../styles/ai-insights.css";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const leadScores = [
  { name: "John Smith", company: "Acme Corp", score: 95 },
  { name: "Sarah Lee", company: "Tech Solutions", score: 88 },
  { name: "Mike Johnson", company: "Global Inc", score: 72 },
];

const dealHealthData = [
  { metric: "Engagement", value: 80 },
  { metric: "Budget", value: 85 },
  { metric: "Timeline", value: 70 },
  { metric: "Authority", value: 75 },
  { metric: "Fit", value: 90 },
];

const forecastData = [
  { month: "Feb", revenue: 42000 },
  { month: "Mar", revenue: 48000 },
  { month: "Apr", revenue: 52000 },
  { month: "May", revenue: 58000 },
  { month: "Jun", revenue: 64000 },
];

export default function AIInsights() {
  return (
    <div className="ai">

      {/* Header */}
      <div className="page-header">
        <div>
          <h1>AI-Powered Insights</h1>
          <p>Predictive analytics and intelligent recommendations</p>
        </div>
      </div>

      {/* Predictive Lead Scoring */}
      <div className="card">
        <h3>Predictive Lead Scoring</h3>

        {leadScores.map((lead) => (
          <div className="lead-row" key={lead.name}>
            <div>
              <strong>{lead.name}</strong>
              <p>{lead.company}</p>
            </div>
            <span className="score">{lead.score}</span>
          </div>
        ))}
      </div>

      {/* Alerts + Deal Health */}
      <div className="grid-2">
        <div className="card danger">
          <h3>At-Risk Deal Alerts</h3>

          <div className="alert">
            <strong>Enterprise Software – Innovation Labs</strong>
            <p>Low engagement in last 14 days</p>
            <span>$45,000</span>
          </div>

          <div className="alert">
            <strong>Consulting Services – Smart Systems</strong>
            <p>Decision delayed by 1 week</p>
            <span>$28,000</span>
          </div>
        </div>

        <div className="card">
          <h3>Deal Health Analysis</h3>

          <ResponsiveContainer width="100%" height={260}>
            <RadarChart data={dealHealthData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="metric" />
              <PolarRadiusAxis />
              <Radar
                dataKey="value"
                stroke="#8b5cf6"
                fill="#8b5cf6"
                fillOpacity={0.4}
              />
            </RadarChart>
          </ResponsiveContainer>

          <p className="health good">✔ Overall Health: Strong</p>
        </div>
      </div>

      {/* AI Sales Forecast */}
      <div className="card">
        <h3>AI Sales Forecast</h3>

        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={forecastData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#6366f1"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>

        <div className="forecast-stats">
          <div>
            <span>Confidence Level</span>
            <strong>87%</strong>
          </div>
          <div>
            <span>Growth Rate</span>
            <strong className="positive">+12.5%</strong>
          </div>
          <div>
            <span>Trend</span>
            <strong className="positive">Upward</strong>
          </div>
        </div>
      </div>

    </div>
  );
}
