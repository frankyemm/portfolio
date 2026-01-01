<script>
  let { project, index = 0, isVisible = false } = $props();
</script>

<a href="/projects/{project.slug}" class="project-card-link">
  <article
    role="listitem"
    tabindex="0"
    class="project-card {isVisible ? 'animate' : ''}"
    style="animation-delay: {index *
      0.12}s; view-transition-name: project-title-{project.slug};"
  >
    <!-- Category & Confidential Badge -->
    <div class="card-header">
      <span class="category">[{project.category}]</span>
      {#if project.confidential}
        <span class="retro-badge retro-badge-warning confidential-badge">
          🔒 CLASSIFIED
        </span>
      {/if}
    </div>

    <!-- Title -->
    <h3 class="card-title">{project.title}</h3>

    <!-- Excerpt -->
    <p class="card-excerpt">{project.excerpt}</p>

    <!-- Tech Stack Tags -->
    <div class="tech-stack">
      {#each project.techStack.slice(0, 4) as tech}
        <span class="retro-tag">{tech}</span>
      {/each}
    </div>

    <!-- View Link -->
    <div class="card-cta">&gt;&gt; VIEW CASE STUDY</div>
  </article>
</a>

<style>
  .project-card-link {
    text-decoration: none;
    color: inherit;
    display: block;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  .category {
    color: var(--hyper-purple);
    font-size: 8px;
  }

  .confidential-badge {
    font-size: 6px;
    padding: 4px 8px;
  }

  .card-title {
    color: var(--neon-cyan);
    margin-bottom: 12px;
    font-size: 11px;
    text-shadow: 0 0 10px rgba(0, 243, 255, 0.3);
  }

  .card-excerpt {
    color: var(--foreground-muted);
    margin-bottom: 24px;
    line-height: 2;
    font-size: 9px;
  }

  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    margin-bottom: 24px;
  }

  .card-cta {
    color: var(--hyper-purple);
    font-size: 10px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
</style>
