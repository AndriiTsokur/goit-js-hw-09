!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r);var o=r("h6c0i"),u={timeout:6e3},a={form:document.querySelector(".form"),delay:document.querySelector('[name="delay"]'),step:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]')},i=null,c=null;function l(e,t){var n=Math.random()>.3;return new Promise((function(r,o){setTimeout((function(){n?r("Fulfilled promise ".concat(e," in ").concat(t,"ms")):o("Rejected promise ".concat(e," in ").concat(t,"ms"))}),t)}))}a.form.addEventListener("change",(function(e){e.target.setAttribute("value",e.target.value)})),a.form.addEventListener("submit",(function(e){e.preventDefault(),i=Number(a.delay.value);for(var t=1;t<=Number(a.amount.value);t++)c=1===t?i:c+Number(a.step.value),l(t,c).then((function(e){return o.Notify.success(e,u)})).catch((function(e){return o.Notify.failure(e,u)}))}))}();
//# sourceMappingURL=03-promises.34a52066.js.map
