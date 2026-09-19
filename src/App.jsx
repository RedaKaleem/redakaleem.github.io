import { useEffect, useRef, useState } from "react";
import auraCaseStudy from "./aura-case-study.json";
import clearCaseStudy from "./clear-case-study.json";
import karCaseStudy from "./kar-case-study.json";
import vsCaseStudy from "./vs-case-study.json";
import microsoftEventPhoto from "../assets/event-at-microsoft.jpg";
import codeDayPhoto from "../assets/codeday-hyderabad.jpg";
import graduationPhoto from "../assets/graduation-day.jpg";
import aboutPhoto from "../assets/about-photo-enhanced.png";
import speakingPhoto from "../assets/reda-speaking.png";
import studioPhoto from "../assets/milestone-6947.jpg";
import auraCover from "../assets/aura-cover.png";
import clearCover from "../assets/clear-cover.png";
import karCover from "../assets/kar-cover.png";
import vsCover from "../assets/vs-cover.png";
import womensSafetyCover from "../assets/wst-cover.png";
import moderationPaper from "../assets/research/content-moderation.pdf";
import emergencyPaper from "../assets/research/emergency-vehicle-detection.pdf";
import forestPaper from "../assets/research/forest-fire-prediction.pdf";

import milestone2804 from "../assets/milestone-2804.jpg";
import milestone2537 from "../assets/milestone-2537.jpg";
import milestone8260 from "../assets/milestone-8260.jpg";

const researchPapers = [
  { title: "Machine Learning-Based Text Classification for Online Content Moderation", type: "RESEARCH PAPER · 6 PAGES", summary: "An NLP pipeline for identifying toxic text, using text preprocessing, TF-IDF and Bag-of-Words features, classical machine learning classifiers, and a Flask interface with OCR input.", href: moderationPaper },
  { title: "Emergency Vehicle Detection and Signal Automation Using YOLOv8", type: "TECHNICAL SEMINAR · 22 PAGES", summary: "A proof-of-concept study connecting ambulance detection to traffic-signal priority. Covers a 1,519-image dataset, YOLOv8 training, the inference pipeline, and signal-control logic.", href: emergencyPaper },
  { title: "Forest Fire Prediction", type: "INTERNSHIP REPORT · 46 PAGES", summary: "An applied machine learning report on sound-wave fire suppression, comparing classifiers for predicting whether flames can be extinguished under different experimental conditions.", href: forestPaper },
];

const projects = [
  {
    number: "01",
    title: "AuraOS",
    cover: auraCover,
    kind: "AI SYSTEMS · COMPUTER VISION",
    summary: "An AI operating layer that lets people control their computer through hand gestures, voice commands and context-aware automation.",
    impact: "Python · OpenCV · MediaPipe · Whisper",
    href: "https://github.com/RedaKaleem/AI-Operating-Layer",
    tone: "black",
  },
  {
    number: "02",
    title: "ClearPath AI",
    cover: clearCover,
    kind: "COMPUTER VISION · AI",
    summary: "A traffic-management system that detects emergency vehicles and helps clear a faster route through busy roads.",
    impact: "YOLOv8 · OpenCV · Python",
    href: "https://github.com/RedaKaleem/ClearPath-AI",
    tone: "yellow",
  },
  {
    number: "03",
    title: "KAR AI Headsets",
    cover: karCover,
    kind: "VOICE AI · ACCESSIBILITY",
    summary: "A voice-first AI companion for hands-free interaction, combining speech recognition, local AI responses and spoken audio.",
    impact: "Python · Speech Recognition · Ollama · gTTS",
    href: "https://github.com/RedaKaleem/KAR",
    tone: "mint",
  },
  {
    number: "04",
    title: "Virtual Steering",
    cover: vsCover,
    kind: "COMPUTER VISION · GESTURE CONTROL",
    summary: "A virtual car simulator that uses hand gestures for steering, acceleration and braking.",
    impact: "Python · OpenCV · MediaPipe",
    href: "https://github.com/RedaKaleem/virtual-assitance",
    tone: "pink",
  },
];

const caseDetails = {
  AuraOS: [
    ["The challenge", "Make everyday computer interactions more natural through speech, gestures and an understanding of the user's context."],
    ["The approach", "Bring hand-gesture input, voice commands and context-aware automation together in an AI operating layer."],
    ["The system", "Python connects the system, with OpenCV and MediaPipe supporting computer vision and gesture input, and Whisper supporting speech recognition."],
    ["Project focus", "Natural interaction and practical computer control. Explore the repository for the implementation and current project status."],
  ],
  "ClearPath AI": [
    ["The challenge", "Emergency vehicles need faster routes through busy roads. Traffic signal timing is a key part of giving those vehicles priority."],
    ["The approach", "Detect emergency vehicles in real time and use those detections to prioritize signals and help clear a route."],
    ["The system", "YOLOv8 and OpenCV support vehicle detection, with Python coordinating signal-prioritization logic. The project considers smart-city and IoT integration."],
    ["Project focus", "Emergency vehicle detection and response. Explore the repository for the implementation; measured response-time improvements are not documented here."],
  ],
  "KAR AI Headsets": [
    ["The challenge", "Support hands-free interaction with a focus on accessibility for people with disabilities."],
    ["The approach", "Build an AI-powered headset assistant that uses spoken commands and natural voice responses."],
    ["The system", "Python, speech recognition and ElevenLabs bring voice input and spoken responses together in a headset experience."],
    ["Project focus", "Accessible voice interaction. Explore the repository for the current implementation."],
  ],
  "Virtual Steering": [
    ["The brief", "Explore hand gestures as controls for a virtual car simulator."],
    ["The approach", "Use computer vision to translate hand gestures into steering, acceleration and braking."],
    ["The build", "Built with Python, OpenCV and MediaPipe for hand tracking and gesture-based control."],
    ["Project focus", "Gesture-driven interaction in a virtual driving environment. Explore the repository for the implementation."],
  ],
};

const featuredProjects = [
  ...projects.slice(0, 2),
  {
    title: "KAR AI Headsets",
    cover: karCover,
    kind: "VOICE AI · ACCESSIBILITY",
    summary: "A voice-first AI companion for hands-free interaction, combining speech recognition, local AI responses and spoken audio.",
    href: "https://github.com/RedaKaleem/KAR",
    tone: "yellow",
  },
  {
    title: "Women’s Safety Insights",
    cover: womensSafetyCover,
    kind: "DATA MINING · SOCIAL IMPACT",
    summary: "An analysis of women’s safety trends through large-scale Twitter data mining.",
    href: "https://github.com/RedaKaleem/Technical-Evaluation-of-Women-s-Safety-Trends-Through-Large-Scale-Twitter-Data-Mining-and-Analysis",
  },
];

const designProjects = [
  { title: "Bizzapt", type: "BRAND IDENTITY · DIGITAL", label: "BRAND SYSTEM", tone: "design-yellow" },
  { title: "Poster Studies", type: "TYPOGRAPHY · LAYOUT", label: "POSTER SERIES", tone: "design-pink" },
  { title: "Interface Notes", type: "UI · VISUAL SYSTEMS", label: "INTERFACE STUDY", tone: "design-mint" },
  { title: "Marks & Symbols", type: "LOGO · EXPERIMENTS", label: "IDENTITY SKETCHES", tone: "design-blue" },
];

const communityLabels = ["COMMUNITY LEADERSHIP", "HACKATHONS", "MENTORING", "TECHNICAL SPEAKING", "WORKSHOPS"];

const techStack = [
  { title: "AI & Machine Learning", focus: ["ML", "NLP", "Computer Vision", "AI Agents", "RAG", "Speech AI"], items: [["Python", "python"], ["YOLOv8", "ultralytics"], ["OpenCV", "opencv"], ["MediaPipe", "mediapipe"], ["PyTorch", "pytorch"]] },
  { title: "Data & Analytics", focus: ["EDA", "Data Cleaning", "Visualization", "Feature Engineering", "Model Evaluation"], items: [["Pandas", "pandas"], ["NumPy", "numpy"], ["scikit-learn", "scikitlearn"], ["Matplotlib", "matplotlib"]] },
  { title: "Software Engineering", focus: ["Full-stack prototyping", "APIs", "Databases", "Deployment"], items: [["Next.js", "nextdotjs"], ["Flask", "flask"], ["JavaScript", "javascript"], ["MySQL", "mysql"], ["Git", "git"], ["GitHub", "github"], ["Vercel", "vercel"]] },
  { title: "Intelligent Automation", focus: ["Agent orchestration", "Workflow automation", "Voice systems", "Multimodal interfaces"], items: [["n8n", "n8n"], ["LLMs", "llm"], ["ElevenLabs", "elevenlabs"], ["Whisper", "whisper"]] },
  { title: "Product & Design", focus: ["UI/UX", "Product Design", "Design Systems", "Branding"], items: [["Figma", "figma"], ["Canva", "canva"], ["Adobe Express", "adobeexpress"]] },
  { title: "Strategy & Leadership", focus: ["Research", "Product strategy", "Documentation", "Speaking", "Leadership"], items: [] },
];

const techLogos = import.meta.glob("../assets/tech-stack/*.svg", { eager: true, query: "?url", import: "default" });

const studyImages = import.meta.glob(["../assets/aura-case-study/*.png", "../assets/clear-case-study/*.png", "../assets/kar-case-study/*.png", "../assets/vs-case-study/*.{png,jpg}"], { eager: true, query: "?url", import: "default" });
const auraImageDescriptions = ["AuraOS interaction concept", "AuraOS system architecture from input to execution", "Gesture dataset distribution across eight classes", "AuraOS dashboard", "AuraOS gesture control interface", "AuraOS voice mode interface"];

const clearImageDescriptions = ["ClearPath AI four simultaneous traffic feeds", "ClearPath AI detection and signal control architecture", "ClearPath AI training configuration", "ClearPath AI implementation structure", "ClearPath AI runtime detection and signal decisions"];

const karImageDescriptions = ["Sael voice prototype recognizing speech and generating audio", "Sael voice input, routing and output architecture", "Sael tone routing logic", "Sael listening and error state", "Sael working prototype recording"];
const vsImageDescriptions = ["Virtual Steering hand landmark tracking prototype", "Virtual Steering camera-to-keyboard system architecture", "Wrist coordinates and steering geometry", "Windows keyboard input implementation", "Virtual Steering driving game demo", "Verified Virtual Steering control states"];
const documentStudies = { AuraOS: { blocks: auraCaseStudy, study: "aura" }, "ClearPath AI": { blocks: clearCaseStudy, study: "clear" }, "KAR AI Headsets": { blocks: karCaseStudy, study: "kar" }, "Virtual Steering": { blocks: vsCaseStudy, study: "vs" } };

function CaseStudyFolder({ project }) {
  const dialog = useRef(null);
  const openStudy = () => {
    dialog.current.showModal();
    dialog.current.querySelector(".case-modal-body").scrollTop = 0;
  };
  const closeOnBackdrop = (event) => {
    if (event.target !== event.currentTarget) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.current.close();
  };
  return (
    <article className={`case-folder folder-${project.tone}`}>
      <button type="button" className="case-folder-trigger" onClick={openStudy} aria-haspopup="dialog" aria-label={`Open ${project.title} case study`}>
        <span className="case-folder-label">PROJECT {project.number}</span>
        <span className="case-folder-front">
          <span className="case-folder-copy">
            <span className="tiny-copy">{project.kind}</span>
            <span className="case-folder-title">{project.title}</span>
            <span className="case-folder-description">{project.summary}</span>
            <span className="case-folder-action">OPEN CASE STUDY ↗</span>
          </span>
          {project.cover ? <img className="case-folder-art" src={project.cover} alt="" loading="lazy" /> : <span className="case-folder-index" aria-hidden="true">{project.number}<span>{project.title}</span></span>}
        </span>
      </button>
      <dialog ref={dialog} className="case-modal" aria-labelledby={`case-modal-title-${project.number}`} onClick={closeOnBackdrop}>
        <header className="case-modal-header">
          <div><span>PROJECT {project.number} / CASE STUDY</span><h3 id={`case-modal-title-${project.number}`}>{project.title}</h3></div>
          <button type="button" className="case-modal-close" onClick={() => dialog.current.close()} autoFocus aria-label={`Close ${project.title} case study`}>CLOSE ×</button>
        </header>
        <div className="case-modal-body">
          <div className="case-folder-meta"><span>{project.kind}</span><span>{project.impact}</span></div>
          <div className="aura-study"><StudyBlocks {...documentStudies[project.title]} /></div>
        </div>
      </dialog>
    </article>
  );
}

function CaseStudyImage({ file, study }) {
  const dialog = useRef(null);
  const source = studyImages[`../assets/${study}-case-study/${file}`];
  const descriptions = study === "vs" ? vsImageDescriptions : study === "kar" ? karImageDescriptions : study === "clear" ? clearImageDescriptions : auraImageDescriptions;
  const description = descriptions[Number(file.match(/\d+/)?.[0]) - 1] || "Case study image";
  return (
    <figure className="study-image">
      <button type="button" className="study-image-trigger" onClick={() => dialog.current.showModal()} aria-label={`Enlarge ${description}`} aria-haspopup="dialog">
        <img src={source} alt={description} loading="lazy" />
        <span>CLICK TO ENLARGE ↗</span>
      </button>
      <dialog ref={dialog} className="study-lightbox" aria-label={description} onClick={() => dialog.current.close()}>
        <button type="button" className="study-image-close" onClick={() => dialog.current.close()} autoFocus aria-label="Close enlarged image">CLOSE ×</button>
        <img src={source} alt={description} />
        <p>Click the image again or press Escape to close.</p>
      </dialog>
    </figure>
  );
}

function StudyBlocks({ blocks, study }) {
  return blocks.map((block, index) => {
    if (block.type === "image") return <CaseStudyImage key={index} file={block.file} study={study} />;
    if (block.type === "heading") return <h4 className={`study-heading study-${block.level}`} key={index}>{block.text}</h4>;
    if (block.type === "links") return <div className="study-links" key={index}>{block.links.map(link => <a href={link.url} key={link.url} target="_blank" rel="noreferrer">{link.text} ↗</a>)}</div>;
    if (block.type === "grid") return <div className="study-grid" key={index}>{block.rows.map((row, rowIndex) => <div className="study-row" key={rowIndex}>{row.map((cell, cellIndex) => <div className="study-cell" key={cellIndex}><StudyBlocks blocks={cell} study={study} /></div>)}</div>)}</div>;
    return <p key={index} className={block.text === block.text.toUpperCase() ? "study-eyebrow" : undefined}>{block.text}</p>;
  });
}

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
  const [activeStack, setActiveStack] = useState(0);
  const selectedStack = techStack[activeStack];

  const handleStackKey = (event, index) => {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % techStack.length;
    else if (event.key === "ArrowLeft") next = (index - 1 + techStack.length) % techStack.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = techStack.length - 1;
    else return;
    event.preventDefault();
    setActiveStack(next);
    document.getElementById(`stack-tab-${next}`)?.focus();
  };
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

        <section className="about lined" id="about">
          <div className="section-title-wrap">
            <span className="section-index">02 — ABOUT</span>
            <h2>ABOUT</h2>
          </div>
          <div className="about-grid">
            <article className="paper-card">
              <span className="tape">A LITTLE CONTEXT</span>
              <figure className="about-portrait-frame">
                <img src={aboutPhoto} className="about-photo" alt="Reda Kaleem smiling outdoors" width="852" height="1846" loading="lazy" />
                <figcaption>THAT’S ME!</figcaption>
              </figure>
              <h3 className="about-handwritten">I build intelligent systems around ideas that make me ask, “wait… could we actually do that?”</h3>
              <div className="side-tabs" aria-label="What I bring"><span>BUILD</span><span>THINK</span><span>DESIGN</span></div>
              <p>I’m drawn to ideas that sit somewhere between <strong>“this could be useful”</strong> and <strong>“is this even possible?”</strong></p>
              <p>My work spans AI agents, computer vision, NLP, data science and multimodal interfaces — from teaching computers to recognize emergency vehicles, to experimenting with gesture-controlled computing and voice-first AI systems.</p>
              <p>I usually start with a question: <strong>What if this worked differently?</strong> Then I research it, prototype it, break it, rethink it and keep building until the idea becomes something people can actually interact with.</p>
              <p>I care about more than the model behind a product. I like thinking about the system around it too — how it looks, how people use it, how it scales and why it should exist in the first place.</p>
            </article>
          </div>
        </section>

        <section className="intro lined">
          <div className="polaroid portrait-left">
            <img className="intro-portrait" src={speakingPhoto} alt="Reda Kaleem speaking into a microphone at an event" width="1536" height="1024" loading="lazy" />
          </div>
          <div className="intro-copy">
            <h2 className="hand-note community-heading">Leadership &amp; Community</h2>
            <p><strong>Some of my favourite things I've built aren't software — they're communities.</strong></p>
            <p>I've spent a big part of my journey teaching, mentoring and creating spaces where people can experiment with technology together. Through CodeWave Hub, hackathons and technical communities, I've worked with students not just on learning tools, but on actually turning their ideas into projects.</p>
            <p>I've helped organize large-scale hackathons including HackPrix, mentored students in AI and project development, conducted workshops and spoken about emerging technology.</p>
            <p>Building products taught me how to solve problems. <strong>Building communities taught me how differently people solve the same problem.</strong></p>
            <div className="skill-stickers">
              {communityLabels.map((skill, index) => <span key={skill} className={`sticker sticker-${index % 4}`}>{skill}</span>)}
            </div>
          </div>
          <div className="polaroid portrait-right">
            <img className="intro-portrait studio-snap" src={studioPhoto} alt="A conversation beside a meeting room" loading="lazy" />
          </div>
        </section>

        <section className="tech-stack lined" id="tech-stack" aria-labelledby="tech-stack-title">
          <div className="section-title-wrap left-title">
            <span className="section-index">THE TOOLKIT</span>
            <h2 id="tech-stack-title">MY TECH STACK</h2>
            <p className="stack-intro">The tools I use to build, experiment and connect ideas.</p>
          </div>
          <div className={`stack-browser stack-theme-${activeStack}`}>
            <div className="stack-toolbar"><span>EXPLORE THE TOOLKIT</span><span>{String(activeStack + 1).padStart(2, "0")} / {String(techStack.length).padStart(2, "0")}</span></div>
            <div className="stack-tabs" role="tablist" aria-label="Tech stack categories">
              {techStack.map((category, index) => (
                <button key={category.title} type="button" role="tab" id={`stack-tab-${index}`}
                  aria-selected={activeStack === index} aria-controls={`stack-panel-${index}`}
                  tabIndex={activeStack === index ? 0 : -1}
                  onClick={() => setActiveStack(index)} onKeyDown={(event) => handleStackKey(event, index)}>
                  <span className="stack-number">0{index + 1}</span>
                  <span className="stack-tab-title">{category.title}</span>
                </button>
              ))}
            </div>
            {techStack.map((category, index) => (
              <div key={category.title} role="tabpanel" id={`stack-panel-${index}`} aria-labelledby={`stack-tab-${index}`}
                hidden={activeStack !== index} tabIndex={0} className="stack-panel">
                <div className="stack-panel-heading">
                  <span>0{index + 1} — {category.items.length ? "TOOLS & PRACTICE" : "PEOPLE & DIRECTION"}</span>
                  <h3>{category.title}</h3>
                  {category.items.length > 0 && <p className="stack-focus">{category.focus.join(" · ")}</p>}
                </div>
                <ul className="stack-skills">
                  {category.items.length === 0 && category.focus.map((skill, skillIndex) => (
                    <li key={skill}><span className="stack-capability-number">0{skillIndex + 1}</span><span>{skill}</span></li>
                  ))}
                  {category.items.map(([name, logo]) => (
                    <li key={name}>
                      <span className="stack-logo"><img src={techLogos[`../assets/tech-stack/${logo}.svg`]} alt="" width="32" height="32" loading="lazy" /></span>
                      <span>{name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="stack-footer"><span>IN MY TOOLKIT</span><span>{selectedStack.items.length || selectedStack.focus.length} {selectedStack.items.length ? "tools" : "focus areas"} · {selectedStack.title}</span></div>
          </div>
        </section>

        <section className="work lined" id="work">
          <div className="section-title-wrap left-title">
            <span className="section-index">03 — SELECTED PROJECTS</span>
            <h2>FEATURED WORKS</h2>
          </div>
          <div className="project-preview-grid">
            {featuredProjects.map((project, index) => {
              const Card = project.href ? "a" : "article";
              return (
              <Card className="preview-card" {...(project.href ? { href: project.href, target: "_blank", rel: "noreferrer" } : {})} key={project.title}>
                <div className="project-folder project-folder-dark">
                  <div className="project-folder-tab"><span aria-hidden="true">●</span> PROJECT {String(index + 1).padStart(2, "0")}</div>
                  <div className="project-folder-cover">{project.cover ? <img className="project-cover-image" src={project.cover} alt={`${project.title} project cover`} loading="lazy" /> : <Placeholder label={`${project.title.toUpperCase()} COVER`} />}</div>
                </div>
                <h3>{project.title}</h3>
                <span className="preview-kind">{project.kind}</span>
                <p>{project.summary}</p>
              </Card>
              );
            })}
          </div>

          <section className="case-folder-section" aria-labelledby="case-studies-title">
            <div className="section-title-wrap left-title">
              <span className="section-index">A CLOSER LOOK</span>
              <h2 id="case-studies-title">CASE STUDIES</h2>
            </div>
            <div className="case-folders">
              {projects.map((project) => <CaseStudyFolder project={project} key={project.title} />)}
            </div>
          </section>
        </section>

        <section className="research-library lined" id="research" aria-labelledby="research-library-title">
          <div className="section-title-wrap left-title">
            <span className="section-index">04 — PAPERS &amp; REPORTS</span>
            <h2 id="research-library-title">RESEARCH LIBRARY</h2>
          </div>
          <div className="research-paper-grid">
            {researchPapers.map((paper, index) => (
              <article className="research-paper" key={paper.title}>
                <span className="research-paper-number">0{index + 1}</span>
                <p className="tiny-copy">{paper.type}</p>
                <h3>{paper.title}</h3>
                <p>{paper.summary}</p>
                <a href={paper.href} target="_blank" rel="noreferrer" aria-label={`Read PDF: ${paper.title}`}>READ PDF ↗</a>
              </article>
            ))}
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
            <span className="section-index">06 — MILESTONE GALLERY</span>
            <h2>MILESTONE GALLERY</h2>
          </div>
          <p className="board-intro">Moments from building, learning and showing up together.</p>
          <div className="board-toolbar"><span>CASE FILE / RK—06</span><span className="board-scroll-hint">SCROLL TO FOLLOW THE THREAD →</span><span className="board-status">● ONGOING INVESTIGATION</span></div>
          <div className="board-scroll" tabIndex={0} role="region" aria-label="Milestone gallery, scroll horizontally to explore">
            <div className="investigation-board">
              <span className="board-stamp">MOMENTS ALONG THE WAY</span>
              <svg className="evidence-strings" viewBox="0 0 1040 980" preserveAspectRatio="none" fill="none" aria-hidden="true">
                <defs>
                  <filter id="thread-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx=".6" dy="1.2" stdDeviation=".65" floodColor="#362219" floodOpacity=".28" /></filter>
                  <linearGradient id="thread-color" x1="166" y1="92" x2="917" y2="749" gradientUnits="userSpaceOnUse"><stop stopColor="#773b36" /><stop offset=".36" stopColor="#a24c43" /><stop offset=".7" stopColor="#78342f" /><stop offset="1" stopColor="#985047" /></linearGradient>
                  <radialGradient id="pin-color" cx="32%" cy="25%" r="75%"><stop stopColor="#bf8575" /><stop offset=".3" stopColor="#914b40" /><stop offset="1" stopColor="#512c29" /></radialGradient>
                  <path id="thread-path" d="M166 92 Q305 118 443 137 Q649 117 854 88 M443 137 Q533 257 630 370 M166 92 Q255 249 353 400 Q493 390 630 370 Q759 404 889 430 M854 88 Q876 260 889 430 M353 400 Q265 544 187 690 Q310 732 433 763 M630 370 Q643 521 665 670 Q790 716 917 749 M889 430 Q907 590 917 749" />
                </defs>
                <use href="#thread-path" stroke="#60332e" strokeWidth="1.8" strokeLinecap="round" filter="url(#thread-shadow)" />
                <use href="#thread-path" stroke="url(#thread-color)" strokeWidth="1.25" strokeLinecap="round" />
                <use href="#thread-path" stroke="#d6a08b" strokeOpacity=".35" strokeWidth=".35" transform="translate(-.2 -.3)" />
                <use href="#thread-path" stroke="#402b24" strokeOpacity=".2" strokeWidth="1.3" strokeDasharray=".35 2.1 .5 3.2" />
                {[ [166,92], [443,137], [854,88], [353,400], [630,370], [889,430], [187,690], [433,763], [665,670], [917,749] ].map(([cx,cy]) => <g key={`${cx}-${cy}`}><ellipse cx={cx+1} cy={cy+2} rx="3.8" ry="2.5" fill="#281d18" opacity=".2" /><circle cx={cx} cy={cy} r="3.1" fill="url(#pin-color)" /><circle cx={cx-.8} cy={cy-1} r=".65" fill="#e4bd9f" opacity=".65" /></g>)}
              </svg>
              <figure className="evidence-photo evidence-art"><img className="evidence-real-photo" src={microsoftEventPhoto} alt="A presentation in progress at an event at Microsoft, with attendees seated in front of a projection screen" width="1280" height="960" loading="lazy" /><figcaption><span>01 / OUT IN THE WORLD</span>Event at Microsoft</figcaption></figure>
              <div className="event-scribble"><svg viewBox="0 0 60 44" fill="none" aria-hidden="true"><path d="M52 37C24 39 18 23 22 7M14 15L22 6L29 17" /></svg><span>ideas beyond<br />the screen ✧</span></div>
              <article className="evidence-note note-details"><span>OBSERVATION 01</span><p>I get a little too excited about the small details.</p><small>Yes, even the edge cases.</small></article>
              <figure className="evidence-photo evidence-process"><img className="evidence-real-photo" src={milestone2804} alt="My first project expo, presenting a project to a group gathered around a computer" loading="lazy" /><figcaption><span>02 / MY FIRST PROJECT EXPO</span>My first project expo</figcaption></figure>
              <div className="gallery-handwriting expo-handwriting">my first expo!<br /><span>one for the memory book</span></div>
              <article className="evidence-note note-curiosity"><span>FOLLOW THE CLUES</span><p>Engineering brain.<br />Design eye.<br />Always curious.</p></article>
              <figure className="evidence-photo evidence-interface"><img className="evidence-real-photo" src={milestone2537} alt="Laptops and participants at my first hackathon" loading="lazy" /><figcaption><span>03 / MY FIRST HACKATHON</span>My first hackathon</figcaption></figure>
              <div className="gallery-handwriting hackathon-handwriting">the loss was a<br />gold experience</div>
              <article className="evidence-note note-human"><span>THE COMMON THREAD</span><p>Build things that feel human.</p><small>Code + AI + visual design.</small></article>
              <figure className="evidence-photo evidence-wild"><img className="evidence-real-photo" src={graduationPhoto} alt="Graduates in caps and gowns posing together on a staircase on graduation day" width="1280" height="960" loading="lazy" /><figcaption><span>04 / A CHAPTER COMPLETE</span>Graduation day<br />Here’s to what comes next.</figcaption></figure>
              <div className="graduation-scribble"><svg viewBox="0 0 70 55" fill="none" aria-hidden="true"><path d="M7 21L33 9L62 20L35 33Z M19 28L20 39Q35 49 50 37L50 27 M61 21L62 40M58 46L62 39L66 46 M8 5L11 10M49 3L47 8M3 37L8 34" /></svg><span>we made it!<svg viewBox="0 0 140 12" fill="none" aria-hidden="true"><path d="M3 5Q68 0 136 5M10 10Q71 5 125 9" /></svg></span></div>
              <figure className="evidence-photo evidence-sketch"><img className="evidence-real-photo" src={milestone8260} alt="Group photo at a Women’s Day celebration" loading="lazy" /><figcaption><span>05 / CELEBRATING TOGETHER</span>Women’s Day celebration</figcaption></figure>
              <div className="gallery-handwriting together-handwriting">better together.</div>
              <article className="evidence-note note-prototype"><span>WORKING THEORY</span><p>I learn by making.</p><small>Ask. Prototype. Test. Refine.</small></article>
              <figure className="evidence-photo evidence-studio"><img className="evidence-real-photo" src={codeDayPhoto} alt="Attendees gathered at CodeDay Hyderabad at NxtWave Academy" width="1280" height="960" loading="lazy" /><figcaption><span>06 / GENIUS KIDS IN THE MAKING</span>CodeDay, Hyderabad<br />at NxtWave Academy</figcaption></figure>
              <div className="event-scribble codeday-scribble"><svg viewBox="0 0 60 44" fill="none" aria-hidden="true"><path d="M52 37C24 39 18 23 22 7M14 15L22 6L29 17" /></svg><span>little ideas,<br />big possibilities ✧</span></div>
              <article className="evidence-note note-people"><span>NOTE TO SELF</span><p>Think about the person on the other side of the screen.</p></article>
              <span className="board-footer">COLLECTING IDEAS, CONNECTING DOTS.</span>
            </div>
          </div>
        </section>

        <section className="contact lined" id="contact">
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
