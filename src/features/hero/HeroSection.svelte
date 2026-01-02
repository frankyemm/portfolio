<script>
  import TypewriterText from "./TypewriterText.svelte";

  let mounted = $state(false);

  $effect(() => {
    mounted = true;
  });

  function handleScrollClick() {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  }
</script>

<section id="hero" class="hero-section">
  <div class="container-retro hero-content">
    <div
      class="retro-spaceship"
      style="position: absolute; top: 10%; right: 10%; opacity: 0.2; pointer-events: none;"
    >
      <img src="/space-ship.svg" width="40" height="40" alt="" />
    </div>
    <!-- Badge -->
    <div
      class="retro-badge hero-badge"
      style="opacity: {mounted ? 1 : 0}; animation: {mounted
        ? 'retro-fade-in 0.2s steps(3) forwards'
        : 'none'};"
    >
      &lt; FULL STACK ENGINEER // DATA ARCHITECT /&gt;
    </div>

    <!-- Headline -->
    <h1 class="hero-headline">
      {#if mounted}
        <TypewriterText text="ARCHITECTING SECURE DIGITAL ECOSYSTEMS" />
      {:else}
        ARCHITECTING...
      {/if}
    </h1>

    <!-- Subtitle -->
    <p
      class="hero-subtitle"
      style="opacity: {mounted ? 1 : 0}; animation: {mounted
        ? 'retro-fade-in 0.3s steps(4) 1.5s forwards'
        : 'none'};"
    >
      TRANSFORMING COMPLEX DATA INTO ELEGANT APPLICATIONS.
      <br />
      <span class="hero-subtitle-accent">
        FROM ETL PIPELINES TO SECURE FRONTEND INTERFACES.
      </span>
    </p>

    <!-- CTA Button -->
    <button
      onclick={handleScrollClick}
      class="retro-btn hero-cta"
      style="opacity: {mounted ? 1 : 0}; animation: {mounted
        ? 'retro-fade-in 0.3s steps(4) 2s forwards'
        : 'none'};"
    >
      &gt;&gt; VIEW CASE STUDIES &lt;&lt;
    </button>
  </div>
</section>

<style>
  .hero-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--bg-void);
    padding: clamp(40px, 10vh, 80px) 16px;
  }

  .hero-content {
    text-align: center;
    max-width: 1200px;
    width: 100%;
  }

  .hero-badge {
    display: inline-block;
    padding: 6px 16px;
    font-size: clamp(10px, 2.5vw, 14px);
    margin-bottom: clamp(24px, 5vh, 40px);
    border: 2px solid var(--neon-cyan);
  }

  .hero-headline {
    /* Mínimo 28px (para que quepa en móviles), 10vw, y máximo 80px para PC */
    /* El !important es clave para ganar la batalla al global.css */
    font-size: clamp(16px, 10vw, 30px) !important; 
    
    color: var(--neon-cyan);
    margin-bottom: 20px;
    line-height: 1.1;
    font-weight: bold;
    text-shadow: 0 0 25px rgba(0, 243, 255, 0.6);
    letter-spacing: -2px; 
    display: block;
    width: 100%;
  }

  .hero-subtitle {
    /* Bonus: si el subtítulo se ve pequeño, cámbialo a 1.2rem */
    color: var(--foreground-muted);
    font-size: clamp(14px, 3.5vw, 18px); 
    max-width: 850px;
    margin: 0 auto 40px;
    line-height: 1.6;
  }

  .hero-subtitle-accent {
    color: var(--hyper-purple);
    font-weight: bold;
    display: inline-block;
    margin-top: 8px;
  }

  .hero-cta {
    padding: 12px 24px;
    font-size: clamp(6px, 3vw, 12px);
    cursor: pointer;
  }
</style>
