import { NavLink } from "react-router";

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <NavLink to="/" className="header-logo">
          Stories
        </NavLink>

        <nav className="header-nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "header-link header-link--active" : "header-link"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "header-link header-link--active" : "header-link"
            }
          >
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
