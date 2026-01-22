import { Link } from "react-router-dom"
import "../styles/home.css"

const PublicNavbar = () => {
  return (
    <nav className="public-navbar">
      <div className="nav-left">
        <span className="logo">CRM Pro</span>
      </div>

      <div className="nav-center">
        <a href="#features">Features</a>
        <a href="#benefits">Benefits</a>
        <a href="#pricing">Pricing</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="nav-right">
        <Link to="/login" className="login-link">Login</Link>
        <Link to="/signup" className="signup-btn">Sign Up Free</Link>
      </div>
    </nav>
  )
}

export default PublicNavbar