<script>
  let isOpen = $state(false);

  const navLinks = [
    { id: "hero", label: "HOME", href: "/" },
    { id: "about", label: "ABOUT", href: "/#about" },
    { id: "projects", label: "PROJECTS", href: "/#projects" },
    { id: "approach", label: "APPROACH", href: "/#approach" },
  ];

  function handleScroll(e, id) {
    if (typeof window !== 'undefined' && window.location.pathname === "/") {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        isOpen = false;
      }
    }
  }

  function toggleMenu() {
    isOpen = !isOpen;
  }
</script>

<header style="position: fixed; top: 0; left: 0; right: 0; z-index: 100;">
  <nav class="retro-nav" style="background: var(--bg-void); border-bottom: 4px solid var(--teal-dark);">
    <div class="container-retro nav-container">
      <!-- Logo -->
      <a
        href="/"
        onclick={(e) => handleScroll(e, "hero")}
        class="logo-link"
      >
        <span class="logo-icon">F</span>
        <span class="logo-text">PORTFOLIO</span>
      </a>

      <!-- Desktop Navigation -->
      <div class="desktop-nav">
        {#each navLinks as link}
          <a
            href={link.href}
            onclick={(e) => handleScroll(e, link.id)}
            class="nav-link-retro"
          >
            [{link.label}]
          </a>
        {/each}
      </div>

      <!-- Contact Button -->
      <a href="mailto:frankycardona1927@gmail.com" class="retro-btn contact-btn">
        CONTACT
      </a>

      <!-- Mobile Menu Button -->
      <button onclick={toggleMenu} class="mobile-menu-btn">
        {isOpen ? "[X]" : "[MENU]"}
      </button>
    </div>

    <!-- Mobile Menu -->
    {#if isOpen}
      <div class="mobile-menu">
        {#each navLinks as link}
          <a
            href={link.href}
            onclick={(e) => handleScroll(e, link.id)}
            class="mobile-nav-link"
          >
            &gt; {link.label}
          </a>
        {/each}
        <a href="mailto:frankycardona1927@gmail.com" class="retro-btn mobile-contact-btn">
          CONTACT
        </a>
      </div>
    {/if}
  </nav>
</header>

<style>
  .nav-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 24px;
  }

  .logo-link {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--gray-light);
    text-decoration: none;
    flex-shrink: 0;
  }

  .logo-icon {
    width: clamp(20px, 4vw, 24px);
    height: clamp(20px, 4vw, 24px);
    background: var(--orange-burnt);
    border: 2px solid var(--gray-light);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: clamp(8px, 2vw, 10px);
    color: var(--white);
    box-shadow: 2px 2px 0 var(--blue-petrolium);
  }

  .logo-text {
    font-size: clamp(8px, 2.5vw, 10px);
    letter-spacing: 1px;
  }

  .desktop-nav {
    display: none;
    align-items: center;
  }

  .contact-btn {
    display: none;
    padding: 8px 16px;
    font-size: 8px;
  }

  .mobile-menu-btn {
    padding: 8px 12px;
    color: var(--neon-cyan);
    background: transparent;
    border: 2px solid var(--neon-cyan);
    cursor: pointer;
    font-size: 10px;
    font-family: var(--font-pixel);
    box-shadow: 2px 2px 0 var(--blue-petrolium);
  }

  .mobile-menu {
    border-top: 4px solid var(--orange-burnt);
    padding: 24px;
    background: var(--gray-dark);
    text-align: center;
  }

  .mobile-nav-link {
    display: block;
    color: var(--gray-light);
    text-decoration: none;
    padding: 16px 0;
    border-bottom: 2px solid var(--teal-dark);
    font-size: 12px;
  }

  .mobile-contact-btn {
    display: inline-block;
    margin-top: 24px;
    font-size: 10px;
    padding: 12px 24px;
  }

  @media (min-width: 768px) {
    .desktop-nav {
      display: flex;
    }

    .contact-btn {
      display: inline-block;
    }

    .mobile-menu-btn {
      display: none;
    }
  }
</style>
