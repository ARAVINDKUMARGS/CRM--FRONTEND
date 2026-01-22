import '../styles/topbar.css'

export default function Topbar() {
  return (
    <header className="topbar">
      <input placeholder="Search leads, contacts, deals..." />
      <button className="add-btn">+ Quick Add</button>
    </header>
  )
}
