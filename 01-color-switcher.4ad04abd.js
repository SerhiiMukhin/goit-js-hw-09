const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");e.setAttribute("disabled","");const o=document.querySelector("body");let r=null;function n(){let t=`#${Math.floor(16777215*Math.random()).toString(16)}`;o.style.backgroundColor=t}t.addEventListener("click",(function(){t.setAttribute("disabled",""),e.removeAttribute("disabled"),r=setInterval(n,1e3)})),e.addEventListener("click",(function(){e.setAttribute("disabled",""),t.removeAttribute("disabled"),clearInterval(r)}));
//# sourceMappingURL=01-color-switcher.4ad04abd.js.map