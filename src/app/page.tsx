"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ProjectCard } from "@/components/ui/ProjectCard";
import type { ProjectFrontmatter } from "@/lib/markdown";

// Typewriter Effect Component
function TypewriterText({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const indexRef = useRef(0);

  useEffect(() => {
    // Typewriter character-by-character
    const typeInterval = setInterval(() => {
      if (indexRef.current < text.length) {
        setDisplayedText(text.slice(0, indexRef.current + 1));
        indexRef.current++;
      } else {
        clearInterval(typeInterval);
      }
    }, 80); // Mechanical typing speed

    // Cursor blink
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
        style={{
          display: "inline-block",
          width: "16px",
          height: "20px",
          backgroundColor: showCursor ? "var(--gray-light)" : "transparent",
          marginLeft: "4px",
          verticalAlign: "middle",
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
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "var(--blue-petrolium)",
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
            color: "var(--gray-light)",
            marginBottom: "24px",
            lineHeight: 1.8,
            minHeight: "80px",
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
            color: "var(--gray-light)",
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
          SECURITY AND PERFORMANCE ARE NON-NEGOTIABLE.
        </p>

        {/* CTA Button */}
        <button
          onClick={handleScrollClick}
          className="retro-btn"
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
          style={{
            marginTop: "64px",
            color: "var(--teal-dark)",
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

// Approach Section
function ApproachSection() {
  const approaches = [
    {
      num: "01",
      title: "DISCOVERY",
      description:
        'IDENTIFY THE CORE PROBLEM. ASK: "IS REAL-TIME SYNC REQUIRED?"',
    },
    {
      num: "02",
      title: "ARCHITECTURE",
      description: "MAP DATA FLOW. APPLY SOC AND SRP PRINCIPLES.",
    },
    {
      num: "03",
      title: "IMPLEMENTATION",
      description: "BUILD IN SMALL INCREMENTS. TYPESCRIPT + CLEAN CODE.",
    },
    {
      num: "04",
      title: "VERIFICATION",
      description: "TEST EDGE CASES. DOCUMENT THE WHY BEHIND DECISIONS.",
    },
  ];

  return (
    <section
      id="approach"
      style={{
        background: "var(--gray-dark)",
        padding: "96px 24px",
      }}
    >
      <div className="container-retro">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span
            className="retro-badge retro-badge-warning"
            style={{ marginBottom: "16px" }}
          >
            METHODOLOGY
          </span>
          <h2
            style={{
              color: "var(--gray-light)",
              marginTop: "24px",
            }}
          >
            {"// HOW I APPROACH PROBLEMS //"}
          </h2>
        </div>

        {/* Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {approaches.map((approach, index) => (
            <div
              key={approach.num}
              className="retro-card retro-reveal"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: "backwards",
              }}
            >
              <div
                style={{
                  color: "var(--orange-burnt)",
                  marginBottom: "8px",
                }}
              >
                [{approach.num}]
              </div>
              <h3
                style={{
                  color: "var(--gray-light)",
                  marginBottom: "12px",
                }}
              >
                {approach.title}
              </h3>
              <p style={{ color: "var(--gray-light)" }}>{approach.description}</p>
            </div>
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
      style={{
        background: "var(--blue-petrolium)",
        padding: "96px 24px",
      }}
    >
      <div className="container-retro">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span className="retro-badge" style={{ marginBottom: "16px" }}>
            PORTFOLIO
          </span>
          <h2
            style={{
              color: "var(--orange-burnt)",
              marginTop: "24px",
            }}
          >
            {">> CASE STUDIES <<"}
          </h2>
          <p
            style={{
              color: "var(--gray-light)",
              marginTop: "16px",
              maxWidth: "600px",
              margin: "16px auto 0",
            }}
          >
            REAL-WORLD PROJECTS IN ENTERPRISE ARCHITECTURE AND SECURE SYSTEMS.
          </p>
        </div>

        {/* Projects Grid */}
        <div
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
