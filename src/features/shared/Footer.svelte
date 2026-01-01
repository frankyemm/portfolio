<script>
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { label: "GITHUB", href: "https://github.com/frankyemm" },
    {
      label: "LINKEDIN",
      href: "https://www.linkedin.com/in/franky-cardona-1927ae/",
    },
    { label: "EMAIL", href: "mailto:frankycardona1927@gmail.com" },
  ];
</script>

<footer class="footer">
  <div class="container-retro">
    <div class="footer-content">
      <!-- Brand -->
      <div class="footer-brand">
        <span class="brand-icon">F</span>
        <span class="brand-text">FRANKY CARDONA</span>
      </div>

      <!-- Links -->
      <div class="footer-links">
        {#each socialLinks as link}
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            class="footer-link"
          >
            [{link.label}]
          </a>
        {/each}
      </div>

      <!-- Copyright -->
      <div class="footer-copyright">
        <span>&copy; {currentYear} // ALL RIGHTS RESERVED</span>
      </div>
    </div>

    <!-- Decorative Line -->
    <div class="footer-line"></div>
  </div>
</footer>

<style>
  .footer {
    background: var(--card-carbon);
    border-top: 4px solid var(--teal-dark);
    padding: 48px 24px;
    margin-top: 80px;
  }

  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    text-align: center;
  }

  .footer-brand {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .brand-icon {
    width: 32px;
    height: 32px;
    background: var(--orange-burnt);
    border: 2px solid var(--gray-light);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: var(--white);
    box-shadow: 2px 2px 0 var(--blue-petrolium);
  }

  .brand-text {
    font-size: 10px;
    color: var(--gray-light);
    letter-spacing: 2px;
  }

  .footer-links {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .footer-link {
    color: var(--neon-cyan);
    text-decoration: none;
    font-size: 9px;
    padding: 8px 12px;
    border: 2px solid transparent;
    transition: none;
  }

  .footer-link:hover {
    border-color: var(--neon-cyan);
    text-shadow: 0 0 10px rgba(0, 243, 255, 0.5);
  }

  .footer-copyright {
    color: var(--foreground-muted);
    font-size: 8px;
    opacity: 0.7;
  }

  .footer-line {
    height: 4px;
    background: linear-gradient(
      90deg,
      var(--neon-cyan),
      var(--hyper-purple),
      var(--neon-cyan)
    );
    margin-top: 32px;
    opacity: 0.5;
  }

  @media (min-width: 768px) {
    .footer-content {
      flex-direction: row;
      justify-content: space-between;
    }
  }
</style>
