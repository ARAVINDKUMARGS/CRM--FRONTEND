import { useState } from "react"
import "../styles/login.css"

const Login = () => {
  const [loginType, setLoginType] = useState("admin")
  const [role, setRole] = useState("Admin")

  return (
    <div className="login-container">
      {/* LEFT SECTION */}
      <div className="login-left">
        <div className="brand">
          <span className="logo-circle">🌐</span>
          <h2>CRM Pro</h2>
        </div>

        <h1>Welcome Back!</h1>
        <p>
          Sign in to access your CRM dashboard and manage your business
          effectively.
        </p>

        <ul className="features">
          <li>✔ All-in-One Platform</li>
          <li>✔ AI-Powered Insights</li>
          <li>✔ Secure & Reliable</li>
        </ul>

        <div className="testimonial">
          <p>
            “CRM Pro has transformed how we manage our sales pipeline.”
          </p>
          <span>— Sarah Johnson, Sales Director</span>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="login-right">
        <h2>Sign In</h2>
        <p className="subtitle">
          Enter your credentials to access your account
        </p>

        {/* LOGIN TYPE TOGGLE */}
        <div className="login-toggle">
          <button
            className={loginType === "admin" ? "active" : ""}
            onClick={() => setLoginType("admin")}
          >
            Admin Login
          </button>
          <button
            className={loginType === "customer" ? "active" : ""}
            onClick={() => setLoginType("customer")}
          >
            Customer Login
          </button>
        </div>

        {/* ROLE SELECTION (ADMIN ONLY) */}
        {loginType === "admin" && (
          <>
            <p className="role-title">Select Role</p>
            <div className="roles">
              {[
                "Admin",
                "Sales Manager",
                "Sales Executive",
                "Marketing Executive",
                "Support Executive",
              ].map((r) => (
                <button
                  key={r}
                  className={role === r ? "role active" : "role"}
                  onClick={() => setRole(r)}
                >
                  {r}
                </button>
              ))}
            </div>
          </>
        )}

        {/* FORM */}
        <div className="form">
          <label>Email Address</label>
          <input type="email" placeholder="you@example.com" />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" />

          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>

          <button className="signin-btn">Sign In</button>

          <div className="divider">Or continue with</div>
         <div className="divider">
 
         </div>
         <div className="social-login">
          <button className="social-btn google">
            <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            />
           Google
          </button>
          <button className="social-btn linkedin">
            <img
            src="https://www.svgrepo.com/show/475661/linkedin-color.svg"
            alt="LinkedIn"
            />
           LinkedIn
          </button>
         </div>

          <p className="signup-link">
            Don’t have an account? 
            <span>Sign up for free</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login