import { NavLink } from "react-router-dom";
import { usePassport } from "../context/PassportContext";
import "./Navbar.css";

export default function Navbar() {
  const { count, total } = usePassport();

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <NavLink to="/" className="nav-mark">
          Karlynn Riccitelli
        </NavLink>
        <nav className="nav-links">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
            Work
          </NavLink>
          <NavLink to="/more-work" className={({ isActive }) => (isActive ? "active" : "")}>
            More Work
          </NavLink>
          <NavLink to="/passport" className={({ isActive }) => (isActive ? "active" : "")}>
            <span className="nav-passport-label">
              Passport
              <span className="nav-stamp-count">{count}/{total}</span>
            </span>
          </NavLink>
          <NavLink to="/resume" className={({ isActive }) => (isActive ? "active" : "")}>
            Resume
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
