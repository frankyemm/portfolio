"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/#projects", label: "PROJECTS" },
    { href: "/#approach", label: "APPROACH" },
];

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
            }}
        >
            <nav className="retro-nav">
                <div
                    className="container-retro"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    {/* Logo */}
                    <Link
                        href="/"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            color: "var(--gray-light)",
                            textDecoration: "none",
                        }}
                    >
                        <span
                            style={{
                                width: "24px",
                                height: "24px",
                                background: "var(--orange-burnt)",
                                border: "2px solid var(--gray-light)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "10px",
                                color: "var(--white)",
                            }}
                        >
                            F
                        </span>
                        <span style={{ fontSize: "10px" }}>PORTFOLIO</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0",
                        }}
                        className="hidden md:flex"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                style={{
                                    color: "var(--gray-light)",
                                    textDecoration: "none",
                                    padding: "8px 16px",
                                    fontSize: "10px",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = "var(--orange-burnt)";
                                    e.currentTarget.style.color = "var(--white)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = "transparent";
                                    e.currentTarget.style.color = "var(--gray-light)";
                                }}
                            >
                                [{link.label}]
                            </Link>
                        ))}
                    </div>

                    {/* Contact Button */}
                    <a
                        href="mailto:contact@example.com"
                        className="retro-btn hidden md:inline-block"
                        style={{
                            padding: "8px 16px",
                            fontSize: "8px",
                        }}
                    >
                        CONTACT
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden"
                        style={{
                            padding: "8px",
                            color: "var(--gray-light)",
                            background: "transparent",
                            border: "2px solid var(--orange-burnt)",
                            cursor: "pointer",
                            fontSize: "10px",
                        }}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? "[X]" : "[=]"}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div
                        className="md:hidden"
                        style={{
                            borderTop: "4px solid var(--orange-burnt)",
                            padding: "16px",
                            background: "var(--gray-dark)",
                        }}
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                style={{
                                    display: "block",
                                    color: "var(--gray-light)",
                                    textDecoration: "none",
                                    padding: "12px 0",
                                    borderBottom: "2px solid var(--teal-dark)",
                                    fontSize: "10px",
                                }}
                            >
                                {">"} {link.label}
                            </Link>
                        ))}
                        <a
                            href="mailto:contact@example.com"
                            onClick={() => setIsOpen(false)}
                            className="retro-btn"
                            style={{
                                display: "inline-block",
                                marginTop: "16px",
                                fontSize: "8px",
                                padding: "8px 16px",
                            }}
                        >
                            CONTACT
                        </a>
                    </div>
                )}
            </nav>
        </header>
    );
}
