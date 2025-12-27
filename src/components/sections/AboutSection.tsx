"use client";

import { useEffect, useState } from "react";
import { Achievements } from "../ui/Achievements";
import { TechMarquee } from "../ui/TechMarquee";

export function AboutSection() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section 
            id="about" 
            style={{ 
                padding: "96px 24px", 
                background: "var(--bg-void)",
                position: "relative" 
            }}
        >
            <div className="container-retro" style={{ maxWidth: "1000px" }}>
                <h2 style={{ 
                    color: "var(--neon-cyan)", 
                    marginBottom: "48px", 
                    textAlign: "center",
                    textShadow: "0 0 15px rgba(0, 243, 255, 0.4)"
                }}>
                    [// CHARACTER_DOSSIER //]
                </h2>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                    gap: "40px",
                    alignItems: "start"
                }}>

                    {/* Columna Izquierda: Historia */}
                    <div 
                        className="retro-terminal-box" 
                        style={{
                            padding: "24px",
                            border: "4px solid var(--teal-dark)",
                            background: "rgba(11, 14, 17, 0.9)",
                            position: "relative",
                            fontSize: "12px",
                            lineHeight: "1.8",
                            boxShadow: "inset 0 0 20px rgba(0, 255, 170, 0.05)"
                        }}
                    >
                        <p style={{ color: "var(--orange-burnt)", marginBottom: "16px", fontWeight: "bold" }}>
                            {"> INITIALIZING BIOGRAPHY..."}
                        </p>
                        <p>
                            Based in Medellín, Colombia, I am a <strong>Multi-Class Engineer</strong> bridging the gap between
                            robust Software Architecture and the power of Data Intelligence.
                        </p>
                        <br />
                        <p>
                            I specialize in the <strong>full data lifecycle</strong>: from architecting high-performance ETL pipelines 
                            and secure Full Stack ecosystems to training <strong>Deep Learning</strong> models.
                        </p>
                        <br />
                        <p>
                            I close the loop by designing high-impact <strong>Power BI Dashboards</strong>, 
                            acting as the mission-critical "Command Center" for data-driven decision making.
                        </p>
                        <br />
                        <p style={{ color: "var(--hype-purple)", fontWeight: "bold" }}>
                            {"> STATUS: READY FOR MISSION-CRITICAL CHALLENGES."}
                        </p>
                        
                        {/* El efecto scanline ahora usa una clase de CSS pura */}
                        <div className="scanline-effect" />
                    </div>

                    {/* Columna Derecha: Stats */}
                    <div style={{
                        padding: "24px",
                        background: "var(--card-carbon)",
                        border: "4px solid var(--hyper-purple)",
                        boxShadow: "8px 8px 0px var(--blue-petrolium)",
                        position: "relative"
                    }}>
                        <h3 style={{ 
                            fontSize: "10px", 
                            marginBottom: "24px", 
                            color: "var(--white)",
                            letterSpacing: "1px"
                        }}>
                            [ CHARACTER_STATS ]
                        </h3>

                        {[
                            { label: "FULL_STACK_ARCH", width: "90%", color: "var(--neon-cyan)" },
                            { label: "DATA_SCIENCE_ML", width: "85%", color: "var(--neon-cyan)" },
                            { label: "DATA_ENGINEERING", width: "80%", color: "var(--neon-cyan)" },
                            { label: "CYBER_SECURITY", width: "75%", color: "var(--neon-cyan)" },
                        ].map((stat) => (
                            <div key={stat.label} className="stat-row" style={{ marginBottom: "16px" }}>
                                <div style={{ fontSize: "8px", marginBottom: "6px", color: "var(--gray-light)" }}>
                                    {stat.label}
                                </div>
                                <div style={{ 
                                    height: "12px", 
                                    background: "var(--bg-void)", 
                                    border: "2px solid var(--gray-dark)" 
                                }}>
                                    <div 
                                        className="stat-fill-animate"
                                        style={{ 
                                            width: mounted ? stat.width : "0%", 
                                            height: "100%", 
                                            background: stat.color,
                                            boxShadow: `0 0 10px ${stat.color}66`
                                        }} 
                                    />
                                </div>
                            </div>
                        ))}

                        <div className="stat-row" style={{ marginBottom: "16px" }}>
                            <div style={{ fontSize: "8px", marginBottom: "6px", color: "var(--gray-light)" }}>
                                BI_VISUALIZATION (Power BI)
                            </div>
                            <div style={{ 
                                height: "12px", 
                                background: "var(--bg-void)", 
                                border: "2px solid var(--gray-dark)" 
                            }}>
                                <div 
                                    className="stat-fill-animate"
                                    style={{ 
                                        width: mounted ? "95%" : "0%", 
                                        height: "100%", 
                                        background: "#F2C811",
                                        boxShadow: "0 0 15px rgba(242, 200, 17, 0.4)" 
                                    }} 
                                />
                            </div>
                        </div>

                        <div style={{ 
                            marginTop: "32px", 
                            fontSize: "8px", 
                            color: "var(--foreground-muted)",
                            borderTop: "2px solid var(--gray-dark)",
                            paddingTop: "16px",
                            lineHeight: "2"
                        }}>
                            <p>{"> LOCATION: MEDELLIN_CO"}</p>
                            <p>{"> EXP_LEVEL: 2025.PRO"}</p>
                            <p>{"> GUILD: INDEPENDENT_CONTRACTOR"}</p>
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: "80px" }}>
                    <Achievements />
                </div>
                <div style={{ marginTop: "80px" }}>
                    <p style={{ 
                        textAlign: 'center', 
                        fontSize: '8px', 
                        color: 'var(--teal-dark)', 
                        marginBottom: '16px',
                        fontFamily: 'var(--font-pixel)' 
                    }}>
                        [ CURRENT_TECH_STACK ]
                    </p>
                    <TechMarquee />
                </div>
            </div>
        </section>
    );
}