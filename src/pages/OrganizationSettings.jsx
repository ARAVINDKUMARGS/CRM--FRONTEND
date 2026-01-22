import "../styles/organization.css";

export default function OrganizationSettings() {
  return (
    <div className="org-page">

      {/* PAGE HEADER */}
      <div className="org-header">
        <h1>Organization Settings</h1>
        <p>Manage company information and preferences</p>
      </div>

      {/* COMPANY INFO CARD */}
      <div className="org-card">
        <h3>Company Information</h3>

        <div className="org-grid">
          <div className="form-group">
            <label>Company Name</label>
            <input type="text" value="Acme Corporation" />
          </div>

          <div className="form-group">
            <label>Industry</label>
            <select>
              <option>Technology</option>
              <option>Finance</option>
              <option>Healthcare</option>
            </select>
          </div>

          <div className="form-group">
            <label>Currency</label>
            <select>
              <option>USD ($)</option>
              <option>INR (₹)</option>
              <option>EUR (€)</option>
            </select>
          </div>

          <div className="form-group">
            <label>Timezone</label>
            <select>
              <option>America/New_York (EST)</option>
              <option>Asia/Kolkata (IST)</option>
              <option>Europe/London (GMT)</option>
            </select>
          </div>
        </div>

        <button className="save-btn">Save Changes</button>
      </div>

      {/* WORKING HOURS */}
      <div className="org-card">
        <h3>Working Hours</h3>

        <div className="hours-row">
          <span>Monday - Friday</span>
          <span className="time">9:00 AM - 6:00 PM</span>
        </div>

        <div className="hours-row">
          <span>Saturday</span>
          <span className="closed">Closed</span>
        </div>

        <div className="hours-row">
          <span>Sunday</span>
          <span className="closed">Closed</span>
        </div>
      </div>

    </div>
  );
}
