!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");e.setAttribute("disabled","");var r=document.querySelector("body"),n=null;function o(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));r.style.backgroundColor=t}t.addEventListener("click",(function(){t.setAttribute("disabled",""),e.removeAttribute("disabled"),n=setInterval(o,1e3)})),e.addEventListener("click",(function(){e.setAttribute("disabled",""),t.removeAttribute("disabled"),clearInterval(n)}))}();
//# sourceMappingURL=01-color-switcher.1de7c000.js.map