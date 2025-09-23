import { NavLink } from 'react-router';
import './Navbar.css';

const Navmenu = () => {
  return (
    <nav className="navmenu-container">
      <ul className="navmenu-list">
        <li className="navmenu-item"><NavLink to="/">Home</NavLink></li>
        <li className="navmenu-item"><NavLink to="/aboutus">About</NavLink></li>
        <li className="navmenu-item"><NavLink to="/services">Services</NavLink></li>
        <li className="navmenu-item"><NavLink to="/products">Products</NavLink></li>

        {/* Contact as button */}
        <li className="navmenu-item">
          <a href="/contact" className="navmenu-btn">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navmenu;
