const Navbar = () => {
  return (
    <nav className="public-navbar">
      <div className="logo">CRM Pro</div>

      <div className="nav-center">
        <a href="#">Features</a>
        <a href="#">Benefits</a>
        <a href="#">Pricing</a>
        <a href="#">Contact</a>
      </div>

      <div className="nav-right">
        <a href="/login" className="login-link">Login</a>
        <a href="/signup" className="signup-btn">Sign Up Free</a>
      </div>
    </nav>
  );
};

export default Navbar;