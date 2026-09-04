import { useEffect, useState } from "react";

const projects = [
  {
    number: "01",
    title: "AuraOS",
    kind: "AI SYSTEMS · COMPUTER VISION",
    summary: "An AI operating layer that lets people control their computer through hand gestures, voice commands and context-aware automation.",
    impact: "Python · OpenCV · MediaPipe · Whisper",
    href: "https://github.com/RedaKaleem/AI-Operating-Layer",
    tone: "black",
  },
  {
    number: "02",
    title: "ClearPath AI",
    kind: "COMPUTER VISION · AI",
    summary: "A traffic-management system that detects emergency vehicles and helps clear a faster route through busy roads.",
    impact: "YOLOv8 · OpenCV · Python",
    href: "https://github.com/RedaKaleem/ClearPath-AI",
    tone: "yellow",
  },
  {
    number: "03",
    title: "Donatinator",
    kind: "ANDROID · SOCIAL IMPACT",
    summary: "A smart blood-donation management experience that helps people locate, schedule and track donations with less friction.",
    impact: "Kotlin · Android · Product UX",
    href: "https://github.com/RedaKaleem/MAD-DONATINATOR",
    tone: "mint",
  },
  {
    number: "04",
    title: "Bizzapt",
    kind: "BRAND SYSTEM · WEB EXPERIENCE",
    summary: "A bold digital identity and interactive collage experience built around playful cards, motion and a flexible visual system.",
    impact: "Art direction · HTML · CSS · Interaction",
    href: "https://github.com/RedaKaleem/bizzapt-web",
    tone: "pink",
  },
];

const designProjects = [
  { title: "Bizzapt", type: "BRAND IDENTITY · DIGITAL", label: "BRAND SYSTEM", tone: "design-yellow" },
  { title: "Poster Studies", type: "TYPOGRAPHY · LAYOUT", label: "POSTER SERIES", tone: "design-pink" },
  { title: "Interface Notes", type: "UI · VISUAL SYSTEMS", label: "INTERFACE STUDY", tone: "design-mint" },
  { title: "Marks & Symbols", type: "LOGO · EXPERIMENTS", label: "IDENTITY SKETCHES", tone: "design-blue" },
];

const skills = ["APPLIED AI", "COMPUTER VISION", "PRODUCT THINKING", "USER RESEARCH", "PYTHON", "VISUAL DESIGN"];

function Placeholder({ label, className = "" }) {
  return (
    <div className={`image-placeholder ${className}`} role="img" aria-label={`${label} image placeholder`}>
      <span>{label}</span>
      <small>REPLACE WITH IMAGE</small>
    </div>
  );
}

function GraphicDesignPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Graphic Design — Reda Kaleem";
  }, []);

  return (
    <div className="site-shell graphic-page">
      <header className="topbar">
        <a className="mini-mark" href="/" aria-label="Back to portfolio">RK</a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>MENU</button>
        <nav className={menuOpen ? "is-open" : ""} aria-label="Graphic design navigation">
          <a href="/">01 PORTFOLIO</a>
          <a href="/#work">02 PRODUCT WORK</a>
          <a href="/#research">03 RESEARCH</a>
        </nav>
        <div className="header-end">
          <div className="color-key" aria-hidden="true"><i /><i /><i /></div>
          <a className="outline-button nav-cta" href="/#contact">LET&apos;S TALK ↗</a>
        </div>
      </header>

      <main>
        <section className="design-hero lined">
          <span className="scribble design-note-one">TYPE, COLOR &amp; A LITTLE CHAOS</span>
          <span className="scribble design-note-two">MADE BY HAND + MOUSE</span>
          <div>
            <p className="tiny-copy">A separate corner for visual work</p>
            <h1>GRAPHIC<br />DESIGN</h1>
            <p className="design-deck">Identity, typography, digital collage and interfaces—built with the same curiosity I bring to code.</p>
          </div>
        </section>

        <section className="design-intro lined">
          <span className="hand-note">SELECTED VISUAL WORK</span>
          <p>I like design that feels clear without feeling sterile. These are explorations in bold type, useful systems and visuals with enough personality to stay in your head.</p>
        </section>

        <section className="design-gallery lined">
          {designProjects.map((project, index) => (
            <article className={`design-card ${project.tone}`} key={project.title}>
              <div className="design-card-meta">
                <span>0{index + 1}</span>
                <span>{project.type}</span>
              </div>
              <Placeholder label={project.label} />
              <h2>{project.title}</h2>
            </article>
          ))}
        </section>

        <section className="design-closing lined">
          <p className="tiny-copy">THE ARCHIVE IS GROWING</p>
          <h2>MORE SOON.</h2>
          <p>Brand explorations, posters and process work will land here as the projects are documented.</p>
          <a className="black-button button-link" href="/">BACK TO PORTFOLIO ←</a>
        </section>
      </main>

      <footer>
        <span>© 2026 REDA KALEEM</span>
        <span>DESIGNED WITH INTENTION · BUILT WITH CODE</span>
        <a href="/">PORTFOLIO ↑</a>
      </footer>
    </div>
  );
}

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  const jump = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("kaleemreda@email.com");
      setSent(true);
      window.setTimeout(() => setSent(false), 1800);
    } catch {
      window.location.href = "mailto:kaleemreda@email.com";
    }
  };

  return (
    <div className="site-shell">
      <header className="topbar">
        <button className="mini-mark" onClick={() => jump("home")} aria-label="Back to top">RK</button>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>MENU</button>
        <nav className={menuOpen ? "is-open" : ""} aria-label="Primary navigation">
          <button onClick={() => jump("home")}>01 HOME</button>
          <button onClick={() => jump("about")}>02 ABOUT</button>
          <button onClick={() => jump("work")}>03 WORK</button>
          <button onClick={() => jump("research")}>04 RESEARCH</button>
          <a href="/graphic-design.html">05 GRAPHIC DESIGN ↗</a>
        </nav>
        <div className="header-end">
          <div className="color-key" aria-hidden="true"><i /><i /><i /></div>
          <button className="outline-button" onClick={() => jump("contact")}>CONTACT ↗</button>
        </div>
      </header>

      <main>
        <section className="hero lined" id="home">
          <span className="scribble note-mint">HELLO, WORLD</span>
          <span className="scribble note-yellow">MADE WITH CURIOSITY</span>
          <span className="scribble note-pink">BASED IN INDIA</span>
          <div className="avatar-dot left-avatar">RK</div>
          <div className="avatar-dot right-avatar">AI</div>
          <div className="hero-center">
            <p className="tiny-copy">Hey, name is</p>
            <h1>REDA<br className="mobile-break" /> KALEEM</h1>
            <span className="name-caption">SOFTWARE ENGINEER · APPLIED AI · DESIGNER</span>
            <h2>I build software that thinks,<br />works &amp; feels human.</h2>
            <button className="black-button" onClick={() => jump("work")}>VIEW MY WORK ↓</button>
          </div>
        </section>

        <section className="intro lined" id="about">
          <Placeholder label="PORTRAIT" className="polaroid portrait-left" />
          <div className="intro-copy">
            <span className="hand-note">what&apos;s up</span>
            <p>I&apos;m a software engineer who gets a little too excited about making complicated things feel simple. I care about the small details, the edge cases and the people on the other side of the screen.</p>
            <div className="skill-stickers">
              {skills.map((skill, index) => <span key={skill} className={`sticker sticker-${index % 4}`}>{skill}</span>)}
            </div>
          </div>
          <Placeholder label="STUDIO SNAP" className="polaroid portrait-right" />
        </section>

        <section className="about lined">
          <div className="section-title-wrap">
            <span className="section-index">02 — ABOUT</span>
            <h2>ABOUT</h2>
          </div>
          <div className="about-grid">
            <aside className="side-tabs" aria-label="What I bring">
              <span>BUILD</span><span>THINK</span><span>DESIGN</span>
            </aside>
            <article className="paper-card">
              <span className="tape">A LITTLE CONTEXT</span>
              <h3>I make useful systems, then make them easier to understand.</h3>
              <p>My work lives between engineering, AI and visual communication. I like turning rough ideas into clear flows, dependable code and experiences that feel considered from the first click to the last detail.</p>
              <p>That means I ask good questions, prototype quickly, test the assumptions and keep refining until the result feels both capable and calm.</p>
            </article>
            <Placeholder label="ABOUT PHOTO" className="about-photo" />
          </div>
        </section>

        <section className="work lined" id="work">
          <div className="section-title-wrap left-title">
            <span className="section-index">03 — SELECTED PROJECTS</span>
            <h2>FEATURED WORKS</h2>
          </div>
          <div className="project-preview-grid">
            {projects.slice(0, 2).map((project) => (
              <a className="preview-card" href={project.href} target="_blank" rel="noreferrer" key={project.title}>
                <span>{project.kind}</span>
                <Placeholder label={`${project.title.toUpperCase()} COVER`} />
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </a>
            ))}
          </div>

          <div className="case-list">
            {projects.map((project) => (
              <article className={`case-study ${project.tone}`} key={project.title}>
                <div className="case-copy">
                  <span className="project-tab">PROJECT {project.number}</span>
                  <p className="tiny-copy">{project.kind}</p>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <span className="tech-note">{project.impact}</span>
                  <a href={project.href} target="_blank" rel="noreferrer">VIEW PROJECT ↗</a>
                </div>
                <Placeholder label={`${project.title.toUpperCase()} CASE STUDY`} className="case-image" />
              </article>
            ))}
          </div>
        </section>

        <section className="research lined" id="research">
          <div className="section-title-wrap left-title">
            <span className="section-index">04 — RESEARCH</span>
            <h2>ASKING BIGGER<br />QUESTIONS</h2>
          </div>
          <div className="research-feature">
            <div className="research-visual">
              <Placeholder label="RESEARCH POSTER" />
              <span className="scribble research-note">NLP + SOCIAL IMPACT</span>
            </div>
            <article className="research-copy">
              <p className="tiny-copy">FEATURED STUDY · 2026</p>
              <h3>Mapping women&apos;s safety conversations at scale.</h3>
              <p>This study uses natural language processing and machine learning to examine public conversations about harassment, fear and unsafe experiences. It turns unstructured social data into patterns that can support faster, more informed safety research.</p>
              <div className="research-facts">
                <div><b>05</b><span>MODELS COMPARED</span></div>
                <div><b>92%</b><span>REPORTED ACCURACY</span></div>
                <div><b>SVM</b><span>BEST OVERALL MODEL</span></div>
              </div>
              <div className="research-method">
                <span>COLLECT</span><i>→</i><span>CLEAN</span><i>→</i><span>CLASSIFY</span><i>→</i><span>UNDERSTAND</span>
              </div>
              <a className="research-link" href="https://github.com/RedaKaleem/Technical-Evaluation-of-Women-s-Safety-Trends-Through-Large-Scale-Twitter-Data-Mining-and-Analysis" target="_blank" rel="noreferrer">READ THE RESEARCH ↗</a>
            </article>
          </div>
        </section>

        <section className="process lined">
          <div className="section-title-wrap">
            <span className="section-index">05 — THE METHOD</span>
            <h2>HOW I WORK</h2>
          </div>
          <div className="process-grid">
            <article><b>01</b><span>ASK</span><p>Find the real problem hiding behind the first request.</p></article>
            <article><b>02</b><span>MAKE</span><p>Build the smallest clear version that can teach us something.</p></article>
            <article><b>03</b><span>TEST</span><p>Put it in front of reality, listen closely and remove friction.</p></article>
            <article><b>04</b><span>POLISH</span><p>Make the system dependable and the experience feel effortless.</p></article>
          </div>
        </section>

        <section className="playground lined" id="playground">
          <div className="section-title-wrap">
            <span className="section-index">06 — EXPERIMENTS &amp; SIDE QUESTS</span>
            <h2>JUST FOR FUN</h2>
          </div>
          <div className="collage">
            <Placeholder label="POSTER / ART" className="collage-one polaroid" />
            <Placeholder label="3D / OBJECT" className="collage-two polaroid" />
            <Placeholder label="PROCESS SHOT" className="collage-three polaroid" />
            <Placeholder label="INTERFACE" className="collage-four polaroid" />
            <Placeholder label="WILD CARD" className="collage-five polaroid" />
            <span className="scribble collage-note-one">things I make<br />when curiosity wins</span>
            <span className="scribble collage-note-two">NO BRIEF, JUST PLAY</span>
          </div>
        </section>

        <section className="contact lined" id="contact">
          <Placeholder label="FAVORITE PHOTO" className="polaroid contact-photo-left" />
          <div className="contact-copy">
            <span className="section-index">07 — SAY HELLO</span>
            <h2>LET&apos;S TALK</h2>
            <p>Got a project, an idea, or a really good question? I&apos;m always up for a thoughtful conversation.</p>
            <button className="black-button" onClick={copyEmail}>{sent ? "EMAIL COPIED!" : "COPY MY EMAIL"}</button>
            <div className="social-links">
              <a href="https://github.com/redakaleem" target="_blank" rel="noreferrer">GITHUB ↗</a>
              <a href="/assets/Resume.pdf" target="_blank" rel="noreferrer">RÉSUMÉ ↗</a>
            </div>
          </div>
          <Placeholder label="DESK / OBJECT" className="polaroid contact-photo-right" />
        </section>
      </main>

      <footer>
        <span>© 2026 REDA KALEEM</span>
        <span>DESIGNED WITH INTENTION · BUILT WITH CODE</span>
        <button onClick={() => jump("home")}>BACK TO TOP ↑</button>
      </footer>
    </div>
  );
}

export function App() {
  const isGraphicDesign = window.location.pathname.endsWith("graphic-design.html");
  return isGraphicDesign ? <GraphicDesignPage /> : <HomePage />;
}
