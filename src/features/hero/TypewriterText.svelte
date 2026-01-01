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
    /* Esto asegura que el contenedor herede el tamaño de la h1 del Hero */
    font-size: inherit;
    font-family: inherit;
    line-height: inherit;
  }

  .cursor {
    display: inline-flex;

    /* 1. ANCHO DINÁMICO: */
    /* En lugar de clamp, usamos em. 0.1em significa que siempre será 
       un 10% del grosor de la letra actual */
    width: 0.5em;

    /* 2. ALTO DINÁMICO: */
    /* 1em hará que mida exactamente lo mismo que la altura de la letra. 
       Si quieres que sobresalga un poco, puedes usar 1.1em o 1.2em */
    height: 4em;

    /* 3. MARGEN DINÁMICO: */
    /* Para que el espacio entre la letra y el cursor también sea proporcional */
    margin-left: 0.15em;

    vertical-align: top;
  }
</style>
