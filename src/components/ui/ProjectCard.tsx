"use client";

import Link from "next/link";
import type { ProjectFrontmatter } from "@/lib/markdown";

interface ProjectCardProps {
    project: ProjectFrontmatter;
    index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
    return (
        <Link href={`/projects/${project.slug}`} style={{ textDecoration: "none" }}>
            <article
                className="retro-card retro-reveal"
                style={{
                    animationDelay: `${index * 0.15}s`,
                    animationFillMode: "backwards",
                    cursor: "pointer",
                    height: "100%",
                }}
                onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.background = "var(--teal-dark)";
                    el.style.borderColor = "var(--gray-light)";
                    el.style.transform = "translate(-4px, -4px)";
                    el.style.boxShadow = "12px 12px 0px var(--blue-petrolium)";
                }}
                onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.background = "var(--gray-dark)";
                    el.style.borderColor = "var(--orange-burnt)";
                    el.style.transform = "translate(0, 0)";
                    el.style.boxShadow = "8px 8px 0px var(--blue-petrolium)";
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
                            color: "var(--teal-dark)",
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
                        color: "var(--gray-light)",
                        marginBottom: "12px",
                        fontSize: "12px",
                    }}
                >
                    {project.title}
                </h3>

                {/* Excerpt */}
                <p
                    style={{
                        color: "var(--gray-light)",
                        marginBottom: "24px",
                        lineHeight: 2,
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
                        color: "var(--orange-burnt)",
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
