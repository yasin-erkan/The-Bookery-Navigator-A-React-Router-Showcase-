import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand fs-2 fw-bold text-warning">
          The Bookery
        </span>
        <nav className="d-flex gap-4">
          <NavLink to="/" className="nav-link fs-5 text-light">
            Home
          </NavLink>
          <NavLink to="/Product" className="nav-link fs-5 text-light">
            Products
          </NavLink>
          <NavLink to="/Category" className="nav-link fs-5 text-light">
            Category
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
