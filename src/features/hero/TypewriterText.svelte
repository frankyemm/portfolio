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

<div class="typewriter-container">
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
</div>

<style>
  .typewriter-container {
    /* inline-block permite que se comporte como texto dentro del h1 */
    display: inline-block;
    font-size: inherit !important; 
    font-family: inherit;
    line-height: inherit;
    color: inherit;
  }

  .cursor {
    display: inline-block;
    width: 0.15em; 
    height: 0.9em; 
    margin-left: 0.1em;
    vertical-align: middle;
  }
</style>