let observer: IntersectionObserver | null = null;

function sweep() {
  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    if (el.classList.contains('is-visible')) return;
    const rect = el.getBoundingClientRect();
    // A page can land already scrolled past an element — a browser
    // restoring scroll position on reload or back/forward, a hash
    // jump, a fast flick that renders no intermediate frame — and in
    // every one of those cases IntersectionObserver's async callback
    // can miss the crossing and leave the element stuck at opacity 0
    // forever. getBoundingClientRect() reflects the real current
    // layout regardless of how we got here, so sweep with it instead
    // of trusting the observer alone.
    if (rect.bottom <= 0 || rect.top < window.innerHeight * 0.85) {
      el.classList.add('is-visible');
      observer?.unobserve(el);
    }
  });
}

function initReveal() {
  const groups = new Map<Element | null, HTMLElement[]>();
  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    const list = groups.get(el.parentElement) ?? [];
    list.push(el);
    groups.set(el.parentElement, list);
  });

  groups.forEach((siblings) => {
    siblings.forEach((el, index) => {
      el.style.setProperty('--reveal-index', String(Math.min(index, 6)));
    });
  });

  const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    elements.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer?.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach((el) => observer!.observe(el));
  sweep();
  // Scroll restoration on reload/back-forward sometimes lands a frame
  // or two after this script runs — one deferred re-check catches that
  // without resorting to a continuous scroll listener.
  window.setTimeout(sweep, 100);
}

// astro:page-load fires after every navigation, including the first one,
// once the ClientRouter is active — it replaces DOMContentLoaded here.
document.addEventListener('astro:page-load', initReveal);
// Specifically for bfcache restores (browser back/forward), registered
// once at module scope rather than per-navigation to avoid stacking
// listeners; it re-queries the live DOM rather than closing over a
// snapshot, so it stays correct across every restore.
window.addEventListener('pageshow', sweep);
