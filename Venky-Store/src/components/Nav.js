import react from "react";

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Venky Store
          </a>
          <div className="navbar" id="navbarNavDropdown">
            <ul className="navbar-nav d-flex justify-content-end w-100">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  cart
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
