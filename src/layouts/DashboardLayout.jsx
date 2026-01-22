import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import Topbar from "../components/Topbar";
import "../styles/dashboard.css"

const DashboardLayout = () => {
  return (
    <div className="layout">
    <div className="dashboard-container">
      <Sidebar />

      <div className="main-content">
        <Navbar />
        <div className="page-content">
          <Topbar /> 
          <Outlet />
        </div>
      </div>
    </div>
    </div>
  )
}

export default DashboardLayout