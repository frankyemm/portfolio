<script>
  let { text = "" } = $props();

  let displayedText = $state("");
  let showCursor = $state(true);
  let indexRef = 0;

  $effect(() => {
    const typeInterval = setInterval(() => {
      if (indexRef < text.length) {
        displayedText = text.slice(0, indexRef + 1);
        indexRef++;
      } else {
        clearInterval(typeInterval);
      }
    }, 80);

    const cursorInterval = setInterval(() => {
      showCursor = !showCursor;
    }, 400);

    return () => {
      clearInterval(typeInterval);
      clearInterval(cursorInterval);
    };
  });
</script>

<span class="typewriter">
  {displayedText}
  <span
    class="cursor"
    aria-hidden="true"
    style="background-color: {showCursor
      ? 'var(--neon-cyan)'
      : 'transparent'}; box-shadow: {showCursor
      ? '0 0 10px var(--neon-cyan)'
      : 'none'};"
  ></span>
</span>

<style>
  .typewriter {
    font-size: inherit !important;
    font-family: inherit;
    line-height: inherit;
  }

  .cursor {
    display: inline-block; /* Cambiado de inline-flex para mejor alineación */
    
    /* ANCHO: 0.15em es un grosor de palito perfecto y proporcional */
    width: 0.15em; 

    /* ALTO: 1em para que mida exactamente lo mismo que la letra */
    height: 1em;

    margin-left: 0.15em;
    
    /* Alineación: baseline o middle suelen funcionar mejor que top */
    vertical-align: middle; 
  }
</style>
