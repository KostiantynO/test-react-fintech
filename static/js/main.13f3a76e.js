!function(){"use strict";var e=new Intl.NumberFormat([],{minimumFractionDigits:2,maximumFractionDigits:2}),t=function(t,o){var r=o.separator,a=void 0===r?"":r;return e.formatToParts(t).map((function(e){var t=e.type,o=e.value;return"decimal"===t?".":"group"===t?a:o})).join("")}("3123123.00",{separator:" "});console.log(t);var o={root:document.querySelector("#root"),modalRoot:document.querySelector("#modal-root"),input:document.querySelector("[data-input-masked]"),form:document.querySelector("[data-form-masked]")},r=o.input,a=o.form;window.addEventListener("load",(function(){return r.value=""}));var n=/[^+0-9.-]/g,i=/(^-?\d*?)(\.{0,1})(\d{0,2}?)/g,l=function(e){var t=e.target.value.trim().replace(n,"").replace(i,"$1$2$3");e.target.value=t,console.log("e.target.value",e.target.value)};r.addEventListener(["keyup"],l,{passive:!0}),r.addEventListener(["change"],l,{passive:!0});r.addEventListener("keydown",(function(e){if(e.getModifierState("Meta")||e.getModifierState("Control")||e.getModifierState("Alt"))console.log("Meta, Control or Alt pressed");else{var t=e.key;1===t.length&&"\0"!==t?(t<"0"||t>"9")&&"."!==t&&"-"!==t&&(console.log("((key < '0' || key > '9') && key !== '.' && key !== '-')"),e.preventDefault()):console.log("key.length !== 1 || key === '\0'")}}));a.addEventListener("submit",(function(e){e.preventDefault();var t=e.target.elements.maskedInput.value;l({target:{value:t}})}))}();
//# sourceMappingURL=main.13f3a76e.js.map