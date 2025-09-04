function Navbar() {
  const total=25000;
  const token=false; // Simulating a token for demonstration purposes
  // In a real application, you would retrieve this from your authentication state or context

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Pizzería Mamma Mia!
          </a>
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
                <button type="button" className="btn btn-outline-secondary btn-sm  m-1">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </button>
              </li>
              <li className="nav-item">
              {token ? 
                <button type="button" class="btn btn-outline-secondary btn-sm m-1">
                  <a className="nav-link" href="#">
                    Logout
                  </a>
                </button> : 
                <button type="button" className="btn btn-outline-secondary btn-sm m-1">
                  <a className="nav-link" href="#">
                    Login
                  </a>
                </button>
              }
              </li>
              <li className="nav-item">
              {token ? 
                <button type="button" class="btn btn-outline-secondary btn-sm m-1">
                  <a className="nav-link" href="#">
                  Profile
                  </a>
                </button> : 
                <button type="button" className="btn btn-outline-secondary btn-sm m-1">
                  <a className="nav-link" href="#">
                    Register
                  </a>
                </button>
              }
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button className="btn btn-outline-success" type="submit">
                <i className="bi bi-cart"></i>
                Total: ${total.toLocaleString('es-CL')}
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
