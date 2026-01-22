import { useState } from "react";
import "../styles/customer360.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

/* ---------------- DATA ---------------- */

const revenueData = [
  { month: "Jan", value: 11000 },
  { month: "Feb", value: 14500 },
  { month: "Mar", value: 12500 },
  { month: "Apr", value: 17000 },
  { month: "May", value: 15500 },
  { month: "Jun", value: 21000 },
];

export default function Customer360() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="customer">
      {/* Header */}
      <div className="page-header">
        <div>
          <h1>Customer 360° View</h1>
          <p>Complete relationship intelligence and insights</p>
        </div>
      </div>

      {/* Customer Card */}
      <div className="card customer-header">
        <div className="customer-info">
          <div className="avatar">AC</div>
          <div>
            <h2>Acme Corporation</h2>
            <p>Enterprise Technology Solutions</p>
            <span>
              Technology • New York, NY • +1 (555) 123-4567 • contact@acme.com
            </span>
          </div>
        </div>

        <div className="customer-meta">
          <span className="status active">Active Customer</span>
          <strong>$95,000</strong>
          <small>Lifetime Value</small>
        </div>
      </div>

      {/* Metrics + Revenue */}
      <div className="grid-2">
        <div className="card">
          <h3>Relationship Strength Metrics</h3>
          <div className="metrics-grid">
            <div className="metric blue">
              <strong>85%</strong>
              <span>Engagement</span>
            </div>
            <div className="metric purple">
              <strong>92%</strong>
              <span>Trust</span>
            </div>
            <div className="metric green">
              <strong>88%</strong>
              <span>Satisfaction</span>
            </div>
            <div className="metric orange">
              <strong>78%</strong>
              <span>Loyalty</span>
            </div>
          </div>
        </div>

        <div className="card">
          <h3>Revenue History</h3>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={revenueData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#22c55e"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>

          <div className="revenue-stats">
            <div className="stat blue">
              <span>Current MRR</span>
              <strong>$21K</strong>
            </div>
            <div className="stat green">
              <span>Potential</span>
              <strong>$35K</strong>
            </div>
            <div className="stat purple">
              <span>Growth</span>
              <strong>+32%</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="card tabs">
        <span
          className={activeTab === "overview" ? "active" : ""}
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </span>
        <span
          className={activeTab === "timeline" ? "active" : ""}
          onClick={() => setActiveTab("timeline")}
        >
          Timeline
        </span>
        <span
          className={activeTab === "sentiment" ? "active" : ""}
          onClick={() => setActiveTab("sentiment")}
        >
          Sentiment
        </span>
        <span
          className={activeTab === "hierarchy" ? "active" : ""}
          onClick={() => setActiveTab("hierarchy")}
        >
          Hierarchy
        </span>
      </div>

      {/* OVERVIEW */}
      {activeTab === "overview" && (
        <div className="stats-row">
          <div className="stat-box blue">
            <strong>$21,000</strong>
            <span>Monthly Revenue</span>
          </div>
          <div className="stat-box green">
            <strong>12 months</strong>
            <span>Customer Since</span>
          </div>
          <div className="stat-box purple">
            <strong>86%</strong>
            <span>Health Score</span>
          </div>
        </div>
      )}

      {/* TIMELINE */}
      {activeTab === "timeline" && (
        <div className="card">
          <h3>Timeline</h3>

          <div className="timeline-item">
            <h4>Product demo call</h4>
            <small>2026-01-13</small>
            <p>Discussed new features and pricing</p>
            <strong>Outcome: Positive</strong>
          </div>

          <div className="timeline-item">
            <h4>Sent proposal</h4>
            <small>2026-01-10</small>
            <p>Annual subscription proposal sent</p>
            <strong>Outcome: Awaiting response</strong>
          </div>

          <div className="timeline-item">
            <h4>Quarterly review</h4>
            <small>2026-01-08</small>
            <p>Reviewed performance metrics</p>
            <strong>Outcome: Excellent</strong>
          </div>

          <div className="timeline-item">
            <h4>Deal closed</h4>
            <small>2026-01-05</small>
            <p>$12,500 contract signed</p>
            <strong>Outcome: Success</strong>
          </div>
        </div>
      )}

      {/* SENTIMENT */}
      {activeTab === "sentiment" && (
        <div className="card">
          <h3>Customer Sentiment Analysis</h3>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={revenueData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#6366f1"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* HIERARCHY */}
      {activeTab === "hierarchy" && (
        <div className="card">
          <h3>Account Hierarchy & Stakeholders</h3>

          <div className="stakeholder">
            <div className="avatar">J</div>
            <div>
              <strong>John Smith</strong>
              <p>CEO</p>
            </div>
            <span className="positive">High Influence • Positive</span>
          </div>

          <div className="stakeholder">
            <div className="avatar">S</div>
            <div>
              <strong>Sarah Johnson</strong>
              <p>CTO</p>
            </div>
            <span className="positive">High Influence • Positive</span>
          </div>

          <div className="stakeholder">
            <div className="avatar">M</div>
            <div>
              <strong>Mike Davis</strong>
              <p>CFO</p>
            </div>
            <span className="neutral">Medium Influence • Neutral</span>
          </div>
        </div>
      )}
    </div>
  );
}
