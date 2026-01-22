import CommunicationCard from "../components/CommunicationCard";
import "../styles/communications.css";

export default function Communications() {
  return (
    <div className="communications-page">

      <h1>Communication Tracking</h1>
      <p className="subtitle">
        Log and track all customer interactions
      </p>

      <div className="communication-list">
        <CommunicationCard
          icon="📞"
          title="Product demo discussion"
          name="John Smith - Acme Corp"
          type="Call"
          duration="25 min"
          outcome="Interested"
          date="2026-01-13"
          color="blue"
        />

        <CommunicationCard
          icon="✉️"
          title="Proposal follow-up"
          name="Sarah Lee - Tech Solutions"
          type="Email"
          duration="-"
          outcome="Awaiting response"
          date="2026-01-12"
          color="purple"
        />

        <CommunicationCard
          icon="💬"
          title="Contract negotiation"
          name="Mike Johnson - Global Inc"
          type="Meeting"
          duration="1 hour"
          outcome="Positive"
          date="2026-01-11"
          color="green"
        />
      </div>

    </div>
  );
}
