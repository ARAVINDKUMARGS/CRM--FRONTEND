export default function CommunicationCard({
  icon,
  title,
  name,
  type,
  duration,
  outcome,
  date,
  color
}) {
  return (
    <div className="communication-card">
      
      <div className={`icon ${color}`}>
        {icon}
      </div>

      <div className="content">
        <h3>{title}</h3>
        <p className="name">{name}</p>

        <div className="meta">
          <span>Type: {type}</span>
          <span>Duration: {duration}</span>
          <span className="outcome">
            Outcome: <b>{outcome}</b>
          </span>
        </div>
      </div>

      <div className="date">
        {date}
      </div>

    </div>
  );
}
