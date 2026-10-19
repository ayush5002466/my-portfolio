
import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Database,
  Mail,
  Menu,
  X,
  FileText,
  Terminal,
  Blocks,
  Server,
  Braces,
  ShieldCheck,
  ExternalLink,
  GitBranch,
  Globe,
} from "lucide-react";
import "./index.css";

const profile = {
  name: "Ayush Saraswat",
  role: "Java Backend Developer",
  email: "2k24.csai1a.2414251@gmail.com",
  github: "https://github.com/ayush5002466",
  linkedin: "https://www.linkedin.com/",
  resume: "/resume.pdf",
  college: "PSIT, AKTU, Kanpur",
  degree: "B.Tech CSE — AI Specialization",
  graduation: "Expected 2028",
};

const skills = [
  { name: "Java", group: "LANGUAGE", icon: Code2 },
  { name: "Python", group: "LANGUAGE", icon: Code2 },
  { name: "Spring Boot", group: "BACKEND", icon: Server },
  { name: "Spring Data JPA", group: "BACKEND", icon: Database },
  { name: "REST APIs", group: "API ENGINEERING", icon: Braces },
  { name: "JSON", group: "DATA FORMAT", icon: Braces },
  { name: "PostgreSQL", group: "DATABASE", icon: Database },
  { name: "SQL", group: "DATABASE", icon: Database },
  { name: "Docker", group: "DEVOPS", icon: Blocks },
  { name: "Docker Compose", group: "DEVOPS", icon: Blocks },
  { name: "JUnit", group: "TESTING", icon: ShieldCheck },
  { name: "Unit Testing", group: "TESTING", icon: ShieldCheck },
  { name: "Swagger / OpenAPI", group: "DOCUMENTATION", icon: FileText },
  { name: "Git & GitHub", group: "TOOLS", icon: GitBranch },
  { name: "GitHub Actions", group: "CI / AUTOMATION", icon: Terminal },
  { name: "Maven", group: "BUILD TOOLS", icon: Terminal },
  { name: "Solidity", group: "LEARNING", icon: Blocks },
];

const projects = [
  {
    name: "Task Manager REST API",
    category: "BACKEND ENGINEERING",
    status: "COMPLETED",
    number: "01",
    description:
      "A Java and Spring Boot REST API for task management. Features CRUD operations, PostgreSQL persistence, exception handling, structured JSON error responses, and API documentation. Verify every listed feature against the actual repository.",
    stack: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "PostgreSQL",
      "Docker",
      "JUnit",
      "JSON",
    ],
    github: "https://github.com/ayush5002466/task-manager",
    live: "",
  },
  {
    name: "Opportunity Network OS",
    category: "PYTHON / AUTOMATION",
    status: "WORKING PROTOTYPE",
    number: "02",
    description:
      "A Python-based job opportunity discovery and filtering tool. It collects listings from configured Greenhouse job boards, applies keyword and exclusion rules, removes duplicates, and stores results in JSON. Includes unit tests and a scheduled GitHub Actions workflow. Email and Telegram notification delivery has not yet been verified end to end.",
    stack: [
      "Python",
      "REST APIs",
      "JSON",
      "Unit Testing",
      "GitHub Actions",
      "Git",
    ],
    github: "https://github.com/ayush5002466/opportunity-network-os",
    live: "",
  },
  {
    name: "ChainLedger",
    category: "BLOCKCHAIN / WEB3",
    status: "IN DEVELOPMENT",
    number: "03",
    description:
      "A blockchain engineering project in development. Document its actual smart contracts, transaction processing, ledger behavior, and tests as these features are implemented and verified.",
    stack: ["Blockchain", "Smart Contracts", "Solidity", "Foundry"],
    github: "https://github.com/ayush5002466/ChainLedger",
    live: "",
  },
];

const jsonExample = {
  taskId: 101,
  title: "Build a REST API",
  completed: false,
};

const responseExample = {
  status: 400,
  error: "Bad Request",
  message: "Invalid input",
};

function SectionHeading({ number, eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">
        <span className="section-number">{number}</span>
        {eyebrow}
      </span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["APIs & JSON", "#api-engineering"],
    ["Projects", "#projects"],
    ["Achievements", "#achievements"],
    ["Contact", "#contact"],
  ];

  return (
    <>
      <header className="navbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-icon">
            <Code2 size={19} />
          </span>
          <span>
            ayush<span className="brand-dot">.</span>
          </span>
        </a>

        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}

          <a
            className="nav-resume"
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
          >
            Resume <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="status-dot" />
              B.TECH STUDENT · SOFTWARE ENGINEERING
            </div>

            <h1>
              Engineering
              <br />
              <span className="gradient-text">beyond the basics.</span>
            </h1>

            <p className="hero-description">
              I'm {profile.name}, a computer science student focused on Java
              backend development, REST APIs, databases, and building reliable
              software through hands-on projects.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <ArrowRight size={17} />
              </a>

              <a
                className="button button-secondary"
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
              >
                <FileText size={17} /> View resume
              </a>
            </div>

            <div className="social-links">
              <a href={profile.github} target="_blank" rel="noreferrer">
                <GitBranch size={18} /> GitHub
              </a>

              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <Globe size={18} /> LinkedIn
              </a>

              <a href={`mailto:${profile.email}`}>
                <Mail size={18} /> Email
              </a>
            </div>
          </div>

          <div className="terminal-card">
            <div className="terminal-top">
              <div className="window-dots">
                <span />
                <span />
                <span />
              </div>
              <span>developer.java</span>
              <Terminal size={16} />
            </div>

            <div className="terminal-body">
              <p className="code-comment">// Developer profile</p>
              <p>
                <span className="code-purple">class</span> Developer {"{"}
              </p>
              <p className="code-indent">
                String name = <span className="code-green">"Ayush"</span>;
              </p>
              <p className="code-indent">
                String role ={" "}
                <span className="code-green">"Backend Engineer"</span>;
              </p>
              <p className="code-indent">
                String language = <span className="code-green">"Java"</span>;
              </p>
              <p className="code-indent">
                String database ={" "}
                <span className="code-green">"PostgreSQL"</span>;
              </p>
              <p className="code-indent">
                String architecture ={" "}
                <span className="code-green">"REST APIs"</span>;
              </p>
              <p>{"}"}</p>

              <div className="terminal-divider" />

              <p className="code-comment">// Current objective</p>
              <p>
                <span className="code-purple">return</span>{" "}
                <span className="code-green">"Build. Test. Improve."</span>;
              </p>
              <span className="terminal-cursor" />
            </div>

            <div className="terminal-footer">
              <span>
                <span className="status-dot" /> Learning through projects
              </span>
              <span>India</span>
            </div>
          </div>

          <a className="scroll-indicator" href="#about">
            <ArrowDown size={16} /> SCROLL TO EXPLORE
          </a>
        </section>

        <section className="section container" id="about">
          <SectionHeading
            number="01"
            eyebrow="INTRODUCTION"
            title="About me."
            description="My focus, education, and engineering direction."
          />

          <div className="about-grid">
            <div className="about-copy">
              <p>
                I'm a B.Tech Computer Science and Engineering student
                specializing in Artificial Intelligence at PSIT, AKTU, Kanpur.
              </p>

              <p>
                My primary focus is Java backend development. I work with
                Spring Boot, relational databases, REST API design, JSON data
                formats, and containerized development environments.
              </p>

              <p>
                I use projects to strengthen my understanding of software
                architecture, data integrity, testing, documentation, and
                maintainable code. I'm seeking software engineering internships
                where I can contribute and keep improving.
              </p>
            </div>

            <div className="about-facts">
              <div className="fact">
                <span className="fact-label">EDUCATION</span>
                <strong>{profile.degree}</strong>
                <span className="fact-detail">{profile.college}</span>
              </div>

              <div className="fact">
                <span className="fact-label">GRADUATION</span>
                <strong>{profile.graduation}</strong>
                <span className="fact-detail">Undergraduate student</span>
              </div>

              <div className="fact">
                <span className="fact-label">PRIMARY FOCUS</span>
                <strong>Java Backend Engineering</strong>
                <span className="fact-detail">
                  APIs · Databases · Testing
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="section container" id="skills">
          <SectionHeading
            number="02"
            eyebrow="TECHNICAL TOOLKIT"
            title="Skills & technologies."
            description="A snapshot of my backend development toolkit."
          />

          <div className="skills-grid">
            {skills.map((skill, index) => {
              const SkillIcon = skill.icon;

              return (
                <div className="skill-card" key={skill.name}>
                  <span className="skill-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <SkillIcon size={19} />

                  <div className="skill-info">
                    <span>{skill.name}</span>
                    <small>{skill.group}</small>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="section-note">
            Keep the skills list aligned with what you can explain and
            demonstrate. Blockchain technologies are a learning area unless
            confirmed by completed project work.
          </p>
        </section>

        <section className="section container" id="api-engineering">
          <SectionHeading
            number="03"
            eyebrow="BACKEND FUNDAMENTALS"
            title="Working with data & APIs."
            description="How applications exchange structured data and communicate with backend services."
          />

          <div className="api-grid">
            <article className="api-card">
              <div className="api-icon">
                <Braces size={20} />
              </div>

              <span className="api-label">01 / DATA FORMAT</span>
              <h3>JSON</h3>

              <p>
                A lightweight data-interchange format used to represent
                structured objects and arrays in API requests and responses.
              </p>

              <pre>
                <code>{JSON.stringify(jsonExample, null, 2)}</code>
              </pre>
            </article>

            <article className="api-card">
              <div className="api-icon">
                <Server size={20} />
              </div>

              <span className="api-label">02 / COMMUNICATION</span>
              <h3>REST APIs</h3>

              <p>
                Resource-oriented endpoints, HTTP methods, validation, status
                codes, and predictable client-server communication.
              </p>

              <pre>
                <code>{`GET    /api/tasks
POST   /api/tasks
PUT    /api/tasks/101
DELETE /api/tasks/101`}</code>
              </pre>
            </article>

            <article className="api-card">
              <div className="api-icon">
                <ShieldCheck size={20} />
              </div>

              <span className="api-label">03 / ERROR HANDLING</span>
              <h3>JSON Responses</h3>

              <p>
                Structured error responses help API consumers understand
                invalid input and handle failures consistently.
              </p>

              <pre>
                <code>{JSON.stringify(responseExample, null, 2)}</code>
              </pre>
            </article>
          </div>

          <p className="section-note">
            These are illustrative JSON examples, not live API responses. Refer
            to the Task Manager repository for its actual endpoints and response
            schemas.
          </p>
        </section>

        <section className="section container" id="projects">
          <SectionHeading
            number="04"
            eyebrow="SELECTED WORK"
            title="Projects that demonstrate my skills."
            description="Backend implementation, engineering fundamentals, and continued learning."
          />

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <div className="project-top">
                  <span className="project-index">
                    PROJECT / {project.number}
                  </span>
                  <Code2 size={22} />
                </div>

                <div className="project-meta">
                  <span className="project-category">
                    {project.category}
                  </span>
                  <span className="project-status">{project.status}</span>
                </div>

                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>

                <div className="tech-tags">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GitBranch size={17} /> Source code{" "}
                    <ExternalLink size={14} />
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live demo <ArrowUpRight size={15} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>

          <p className="section-note">
            Verify that each repository is public and that its README accurately
            documents the implementation. Opportunity Network OS is a working
            prototype; notification delivery has not yet been verified end to
            end.
          </p>
        </section>

        <section className="section container" id="achievements">
          <SectionHeading
            number="05"
            eyebrow="RECOGNITION & LEARNING"
            title="Beyond the code."
            description="Achievements and learning that complement my engineering work."
          />

          <div className="achievement-list">
            <article className="achievement-card">
              <div className="achievement-symbol">
                <ShieldCheck size={22} />
              </div>

              <div className="achievement-content">
                <span className="achievement-label">EY · 2024</span>
                <h3>EY National Case Challenge</h3>
                <p>
                  Reached Round 2; resume-reported top 2% nationally among
                  1,000+ competing teams.
                </p>
              </div>

              <span className="achievement-mark">TOP 2%</span>
            </article>

            <article className="achievement-card">
              <div className="achievement-symbol">
                <Blocks size={22} />
              </div>

              <div className="achievement-content">
                <span className="achievement-label">
                  BLOCKCHAIN · 2026
                </span>
                <h3>Blockchain Basics</h3>
                <p>
                  Cyfrin Updraft learning credential listed on my resume.
                </p>
              </div>
            </article>

            <article className="achievement-card">
              <div className="achievement-symbol">
                <Database size={22} />
              </div>

              <div className="achievement-content">
                <span className="achievement-label">
                  DATA ANALYTICS · 2024
                </span>
                <h3>MySQL for Data Analytics & Business Intelligence</h3>
                <p>
                  Meta learning credential listed on my resume.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="section container" id="contact">
          <div className="contact-card">
            <span className="eyebrow">
              <span className="section-number">06</span> GET IN TOUCH
            </span>

            <h2>Let's build something useful.</h2>

            <p>
              I'm interested in software engineering internships, backend
              development, and opportunities to solve practical engineering
              problems.
            </p>

            <div className="hero-actions">
              <a
                className="button button-primary"
                href={`mailto:${profile.email}`}
              >
                <Mail size={17} /> Contact me <ArrowUpRight size={16} />
              </a>

              <a
                className="button button-secondary"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                <GitBranch size={17} /> Explore GitHub
              </a>
            </div>

            <p className="contact-email">{profile.email}</p>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <a className="brand" href="#home">
          <span className="brand-icon">
            <Code2 size={17} />
          </span>

          <span>
            ayush<span className="brand-dot">.</span>
          </span>
        </a>

        <span>Built with React · Vite · CSS</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}

export default App;
