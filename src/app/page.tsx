"use client";

import { useState, useEffect, useRef } from "react";
import { ProjectCard } from "../components/ui/ProjectCard";
import type { ProjectFrontmatter } from "../lib/markdown";

// Typewriter Effect Component
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
    <span>
      {displayedText}
      <span
        aria-hidden="true"
        style={{
          display: "inline-block",
          width: "16px",
          height: "20px",
          backgroundColor: showCursor ? "var(--neon-cyan)" : "transparent",
          marginLeft: "4px",
          verticalAlign: "middle",
          boxShadow: showCursor ? "0 0 10px var(--neon-cyan)" : "none",
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
      projectsSection.scrollIntoView();
    }
  };

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "var(--bg-void)",
        padding: "48px 24px",
      }}
    >
      <div className="container-retro text-center">
        {/* Badge */}
        <div
          className="retro-badge"
          style={{
            marginBottom: "32px",
            opacity: mounted ? 1 : 0,
            animation: mounted ? "retro-fade-in 0.2s steps(3) forwards" : "none",
          }}
        >
          {"< FULL STACK ENGINEER />"}
        </div>

        {/* Typewriter Headline */}
        <h1
          style={{
            fontSize: "clamp(12px, 3vw, 20px)",
            color: "var(--neon-cyan)",
            marginBottom: "24px",
            lineHeight: 1.8,
            minHeight: "80px",
            textShadow: "0 0 20px rgba(0, 243, 255, 0.5)",
          }}
        >
          {mounted ? (
            <TypewriterText text="ARCHITECTING SECURE DIGITAL ECOSYSTEMS" />
          ) : (
            "ARCHITECTING SECURE DIGITAL ECOSYSTEMS"
          )}
        </h1>

        {/* Subtitle */}
        <p
          style={{
            color: "var(--foreground-muted)",
            marginBottom: "48px",
            maxWidth: "600px",
            margin: "0 auto 48px",
            opacity: mounted ? 1 : 0,
            animation: mounted
              ? "retro-fade-in 0.3s steps(4) forwards 1.5s"
              : "none",
            animationFillMode: "backwards",
          }}
        >
          TRANSFORMING COMPLEX CHALLENGES INTO ELEGANT SOLUTIONS.
          <br />
          <span style={{ color: "var(--hyper-purple)" }}>
            SECURITY AND PERFORMANCE ARE NON-NEGOTIABLE.
          </span>
        </p>

        {/* CTA Button */}
        <button
          onClick={handleScrollClick}
          className="retro-btn"
          aria-label="View case studies"
          style={{
            opacity: mounted ? 1 : 0,
            animation: mounted
              ? "retro-fade-in 0.3s steps(4) forwards 2s"
              : "none",
            animationFillMode: "backwards",
          }}
        >
          {">> VIEW CASE STUDIES <<"}
        </button>

        {/* Scroll indicator */}
        <div
          aria-hidden="true"
          style={{
            marginTop: "64px",
            color: "var(--hyper-purple)",
            opacity: mounted ? 1 : 0,
            animation: mounted
              ? "retro-blink 1s steps(1) infinite 2.5s"
              : "none",
          }}
        >
          ▼ SCROLL DOWN ▼
        </div>
      </div>
    </section>
  );
}

// Approach Section with 2x2 Grid and 8-bit Animations
function ApproachSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const approaches = [
    {
      num: "01",
      title: "DISCOVERY",
      description: 'IDENTIFY THE CORE PROBLEM. ASK: "IS REAL-TIME SYNC REQUIRED?"',
      icon: "🔍",
    },
    {
      num: "02",
      title: "ARCHITECTURE",
      description: "MAP DATA FLOW. APPLY SOC AND SRP PRINCIPLES.",
      icon: "🏗️",
    },
    {
      num: "03",
      title: "IMPLEMENTATION",
      description: "BUILD IN SMALL INCREMENTS. TYPESCRIPT + CLEAN CODE.",
      icon: "⚡",
    },
    {
      num: "04",
      title: "VERIFICATION",
      description: "TEST EDGE CASES. DOCUMENT THE WHY BEHIND DECISIONS.",
      icon: "✓",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="approach"
      aria-label="Development methodology"
      style={{
        background: "var(--card-carbon)",
        padding: "96px 24px",
      }}
    >
      <div className="container-retro">
        {/* Header */}
        <header style={{ textAlign: "center", marginBottom: "64px" }}>
          <span
            className="retro-badge retro-badge-warning"
            style={{ marginBottom: "16px" }}
          >
            METHODOLOGY
          </span>
          <h2
            style={{
              color: "var(--neon-cyan)",
              marginTop: "24px",
              textShadow: "0 0 15px rgba(0, 243, 255, 0.4)",
            }}
          >
            {"// HOW I APPROACH PROBLEMS //"}
          </h2>
        </header>

        {/* 2x2 Grid */}
        <div
          className="approach-grid"
          role="list"
          aria-label="Four phases of development"
        >
          {approaches.map((approach, index) => (
            <article
              key={approach.num}
              role="listitem"
              className={`approach-card ${isVisible ? "animate" : ""}`}
              style={{
                animationDelay: `${index * 0.12}s`,
              }}
              tabIndex={0}
            >
              {/* Number Badge */}
              <div className="approach-num" aria-hidden="true">
                {approach.num}
              </div>

              {/* Title */}
              <h3 className="approach-title">
                <span style={{ marginRight: "8px" }}>{approach.icon}</span>
                {approach.title}
              </h3>

              {/* Description */}
              <p className="approach-desc">{approach.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// Projects Section
interface ProjectsSectionProps {
  projects: ProjectFrontmatter[];
}

function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section
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
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Main Page
export default function HomePage() {
  const projects: ProjectFrontmatter[] = [
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
      <ApproachSection />
      <ProjectsSection projects={projects} />
    </>
  );
}
