export function Achievements() {
    const unlockedAchievements = [
        {
            id: "neural_navigator",
            title: "NEURAL NAVIGATOR",
            desc: "Implemented Transformer-based architectures (DistilBERT) and ABSA for deep sentiment intelligence.",
            icon: "🧠",
            rarity: "LEGENDARY",
            color: "var(--neon-cyan)"
        },
        {
            id: "data_oracle",
            title: "DATA ORACLE",
            desc: "Engineered scalable recommendation engines using advanced collaborative filtering techniques.",
            icon: "🔮",
            rarity: "EPIC",
            color: "var(--hyper-purple)"
        },
        {
            id: "hardware_hacker",
            title: "HARDWARE HACKER",
            desc: "Optimized Deep Learning models for Cloud TPU infrastructure and high-performance computing.",
            icon: "⚡",
            rarity: "RARE",
            color: "var(--orange-burnt)"
        },
        {
            id: "fullstack_hero",
            title: "SYSTEM ARCHITECT",
            desc: "Architected end-to-end enterprise ecosystems for mission-critical logistics and inventory tracking.",
            icon: "🏗️",
            rarity: "RARE",
            color: "var(--teal-dark)"
        },
        {
            id: "kpi_architect",
            title: "KPI ARCHITECT",
            desc: "Designed executive Business Intelligence centers with complex DAX measures and real-time data viz.",
            icon: "📊",
            rarity: "EPIC",
            color: "#F2C811"
        }
    ];

    return (
        <div style={{ marginTop: "64px" }}>
            <h3 style={{
                color: "var(--orange-burnt)",
                fontSize: "10px",
                marginBottom: "32px",
                textAlign: "center"
            }}>
                [ UNLOCKED_ACHIEVEMENTS ]
            </h3>

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
                gap: "20px"
            }}>
                {unlockedAchievements.map((achiv) => (
                    <div
                        key={achiv.id}
                        className="achievement-card"
                        style={{ "--accent-color": achiv.color } as any}
                    >
                        <div className="achievement-icon">{achiv.icon}</div>
                        <div>
                            <div className="achievement-rarity">[{achiv.rarity}]</div>
                            <div className="achievement-title">{achiv.title}</div>
                            <div className="achievement-desc">{achiv.desc}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
