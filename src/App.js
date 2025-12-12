import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import QuickLinks from "./components/QuickLinks";
import Roadmaps from "./components/Roadmaps";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import InlineCalendar from "./components/InlineCalendar";
import "./App.css";
import option5 from "./assets/option5.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

import cseIcon from "./assets/Comp.png";
import eceIcon from "./assets/IT.png";
import meIcon from "./assets/Mech.png";
import ceIcon from "./assets/Entc.png";
import eeIcon from "./assets/Instru.png";
import ceBg from "./assets/Comp.gif";

function App() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
    const handleScroll = () => AOS.refresh();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cardsTop = [
    { title: "CE", icon: cseIcon, bg: ceBg, color: "#3498db" },
    { title: "IT", color: "#e67e22", icon: eceIcon },
    { title: "Mech", color: "#9b59b6", icon: meIcon },
  ];

  const cardsBottom = [
    { title: "Entc", color: "#1abc9c", icon: ceIcon },
    { title: "Instru", color: "#f39c12", icon: eeIcon },
  ];

  const opportunitiesCards = [
    {
      title: "1st Year",
      items: [
        "WE Program by TalentSprint",
        "Explore different tech domains",
        "Ideathons",
        "Basic Web Development & DSA Courses",
      ],
    },
    {
      title: "2nd Year",
      items: [
        "Google STEP Internship",
        "Open Source Programs (GSoC, GSSoC, HackToberFest)",
        "AmazeWoW",
        "Uber She++",
        "American Express Makeathon",
        "Flipkart Runway",
      ],
    },
    {
      title: "3rd Year",
      items: [
        "Visa Code Your Way",
        "Adobe CoDiva",
        "LinkedIn Wintathon",
        "Scholarships & Mentorship Programs",
        "Open Source / Competitions",
      ],
    },
  ];

  const explorerData = {
    semesters: [
      {
        id: "sem1",
        label: "Semester 1",
        subjects: [
          {
            id: "maths1",
            label: "Mathematics I",
            folders: {
              PYQ: [
                { label: "Maths I - PYQ Set 1 (pdf)", url: "#" },
                { label: "Maths I - PYQ Set 2 (pdf)", url: "#" },
              ],
              Notes: [
                { label: "Maths I - Notes (pdf)", url: "#" },
                { label: "Maths I - Formula Sheet", url: "#" },
              ],
              Tutorials: [
                { label: "Maths I - Tutorial (YouTube)", url: "https://www.youtube.com/" },
              ],
              Learn: [
                { label: "Maths for Engineers course", url: "https://www.coursera.org/" },
              ],
            },
          },
          {
            id: "physics",
            label: "Physics",
            folders: {
              PYQ: [{ label: "Physics PYQ (pdf)", url: "#" }],
              Notes: [{ label: "Physics - Notes", url: "#" }],
              Tutorials: [{ label: "Physics Tutorials (YouTube)", url: "https://www.youtube.com/" }],
              Learn: [{ label: "Complete Physics Course", url: "https://www.udemy.com/" }],
            },
          },
          {
            id: "programming",
            label: "Programming (Python)",
            folders: {
              PYQ: [{ label: "Programming PYQ", url: "#" }],
              Notes: [{ label: "Python Notes", url: "#" }],
              Tutorials: [{ label: "Python Crash Course - YouTube", url: "https://www.youtube.com/" }],
              Learn: [{ label: "Free Python Track - FreeCodeCamp", url: "https://www.freecodecamp.org/" }],
            },
          },
          {
            id: "ed",
            label: "Engineering Drawing",
            folders: {
              PYQ: [{ label: "ED PYQ", url: "#" }],
              Notes: [{ label: "ED Notes", url: "#" }],
              Tutorials: [{ label: "Engineering Drawing Tutorials", url: "https://www.youtube.com/" }],
              Learn: [{ label: "ED Reference", url: "#" }],
            },
          },
        ],
      },
      {
        id: "sem2",
        label: "Semester 2",
        subjects: [
          {
            id: "maths2",
            label: "Mathematics II",
            folders: {
              PYQ: [{ label: "Maths II PYQ", url: "#" }],
              Notes: [{ label: "Maths II Notes", url: "#" }],
              Tutorials: [{ label: "Maths II Tutorials", url: "https://www.youtube.com/" }],
              Learn: [{ label: "Maths II course", url: "https://www.coursera.org/" }],
            },
          },
          {
            id: "chemistry",
            label: "Chemistry",
            folders: {
              PYQ: [{ label: "Chemistry PYQ", url: "#" }],
              Notes: [{ label: "Chem Notes", url: "#" }],
              Tutorials: [{ label: "Chem Tutorials", url: "https://www.youtube.com/" }],
              Learn: [{ label: "Chemistry Course", url: "https://www.udemy.com/" }],
            },
          },
          {
            id: "oop",
            label: "OOP (Java)",
            folders: {
              PYQ: [{ label: "OOP PYQ", url: "#" }],
              Notes: [{ label: "OOP Notes", url: "#" }],
              Tutorials: [{ label: "Java OOP Tutorials", url: "https://www.youtube.com/" }],
              Learn: [{ label: "Java Full Course", url: "https://www.freecodecamp.org/" }],
            },
          },
          {
            id: "be",
            label: "Basic Electronics",
            folders: {
              PYQ: [{ label: "BE PYQ", url: "#" }],
              Notes: [{ label: "BE Notes", url: "#" }],
              Tutorials: [{ label: "BE Tutorials", url: "https://www.youtube.com/" }],
              Learn: [{ label: "Electronics Course", url: "#" }],
            },
          },
        ],
      },
    ],
  };

  const [explorerOpen, setExplorerOpen] = useState(false);
  const [activeBranch, setActiveBranch] = useState(null);
  const [level, setLevel] = useState("semester");
  const [activeSemester, setActiveSemester] = useState(null);
  const [activeSubject, setActiveSubject] = useState(null);
  const [activeFolder, setActiveFolder] = useState(null);

  function openExplorer(branchTitle) {
    setActiveBranch(branchTitle);
    setExplorerOpen(true);
    setLevel("semester");
    setActiveSemester(null);
    setActiveSubject(null);
    setActiveFolder(null);
    document.body.style.overflow = "hidden";
  }

  function closeExplorer() {
    setExplorerOpen(false);
    setLevel("semester");
    setActiveSemester(null);
    setActiveSubject(null);
    setActiveFolder(null);
    document.body.style.overflow = "";
  }

  function chooseSemester(sem) {
    setActiveSemester(sem);
    setLevel("subject");
  }

  function chooseSubject(subject) {
    setActiveSubject(subject);
    setLevel("folder");
  }

  function chooseFolder(folderKey) {
    setActiveFolder(folderKey);
    setLevel("items");
  }

  function back() {
    if (level === "items") setLevel("folder");
    else if (level === "folder") setLevel("subject");
    else if (level === "subject") setLevel("semester");
    else closeExplorer();
  }

  // Folder colors
  const folderColors = {
    PYQ: "#e74c3c",
    Notes: "#3498db",
    Tutorials: "#9b59b6",
    Learn: "#1abc9c",
  };

  return (
    <>
      <Navbar />
      <div
        id="home"
        className="section hero-section-bg"
        style={{
          backgroundImage: `url(${option5})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <div className="hero-with-calendar">
          <Hero />
          <div className="hero-calendar-container">
            <InlineCalendar />
          </div>
        </div>
      </div>

      <div
        id="learn"
        className="section"
        style={{
          backgroundColor: "white",
          color: "#2c3e50",
          paddingTop: "120px",
          paddingBottom: "120px",
        }}
      >
        <h2 data-aos="fade-down">Learn</h2>
        <div
          className="cards-container"
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "28px",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", gap: "30px", flexWrap: "wrap", justifyContent: "center" }}>
            {cardsTop.map((card, index) => (
              <div
                key={card.title}
                className="card"
                style={{ backgroundColor: card.color || "transparent" }}
                data-aos="fade-up"
                data-aos-delay={index * 120}
              >
                <div
                  className="card-front"
                  style={{
                    backgroundColor: card.color || "#3498db",
                    backgroundImage: card.bg ? `url(${card.bg})` : "none",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                >
                  <img src={card.icon} alt={card.title} className="card-icon" />
                </div>
                <div className="card-back">
                  <div className="back-left">
                    <h3>{card.title}</h3>
                  </div>
                  <div className="back-right">
                    <button onClick={() => openExplorer(card.title)}>Explore</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: "30px", flexWrap: "wrap", justifyContent: "center" }}>
            {cardsBottom.map((card, index) => (
              <div
                key={card.title}
                className="card"
                style={{ backgroundColor: card.color }}
                data-aos="fade-up"
                data-aos-delay={300 + index * 120}
              >
                <div className="card-front">
                  <img src={card.icon} alt={card.title} className="card-icon" />
                </div>
                <div className="card-back">
                  <div className="back-left">
                    <h3>{card.title}</h3>
                  </div>
                  <div className="back-right">
                    <button onClick={() => openExplorer(card.title)}>Explore</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="opportunities" className="section" style={{ paddingTop: "120px", paddingBottom: "120px" }}>
        <h2 data-aos="fade-down" style={{ textAlign: "center" }}>
          Opportunities for Students
        </h2>
        <div className="opportunity-cards-container">
          {opportunitiesCards.map((card, index) => (
            <div key={index} className="opportunity-card" style={{ transform: `rotate(${Math.random() * 6 - 3}deg)` }}>
              <div className="card-front" style={{ backgroundColor: "#f9e79f" }}>
                <h3>{card.title}</h3>
              </div>
              <div className="card-back">
                <ul>
                  {card.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="quicklinks" className="section" style={{ paddingTop: "120px", paddingBottom: "140px" }}>
        <QuickLinks />
      </div>

      <div id="roadmaps" className="section" style={{ paddingTop: "120px", paddingBottom: "120px" }}>
        <Roadmaps />
      </div>

      <div id="contact" className="section" style={{ paddingTop: "120px", paddingBottom: "120px" }}>
        <ContactForm />
      </div>

      <Footer />

      {explorerOpen && (
        <div className="explorer-overlay" onClick={closeExplorer}>
          <div className="explorer-modal" onClick={(e) => e.stopPropagation()}>
            <div className="explorer-header">
              <button className="explorer-back" onClick={back}>
                &larr;
              </button>
              <div className="explorer-breadcrumb">
                <strong>{activeBranch}</strong>
                {level !== "semester" && <span className="crumb-sep">/</span>}
                {level === "semester" && <span>Semesters</span>}
                {level === "subject" && activeSemester && <span>{activeSemester.label}</span>}
                {level === "folder" && activeSemester && activeSubject && (
                  <span>
                    {activeSemester.label}
                    <span className="crumb-sep">/</span>
                    {activeSubject.label}
                  </span>
                )}
                {level === "items" && activeSemester && activeSubject && activeFolder && (
                  <span>
                    {activeSemester.label}
                    <span className="crumb-sep">/</span>
                    {activeSubject.label}
                    <span className="crumb-sep">/</span>
                    {activeFolder}
                  </span>
                )}
              </div>
              <button className="explorer-close" onClick={closeExplorer}>
                ✕
              </button>
            </div>

            <div className="explorer-content">
              {level === "semester" && (
                <div className="explorer-grid">
                  {explorerData.semesters.map((sem) => (
                    <div key={sem.id} className="explorer-card" onClick={() => chooseSemester(sem)}>
                      <h4>{sem.label}</h4>
                      <p>{sem.subjects.length} subjects</p>
                    </div>
                  ))}
                </div>
              )}

              {level === "subject" && activeSemester && (
                <div className="explorer-grid">
                  {activeSemester.subjects.map((sub) => (
                    <div key={sub.id} className="explorer-card" onClick={() => chooseSubject(sub)}>
                      <h4>{sub.label}</h4>
                      <p>{Object.keys(sub.folders).length} folders</p>
                    </div>
                  ))}
                </div>
              )}

              {level === "folder" && activeSubject && (
                <div className="explorer-grid">
                  {Object.keys(activeSubject.folders).map((folderKey) => (
                    <div
                      key={folderKey}
                      className="explorer-card"
                      style={{ backgroundColor: folderColors[folderKey] }}
                      onClick={() => chooseFolder(folderKey)}
                    >
                      <h4>{folderKey}</h4>
                      <p>{activeSubject.folders[folderKey].length} items</p>
                    </div>
                  ))}
                </div>
              )}

              {level === "items" && activeSubject && (
                <div className="items-list">
                  {activeSubject.folders[activeFolder].map((it, idx) => (
                    <a
                      key={idx}
                      className="item-row"
                      href={it.url || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="item-title">{it.label}</div>
                      <div className="item-action">Open</div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
