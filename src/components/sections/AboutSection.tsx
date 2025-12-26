import { Achievements } from "../ui/Achievements";

export function AboutSection() {
    return (
        <section id="about" style={{ padding: "96px 24px", background: "var(--bg-void)" }}>
            <div className="container-retro" style={{ maxWidth: "1000px" }}>

                <h2 style={{ color: "var(--neon-cyan)", marginBottom: "48px", textAlign: "center" }}>
                    [// CHARACTER_DOSSIER //]
                </h2>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "40px",
                    alignItems: "start"
                }}>

                    {/* Columna Izquierda: Historia */}
                    <div className="retro-terminal-box">
                        <p style={{ color: "var(--orange-burnt)", marginBottom: "16px" }}>&gt; INITIALIZING BIOGRAPHY...</p>
                        <p>
                            Based in Medellín, Colombia, I am a <strong>Multi-Class Engineer</strong> bridging the gap between
                            robust Software Architecture and the power of Data Intelligence.
                        </p>
                        <br />
                        <p>
                            Whether I'm architecting secure <strong>Full Stack</strong> ecosystems or training
                            <strong> Deep Learning</strong> models for sentiment analysis and real-time recommendation,
                            my goal is the same: transforming complex noise into elegant, actionable solutions.
                        </p>
                        <br />
                        <p>
                            I close the loop by designing high-impact <strong>Power BI Dashboards</strong>, acting as the "Command Center"
                            for data-driven decision making.
                        </p>
                        <br />
                        <p style={{ color: "var(--hyper-purple)" }}>
                            &gt; STATUS: OPEN TO MISSION-CRITICAL CHALLENGES.
                        </p>
                    </div>

                    {/* Columna Derecha: Stats de RPG */}
                    <div style={{
                        padding: "24px",
                        background: "var(--card-carbon)",
                        border: "4px solid var(--hyper-purple)",
                        boxShadow: "8px 8px 0px var(--blue-petrolium)"
                    }}>
                        <h3 style={{ fontSize: "10px", marginBottom: "20px", color: "var(--white)" }}>[ CHARACTER_STATS ]</h3>

                        <div className="stat-row">
                            <span style={{ fontSize: "8px" }}>FULL_STACK_ARCH</span>
                            <div className="stat-bar"><div className="stat-fill" style={{ width: "90%" }}></div></div>
                        </div>

                        <div className="stat-row">
                            <span style={{ fontSize: "8px" }}>DATA_SCIENCE_ML</span>
                            <div className="stat-bar"><div className="stat-fill" style={{ width: "85%" }}></div></div>
                        </div>

                        <div className="stat-row">
                            <span style={{ fontSize: "8px" }}>DATA_ENGINEERING</span>
                            <div className="stat-bar"><div className="stat-fill" style={{ width: "80%" }}></div></div>
                        </div>

                        <div className="stat-row">
                            <span style={{ fontSize: "8px" }}>CYBER_SECURITY</span>
                            <div className="stat-bar"><div className="stat-fill" style={{ width: "75%" }}></div></div>
                        </div>

                        <div className="stat-row">
                            <span style={{ fontSize: "8px" }}>BI_VISUALIZATION (Power BI)</span>
                            <div className="stat-bar">
                                <div className="stat-fill" style={{ width: "95%", background: "#F2C811", boxShadow: "0 0 10px #F2C811" }}></div>
                            </div>
                        </div>

                        <div style={{ marginTop: "24px", fontSize: "8px", color: "var(--foreground-muted)" }}>
                            <p>LOCATION: MEDELLIN_CO</p>
                            <p>EXP: 2025.v2</p>
                            <p>GUILD: INDEPENDENT_CONTRACTOR</p>
                        </div>
                    </div>

                </div>

                <Achievements />
            </div>
        </section>
    );
}
