import React from "react";
import "./App.css";

const skills = [
  "Python",
  "Java",
  "C",
  "SQL",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "FastAPI",
  "MySQL",
  "LangChain",
  "RAG",
  "AI/ML",
  "Git",
  "GitHub",
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
            Aspiring <span>Software Engineer</span>
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
        <div className="section-title">
          <span>01</span>
          <h2>Who I am</h2>
        </div>

        <div className="about-grid">
          <div className="about-image">
            <div className="profile-placeholder">
              SA
            </div>
          </div>

          <div className="about-text">
            <h3>About Me</h3>

            <p>
              My name is Samir Ajagekar. I am a Computer Science student
              currently pursuing my Bachelor of Technology from Shivaji
              University, Kolhapur.
            </p>

            <p>
              I completed my Diploma in Computer Engineering from MSBTE
              with a grade of <strong>92.12</strong>.
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
        <div className="section-title">
          <span>02</span>
          <h2>Education</h2>
        </div>

        <div className="timeline">

          <div className="timeline-item">
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

          <div className="timeline-item">
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

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">
                {skill.substring(0, 1)}
              </div>

              <h3>{skill}</h3>
            </div>
          ))}
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
        <div className="section-title">
          <span>05</span>
          <h2>Projects</h2>
        </div>

        <p className="section-subtitle">
          Some of my recent work
        </p>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <div className="project-card" key={index}>

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

          <h2>
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
          <h2>Get In Touch</h2>
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
                Add your email here
              </p>
            </div>

            <div>
              <h4>Location</h4>
              <p>
                Ajra, Maharashtra, India
              </p>
            </div>

            <div>
              <h4>LinkedIn</h4>

              <a
                href="https://www.linkedin.com/in/samir-ajagekar-999626319/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/samir-ajagekar-999626319
              </a>
            </div>

          </div>

          <form className="contact-form">

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <h3>Samir Ajagekar</h3>

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
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
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