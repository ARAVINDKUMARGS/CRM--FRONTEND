import "../styles/security.css";

export default function Security() {
  return (
    <div className="security">

      {/* Header */}
      <div className="page-header">
        <div>
          <h1>Security & Access Control</h1>
          <p>Monitor security settings and activity logs</p>
        </div>
      </div>

      {/* Stats */}
      <div className="security-stats">
        <div className="stat-card">
          <span>Security Score</span>
          <h2 className="green">95 / 100</h2>
        </div>

        <div className="stat-card">
          <span>2FA Enabled</span>
          <h2>12 / 15</h2>
        </div>

        <div className="stat-card">
          <span>Active Sessions</span>
          <h2>8</h2>
        </div>

        <div className="stat-card">
          <span>Failed Logins</span>
          <h2 className="red">3</h2>
        </div>
      </div>

      {/* Security Settings */}
      <div className="card">
        <h3>Security Settings</h3>

        <div className="setting">
          <div>
            <strong>Two-Factor Authentication</strong>
            <p>Add an extra layer of security</p>
          </div>
          <span className="badge enabled">Enabled</span>
        </div>

        <div className="setting">
          <div>
            <strong>Password Policy</strong>
            <p>Minimum 8 characters, special chars required</p>
          </div>
          <span className="badge active">Active</span>
        </div>

        <div className="setting">
          <div>
            <strong>Session Timeout</strong>
            <p>Auto logout after 30 minutes of inactivity</p>
          </div>
          <span className="badge enabled">Enabled</span>
        </div>
      </div>

      {/* Activity Logs */}
      <div className="card">
        <h3>Activity Logs</h3>

        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Action</th>
              <th>IP Address</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>John Smith</td>
              <td>Login</td>
              <td>192.168.1.1</td>
              <td>2 hours ago</td>
              <td><span className="badge success">Success</span></td>
            </tr>

            <tr>
              <td>Sarah Lee</td>
              <td>Password change</td>
              <td>192.168.1.25</td>
              <td>5 hours ago</td>
              <td><span className="badge success">Success</span></td>
            </tr>

            <tr>
              <td>Unknown</td>
              <td>Failed login attempt</td>
              <td>45.123.45.67</td>
              <td>1 day ago</td>
              <td><span className="badge failed">Failed</span></td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}
