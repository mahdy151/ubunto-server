document.addEventListener("DOMContentLoaded",(function(t){var e=document.querySelector("[data-wagtail-userbar]"),n=e.querySelector("[data-wagtail-userbar-trigger]"),a=e.querySelector(".wagtail-userbar-items"),i="is-active",o="ontouchstart"in window,s="click";function d(){e.classList.remove(i),a.addEventListener(s,c,!1),window.removeEventListener(s,u,!1)}function r(t){t.stopPropagation(),e.classList.contains(i)?d():(e.classList.add(i),a.addEventListener(s,c,!1),window.addEventListener(s,u,!1))}function c(t){t.stopPropagation()}function u(){d()}o?(e.classList.add("touch"),n.addEventListener("touchend",(function(e){t.preventDefault(),r(e)}))):e.classList.add("no-touch"),n.addEventListener(s,r,!1),window.addEventListener("pageshow",d,!1)}));
//# sourceMappingURL=userbar.js.map