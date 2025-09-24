import Location from "./Location";
import MessageForm from "./MessageForm";
import "./contact.css";

const ContactMessage = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-subtitle">
          Have questions? Reach out to us — we’d love to hear from you!
        </p>

        <div className="row message-container">
          {/* Location / Map */}
          <div className="col-md-5 col-12 mb-4 mb-md-0">
            <Location />
          </div>

          {/* Contact Form */}
          <div className="col-md-7 col-12">
            <MessageForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMessage;
