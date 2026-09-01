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

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el));
}

// astro:page-load fires after every navigation, including the first one,
// once the ClientRouter is active — it replaces DOMContentLoaded here.
document.addEventListener('astro:page-load', initReveal);
