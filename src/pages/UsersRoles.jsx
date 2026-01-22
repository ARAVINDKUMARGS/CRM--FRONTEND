import "../styles/usersRoles.css";

export default function UsersRoles() {
  return (
    <div className="users-roles">

      {/* Header */}
      <div className="page-header">
        <div>
          <h1>User & Role Management</h1>
          <p>Manage team members and permissions</p>
        </div>
        <button className="primary-btn">Add New User</button>
      </div>

      {/* Users Table */}
      <div className="card">
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Last Active</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <div className="user">
                  <span className="avatar">J</span> John Smith
                </div>
              </td>
              <td>john@company.com</td>
              <td>Admin</td>
              <td><span className="badge active">Active</span></td>
              <td>2 hours ago</td>
              <td>
                <button className="btn">Edit</button>
                <button className="btn">Disable</button>
              </td>
            </tr>

            <tr>
              <td>
                <div className="user">
                  <span className="avatar">S</span> Sarah Lee
                </div>
              </td>
              <td>sarah@company.com</td>
              <td>Sales Manager</td>
              <td><span className="badge active">Active</span></td>
              <td>1 hour ago</td>
              <td>
                <button className="btn">Edit</button>
                <button className="btn">Disable</button>
              </td>
            </tr>

            <tr>
              <td>
                <div className="user">
                  <span className="avatar">M</span> Mike Johnson
                </div>
              </td>
              <td>mike@company.com</td>
              <td>Sales Executive</td>
              <td><span className="badge active">Active</span></td>
              <td>30 min ago</td>
              <td>
                <button className="btn">Edit</button>
                <button className="btn">Disable</button>
              </td>
            </tr>

            <tr>
              <td>
                <div className="user">
                  <span className="avatar">E</span> Emily Davis
                </div>
              </td>
              <td>emily@company.com</td>
              <td>Marketing Executive</td>
              <td><span className="badge active">Active</span></td>
              <td>5 hours ago</td>
              <td>
                <button className="btn">Edit</button>
                <button className="btn">Disable</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Available Roles */}
      <div className="card">
        <h3>Available Roles</h3>

        <div className="roles-grid">
          <div className="role">Admin</div>
          <div className="role">Sales Manager</div>
          <div className="role">Sales Executive</div>
          <div className="role">Marketing Executive</div>
          <div className="role">Support Executive</div>
        </div>
      </div>

    </div>
  );
}
