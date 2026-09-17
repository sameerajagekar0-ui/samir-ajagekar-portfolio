import React from "react";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Imports the animation styles
import "./App.css";
import {
  FaPython,
  FaJava,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaLink,
  FaBrain,
  FaRobot,
  FaLinkedin,
  FaPhone,
  FaEnvelope
} from "react-icons/fa";
import { 
  SiC, 
  SiJavascript, 
  SiFastapi, 
  SiMysql ,
  SiN8N
} from "react-icons/si";


const skills = [
  { name: "Python", icon: <FaPython color="#3776AB" /> },
  { name: "Java", icon: <FaJava color="#007396" /> },
  { name: "C", icon: <SiC color="#A8B9CC" /> },
  { name: "SQL", icon: <FaDatabase color="#336791" /> },
  { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
  { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
  { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
  { name: "React", icon: <FaReact color="#61DAFB" /> },
  { name: "FastAPI", icon: <SiFastapi color="#009688" /> },
  { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
  { name: "LangChain", icon: <FaLink color="#333333" /> }, 
  { name: "RAG", icon: <FaBrain color="#ff4d5a" /> },
  { name: "AI/ML", icon: <FaRobot color="#ff4d5a" /> },
  { name: "n8n", icon: <SiN8N color="#EA4B71" /> },
  { name: "Git", icon: <FaGitAlt color="#F05032" /> },
  { name: "GitHub", icon: <FaGithub color="#181717" /> },
];
const projects = [
  {
    title: "Text-to-SQL RAG Chatbot",
    description:
      "An AI-powered chatbot that allows non-technical users to interact with databases using natural language. It converts natural-language questions into SQL queries and provides understandable results.",
    tech: ["Python", "FastAPI", "React", "MySQL", "LangChain", "RAG"],
    github: "https://github.com/",
    live: "https://lnkd.in/dQ5aGBnm",
  },
  {
    title: "Personal Portfolio",
    description:
      "A responsive personal portfolio website showcasing my education, skills, projects, achievements and contact information.",
    tech: ["React", "JavaScript", "CSS", "Netlify"],
    github: "https://github.com/",
    live: "#",
  },
];

function App() {
  // Initialize AOS scroll animations
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animations take 1 second
      once: true,     // Animations only run once when scrolling down
      offset: 100,    // Starts animation when element is 100px into view
    });
  }, []);

  // ... rest of your code (titles array, etc.)
  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">Samir Ajagekar</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-content">
          <p className="small-text">Hello! I am</p>

          <h1>Samir Ajagekar</h1>

         <h2>
            Aspiring<span className="typewriter-loop">Software Engineer</span>
          </h2>
          <p className="hero-description">
            Python | Java | SQL | AI/ML | Web Development | RAG
          </p>

          <p className="hero-about">
            A passionate Computer Science student who loves building
            software, exploring AI technologies and solving real-world
            problems through technology.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn primary">
              Contact Me
            </a>

            <a
              href="https://www.linkedin.com/in/samir-ajagekar-999626319/"
              target="_blank"
              rel="noreferrer"
              className="btn secondary"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

    {/* ABOUT */}
      <section id="about" className="section">
        
        {/* Title floats up */}
        <div className="section-title" data-aos="fade-up">
          <span>01</span>
          <h2>Who I am</h2>
        </div>

        <div className="about-grid">
          
          {/* Image box slides in from the left */}
          <div className="about-image" data-aos="fade-right">
            <div className="profile-placeholder">
              SA
            </div>
          </div>

          {/* Text slides in from the right */}
          <div className="about-text" data-aos="fade-left">
            <h3>About Me</h3>

            <p>
              My name is Samir Ajagekar. I am a Computer Science student
              currently pursuing my Bachelor of Technology from Shivaji
              University, Kolhapur.
            </p>

            <p>
              I completed my Diploma in Computer Engineering from MSBTE
              with a grade of <strong>92.12%</strong>.
            </p>

            <p>
              I am interested in Software Development, Artificial
              Intelligence, Machine Learning, Web Development and
              Retrieval-Augmented Generation (RAG).
            </p>

            <p>
              I enjoy learning new technologies and building practical
              projects that solve real-world problems.
            </p>
          </div>
        </div>
      </section>

     {/* EDUCATION */}
      <section id="education" className="section light-section">
        
        {/* Title floats up */}
        <div className="section-title" data-aos="fade-up">
          <span>02</span>
          <h2>Education</h2>
        </div>

        <div className="timeline">

          {/* First card pops up quickly */}
          <div className="timeline-item" data-aos="fade-up" data-aos-delay="100">
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <span className="date">2026 – 2029</span>

              <h3>Bachelor of Technology</h3>

              <h4>Computer Science</h4>

              <p>
                Shivaji University, Kolhapur
              </p>
            </div>
          </div>

          {/* Second card pops up slightly after the first one */}
          <div className="timeline-item" data-aos="fade-up" data-aos-delay="300">
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <span className="date">2023 – 2026</span>

              <h3>Diploma in Computer Engineering</h3>

              <h4>Computer Science</h4>

              <p>
                Maharashtra State Board of Technical Education (MSBTE)
              </p>

              <strong className="grade">
                Grade: 92.12
              </strong>
            </div>
          </div>

        </div>
      </section>

{/* SKILLS */}
      <section id="skills" className="section">
        <div className="section-title">
          <span>03</span>
          <h2>Skills</h2>
        </div>

        <p className="section-subtitle">
          Technologies and tools I work with
        </p>

        {/* NEW: Marquee Wrapper for smooth scrolling */}
        <div className="skills-marquee-container">
          <div className="skills-marquee-track">
            
            {/* First Set of Skills */}
            <div className="skills-group">
              {skills.map((skill, index) => (
                <div className="skill-card" key={`skill-1-${index}`}>
                  <div className="skill-icon">
                    <span className="skill-symbol">{skill.icon}</span>
                  </div>
                  <h3>{skill.name}</h3>
                </div>
              ))}
            </div>

            {/* Second Set of Skills (Duplicated for the infinite seamless loop) */}
            <div className="skills-group">
              {skills.map((skill, index) => (
                <div className="skill-card" key={`skill-2-${index}`}>
                  <div className="skill-icon">
                    <span className="skill-symbol">{skill.icon}</span>
                  </div>
                  <h3>{skill.name}</h3>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
      {/* EXPERIENCE */}
      <section id="experience" className="section light-section">
        <div className="section-title">
          <span>04</span>
          <h2>Experience</h2>
        </div>

        <div className="experience-card">

          <div className="experience-number">
            01
          </div>

          <div>
            <span className="date">
              Web Development Internship
            </span>

            <h3>ONE IT SOLUTIONS PVT. LTD.</h3>

            <p>
              Worked on web development technologies and gained practical
              experience in creating responsive websites and developing
              frontend interfaces.
            </p>

            <div className="tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>Bootstrap</span>
              <span>JavaScript</span>
            </div>
          </div>

        </div>
      </section>

    {/* PROJECTS */}
      <section id="projects" className="section">
        
        {/* Title floats up */}
        <div className="section-title" data-aos="fade-up">
          <span>05</span>
          <h2>Projects</h2>
        </div>

        {/* Subtitle floats up just after the title */}
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          Some of my recent work
        </p>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <div 
              className="project-card" 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150} /* Automatically staggers the cards */
            >

              <div className="project-number">
                0{index + 1}
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tags">
                {project.tech.map((item, i) => (
                  <span key={i}>{item}</span>
                ))}
              </div>

              <div className="project-buttons">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* ACHIEVEMENT */}
      <section className="achievement">
        <div>
          <span>Achievement</span>

          <h2 className="Rank">
            🥇 First Rank – Py Battle
          </h2>


          <p>
            PRAGYAN 2K26 National Level Technical Event
          </p>

          <p>
            Dr. A. D. Shinde Institute of Technology
          </p>
        </div>
      </section>

      {/* CERTIFICATION */}
      <section className="section light-section">
        <div className="section-title">
          <span>06</span>
          <h2>Certification</h2>
        </div>

        <div className="certificate-card">
          <h3>Software Engineer Intern Certificate</h3>

          <p>HackerRank</p>

          <span>Issued: October 2025</span>

          <p className="credential">
            Credential ID: 4596005a0792
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">

        <div className="section-title center">
          <span>07</span>
          <h2 className="G">Get In Touch</h2>
        </div>

        <p className="contact-intro">
          Have a project, opportunity or simply want to connect?
          Feel free to reach out.
        </p>

        <div className="contact-container">

          <div className="contact-info">

            <div>
              <h4>Email</h4>
              <p>
                samirajagekar@gmail.com
              </p>
            </div>

            <div>
              <h4>Location</h4>
              <p>
              Kolhapur, Maharashtra, India
              </p>
            </div>

            <div>
              <h4>LinkedIn</h4>
<a
            href="https://www.linkedin.com/in/samir-ajagekar-999626319/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </a>
              
            </div>

          </div>

          <form 
            className="contact-form" 
            action="https://formspree.io/f/myeyvbng" 
            method="POST"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <h3 className="Fname">Samir Ajagekar</h3>

        <p>
          Aspiring Software Engineer | AI/ML | Web Development
        </p>

        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/samir-ajagekar-999626319/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/sameerajagekar0-ui"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          {/* NEW: Clickable Mobile Number */}
          <a href="tel:+910000000000">
            <FaPhone /> +91 9307093751
          </a>
          </div>
        <p className="copyright">
          © 2026 Samir Ajagekar. All Rights Reserved.
        </p>
      </footer>

    </div>
  );
}

export default App;