<script>
  const technologies = [
    { name: "PYTHON", color: "var(--neon-cyan)" },
    { name: "JAVASCRIPT", color: "var(--arcade-yellow)" },
    { name: "REACT", color: "var(--neon-cyan)" },
    { name: "NEXT.JS", color: "var(--white)" },
    { name: "SVELTE", color: "var(--neon-red)" },
    { name: "POSTGRESQL", color: "var(--retro-blue)" },
    { name: "TENSORFLOW", color: "var(--neon-pink)" },
    { name: "POWER BI", color: "var(--power-bi-yellow)" },
    { name: "AWS", color: "var(--aws-orange)", className: "aws" },
    { name: "GCP", color: "var(--gcp-blue)", className: "gcp" },
    { name: "DOCKER", color: "var(--retro-blue)" },
    { name: "SUPABASE", color: "var(--neon-green)" },
  ];
</script>

<div class="marquee-container">
  <div class="marquee-content">
    {#each technologies as tech}
      <span class="tech-item {tech.className || ''}" style="color: {tech.color}">
        {tech.name}
      </span>
    {/each}
  </div>
  <div class="marquee-content" aria-hidden="true">
    {#each technologies as tech}
      <span class="tech-item {tech.className || ''}" style="color: {tech.color}">
        {tech.name}
      </span>
    {/each}
  </div>
</div>
