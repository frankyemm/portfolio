"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
    { id: "hero", label: "HOME", href: "/" },
    { id: "projects", label: "PROJECTS", href: "/#projects" },
    { id: "approach", label: "APPROACH", href: "/#approach" },
];

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    // Función genérica para scroll
    const handleScroll = (e: React.MouseEvent, id: string) => {
        // Solo prevenimos el comportamiento por defecto si estamos en la Home
        if (window.location.pathname === "/") {
            e.preventDefault();
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
                setIsOpen(false); // Cierra el menú móvil si está abierto
            }
        }
    };

    return (
        <header
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100, // Aumentado para estar sobre todo
            }}
        >
            <nav className="retro-nav" style={{ background: "var(--bg-void)", borderBottom: "4px solid var(--teal-dark)" }}>
                <div
                    className="container-retro"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "12px 24px"
                    }}
                >
                    {/* Logo */}
                    <Link
                        href="/"
                        onClick={(e) => handleScroll(e, "hero")}
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
                                boxShadow: "2px 2px 0 var(--blue-petrolium)"
                            }}
                        >
                            F
                        </span>
                        <span style={{ fontSize: "10px", letterSpacing: "1px" }}>PORTFOLIO</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div
                        style={{ display: "flex", alignItems: "center" }}
                        className="hidden md:flex"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.id}
                                href={link.href}
                                onClick={(e) => handleScroll(e, link.id)}
                                className="nav-link-retro"
                                style={{
                                    color: "var(--gray-light)",
                                    textDecoration: "none",
                                    padding: "8px 16px",
                                    fontSize: "10px",
                                    transition: "all 0.1s steps(1)"
                                }}
                            >
                                [{link.label}]
                            </Link>
                        ))}
                    </div>

                    {/* Contact Button */}
                    <a
                        href="mailto:frankycardona1927@gmail.com"
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
                            padding: "4px 8px",
                            color: "var(--neon-cyan)",
                            background: "transparent",
                            border: "2px solid var(--neon-cyan)",
                            cursor: "pointer",
                            fontSize: "10px",
                            boxShadow: "2px 2px 0 var(--blue-petrolium)"
                        }}
                    >
                        {isOpen ? "[X]" : "[MENU]"}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div
                        className="md:hidden"
                        style={{
                            borderTop: "4px solid var(--orange-burnt)",
                            padding: "24px",
                            background: "var(--gray-dark)",
                            textAlign: "center"
                        }}
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.id}
                                href={link.href}
                                onClick={(e) => handleScroll(e, link.id)}
                                style={{
                                    display: "block",
                                    color: "var(--gray-light)",
                                    textDecoration: "none",
                                    padding: "16px 0",
                                    borderBottom: "2px solid var(--teal-dark)",
                                    fontSize: "12px",
                                }}
                            >
                                {">"} {link.label}
                            </Link>
                        ))}
                        <a
                            href="mailto:frankycardona1927@gmail.com"
                            className="retro-btn"
                            style={{
                                display: "inline-block",
                                marginTop: "24px",
                                fontSize: "10px",
                                padding: "12px 24px",
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