export default function TaskTable() {
  return (
    <table className="task-table">
      <thead>
        <tr>
          <th>Task</th>
          <th>Contact</th>
          <th>Assigned To</th>
          <th>Status</th>
          <th>Due Date</th>
          <th>Priority</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            <strong>Follow up with John Smith</strong>
            <p>Discuss proposal details</p>
          </td>
          <td>John Smith - Acme Corp</td>
          <td>Sarah Lee</td>
          <td className="status pending">Pending</td>
          <td>2026-01-15</td>
          <td className="priority high">High</td>
        </tr>

        <tr>
          <td>
            <strong>Send proposal to Tech Solutions</strong>
            <p>Annual subscription proposal</p>
          </td>
          <td>Emily Davis - Tech Solutions</td>
          <td>Mike Johnson</td>
          <td className="status progress">In Progress</td>
          <td>2026-01-14</td>
          <td className="priority high">High</td>
        </tr>

        <tr>
          <td>
            <strong>Schedule demo call</strong>
            <p>Product demonstration</p>
          </td>
          <td>Robert Wilson - Global Enterprises</td>
          <td>John Smith</td>
          <td className="status pending">Pending</td>
          <td>2026-01-16</td>
          <td className="priority medium">Medium</td>
        </tr>

        <tr>
          <td>
            <strong>Prepare contract documents</strong>
            <p>Legal review needed</p>
          </td>
          <td>Maria Garcia - Innovation Labs</td>
          <td>Emily Davis</td>
          <td className="status done">Completed</td>
          <td>2026-01-12</td>
          <td className="priority low">Low</td>
        </tr>
      </tbody>
    </table>
  )
}
