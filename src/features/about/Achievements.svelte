<script>
  const achievements = [
    {
      icon: "🏆",
      rarity: "LEGENDARY",
      title: "DATA PIPELINE ARCHITECT",
      desc: "Designed ETL systems processing +1M records daily",
      accentColor: "var(--power-bi-yellow)"
    },
    {
      icon: "🛡️",
      rarity: "EPIC",
      title: "ZERO BREACH RECORD",
      desc: "3+ years maintaining enterprise security standards",
      accentColor: "var(--neon-cyan)"
    },
    {
      icon: "🤖",
      rarity: "RARE",
      title: "ML MODEL DEPLOYER",
      desc: "Successfully deployed models to cloud TPU infrastructure",
      accentColor: "var(--hyper-purple)"
    },
    {
      icon: "📊",
      rarity: "EPIC",
      title: "BI DASHBOARD MASTER",
      desc: "Created executive dashboards for +5 organizations",
      accentColor: "var(--power-bi-yellow)"
    }
  ];
</script>

<div class="achievements-section">
  <h3 class="achievements-title">[ ACHIEVEMENTS_UNLOCKED ]</h3>
  
  <div class="achievements-grid">
    {#each achievements as achievement}
      <div 
        class="achievement-card" 
        style="--accent-color: {achievement.accentColor};"
      >
        <span class="achievement-icon">{achievement.icon}</span>
        <div class="achievement-content">
          <span class="achievement-rarity">{achievement.rarity}</span>
          <span class="achievement-title">{achievement.title}</span>
          <span class="achievement-desc">{achievement.desc}</span>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .achievements-section {
    padding: 32px 0;
  }

  .achievements-title {
    font-size: 10px;
    color: var(--hyper-purple);
    text-align: center;
    margin-bottom: 32px;
    letter-spacing: 1px;
  }

  .achievements-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 16px;
  }

  .achievement-content {
    display: flex;
    flex-direction: column;
  }
</style>
