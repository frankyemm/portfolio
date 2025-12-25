"use client";

import Link from "next/link";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { useEffect, useState } from "react";
import { mdxComponents } from "@/lib/mdx-components";
import type { ProjectFrontmatter } from "@/lib/markdown";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";

interface ProjectPageClientProps {
    frontmatter: ProjectFrontmatter;
    content: string;
}

export function ProjectPageClient({
    frontmatter,
    content,
}: ProjectPageClientProps) {
    const [mdxSource, setMdxSource] = useState<MDXRemoteSerializeResult | null>(
        null
    );
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function serializeContent() {
            const serialized = await serialize(content, {
                parseFrontmatter: false,
            });
            setMdxSource(serialized);
            setIsLoading(false);
        }
        serializeContent();
    }, [content]);

    return (
        <article
            style={{
                paddingTop: "120px",
                paddingBottom: "64px",
                background: "var(--blue-petrolium)",
                minHeight: "100vh",
            }}
        >
            <div className="container-retro" style={{ maxWidth: "800px" }}>
                {/* Back button */}
                <div style={{ marginBottom: "32px" }}>
                    <Link
                        href="/#projects"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            color: "var(--gray-light)",
                            textDecoration: "none",
                            padding: "8px 16px",
                            border: "2px solid var(--teal-dark)",
                            fontSize: "10px",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = "var(--teal-dark)";
                            e.currentTarget.style.borderColor = "var(--orange-burnt)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                            e.currentTarget.style.borderColor = "var(--teal-dark)";
                        }}
                    >
                        {"<< BACK TO PROJECTS"}
                    </Link>
                </div>

                {/* Header */}
                <header style={{ marginBottom: "48px" }}>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "16px",
                            marginBottom: "24px",
                            flexWrap: "wrap",
                        }}
                    >
                        <span
                            style={{
                                color: "var(--teal-dark)",
                                fontSize: "10px",
                            }}
                        >
                            [{frontmatter.category}]
                        </span>
                        {frontmatter.confidential && (
                            <span
                                style={{
                                    display: "inline-block",
                                    padding: "4px 8px",
                                    background: "var(--orange-burnt)",
                                    color: "var(--white)",
                                    fontSize: "8px",
                                    border: "2px solid var(--gray-light)",
                                }}
                            >
                                🔒 CLASSIFIED
                            </span>
                        )}
                    </div>

                    <h1
                        style={{
                            fontSize: "clamp(12px, 3vw, 18px)",
                            color: "var(--gray-light)",
                            marginBottom: "24px",
                            lineHeight: 1.8,
                            textTransform: "uppercase",
                        }}
                    >
                        {frontmatter.title}
                    </h1>

                    <p
                        style={{
                            color: "var(--gray-light)",
                            marginBottom: "24px",
                            lineHeight: 2,
                        }}
                    >
                        {frontmatter.excerpt}
                    </p>

                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "8px",
                        }}
                    >
                        {frontmatter.techStack.map((tech) => (
                            <span key={tech} className="retro-tag">
                                {tech}
                            </span>
                        ))}
                    </div>
                </header>

                {/* Divider */}
                <hr
                    style={{
                        border: "none",
                        height: "4px",
                        background: "var(--orange-burnt)",
                        marginBottom: "48px",
                    }}
                />

                {/* Content */}
                <div className="prose-retro">
                    {isLoading ? (
                        <div
                            style={{
                                textAlign: "center",
                                padding: "64px 0",
                            }}
                        >
                            <div
                                style={{
                                    fontSize: "12px",
                                    color: "var(--orange-burnt)",
                                    animation: "retro-blink 0.5s steps(1) infinite",
                                }}
                            >
                                LOADING...
                            </div>
                        </div>
                    ) : mdxSource ? (
                        <MDXRemote {...mdxSource} components={mdxComponents} />
                    ) : (
                        <p style={{ color: "var(--orange-burnt)" }}>
                            ERROR: FAILED TO LOAD CONTENT.
                        </p>
                    )}
                </div>

                {/* Bottom navigation */}
                <div
                    style={{
                        marginTop: "64px",
                        paddingTop: "32px",
                        borderTop: "4px solid var(--teal-dark)",
                    }}
                >
                    <Link
                        href="/#projects"
                        className="retro-btn"
                        style={{
                            fontSize: "10px",
                            display: "inline-block",
                        }}
                    >
                        {"<< ALL PROJECTS"}
                    </Link>
                </div>
            </div>
        </article>
    );
}
