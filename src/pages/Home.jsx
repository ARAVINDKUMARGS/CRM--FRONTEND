import PublicNavbar from "../components/PublicNavbar"
import { useNavigate } from "react-router-dom"
import "../styles/home.css"

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="home">

      {/* NAVBAR */}
      <PublicNavbar />

      {/* HERO */}
      <section className="hero">
        <h1>
          All-in-One CRM for <span>Sales, Marketing</span> & Support
        </h1>

        <p>
          Manage leads, deals, contacts, tasks, and reports with our modern
          AI-powered CRM platform.
        </p>

        <div className="hero-buttons">
          <button onClick={() => navigate("/signup")} className="primary-btn">
            Get Started Free →
          </button>

          <button
            onClick={() => navigate("/login")}
            className="secondary-btn"
          >
            Login to Dashboard
          </button>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="stat-card">
          <h2>$127K</h2>
          <p>Revenue Generated</p>
        </div>
        <div className="stat-card">
          <h2>342</h2>
          <p>Active Leads</p>
        </div>
        <div className="stat-card">
          <h2>98%</h2>
          <p>Customer Satisfaction</p>
        </div>
        <div className="stat-card">
          <h2>24/7</h2>
          <p>Support</p>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="features">
        <h2>Everything You Need to Grow Your Business</h2>
        <p className="subtitle">
          Powerful features designed to streamline your sales process
        </p>

        <div className="feature-grid">
          <div className="feature-card">Lead Management</div>
          <div className="feature-card">Deals & Pipeline</div>
          <div className="feature-card">Contact Management</div>
          <div className="feature-card">Task & Activities</div>
          <div className="feature-card">AI-Powered Insights</div>
          <div className="feature-card">Reports & Analytics</div>
        </div>
      </section>

      {/* WHY CRM */}
      <section className="why">
        <h2>Why Choose CRM Pro?</h2>
        <p>Join thousands of businesses that trust our platform</p>

        <div className="why-cards">
          <div>Boost Productivity</div>
          <div>Increase Revenue</div>
          <div>Better Insights</div>
          <div>Enterprise Security</div>
        </div>

        <div className="why-stats">
          <span>10,000+ Active Users</span>
          <span>98% Satisfaction Rate</span>
          <span>24/7 Support</span>
        </div>
      </section>

    </div>
  )
}

export default Home
