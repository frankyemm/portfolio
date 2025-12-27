"use client";

export function TechMarquee() {
  const techArsenal = [
    // FULL STACK / BACKEND
    { name: "NEXT.JS", color: "var(--neon-cyan)" },
    { name: "REACT", color: "var(--neon-cyan)" },
    { name: "TYPESCRIPT", color: "var(--neon-cyan)" },
    { name: "FASTAPI", color: "var(--neon-cyan)" },
    { name: "SUPABASE", color: "var(--neon-cyan)" },
    { name: "POSTGRESQL", color: "var(--neon-cyan)" },

    // DEVOPS / PERFORMANCE
    { name: "DOCKER", color: "var(--neon-red)" },

    // DATA / BI
    { name: "PYTHON", color: "var(--arcade-yellow)" },
    { name: "POWER BI", color: "var(--arcade-yellow)" },
    { name: "PANDAS", color: "var(--arcade-yellow)" },
    { name: "SCIKIT-LEARN", color: "var(--arcade-yellow)" },

    // AI / MODELS
    { name: "DISTILBERT", color: "var(--neon-purple)" },
    { name: "PYTORCH", color: "var(--neon-red)" },

    // AWS CLOUD
    { name: "AWS S3", color: "var(--aws-orange)" },
    { name: "AWS GLUE", color: "var(--aws-orange)" },
    { name: "AWS ATHENA", color: "var(--aws-orange)" },
    { name: "AWS EC2", color: "var(--aws-orange)" },

    // GCP CLOUD
    { name: "CLOUD RUN", color: "var(--gcp-blue)" },
    { name: "CLOUD FUNCTIONS", color: "var(--gcp-blue)" },
    { name: "CLOUD STORAGE", color: "var(--gcp-blue)" },
    { name: "BIGQUERY", color: "var(--gcp-blue)" },
  ];

  // Duplicamos el array para que el scroll sea infinito y sin saltos
  const scrollingTechs = [...techArsenal, ...techArsenal];

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {scrollingTechs.map((tech, index) => (
          <span 
            key={index} 
            className="tech-item" 
            style={{ color: tech.color }}
          >
            {tech.name}
          </span>
        ))}
      </div>
    </div>
  );
}