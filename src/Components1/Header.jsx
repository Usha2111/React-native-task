
// import { navbarItems } from "../Components/data/navbar";

function Header1() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light" style="background-color: #96f6fa;">
    <a className="navbar-brand" href="#">Coding Yaar</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbarToggler4"
        aria-controls="myNavbarToggler4" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="myNavbarToggler4">
        <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                </div>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
            </li>
        </ul>
    </div>
</nav>
    </>
  );
}

export default Header1;
