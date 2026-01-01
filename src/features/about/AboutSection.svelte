<script>
  import Achievements from './Achievements.svelte';
  import TechMarquee from '../shared/TechMarquee.svelte';
  
  let mounted = $state(false);

  $effect(() => {
    mounted = true;
  });

  const stats = [
    { label: "FULL_STACK_ARCH", width: "90%", color: "var(--neon-cyan)" },
    { label: "DATA_SCIENCE_ML", width: "85%", color: "var(--neon-cyan)" },
    { label: "DATA_ENGINEERING", width: "80%", color: "var(--neon-cyan)" },
    { label: "CYBER_SECURITY", width: "75%", color: "var(--neon-cyan)" },
  ];
</script>

<section id="about" class="about-section">
  <div class="container-retro about-container">
    <h2 class="about-title">[// CHARACTER_DOSSIER //]</h2>

    <div class="about-grid">
      <!-- Left Column: Biography -->
      <div class="retro-terminal-box biography-box">
        <p class="bio-header">&gt; INITIALIZING BIOGRAPHY...</p>
        <p>
          Based in Medellín, Colombia, I am a <strong>Multi-Class Engineer</strong> bridging the gap between
          robust Software Architecture and the power of Data Intelligence.
        </p>
        <br/>
        <p>
          I specialize in the <strong>full data lifecycle</strong>: from architecting high-performance ETL pipelines
          and secure Full Stack ecosystems to training <strong>Deep Learning</strong> models.
        </p>
        <br/>
        <p>
          I close the loop by designing high-impact <strong>Power BI Dashboards</strong>,
          acting as the mission-critical "Command Center" for data-driven decision making.
        </p>
        <br/>
        <p class="bio-status">&gt; STATUS: READY FOR MISSION-CRITICAL CHALLENGES.</p>
        <div class="scanline-effect"></div>
      </div>

      <!-- Right Column: Stats -->
      <div class="stats-box">
        <h3 class="stats-title">[ CHARACTER_STATS ]</h3>

        {#each stats as stat}
          <div class="stat-row">
            <div class="stat-label">{stat.label}</div>
            <div class="stat-bar">
              <div 
                class="stat-fill" 
                style="width: {mounted ? stat.width : '0%'}; background: {stat.color}; box-shadow: 0 0 10px {stat.color}66;"
              ></div>
            </div>
          </div>
        {/each}

        <!-- Power BI Special Stat -->
        <div class="stat-row">
          <div class="stat-label">BI_VISUALIZATION (Power BI)</div>
          <div class="stat-bar">
            <div 
              class="stat-fill" 
              style="width: {mounted ? '95%' : '0%'}; background: #F2C811; box-shadow: 0 0 15px rgba(242, 200, 17, 0.4);"
            ></div>
          </div>
        </div>

        <div class="stats-footer">
          <p>&gt; LOCATION: MEDELLIN_CO</p>
          <p>&gt; EXP_LEVEL: 2025.PRO</p>
          <p>&gt; GUILD: INDEPENDENT_CONTRACTOR</p>
        </div>
      </div>
    </div>

    <div class="achievements-wrapper">
      <Achievements />
    </div>
    
    <div class="marquee-wrapper">
      <p class="marquee-label">[ CURRENT_TECH_STACK ]</p>
      <TechMarquee />
    </div>
  </div>
</section>

<style>
  .about-section {
    padding: clamp(48px, 10vw, 96px) 24px;
    background: var(--bg-void);
    position: relative;
  }

  .about-container {
    max-width: 1000px;
  }

  .about-title {
    color: var(--neon-cyan);
    margin-bottom: 48px;
    text-align: center;
    text-shadow: 0 0 15px rgba(0, 243, 255, 0.4);
  }

  .about-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 32px;
    align-items: start;
  }

  .biography-box {
    padding: clamp(16px, 4vw, 24px);
    border: 4px solid var(--teal-dark);
    background: rgba(11, 14, 17, 0.9);
    position: relative;
    font-size: clamp(10px, 3vw, 12px);
    line-height: 1.8;
    box-shadow: inset 0 0 20px rgba(0, 255, 170, 0.05);
  }

  .bio-header {
    color: var(--orange-burnt);
    margin-bottom: 16px;
    font-weight: bold;
  }

  .bio-status {
    color: var(--hyper-purple);
    font-weight: bold;
  }

  .stats-box {
    padding: 24px;
    background: var(--card-carbon);
    border: 4px solid var(--hyper-purple);
    box-shadow: 8px 8px 0px var(--blue-petrolium);
    position: relative;
  }

  .stats-title {
    font-size: 10px;
    margin-bottom: 24px;
    color: var(--white);
    letter-spacing: 1px;
  }

  .stat-row {
    margin-bottom: 16px;
  }

  .stat-label {
    font-size: 8px;
    margin-bottom: 6px;
    color: var(--gray-light);
  }

  .stat-bar {
    height: 12px;
    background: var(--bg-void);
    border: 2px solid var(--gray-dark);
  }

  .stat-fill {
    height: 100%;
    transition: width 1.5s steps(10);
  }

  .stats-footer {
    margin-top: 32px;
    font-size: 8px;
    color: var(--foreground-muted);
    border-top: 2px solid var(--gray-dark);
    padding-top: 16px;
    line-height: 2;
  }

  .achievements-wrapper {
    margin-top: 80px;
  }

  .marquee-wrapper {
    margin-top: 80px;
  }

  .marquee-label {
    text-align: center;
    font-size: 8px;
    color: var(--teal-dark);
    margin-bottom: 16px;
  }

  strong {
    color: var(--neon-cyan);
  }
</style>
