import "../styles/leads.css";

const leads = [
  {
    name: "John Smith",
    company: "Acme Corp",
    email: "john@acme.com",
    phone: "+1 (555) 123-4567",
    value: "$12,500",
    status: "New",
    source: "Website",
    assigned: "Sarah Lee",
  },
  {
    name: "Emily Davis",
    company: "Tech Solutions Inc",
    email: "emily@techsolutions.com",
    phone: "+1 (555) 234-5678",
    value: "$8,200",
    status: "Contacted",
    source: "Referral",
    assigned: "Mike Johnson",
  },
  {
    name: "Robert Wilson",
    company: "Global Enterprises",
    email: "robert@global.com",
    phone: "+1 (555) 345-6789",
    value: "$15,000",
    status: "Qualified",
    source: "LinkedIn",
    assigned: "John Smith",
  },
  {
    name: "Maria Garcia",
    company: "Innovation Labs",
    email: "maria@innovation.com",
    phone: "+1 (555) 456-7890",
    value: "$6,500",
    status: "New",
    source: "Campaign",
    assigned: "Emily Davis",
  },
  {
    name: "David Chen",
    company: "Smart Systems",
    email: "david@smartsystems.com",
    phone: "+1 (555) 567-8901",
    value: "$9,800",
    status: "Contacted",
    source: "Website",
    assigned: "Sarah Lee",
  },
];

export default function Leads() {
  return (
    <div className="leads-page">

      {/* Header */}
      <div className="leads-header">
        <div>
          <h1>Lead Management</h1>
          <p>Track and convert your leads effectively</p>
        </div>
        <button className="primary-btn">+ Add New Lead</button>
      </div>

      {/* Stats */}
      <div className="lead-stats">
        <div className="stat-card">
          <span>Total Leads</span>
          <strong className="blue">342</strong>
        </div>
        <div className="stat-card">
          <span>New</span>
          <strong className="purple">124</strong>
        </div>
        <div className="stat-card">
          <span>Contacted</span>
          <strong className="orange">98</strong>
        </div>
        <div className="stat-card">
          <span>Qualified</span>
          <strong className="green">76</strong>
        </div>
        <div className="stat-card">
          <span>Lost</span>
          <strong className="red">44</strong>
        </div>
        <div className="stat-card">
          <span>Conversion Rate</span>
          <strong>24.8%</strong>
        </div>
      </div>

      {/* Search */}
      <div className="lead-filters">
        <input placeholder="Search leads by name, company, email..." />
        <button>All Status</button>
        <button>More Filters</button>
        <button>Export</button>
      </div>

      {/* Table */}
      <div className="card">
        <table className="leads-table">
          <thead>
            <tr>
              <th>Lead Name</th>
              <th>Contact</th>
              <th>Value</th>
              <th>Status</th>
              <th>Source</th>
              <th>Assigned To</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {leads.map((lead, i) => (
              <tr key={i}>
                <td>
                  <strong>{lead.name}</strong>
                  <p>{lead.company}</p>
                </td>
                <td>
                  <p>{lead.email}</p>
                  <small>{lead.phone}</small>
                </td>
                <td className="value">{lead.value}</td>
                <td>
                  <span className={`status ${lead.status.toLowerCase()}`}>
                    {lead.status}
                  </span>
                </td>
                <td>{lead.source}</td>
                <td>{lead.assigned}</td>
                <td>
                  <button className="btn-outline">View</button>
                  <button className="btn-outline">Convert</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
