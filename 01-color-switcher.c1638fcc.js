!function(){function t(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}var e=null;var a={btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]")};a.btnStart.addEventListener("click",(function(){r.btnStart.setAttribute("disabled",!0),r.btnStart.setAttribute("style","opacity:0.5; cursor:not-allowed"),r.btnStart.classList.add("active"),r.btnStop.removeAttribute("class"),e=setInterval(t,1e3)})),a.btnStop.addEventListener("click",(function(){clearInterval(e),r.btnStart.removeAttribute("disabled"),r.btnStart.removeAttribute("style"),r.btnStart.removeAttribute("class"),r.btnStop.classList.add("active")}));var r=a}();
//# sourceMappingURL=01-color-switcher.c1638fcc.js.map