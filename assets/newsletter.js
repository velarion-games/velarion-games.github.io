(function () {
  var FORM_SRC =
    "https://eocampaign1.com/form/dd664804-c17a-11f0-a78e-09db77d996a6.js";
  var FORM_ID = "dd664804-c17a-11f0-a78e-09db77d996a6";

  function loadForm(container) {
    if (container.dataset.loaded) return;
    container.dataset.loaded = "1";
    var script = document.createElement("script");
    script.async = true;
    script.src = FORM_SRC;
    script.setAttribute("data-form", FORM_ID);
    container.appendChild(script);
  }

  function init() {
    var containers = document.querySelectorAll(".form-embed");
    if (!containers.length) return;

    if (!("IntersectionObserver" in window)) {
      containers.forEach(loadForm);
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            loadForm(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "200px 0px" }
    );

    containers.forEach(function (el) {
      observer.observe(el);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
