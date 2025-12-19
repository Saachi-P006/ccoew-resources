import React, { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    year: "1st Year",
    suggestions: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwLYqSbYR93WtdkdHD_jAlqBOdaV6Q4MusMfU5OE8FM5F97y2oqPPfPU3B8TOsDQqNJfw/exec",
        {
          method: "POST",
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (result.result === "success") {
        setShowPopup(true);

        setFormData({
          name: "",
          contact: "",
          year: "1st Year",
          suggestions: "",
        });

        setTimeout(() => setShowPopup(false), 3000);
      } else {
        throw new Error("Apps Script error");
      }
    } catch (err) {
      alert("Submission failed");
      console.error(err);
    }
  };

  return (
    <div className="contact-section-container">
      {/* LEFT — FORM */}
      <div className="contact-box contact-left">
        <h2>Contact Us</h2>

        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Contact Number</label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />

          <label>Year</label>
          <select
            name="year"
            value={formData.year}
            onChange={handleChange}
          >
            <option>1st Year</option>
            <option>2nd Year</option>
            <option>3rd Year</option>
            <option>4th Year</option>
          </select>

          <label>Suggestions</label>
          <textarea
            name="suggestions"
            value={formData.suggestions}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>

      {/* RIGHT — TESTIMONIALS */}
      <div className="testimonial-column">
        <div className="testimonial-box">
          <p className="quote">“</p>
          <p>This website has helped me navigate opportunities so easily!</p>
          <h4>— Student, CCEW</h4>
        </div>

        <div className="testimonial-box">
          <p className="quote">“</p>
          <p>Love the clean design and helpful resources. Very impressive!</p>
          <h4>— Final Year Student</h4>
        </div>

        <div className="testimonial-box">
          <p className="quote">“</p>
          <p>I found all roadmaps and links in one place. Super helpful!</p>
          <h4>— 2nd Year Student</h4>
        </div>
      </div>

      {/* SUCCESS POPUP */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-card">
            <button
              className="popup-close"
              onClick={() => setShowPopup(false)}
            >
              ✕
            </button>
            <h3>🎉 Submitted Successfully!</h3>
            <p>Thank you for your feedback. We’ll use it to improve the platform 🚀</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
