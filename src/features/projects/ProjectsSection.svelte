<script>
  import { inview } from '../../lib/inview.js';
  import ProjectCard from './ProjectCard.svelte';
  
  let { projects = [] } = $props();
  let isVisible = $state(false);

  function handleInView() {
    isVisible = true;
  }
</script>

<section 
  id="projects" 
  class="projects-section"
  use:inview={{ threshold: 0.1 }}
  oninview={handleInView}
>
  <div class="container-retro">
    <header class="projects-header">
      <h2 class="projects-title">&gt;&gt; CASE STUDIES &lt;&lt;</h2>
    </header>

    <div class="projects-grid">
      {#each projects as project, index}
        <ProjectCard {project} {index} {isVisible} />
      {/each}
    </div>
  </div>
</section>

<style>
  .projects-section {
    background: var(--bg-void);
    padding: 80px 16px;
  }

  .projects-header {
    text-align: center;
    margin-bottom: 48px;
  }

  .projects-title {
    color: var(--hyper-purple);
    font-size: clamp(18px, 5vw, 28px);
    text-shadow: 0 0 10px rgba(157, 0, 255, 0.4);
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
    gap: 24px;
  }
</style>
