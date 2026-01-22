import TaskTable from '../components/TaskTable'
import '../styles/tasks.css'

export default function Tasks() {
  return (
    <div className="tasks-page">

      <h1>Tasks & Activities</h1>
      <p className="subtitle">Manage team tasks and track activity completion</p>

      <div className="stats">
        <div className="card">
          <span>Total Tasks</span>
          <strong>48</strong>
        </div>
        <div className="card blue">
          <span>Pending</span>
          <strong>24</strong>
        </div>
        <div className="card orange">
          <span>In Progress</span>
          <strong>16</strong>
        </div>
        <div className="card green">
          <span>Completed</span>
          <strong>8</strong>
        </div>
      </div>

      <TaskTable />

    </div>
  )
}
