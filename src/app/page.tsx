"use client";

import { useState, useEffect, useRef } from "react";
import { ProjectCard } from "../components/ui/ProjectCard";
import { useInViewAnimation } from "../hooks/useInViewAnimation";
import type { ProjectFrontmatter } from "../lib/markdown";

// Typewriter Text Component Corregido
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
    /* Forzamos al span a ser un bloque inline y heredar el tamaño del h1 */
    <span style={{ fontSize: "inherit", fontFamily: "inherit", lineHeight: "inherit" }}>
      {displayedText}
      <span
        aria-hidden="true"
        style={{
          display: "inline-block",
          width: "3px", // Un poco más grueso para que se note en el h1 gigante
          height: "5em",
          backgroundColor: showCursor ? "var(--neon-cyan)" : "transparent",
          marginLeft: "8px",
          verticalAlign: "baseline", // Corregido de "center" a "baseline"
          boxShadow: showCursor ? "0 0 15px var(--neon-cyan)" : "none",
        }}
      />
    </span>
  );
}

// Hero Section
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
      aria-label="Introduction"
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "var(--bg-void)",
        padding: "80px 24px", // Aumentado el padding vertical
      }}
    >
      {/* Aumentamos el max-width del contenedor para que el texto tenga espacio de crecer */}
      <div className="container-retro text-center" style={{ maxWidth: '1200px', width: '100%' }}>

        {/* Badge - Escalado */}
        <div
          className="retro-badge"
          style={{
            display: "inline-block",
            padding: "8px 20px",
            fontSize: "1.1rem",
            marginBottom: "40px", // Más espacio
            opacity: mounted ? 1 : 0,
            animationName: mounted ? "retro-fade-in" : "none",
            animationDuration: "0.2s",
            animationTimingFunction: "steps(3)",
            animationFillMode: "forwards",
            border: "2px solid var(--neon-cyan)",
          }}
        >
          {"< FULL STACK ENGINEER // DATA ARCHITECT />"}
        </div>

        {/* Typewriter Headline - Proporcional al subtítulo (2.5x) */}
        <h1
          style={{
            // 36px en móvil, 8vw para que crezca rápido, 90px máximo.
            fontSize: "clamp(24px, 8vw, 48px)",
            color: "var(--neon-cyan)",
            marginBottom: "32px",
            lineHeight: "1", // Títulos gigantes necesitan line-height corto
            fontWeight: "bold",
            minHeight: "1.2em", // Reserva el espacio basado en el tamaño de la letra
            textShadow: "0 0 30px rgba(0, 243, 255, 0.6)",
            letterSpacing: "-1px", // Estilo gamer/condensado
            display: "block",
            width: "100%",
          }}
        >
          {mounted ? (
            <TypewriterText text="ARCHITECTING SECURE DIGITAL ECOSYSTEMS" />
          ) : (
            "ARCHITECTING SECURE DIGITAL ECOSYSTEMS"
          )}
        </h1>

        {/* Subtitle - Más ancho y letra más grande */}
        <p
          style={{
            color: "var(--foreground-muted)",
            fontSize: "clamp(16px, 1.5vw, 20px)", // Letra más grande
            maxWidth: "850px", // Aumentado de 600px
            margin: "0 auto 56px",
            lineHeight: 1.6,
            opacity: mounted ? 1 : 0,
            animationName: mounted ? "retro-fade-in" : "none",
            animationDuration: "0.3s",
            animationTimingFunction: "steps(4)",
            animationDelay: "1.5s",
            animationFillMode: "forwards",
          }}
        >
          TRANSFORMING COMPLEX DATA INTO ELEGANT APPLICATIONS.
          <br />
          <span style={{ color: "var(--hyper-purple)", fontWeight: 'bold' }}>
            FROM ETL PIPELINES TO SECURE FRONTEND INTERFACES.
          </span>
        </p>

        {/* CTA Button - Escalado */}
        <button
          onClick={handleScrollClick}
          className="retro-btn"
          aria-label="View case studies"
          style={{
            padding: "20px 40px", // Botón mucho más grande
            fontSize: "1.2rem",
            opacity: mounted ? 1 : 0,
            animationName: mounted ? "retro-fade-in" : "none",
            animationDuration: "0.3s",
            animationTimingFunction: "steps(4)",
            animationDelay: "2s",
            animationFillMode: "forwards",
            cursor: "pointer"
          }}
        >
          {">> VIEW CASE STUDIES <<"}
        </button>

        {/* Scroll indicator */}
        <div
          aria-hidden="true"
          style={{
            marginTop: "80px",
            fontSize: "1.1rem",
            color: "var(--hyper-purple)",
            opacity: mounted ? 1 : 0,
            animationName: mounted ? "retro-blink" : "none",
            animationDuration: "1s",
            animationTimingFunction: "steps(1)",
            animationIterationCount: "infinite",
            animationDelay: "2.5s",
          }}
        >
          ▼ SCROLL DOWN ▼
        </div>
      </div>
    </section>
  );
}

// Approach Section with Sequential Spaceship Animation
function ApproachSection() {
  const { ref, isVisible } = useInViewAnimation<HTMLElement>(0.2);
  const [step, setStep] = useState(-1);
  const [isExploding, setIsExploding] = useState(false);

  // NUEVO: Controla qué cuadros ya terminaron su explosión
  const [revealedCount, setRevealedCount] = useState(-1);

  useEffect(() => {
    if (isVisible && step === -1) {
      startSequence();
    }
  }, [isVisible]);

  const startSequence = async () => {
    for (let i = 0; i < 4; i++) {
      setStep(i); // 1. La nave viaja a la posición i
      await new Promise(r => setTimeout(r, 700)); // Tiempo de viaje (ajustar si la nave va lento)

      setIsExploding(true); // 2. ¡BOOM!
      await new Promise(r => setTimeout(r, 400)); // 3. Esperamos a que la animación de explosión casi termine

      setIsExploding(false); // 4. Quitamos la explosión
      setRevealedCount(i);   // 5. JUSTO AQUÍ: El cuadro aparece ahora que la explosión se fue

      await new Promise(r => setTimeout(r, 200)); // Pequeña pausa antes de ir al siguiente
    }
    setStep(4); // La nave se va
  };

const approaches = [
    { 
      num: "01", 
      title: "DATA DISCOVERY", 
      description: 'ANALYZING THE "DATA WHY". IDENTIFYING KEY METRICS AND SOURCE INTEGRITY.', 
      icon: "🔍" 
    },
    { 
      num: "02", 
      title: "ARCHITECTURE", 
      description: "MAPPING ETL PIPELINES. DESIGNING SECURE, SCALABLE DATA FLOWS.", 
      icon: "🏗️" 
    },
    { 
      num: "03", 
      title: "IMPLEMENTATION", 
      description: "BUILDING CLEAN CODE & AI MODELS. FROM TYPESCRIPT TO DEEP LEARNING.", 
      icon: "⚡" 
    },
    { 
      num: "04", 
      title: "KPI MONITORING", 
      description: "VERIFYING SUCCESS VIA POWER BI DASHBOARDS AND PERFORMANCE AUDITS.", 
      icon: "📊" 
    },
  ];

  return (
    <section ref={ref} id="approach" style={{ background: "var(--card-carbon)", padding: "96px 24px", overflow: 'hidden' }}>
      <div className="container-retro">
        <header style={{ textAlign: "center", marginBottom: "64px" }}>
          <span className="retro-badge retro-badge-warning" style={{ marginBottom: "16px" }}>
            METHODOLOGY
          </span>
          <h2 style={{ color: "var(--neon-cyan)", marginTop: "24px", textShadow: "0 0 15px rgba(0, 243, 255, 0.4)" }}>
            {"// HOW I APPROACH PROBLEMS //"}
          </h2>
        </header>

        <div className="approach-grid">
          {/* NAVE ESPACIAL */}
          <div className={`retro-spaceship ship-pos-${step} ${step >= 0 && step < 4 ? 'active' : ''}`}>
            <img src="/space-ship.svg" style={{ width: '40px', filter: 'hue-rotate(90deg) brightness(1.5)' }} alt="ship" />
          </div>

          {approaches.map((app, index) => (
            <article
              key={index}
              className={`approach-card ${revealedCount >= index ? "revealed" : ""}`}
            >
              {/* El efecto de explosión sigue guiándose por 'step' para saber dónde ocurrir */}
              {step === index && isExploding && <div className="pixel-explosion" />}

              <div className="approach-num">{app.num}</div>
              <h3 className="approach-title">{app.icon} {app.title}</h3>
              <p className="approach-desc">{app.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// Projects Section (using hook)
interface ProjectsSectionProps {
  projects: ProjectFrontmatter[];
}

function ProjectsSection({ projects }: ProjectsSectionProps) {
  const { ref, isVisible } = useInViewAnimation<HTMLElement>(0.2);

  return (
    <section
      ref={ref}
      id="projects"
      aria-label="Portfolio case studies"
      style={{
        background: "var(--bg-void)",
        padding: "96px 24px",
      }}
    >
      <div className="container-retro">
        {/* Header */}
        <header style={{ textAlign: "center", marginBottom: "64px" }}>
          <span className="retro-badge" style={{ marginBottom: "16px" }}>
            PORTFOLIO
          </span>
          <h2
            style={{
              color: "var(--hyper-purple)",
              marginTop: "24px",
              textShadow: "0 0 15px rgba(157, 0, 255, 0.4)",
            }}
          >
            {">> CASE STUDIES <<"}
          </h2>
          <p
            style={{
              color: "var(--foreground-muted)",
              marginTop: "16px",
              maxWidth: "600px",
              margin: "16px auto 0",
            }}
          >
            REAL-WORLD PROJECTS IN ENTERPRISE ARCHITECTURE AND SECURE SYSTEMS.
          </p>
        </header>

        {/* Projects Grid */}
        <div
          role="list"
          aria-label="Project list"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

import { AboutSection } from "../components/sections/AboutSection";

// ... (existing imports)

// ... (existing components: TypewriterText, HeroSection, ApproachSection, ProjectsSection)

// Main Page
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
