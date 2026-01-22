import "../styles/deals.css";

const stages = [
  { title: "Prospecting", deals: 12, value: "$145K" },
  { title: "Qualification", deals: 8, value: "$98K" },
  { title: "Proposal", deals: 6, value: "$75K" },
  { title: "Negotiation", deals: 4, value: "$52K" },
  { title: "Closed Won", deals: 3, value: "$38K" },
];

const activeDeals = [
  {
    name: "Enterprise Software - Acme Corp",
    amount: "$45,000",
    owner: "John Smith",
    date: "2026-01-25",
    stage: "Negotiation",
    probability: "75%",
  },
  {
    name: "Consulting Services - Tech Solutions",
    amount: "$28,000",
    owner: "Sarah Lee",
    date: "2026-02-10",
    stage: "Proposal",
    probability: "60%",
  },
  {
    name: "Annual Subscription - Global Enterprises",
    amount: "$62,000",
    owner: "Mike Johnson",
    date: "2026-02-28",
    stage: "Qualification",
    probability: "45%",
  },
];

export default function Deals() {
  return (
    <div className="deals">

      {/* Header */}
      <div className="page-header">
        <div>
          <h1>Deals & Opportunities</h1>
          <p>Manage your sales pipeline and track deal progress</p>
        </div>
      </div>

      {/* Pipeline Stages */}
      <div className="pipeline-grid">
        {stages.map((stage) => (
          <div key={stage.title} className="pipeline-card">
            <h4>{stage.title}</h4>
            <strong>{stage.deals} deals</strong>
            <span className="value">{stage.value}</span>
          </div>
        ))}
      </div>

      {/* Active Deals */}
      <div className="card">
        <h3>Active Deals</h3>

        {activeDeals.map((deal) => (
          <div key={deal.name} className="deal-row">
            <div>
              <strong>{deal.name}</strong>
              <p>
                {deal.amount} • {deal.owner} • {deal.date}
              </p>
            </div>

            <div className="deal-meta">
              <span className={`badge ${deal.stage.toLowerCase()}`}>
                {deal.stage}
              </span>
              <small>↑ {deal.probability} probability</small>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
