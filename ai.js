'use strict';
// Show the lifecycle once in 3.2 seconds, then leave the final stage selected.
(() => {
  const stages = Array.from(document.querySelectorAll('[data-stage]'));
  if (!stages.length) return;
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  let timer;
  let index = 0;
  const paint = () => stages.forEach((stage, i) => stage.classList.toggle('active', i === index));
  const stop = () => clearInterval(timer);
  paint();
  if (!preference.matches && !document.hidden) {
    timer = setInterval(() => {
      index += 1;
      paint();
      if (index === stages.length - 1) stop();
    }, 800);
  }
  preference.addEventListener('change', event => { if (event.matches) stop(); });
  document.addEventListener('visibilitychange', () => { if (document.hidden) stop(); });
})();
