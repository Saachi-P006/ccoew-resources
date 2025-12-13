import React, { useState } from "react";
import "./Roadmaps.css";
import scrapbookBg from "../assets/image.png";

// Images
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
    { title: "Roadmap to DSA", img: DSARoadmap, side: "left" },
    { title: "Java Roadmap", img: JavaRoadmap, side: "left" },
    { title: "Android Development", img: AndroidRoadmap, side: "left" },
    { title: "Startup Roadmap", img: StartupRoadmap, side: "left" },
    { title: "AI Roadmap", img: AIRoadmap, side: "left" },

    { title: "Web Development", img: WebDevelopmentRoadmap, side: "right" },
    { title: "Machine Learning", img: MLRoadmap, side: "right" },
    { title: "Cyber Security", img: CybersecurityRoadmap, side: "right" },
    { title: "Fullstack Roadmap", img: FullstackRoadmap, side: "right" },
    { title: "Data Science", img: DatascienceRoadmap, side: "right" },
  ];

  const resources = [
    { title: "DSA – Code Story with Mik", link: "https://www.youtube.com/@codestorywithMIK" },
    { title: "Java – CodeWithHarry", link: "https://www.youtube.com/watch?v=Qgl81fPcLc8" },
    { title: "Web Dev – FreeCodeCamp", link: "https://www.youtube.com/watch?v=nu_pCVPKzTk" },
    { title: "ML – Codebasics", link: "https://www.youtube.com/watch?v=Gv9_4yMHFhI" },
    { title: "Cyber Security Basics", link: "https://www.youtube.com/watch?v=inWWhr5tnEA" },
  ];

  return (
    <div className="roadmaps-wrapper">
      {/* SCRAPBOOK */}
      <div
        className="scrapbook-container"
        style={{ backgroundImage: `url(${scrapbookBg})` }}
      >
        {roadmapData.map((item, index) => (
          <div
            key={index}
            className={`roadmap-strip ${item.side}-strip`}
            onClick={() => setSelectedImage(item.img)}
          >
            {item.title}
          </div>
        ))}
      </div>

      {/* RESOURCES */}
      <div className="resources-panel">
        <h3>Top Learning Resources</h3>
        <div className="resources-grid">
          {resources.map((res, i) => (
            <a
              key={i}
              href={res.link}
              target="_blank"
              rel="noopener noreferrer"
              className="resource-card"
            >
              {res.title}
            </a>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedImage(null)}>
              ×
            </button>
            <img src={selectedImage} alt="Roadmap" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Roadmaps;
