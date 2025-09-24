const Location = () => {
  return (
    <div className="location-container">
      <h2 className="location-title">Our Location - Mumbai</h2>
      <div className="map-container">
        <iframe
          title="Mumbai Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609886993!2d72.74109922681591!3d19.082197839789634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63a48a84b01%3A0x2f9d4c6d6f7a3e8d!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1695555555555!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
