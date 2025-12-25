"use client";

export function Footer() {
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
                        <h3
                            style={{
                                color: "var(--gray-light)",
                                marginBottom: "16px",
                                fontSize: "12px",
                            }}
                        >
                            {">> LET'S BUILD <<"}
                        </h3>
                        <p
                            style={{
                                color: "var(--gray-light)",
                                marginBottom: "24px",
                            }}
                        >
                            OPEN TO NEW PROJECTS AND CREATIVE IDEAS.
                            <br />
                            DROP A MESSAGE!
                        </p>
                        <a
                            href="mailto:contact@example.com"
                            style={{
                                color: "var(--orange-burnt)",
                                textDecoration: "none",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "8px",
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
                            CONTACT@EXAMPLE.COM {">"}
                        </a>
                    </div>

                    {/* Right side - Social Links */}
                    <div style={{ textAlign: "right" }}>
                        <h3
                            style={{
                                color: "var(--teal-dark)",
                                marginBottom: "16px",
                                fontSize: "10px",
                            }}
                        >
                            [CONNECT]
                        </h3>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                gap: "8px",
                            }}
                        >
                            {["GITHUB", "LINKEDIN", "TWITTER"].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    style={{
                                        display: "inline-block",
                                        padding: "8px 12px",
                                        background: "var(--teal-dark)",
                                        color: "var(--white)",
                                        textDecoration: "none",
                                        fontSize: "8px",
                                        border: "2px solid var(--gray-light)",
                                        boxShadow: "2px 2px 0px var(--blue-petrolium)",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = "var(--orange-burnt)";
                                        e.currentTarget.style.transform = "translate(2px, 2px)";
                                        e.currentTarget.style.boxShadow = "none";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = "var(--teal-dark)";
                                        e.currentTarget.style.transform = "translate(0, 0)";
                                        e.currentTarget.style.boxShadow =
                                            "2px 2px 0px var(--blue-petrolium)";
                                    }}
                                >
                                    {social}
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
