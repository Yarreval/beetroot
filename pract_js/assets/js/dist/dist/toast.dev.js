"use strict";

// document.body.insertAdjacentHTML("beforebegin", <div></div>);
function myToast(text) {
  var html = "<div id=\"my-toast\">\n    <div>".concat(text, "</div>\n    </div>");
  document.body.insertAdjacentHTML("afterbegin", html);
}