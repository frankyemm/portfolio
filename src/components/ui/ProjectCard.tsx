"use client";

import Link from "next/link";
import type { ProjectFrontmatter } from "../../lib/markdown";

interface ProjectCardProps {
    project: ProjectFrontmatter;
    index: number;
    isVisible: boolean;
}

export function ProjectCard({ project, index, isVisible }: ProjectCardProps) {
    return (
        <Link href={`/projects/${project.slug}`} style={{ textDecoration: "none" }}>
            <article
                role="listitem"
                tabIndex={0}
                className={`project-card ${isVisible ? "animate" : ""}`}
                style={{
                    animationDelay: `${index * 0.12}s`,
                }}
            >
                {/* Category & Confidential Badge */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "16px",
                    }}
                >
                    <span
                        style={{
                            color: "var(--hyper-purple)",
                            fontSize: "8px",
                        }}
                    >
                        [{project.category}]
                    </span>
                    {project.confidential && (
                        <span
                            className="retro-badge retro-badge-warning"
                            style={{ fontSize: "6px", padding: "4px 8px" }}
                        >
                            🔒 CLASSIFIED
                        </span>
                    )}
                </div>

                {/* Title */}
                <h3
                    style={{
                        color: "var(--neon-cyan)",
                        marginBottom: "12px",
                        fontSize: "11px",
                        textShadow: "0 0 10px rgba(0, 243, 255, 0.3)",
                    }}
                >
                    {project.title}
                </h3>

                {/* Excerpt */}
                <p
                    style={{
                        color: "var(--foreground-muted)",
                        marginBottom: "24px",
                        lineHeight: 2,
                        fontSize: "9px",
                    }}
                >
                    {project.excerpt}
                </p>

                {/* Tech Stack Tags */}
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "4px",
                        marginBottom: "24px",
                    }}
                >
                    {project.techStack.slice(0, 4).map((tech) => (
                        <span key={tech} className="retro-tag">
                            {tech}
                        </span>
                    ))}
                </div>

                {/* View Link */}
                <div
                    style={{
                        color: "var(--hyper-purple)",
                        fontSize: "10px",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                    }}
                >
                    {">> VIEW CASE STUDY"}
                </div>
            </article>
        </Link>
    );
}
