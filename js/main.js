/*
  Nemanja Simić — Portfolio
  Small progressive enhancements. The site is fully usable without JavaScript.
*/
(function () {
  "use strict";

  /* ---------------------------------------------------------------------
     1. Mobile navigation toggle
     --------------------------------------------------------------------- */
  var toggle = document.querySelector(".nav__toggle");
  var list = document.getElementById("nav-list");
  var mobileQuery = window.matchMedia("(max-width: 47.99rem)");

  function setMenu(open) {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.querySelector(".nav__toggle-label").textContent = open ? "Close" : "Menu";
    list.hidden = !open && mobileQuery.matches;
  }

  if (toggle && list) {
    setMenu(false);

    toggle.addEventListener("click", function () {
      setMenu(toggle.getAttribute("aria-expanded") !== "true");
    });

    // Close after choosing a link, or when pressing Escape
    list.addEventListener("click", function (event) {
      if (event.target.closest("a")) setMenu(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setMenu(false);
        toggle.focus();
      }
    });

    // Reset when resizing between mobile and desktop
    mobileQuery.addEventListener("change", function () {
      setMenu(false);
    });
  }

  /* ---------------------------------------------------------------------
     2. Reveal on scroll
     --------------------------------------------------------------------- */
  var revealItems = document.querySelectorAll("[data-reveal]");

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    revealItems.forEach(function (item) {
      observer.observe(item);
    });
  } else {
    revealItems.forEach(function (item) {
      item.classList.add("is-visible");
    });
  }

  /* ---------------------------------------------------------------------
     3. Copy e-mail address to clipboard
     --------------------------------------------------------------------- */
  var copyButton = document.querySelector("[data-copy]");
  var copyStatus = document.querySelector(".copy-status");

  if (copyButton && navigator.clipboard) {
    copyButton.hidden = false;
    copyButton.addEventListener("click", function () {
      navigator.clipboard.writeText(copyButton.dataset.copy).then(function () {
        copyStatus.textContent = "E-mail address copied to clipboard.";
        setTimeout(function () {
          copyStatus.textContent = "";
        }, 3000);
      });
    });
  }

  /* ---------------------------------------------------------------------
     4. Current year in the footer
     --------------------------------------------------------------------- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
