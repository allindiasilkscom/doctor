import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Left */}
          <div className="footer-left">
            <h4 className="footer-logo">YourCompany</h4>
            <p>© {new Date().getFullYear()} All Rights Reserved.</p>
          </div>

          {/* Center Links */}
          <div className="footer-links">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/contact">Contact</a>
          </div>

          {/* Right */}
          <div className="footer-right">
            <p>Email: info@yourcompany.com</p>
            <p>Phone: +91 98765 43210</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
