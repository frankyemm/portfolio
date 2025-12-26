"use client";

import Image from "next/image"; // Si usas Next.js

export function Footer() {
  const socials = [
    { name: "GITHUB", url: "https://github.com/frankyemm", icon: "../logos/Github_white.svg" },
    { name: "LINKEDIN", url: "https://www.linkedin.com/in/franky-cardona-1927ae/", icon: "../logos/LinkedIN_white.svg" },
  ];

  return (
    <footer
      style={{
        background: "var(--gray-dark)",
        borderTop: "4px solid var(--orange-burnt)",
        padding: "48px 24px",
      }}
    >
      <div className="container-retro">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "48px",
          }}
        >
          {/* Left side */}
          <div>
            <h3 style={{ color: "var(--gray-light)", marginBottom: "16px", fontSize: "12px" }}>
              {">> LET'S BUILD <<"}
            </h3>
            <p style={{ color: "var(--gray-light)", marginBottom: "24px" }}>
              OPEN TO NEW PROJECTS AND CREATIVE IDEAS.<br />
              DROP A MESSAGE!
            </p>
            <a
              href="mailto:frankycardona1927@gmail.com"
              style={{
                color: "var(--orange-burnt)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "10px",
                transition: "all 0.1s steps(1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--orange-burnt)";
                e.currentTarget.style.color = "var(--white)";
                e.currentTarget.style.padding = "4px 8px";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "var(--orange-burnt)";
                e.currentTarget.style.padding = "0";
              }}
            >
              frankycardona1927@gmail.com {">"}
            </a>
          </div>

          {/* Right side - Social Links */}
          <div style={{ textAlign: "right" }}>
            <h3 style={{ color: "var(--teal-dark)", marginBottom: "16px", fontSize: "10px" }}>
              [CONNECT]
            </h3>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px" }}>
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "8px 12px",
                    background: "var(--teal-dark)",
                    color: "var(--white)",
                    textDecoration: "none",
                    fontSize: "8px",
                    border: "2px solid var(--gray-light)",
                    boxShadow: "3px 3px 0px var(--blue-petrolium)",
                    transition: "all 0.1s steps(1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--orange-burnt)";
                    e.currentTarget.style.transform = "translate(2px, 2px)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "var(--teal-dark)";
                    e.currentTarget.style.transform = "translate(0, 0)";
                    e.currentTarget.style.boxShadow = "3px 3px 0px var(--blue-petrolium)";
                  }}
                >
                  {social.icon && (
                    <img
                      src={social.icon}
                      alt=""
                      style={{
                        width: "16px",
                        height: "16px",
                        imageRendering: "pixelated", // Clave para mantener el look 8-bit
                        filter: "brightness(0) invert(1)", // Convierte el logo negro a blanco
                      }}
                    />
                  )}
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            marginTop: "48px",
            paddingTop: "24px",
            borderTop: "4px solid var(--teal-dark)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
            color: "var(--gray-light)",
            fontSize: "8px",
          }}
        >
          <p>© {new Date().getFullYear()} PORTFOLIO. ALL RIGHTS RESERVED.</p>
          <p>{"<CRAFTED WITH PIXELS AND COFFEE />"}</p>
        </div>
      </div>
    </footer>
  );
}