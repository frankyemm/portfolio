<script>
  import { inview } from '../../lib/inview.js';
  
  let step = $state(-1);
  let isExploding = $state(false);
  let revealedCount = $state(-1);
  let hasStarted = $state(false);

  const approaches = [
    { num: "01", title: "DATA DISCOVERY", description: 'ANALYZING THE "DATA WHY".', icon: "🔍" },
    { num: "02", title: "ARCHITECTURE", description: "MAPPING ETL PIPELINES.", icon: "🏗️" },
    { num: "03", title: "IMPLEMENTATION", description: "BUILDING AI MODELS.", icon: "⚡" },
    { num: "04", title: "KPI MONITORING", description: "POWER BI DASHBOARDS.", icon: "📊" },
  ];

  async function startSequence() {
    if (hasStarted) return;
    hasStarted = true;
    
    for (let i = 0; i < 4; i++) {
      step = i;
      await new Promise(r => setTimeout(r, 700));
      isExploding = true;
      await new Promise(r => setTimeout(r, 400));
      isExploding = false;
      revealedCount = i;
      await new Promise(r => setTimeout(r, 200));
    }
    step = 4;
  }
</script>

<section 
  id="approach" 
  class="approach-section"
  use:inview={{ threshold: 0.2 }}
  oninview={startSequence}
>
  <div class="container-retro">
    <header class="approach-header">
      <h2 class="approach-section-title">// METHODOLOGY //</h2>
    </header>

    <div class="approach-grid">
      <!-- Spaceship -->
      <div class="retro-spaceship ship-pos-{step} {step >= 0 && step < 4 ? 'active' : ''}">
        <img src="/space-ship.svg" style="width: 40px; filter: hue-rotate(90deg) brightness(1.5);" alt="ship" />
      </div>

      {#each approaches as app, index}
        <article 
          class="approach-card {revealedCount >= index ? 'revealed' : ''}"
          style="z-index: {revealedCount === index ? 20 : 1};"
        >
          {#if step === index && isExploding}
            <div class="pixel-explosion"></div>
          {/if}

          <div class="approach-num">{app.num}</div>
          <h3 class="approach-title">{app.icon} {app.title}</h3>
          <p class="approach-desc">{app.description}</p>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .approach-section {
    background: var(--card-carbon);
    padding: 80px 16px;
    overflow: hidden;
  }

  .approach-header {
    text-align: center;
    margin-bottom: 48px;
  }

  .approach-section-title {
    color: var(--neon-cyan);
    font-size: clamp(18px, 5vw, 28px);
    text-shadow: 0 0 10px rgba(0, 243, 255, 0.4);
  }
</style>
