import React, { useEffect } from "react";
import "./QuickLinks.css";
import AOS from "aos";
import "aos/dist/aos.css";

const quickLinksData = [
  {
    category: "Learning Platforms",
    color: "#3498db", // blue
    links: [
      { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/" },
      { name: "W3Schools", url: "https://www.w3schools.com/" },
      { name: "Coursera", url: "https://www.coursera.org/" },
      { name: "Udemy", url: "https://www.udemy.com/" },
      { name: "ChatGPT", url: "https://chatgpt.com/" },
      { name: "YouTube", url: "https://www.youtube.com/" },
      { name: "Leetcode", url: "https://leetcode.com/"},
    ],
  },
  {
    category: "College",
    color: "#2ecc71", // green
    links: [
      { name: "College Website", url: "https://cumminscollege.org/" },
      { name: "Library Portal", url: "https://cumminscollege.knimbus.com/portal/v2/default/home" },
    ],
  },
  {
    category: "Tools & Utilities",
    color: "#e67e22", // orange
    links: [
      { name: "GitHub", url: "https://github.com/" },
      { name: "StackOverflow", url: "https://stackoverflow.com/" },
      { name: "Canva", url: "https://www.canva.com/" },
      { name: "VSCode", url: "https://code.visualstudio.com/" },
      {name: "Postman", url: "https://www.postman.com/"},
      {name: "Discord", url: "https://discord.com/"},
      {name: "Gemini", url: "https://gemini.google.com/app?hl=es"},
    ],
  },
];

function QuickLinks() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="quick-links">
      <h2>Quick Links</h2>
      {quickLinksData.map((category, idx) => (
        <div
          key={idx}
          className="category-section"
          data-aos="fade-up"
          data-aos-delay={idx * 50} 
        >
          <h3>{category.category}</h3>
          <div className="links-grid">
            {category.links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-card"
                style={{ backgroundColor: category.color }}
                data-aos="zoom-in"
                data-aos-delay={i * 50} 
              >
                <p>{link.name}</p>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
export default QuickLinks;
