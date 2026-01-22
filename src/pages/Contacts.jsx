import "../styles/contacts.css";

const contacts = [
  {
    name: "John Smith",
    role: "CEO",
    company: "Acme Corp",
    email: "john@acme.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    status: "Active",
  },
  {
    name: "Sarah Lee",
    role: "VP Sales",
    company: "Tech Solutions",
    email: "sarah@tech.com",
    phone: "+1 (555) 234-5678",
    location: "San Francisco, CA",
    status: "Active",
  },
  {
    name: "Mike Johnson",
    role: "Director",
    company: "Global Inc",
    email: "mike@global.com",
    phone: "+1 (555) 345-6789",
    location: "Chicago, IL",
    status: "Active",
  },
];

export default function Contacts() {
  return (
    <div className="contacts-page">

      {/* Header */}
      <div className="page-header">
        <h1>Contacts & Accounts</h1>
        <p>Manage customer relationships and account information</p>
      </div>

      {/* Cards */}
      <div className="contacts-grid">
        {contacts.map((c) => (
          <div key={c.email} className="contact-card">

            <div className="avatar">
              {c.name.charAt(0)}
            </div>

            <div className="contact-info">
              <h3>{c.name}</h3>
              <span className="role">{c.role}</span>

              <p>🏢 {c.company}</p>
              <p>✉ {c.email}</p>
              <p>📞 {c.phone}</p>
              <p>📍 {c.location}</p>

              <span className="status active">{c.status}</span>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
