import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="nav-logo">aman<span>.dev</span></div>
        <div className="nav-links">
          <NavLink to="/" end>home</NavLink>
          <NavLink to="/projects">projects</NavLink>
          <NavLink to="/blog">blog</NavLink>
          <NavLink to="/contact">contact</NavLink>
        </div>
      </div>
    </nav>
  )
}
