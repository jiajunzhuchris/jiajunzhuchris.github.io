(function () {
  // Restore the chosen cover when a product video finishes playing.
  document.querySelectorAll('video[data-reset-to-poster]').forEach(function (video) {
    var cover = video.parentNode.querySelector('.video-cover');
    if (cover) {
      cover.hidden = false;
      cover.addEventListener('click', function () {
        video.play().catch(function () {
          // Keep the native player available if playback cannot start.
          cover.hidden = true;
        });
      });
      video.addEventListener('play', function () { cover.hidden = true; });
    }
    video.addEventListener('ended', function () {
      if (cover) cover.hidden = false;
      video.load();
    });
  });

  var nav = document.querySelector('.homepage-nav');
  var toggle = document.querySelector('.homepage-nav-toggle');
  if (!nav || !toggle) return;

  function closeMenu() {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation menu');
  }

  toggle.addEventListener('click', function () {
    var open = toggle.getAttribute('aria-expanded') !== 'true';
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
  });
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') closeMenu();
  });
  // Native anchor navigation respects the sticky header's scroll margin.
  if (window.jQuery) {
    window.jQuery(function () {
      window.jQuery('a[href^="#"], a[href^="/#"]').off('click.smoothscroll');
    });
  }
}());
