import { NavLink } from "react-router-dom";
import "../styles/sidebar.css";
export default function Sidebar()
 {
  return (
    <aside className="sidebar">
      <h2 className="logo">CRM Pro</h2>

      <nav>
        <NavLink to="/dashboard">Dashboard</NavLink>
       
       <NavLink
       to="/dashboard"
       className={({ isActive }) => (isActive ? "active" : "")}
       >
       Dashboard
       </NavLink>
       
       <NavLink
       to="/ai-insights"
       className={({ isActive }) => (isActive ? "active" : "")}
      >
       AI Insights
       </NavLink>

         <NavLink
         to="/customer-360"
         className={({ isActive }) => (isActive ? "active" : "")}
         >
         Customer 360°
         </NavLink>

        <NavLink
        to="/leads"
        className={({ isActive }) =>isActive ? "nav-item active" : "nav-item"
        }
        >
        Leads
        </NavLink>
       
       <NavLink
       to="/deals"
       className={({ isActive }) => isActive ? "nav-item active" : "nav-item"
       }
       >
       Deals
       </NavLink>

         <NavLink
         to="/contacts"
         className={({ isActive }) => isActive ? "nav-item active" : "nav-item"
         }
        > 
        Contacts
        </NavLink>


        <NavLink
          to="/tasks"
          className={({ isActive }) => isActive ? "active" : ""}
        >
          Tasks
        </NavLink>

        <NavLink
          to="/communications"
          className={({ isActive }) => isActive ? "active" : ""}
        >
          Communications
        </NavLink>

        <NavLink
         to="/marketing"
         className={({ isActive }) => isActive ? "active" : ""}
        >
         Marketing
        </NavLink>

        <NavLink
        to="/reports"
        className={({ isActive }) => (isActive ? "active" : "")}
        >
        Reports
        </NavLink>

        <NavLink
        to="/organization"
        className={({ isActive }) => (isActive ? "active" : "")}
       >
       Organization
       </NavLink>

         <NavLink
         to="/users-roles"
         className={({ isActive }) => isActive ? "active" : ""}
         >
         Users & Roles
         </NavLink>

        <NavLink
        to="/security"    
        className={({ isActive }) => (isActive ? "active" : "")}
        >
        Security
        </NavLink>

      </nav>
    </aside>
  );
}
