import React, { useState } from "react";
import axios from "axios";
import "./ContactForm.css";

const SHEET_URL = "https://api.sheetbest.com/sheets/975bd07a-8c43-4f29-a0a9-ca7da2bf9222";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    year: "1st Year",
    suggestions: "",
  });

  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.contact.trim()) newErrors.contact = "Contact number is required";
    else if (!/^\d{10}$/.test(formData.contact))
      newErrors.contact = "Enter a valid 10-digit number";
    if (!formData.suggestions.trim()) newErrors.suggestions = "Suggestions are required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const payload = {
      Name: formData.name,
      Contact: formData.contact,
      Year: formData.year,
      Suggestions: formData.suggestions,
    };

    try {
      await axios.post(SHEET_URL, payload);
      setSuccess(true);
      setFormData({
        name: "",
        contact: "",
        year: "1st Year",
        suggestions: "",
      });
      setErrors({});
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please check your Sheet URL or network.");
    }
  };

  return (
    <div className="contact-section-container">
    
      {/* LEFT — FORM */}
      <div className="contact-box contact-left">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <p className="error">{errors.name}</p>}

          <label>Contact Number</label>
          <input type="text" name="contact" value={formData.contact} onChange={handleChange} />
          {errors.contact && <p className="error">{errors.contact}</p>}

          <label>Year</label>
          <select name="year" value={formData.year} onChange={handleChange}>
            <option>1st Year</option>
            <option>2nd Year</option>
            <option>3rd Year</option>
            <option>4th Year</option>
          </select>

          <label>Suggestions</label>
          <textarea name="suggestions" value={formData.suggestions} onChange={handleChange}></textarea>
          {errors.suggestions && <p className="error">{errors.suggestions}</p>}

          <button type="submit" className="submit-btn">Submit</button>
          {success && <p className="success-message">Form submitted successfully!</p>}
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

    </div>
  );
}

export default ContactForm;
