(() => {
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  document.querySelectorAll('[data-research-animation]').forEach((preview) => {
    const image = preview.querySelector('img');
    const button = preview.querySelector('button');
    const poster = image.getAttribute('src');
    const animation = image.dataset.animatedSrc;
    const project = preview.dataset.researchAnimation;
    let playing = false;

    const setPlaying = (next) => {
      playing = next;
      image.src = playing ? animation : poster;
      button.textContent = playing ? 'Pause animation' : 'Play animation';
      button.setAttribute('aria-label', `${playing ? 'Pause' : 'Play'} ${project} animation`);
    };

    button.hidden = false;
    setPlaying(!motionPreference.matches);
    button.addEventListener('click', () => setPlaying(!playing));
    motionPreference.addEventListener('change', (event) => {
      if (event.matches) setPlaying(false);
    });
  });
})();
