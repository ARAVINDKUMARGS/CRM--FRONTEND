import "../styles/marketing.css";

export default function Marketing() {
  return (
    <div className="marketing">
      <h1>Marketing & Lead Sources</h1>
      <p className="subtitle">
        Track campaign performance and lead attribution
      </p>

      {/* Stats */}
      <div className="marketing-stats">
        <div className="stat-card">
          <span>Total Budget</span>
          <h2>$48K</h2>
        </div>
        <div className="stat-card">
          <span>Leads Generated</span>
          <h2>664</h2>
        </div>
        <div className="stat-card">
          <span>Conversions</span>
          <h2>108</h2>
        </div>
        <div className="stat-card">
          <span>Avg ROI</span>
          <h2>184%</h2>
        </div>
      </div>

      {/* Table */}
      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>Campaign Name</th>
              <th>Status</th>
              <th>Budget</th>
              <th>Spent</th>
              <th>Leads</th>
              <th>Conversions</th>
              <th>ROI</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Summer Product Launch</td>
              <td><span className="status active">Active</span></td>
              <td>$25,000</td>
              <td>$18,500</td>
              <td>342</td>
              <td className="blue">48</td>
              <td className="green">185%</td>
            </tr>
            <tr>
              <td>LinkedIn Outreach Q1</td>
              <td><span className="status active">Active</span></td>
              <td>$15,000</td>
              <td>$12,000</td>
              <td>198</td>
              <td className="blue">32</td>
              <td className="green">156%</td>
            </tr>
            <tr>
              <td>Email Campaign - Enterprise</td>
              <td><span className="status completed">Completed</span></td>
              <td>$8,000</td>
              <td>$8,000</td>
              <td>124</td>
              <td className="blue">28</td>
              <td className="green">210%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
