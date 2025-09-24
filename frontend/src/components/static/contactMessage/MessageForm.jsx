
import "./contact.css"; // Import CSS file

const MessageForm = () => {
  return (
    <div className="form-container">
      <h1 className="form-title">Send Us a Message</h1>

      <form className="form">
        {/* Name */}
        <div className="form-group">
          <label className="form-label">Your Name</label>
          <input type="text" placeholder="Enter your name" required className="form-input" />
        </div>

        {/* Email */}
        <div className="form-group">
          <label className="form-label">Email Address</label>
          <input type="email" placeholder="Enter your email" required className="form-input" />
        </div>

        {/* Phone */}
        <div className="form-group">
          <label className="form-label">Phone Number</label>
          <input type="tel" placeholder="Enter your phone" className="form-input" />
        </div>

        {/* Message */}
        <div className="form-group">
          <label className="form-label">Message</label>
          <textarea rows="4" placeholder="Type your message..." required className="form-textarea"></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" className="form-button">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default MessageForm;
