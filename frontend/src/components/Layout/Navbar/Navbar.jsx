import Navmenu from "./Navmenu";
import Topbar from "./Topbar";
import Logo from "../../../assets/Logo.png";

const Navbar = () => {
  return (
    <header className="navbar-container">
      <div className="navbar-left">
        <img src={Logo} alt="PrintOurHub Logo" className="navbar-logo" />
      </div>

      <div className="navbar-right">
        <Topbar />
        <Navmenu />
      </div>
    </header>
  );
};

export default Navbar;
