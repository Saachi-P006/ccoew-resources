import React, { useState } from "react";
import "./Roadmaps.css";
import scrapbookBg from "../assets/image.png"; // Scrapbook background

// Import roadmap images
import DSARoadmap from "../assets/DSARoadmap.jpg";
import JavaRoadmap from "../assets/JavaRoadmap.jpg";
import AndroidRoadmap from "../assets/AndroidRoadmap.svg";
import WebDevelopmentRoadmap from "../assets/WebdevelopmentRoadmap.png";
import MLRoadmap from "../assets/MLRoadmap.webp";
import CybersecurityRoadmap from "../assets/CybersecurityRoadmap.jpg";
import StartupRoadmap from "../assets/StartupRoadmap.jpg";
import AIRoadmap from "../assets/AIRoadmap.gif";
import FullstackRoadmap from "../assets/FullstackRoadmap.jpg";
import DatascienceRoadmap from "../assets/DatascienceRoadmap.png";

function Roadmaps() {
  const [selectedImage, setSelectedImage] = useState(null);

  const roadmapData = [
    { title: "Roadmap to DSA", img: DSARoadmap, side: "left", top: "5%" },
    { title: "Java Roadmap", img: JavaRoadmap, side: "left", top: "22%" },
    { title: "Android Development", img: AndroidRoadmap, side: "left", top: "40%" },
    { title: "Startup Roadmap", img: StartupRoadmap, side: "left", top: "58%" },
    { title: "AI Roadmap", img: AIRoadmap, side: "left", top: "75%" },
    { title: "Web Development", img: WebDevelopmentRoadmap, side: "right", top: "5%" },
    { title: "Machine Learning", img: MLRoadmap, side: "right", top: "23%" },
    { title: "Cyber Security", img: CybersecurityRoadmap, side: "right", top: "41%" },
    { title: "Fullstack Roadmap", img: FullstackRoadmap, side: "right", top: "59%" },
    { title: "Data Science", img: DatascienceRoadmap, side: "right", top: "76%" },
  ];

  const resources = [
    { title: "DSA – Code Story with Mik", link: "https://www.youtube.com/@codestorywithMIK" },
    { title: "Java Course – CodeWithHarry", link: "https://www.youtube.com/watch?v=Qgl81fPcLc8" },
    { title: "Web Dev – FreeCodeCamp", link: "https://www.youtube.com/watch?v=nu_pCVPKzTk" },
    { title: "Machine Learning – Codebasics", link: "https://www.youtube.com/watch?v=Gv9_4yMHFhI" },
    { title: "Cyber Security Basics", link: "https://www.youtube.com/watch?v=inWWhr5tnEA" },
    { title: "Placements – Apna College", link: "https://www.youtube.com/watch?v=Ud8vZHnKxq8" },
  ];

  return (
    <div className="roadmaps-wrapper">
      {/* LEFT: Scrapbook */}
      <div className="scrapbook-container" style={{ backgroundImage: `url(${scrapbookBg})` }}>
        {roadmapData.map((item, index) => (
          <div
            key={index}
            className={`roadmap-strip ${item.side}-strip`}
            style={{ top: item.top }}
            onClick={() => setSelectedImage(item.img)}
          >
            {item.title}
          </div>
        ))}
      </div>

      {/* RIGHT: Resources */}
      <div className="resources-panel">
        <h3>Top Learning Resources</h3>
        <div className="resources-grid">
          {resources.map((res, i) => (
            <a key={i} href={res.link} target="_blank" rel="noopener" className="resource-card">
              {res.title}
            </a>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setSelectedImage(null)}>
              &times;
            </span>
            <img src={selectedImage} alt="Roadmap" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Roadmaps;
