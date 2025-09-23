import './Navbar.css';

const Topbar = () => {
  return (
    <div className="topbar-container">
      <div className="topbar-item">
        <i className="fa-solid fa-phone"></i>
        <span>7738537913</span>
      </div>

      <div className="topbar-item">
        <i className="fa-solid fa-envelope"></i>
        <span>Order@printourhub.com</span>
      </div>

      <div className="topbar-item">
        <i className="fa-solid fa-truck"></i>
        <span>Delivery</span>
      </div>
    </div>
  );
};

export default Topbar;
