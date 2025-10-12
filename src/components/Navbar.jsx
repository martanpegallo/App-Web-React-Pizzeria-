import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

function Navbar() {
  const {totalFinal} = useContext(CartContext);
  const {token, logout} = useContext(UserContext);
  // const token=false; // Simulating a token for demonstration purposes
  // In a real application, you would retrieve this from your authentication state or context

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            Pizzería Mamma Mia!
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button type="button" className="btn btn-outline-secondary btn-sm m-1">
                  <Link className="nav-link active" aria-current="page" to={"/"}>
                    Home
                  </Link>
                </button>
              </li>
              <li className="nav-item">
              {token ? 
                <button type="button" class="btn btn-outline-secondary btn-sm m-1">
                  <Link className="nav-link" to="/profile">
                  Profile
                  </Link>
                </button> : 
                <button type="button" className="btn btn-outline-secondary btn-sm m-1">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </button>
              }
              </li>
              <li className="nav-item">
              {token ? 
                <button type="button" class="btn btn-outline-secondary btn-sm m-1">
                  <a className="nav-link" href="#"
                  onClick={logout}>
                    Logout
                  </a>
                </button> : 
                <button type="button" className="btn btn-outline-secondary btn-sm m-1">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </button>
              }
              </li>
            </ul>
            <form className="d-flex" role="search">
              <Link to="/cart" className="btn btn-outline-success m-1">
                <i className="bi bi-cart"></i> Total: ${totalFinal.toLocaleString('es-CL')}
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
