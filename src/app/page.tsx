"use client";

import { useState, useEffect, useRef } from "react";
import { ProjectCard } from "../components/ui/ProjectCard";
import { useInViewAnimation } from "../hooks/useInViewAnimation";
import type { ProjectFrontmatter } from "../lib/markdown";
import { AboutSection } from "../components/sections/AboutSection";

// Typewriter Text Component - Cursor Escalado
function TypewriterText({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const indexRef = useRef(0);

  useEffect(() => {
    const typeInterval = setInterval(() => {
      if (indexRef.current < text.length) {
        setDisplayedText(text.slice(0, indexRef.current + 1));
        indexRef.current++;
      } else {
        clearInterval(typeInterval);
      }
    }, 80);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 400);

    return () => {
      clearInterval(typeInterval);
      clearInterval(cursorInterval);
    };
  }, [text]);

  return (
    <span style={{ fontSize: "inherit", fontFamily: "inherit", lineHeight: "inherit" }}>
      {displayedText}
      <span
        aria-hidden="true"
        style={{
          display: "inline-block",
          width: "clamp(2px, 0.5vw, 4px)",
          height: "4em", // Ajustado para que siempre escale con el texto
          backgroundColor: showCursor ? "var(--neon-cyan)" : "transparent",
          marginLeft: "4px",
          verticalAlign: "top",
          boxShadow: showCursor ? "0 0 10px var(--neon-cyan)" : "none",
        }}
      />
    </span>
  );
}

// Hero Section - Escalado Fluido
function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScrollClick = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center"
      style={{ background: "var(--bg-void)", padding: "clamp(40px, 10vh, 80px) 16px" }}
    >
      <div className="container-retro text-center" style={{ maxWidth: '1200px', width: '100%' }}>

        {/* Badge Adaptable */}
        <div
          className="retro-badge"
          style={{
            display: "inline-block",
            padding: "6px 16px",
            fontSize: "clamp(10px, 2.5vw, 14px)", // Escalado para móvil
            marginBottom: "clamp(24px, 5vh, 40px)",
            opacity: mounted ? 1 : 0,
            border: "2px solid var(--neon-cyan)",
            animation: mounted ? "retro-fade-in 0.2s steps(3) forwards" : "none",
          }}
        >
          {"< FULL STACK ENGINEER // DATA ARCHITECT />"}
        </div>

        {/* Headline Gigante pero Adaptable */}
        <h1
          style={{
            fontSize: "clamp(10px, 9vw, 40px)", // Sube de 24px a 56px según el ancho
            color: "var(--neon-cyan)",
            marginBottom: "20px",
            lineHeight: "1.2",
            fontWeight: "bold",
            textShadow: "0 0 20px rgba(0, 243, 255, 0.5)",
            letterSpacing: "-1px",
          }}
        >
          {mounted ? <TypewriterText text="ARCHITECTING SECURE DIGITAL ECOSYSTEMS" /> : "ARCHITECTING..."}
        </h1>

        {/* Subtitle legible en móvil */}
        <p
          style={{
            color: "var(--foreground-muted)",
            fontSize: "clamp(10px, 3.5vw, 18px)", // Mínimo 12px para legibilidad
            maxWidth: "850px",
            margin: "0 auto 40px",
            lineHeight: "1.6",
            opacity: mounted ? 1 : 0,
            animation: mounted ? "retro-fade-in 0.3s steps(4) 1.5s forwards" : "none",
          }}
        >
          TRANSFORMING COMPLEX DATA INTO ELEGANT APPLICATIONS.
          <br />
          <span style={{ color: "var(--hyper-purple)", fontWeight: 'bold', display: 'inline-block', marginTop: '8px' }}>
            FROM ETL PIPELINES TO SECURE FRONTEND INTERFACES.
          </span>
        </p>

        <button
          onClick={handleScrollClick}
          className="retro-btn"
          style={{
            padding: "12px 24px",
            fontSize: "clamp(6px, 3vw, 12px)",
            cursor: "pointer",
            opacity: mounted ? 1 : 0,
            animation: mounted ? "retro-fade-in 0.3s steps(4) 2s forwards" : "none",
          }}
        >
          {">> VIEW CASE STUDIES <<"}
        </button>
      </div>
    </section>
  );
}

// Approach Section - Títulos Escalados
function ApproachSection() {
  const { ref, isVisible } = useInViewAnimation<HTMLElement>(0.2);
  const [step, setStep] = useState(-1);
  const [isExploding, setIsExploding] = useState(false);
  const [revealedCount, setRevealedCount] = useState(-1);

  useEffect(() => {
    if (isVisible && step === -1) {
      const startSequence = async () => {
        for (let i = 0; i < 4; i++) {
          setStep(i);
          await new Promise(r => setTimeout(r, 700));
          setIsExploding(true);
          await new Promise(r => setTimeout(r, 400));
          setIsExploding(false);
          setRevealedCount(i);
          await new Promise(r => setTimeout(r, 200));
        }
        setStep(4);
      };
      startSequence();
    }
  }, [isVisible]);

  const approaches = [
    { num: "01", title: "DATA DISCOVERY", description: 'ANALYZING THE "DATA WHY".', icon: "🔍" },
    { num: "02", title: "ARCHITECTURE", description: "MAPPING ETL PIPELINES.", icon: "🏗️" },
    { num: "03", title: "IMPLEMENTATION", description: "BUILDING AI MODELS.", icon: "⚡" },
    { num: "04", title: "KPI MONITORING", description: "POWER BI DASHBOARDS.", icon: "📊" },
  ];

  return (
    <section ref={ref} id="approach" style={{ background: "var(--card-carbon)", padding: "80px 16px", overflow: 'hidden' }}>
      <div className="container-retro">
        <header style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2 style={{
            color: "var(--neon-cyan)",
            fontSize: "clamp(18px, 5vw, 28px)", // Título de sección escalado
            textShadow: "0 0 10px rgba(0, 243, 255, 0.4)"
          }}>
            {"// METHODOLOGY //"}
          </h2>
        </header>

        <div className="approach-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
          gap: "20px"
        }}>
          {/* NAVE ESPACIAL */}
          <div className={`retro-spaceship ship-pos-${step} ${step >= 0 && step < 4 ? 'active' : ''}`}>
            <img src="/space-ship.svg" style={{ width: '40px', filter: 'hue-rotate(90deg) brightness(1.5)' }} alt="ship" />
          </div>

          {approaches.map((app, index) => (
            <article 
              key={index} 
              className={`approach-card ${revealedCount >= index ? "revealed" : ""}`}
              style={{ 
                position: "relative", // INDISPENSABLE para centrar la explosión
                overflow: "visible",  // Permite que la explosión se vea fuera del borde
                zIndex: revealedCount === index ? 20 : 1 // Sube la tarjeta que está explotando
              }}
            >
              {/* Renderizado condicional de la explosión */}
              {step === index && isExploding && <div className="pixel-explosion" />}

              <div className="approach-num" style={{ fontSize: "14px" }}>{app.num}</div>
              <h3 className="approach-title" style={{ fontSize: "12px" }}>{app.icon} {app.title}</h3>
              <p className="approach-desc" style={{ fontSize: "10px" }}>{app.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// Projects Section - Grid y Textos
function ProjectsSection({ projects }: { projects: ProjectFrontmatter[] }) {
  const { ref, isVisible } = useInViewAnimation<HTMLElement>(0.1);

  return (
    <section ref={ref} id="projects" style={{ background: "var(--bg-void)", padding: "80px 16px" }}>
      <div className="container-retro">
        <header style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2 style={{
            color: "var(--hyper-purple)",
            fontSize: "clamp(18px, 5vw, 28px)",
            textShadow: "0 0 10px rgba(157, 0, 255, 0.4)"
          }}>
            {">> CASE STUDIES <<"}
          </h2>
        </header>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
          gap: "24px",
        }}>
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  const projects: ProjectFrontmatter[] = [
    {
      title: "ALPHANET: ACTION RECOGNITION",
      slug: "alphanet",
      excerpt: "DEEP LEARNING MODEL OPTIMIZED FOR TPU/CLOUD INFRASTRUCTURE.",
      techStack: ["PYTHON", "TENSORFLOW", "TPU", "FLAX"],
      category: "DATA / AI",
      confidential: false,
    },
    {
      title: "RESTAURANT GURU: NLP ANALYTICS",
      slug: "restaurantguru",
      excerpt: "SENTIMENT ANALYSIS PIPELINE WITH GCP, WEB SCRAPING, AND POWER BI.",
      techStack: ["GCP", "PYTHON", "NLP", "POWER BI"],
      category: "DATA / NLP",
      confidential: false,
    },
    {
      title: "MOVIE RECOMMENDER: AI ENGINE",
      slug: "movie-recommender",
      excerpt: "HIGH-PERFORMANCE RECOMMENDATION SYSTEM WITH 8-BIT MODEL QUANTIZATION.",
      techStack: ["PYTHON", "SKLEARN", "FLASK", "MYSQL"],
      category: "DATA / ML",
      confidential: false,
    },
    {
      title: "REAL-TIME INVENTORY SYSTEM",
      slug: "restaurant-inventory",
      excerpt:
        "MISSION-CRITICAL TRACKING ACROSS MULTIPLE LOCATIONS. ZERO RECONCILIATION ERRORS.",
      techStack: ["NEXT.JS", "REACT", "SUPABASE", "POSTGRESQL"],
      confidential: true,
      category: "ENTERPRISE",
    },
    {
      title: "WHATSAPP FINANCIAL LEDGER",
      slug: "gac-confidential",
      excerpt:
        "100% WHATSAPP-NATIVE ECOSYSTEM FOR COMMUNITY SAVINGS GROUPS.",
      techStack: ["WHATSAPP API", "POWER AUTOMATE", "DATAVERSE"],
      confidential: true,
      category: "FINTECH",
    },
    {
      title: "SEGUROENVIO LOGISTICS",
      slug: "seguroenvio",
      excerpt:
        "HIGH-PERFORMANCE LOGISTICS WITH PENALTY LOOP ACCOUNTABILITY.",
      techStack: ["NEXT.JS 16", "REACT 19", "PRISMA", "ZOD"],
      confidential: false,
      category: "LOGISTICS",
    },
  ];

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ApproachSection />
      <ProjectsSection projects={projects} />
    </>
  );
}
