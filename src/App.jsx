import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup"

import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import AIInsights from "./pages/AIInsights";
import Customer360 from "./pages/Customer360";
import Leads from "./pages/Leads";
import Deals from "./pages/Deals";
import Contacts from "./pages/Contacts";
import Tasks from "./pages/Tasks";
import Communications from "./pages/Communications";
import Marketing from "./pages/Marketing";
import Reports from "./pages/Reports";
import OrganizationSettings from "./pages/OrganizationSettings";
import UsersRoles from "./pages/UsersRoles";
import Security from "./pages/Security";

export default function App() {
  return (
    <Routes>

      {/* 🌐 PUBLIC ROUTES */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* 🔐 DASHBOARD ROUTES */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="ai-insights" element={<AIInsights />} />
        <Route path="customer-360" element={<Customer360 />} />
        <Route path="leads" element={<Leads />} />
        <Route path="deals" element={<Deals />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="communications" element={<Communications />} />
        <Route path="marketing" element={<Marketing />} />
        <Route path="reports" element={<Reports />} />
        <Route path="organization" element={<OrganizationSettings />} />
        <Route path="users-roles" element={<UsersRoles />} />
        <Route path="security" element={<Security />} />
      </Route>

    </Routes>
  );
}
