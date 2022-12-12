/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\nbody {\n  padding: 5vh;\n  font-family: 'Montserrat Alternates', sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n\nh1 {\n  font-size: 2.5rem;\n  color: #174A4B;\n  margin-bottom: 1rem; }\n\nh2 {\n  font-weight: 700;\n  font-size: 1.5rem;\n  color: #174A4B; }\n\nh3 {\n  font-weight: 500;\n  font-size: 1rem;\n  color: #174A4B;\n  letter-spacing: -0.01em;\n  font-style: italic;\n  text-align: center; }\n\n.game {\n  display: flex;\n  justify-content: center; }\n  @media (max-width: 55.625em) {\n    .game {\n      flex-direction: column; } }\n\n.gameboardContainer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 3rem; }\n  @media (max-width: 55.625em) {\n    .gameboardContainer {\n      margin: 0;\n      margin-top: 3rem; } }\n\n.gameboard {\n  display: grid;\n  grid-template-columns: repeat(10, 2rem);\n  grid-template-rows: repeat(10, 2rem);\n  gap: 1px;\n  user-select: none;\n  margin-top: 1rem; }\n\n.box {\n  outline: 1px solid rgba(32, 189, 198, 0.3);\n  height: 2rem; }\n\n.ship {\n  outline: 1px solid #20BDC6;\n  border: 1px solid #20BDC6;\n  height: 2rem;\n  cursor: move;\n  background: rgba(32, 189, 198, 0.5); }\n\n.ship--small {\n  outline: 1px solid #20BDC6;\n  border: 1px solid #20BDC6;\n  height: 1rem;\n  background: rgba(32, 189, 198, 0.5); }\n\n.shipsContainer {\n  display: flex;\n  gap: 1rem; }\n  .shipsContainer--small {\n    margin-top: 1.5rem;\n    max-width: 20rem;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center; }\n  @media (max-width: 55.625em) {\n    .shipsContainer {\n      max-width: 30rem;\n      flex-wrap: wrap;\n      justify-content: center;\n      align-items: center; } }\n\n.missed {\n  background-color: rgba(32, 189, 198, 0.2);\n  outline: 1px solid #20BDC6;\n  position: relative;\n  z-index: -1; }\n  .missed:before {\n    content: '';\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    border-radius: 50%;\n    width: 0.25rem;\n    height: 0.25rem;\n    background-color: #20BDC6; }\n\n.shot {\n  background-color: #ffc8bf;\n  outline: 1px solid #FE7965;\n  position: relative; }\n  .shot:before {\n    content: '';\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%) rotate(45deg);\n    border-radius: 20%;\n    width: 0.20rem;\n    height: 1rem;\n    background-color: #FE7965; }\n  .shot:after {\n    content: '';\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%) rotate(-45deg);\n    border-radius: 20%;\n    width: 0.20rem;\n    height: 1rem;\n    background-color: #FE7965; }\n\n.btn {\n  margin-top: 1rem;\n  background: #20BDC6;\n  border-radius: 1rem;\n  padding: 0.5rem 1.5rem;\n  font-weight: 700;\n  font-size: 1rem;\n  line-height: 23px;\n  border: none;\n  outline: none;\n  color: #FFFFFF;\n  cursor: pointer;\n  font-family: inherit; }\n  .btn:hover {\n    background-color: #12a4ac;\n    position: relative;\n    top: -2px; }\n  .btn--inactive {\n    cursor: default;\n    background: #AEAEAE; }\n    .btn--inactive:hover {\n      background: #AEAEAE;\n      top: 0; }\n\n.hidden {\n  display: none; }\n\n.inactive {\n  opacity: 0.5; }\n\n.animation {\n  animation: move .5s; }\n\n@keyframes move {\n  0% {\n    margin-left: -50%;\n    opacity: 0; }\n  100% {\n    margin-left: 0;\n    opacity: 1; } }\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ "./node_modules/mobile-drag-drop/index.min.js":
/*!****************************************************!*\
  !*** ./node_modules/mobile-drag-drop/index.min.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports) {

/*! mobile-drag-drop 3.0.0-rc.0 | Copyright (c) 2022 Tim Ruffles | MIT License */
!function(t,i){ true?i(exports):0}(this,function(t){"use strict";var c="dnd-poly-",s=["none","copy","copyLink","copyMove","link","linkMove","move","all"],f=["none","copy","move","link"];function i(){var t=!1;try{var i=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,i)}catch(t){}return t}var e=i();function l(t){return t&&t.tagName}function h(t,i,s){void 0===s&&(s=!0),document.addEventListener(t,i,!!e&&{passive:s})}function n(t,i){document.removeEventListener(t,i)}function u(t,i,s,n){void 0===n&&(n=!1);var h=e?{passive:!0,capture:n}:n;return t.addEventListener(i,s,h),{off:function(){t.removeEventListener(i,s,h)}}}function o(t){return 0===t.length?0:t.reduce(function(t,i){return i+t},0)/t.length}function r(t,i){for(var s=0;s<t.changedTouches.length;s++)if(t.changedTouches[s].identifier===i)return!0;return!1}function a(t,i,s){for(var n=[],h=[],e=0;e<i.touches.length;e++){var r=i.touches[e];n.push(r[t+"X"]),h.push(r[t+"Y"])}s.x=o(n),s.y=o(h)}var d=["","-webkit-"];function v(t,i,s,n,h){var e=i.x,i=i.y;n&&(e+=n.x,i+=n.y),(h=void 0===h||h)&&(e-=parseInt(t.offsetWidth,10)/2,i-=parseInt(t.offsetHeight,10)/2);for(var r="translate3d("+e+"px,"+i+"px, 0)",o=0;o<d.length;o++){var u=d[o]+"transform";t.style[u]=r+" "+s[o]}}var p=(Object.defineProperty(g.prototype,"dropEffect",{get:function(){return this.t},set:function(t){0!==this.i.mode&&-1<s.indexOf(t)&&(this.t=t)},enumerable:!1,configurable:!0}),Object.defineProperty(g.prototype,"types",{get:function(){if(0!==this.i.mode)return Object.freeze(this.i.types)},enumerable:!1,configurable:!0}),Object.defineProperty(g.prototype,"effectAllowed",{get:function(){return this.i.effectAllowed},set:function(t){2===this.i.mode&&-1<s.indexOf(t)&&(this.i.effectAllowed=t)},enumerable:!1,configurable:!0}),g.prototype.setData=function(t,i){if(2===this.i.mode){if(-1<t.indexOf(" "))throw new Error("illegal arg: type contains space");this.i.data[t]=i,-1===this.i.types.indexOf(t)&&this.i.types.push(t)}},g.prototype.getData=function(t){if(1===this.i.mode||2===this.i.mode)return this.i.data[t]||""},g.prototype.clearData=function(t){2===this.i.mode&&(t&&this.i.data[t]?(delete this.i.data[t],-1<(t=this.i.types.indexOf(t))&&this.i.types.splice(t,1)):(this.i.data={},this.i.types=[]))},g.prototype.setDragImage=function(t,i,s){2===this.i.mode&&this.h(t,i,s)},g);function g(t,i){this.i=t,this.h=i,this.t=f[0]}function m(t,i){return t?t===s[0]?f[0]:0===t.indexOf(s[1])||t===s[7]?f[1]:0===t.indexOf(s[4])?f[3]:t===s[6]?f[2]:f[1]:3===i.nodeType&&"A"===i.tagName?f[3]:f[1]}function y(u,t,a,i,s,n,c){void 0===c&&(c=null);s=function(t,i,s,n,h,e,r){void 0===c&&(r=null);var o=a.changedTouches[0],n=new Event(u,{bubbles:!0,cancelable:n});n.dataTransfer=e,n.relatedTarget=r,n.screenX=o.screenX,n.screenY=o.screenY,n.clientX=o.clientX,n.clientY=o.clientY,n.pageX=o.pageX,n.pageY=o.pageY;t=t.getBoundingClientRect();return n.offsetX=n.clientX-t.left,n.offsetY=n.clientY-t.top,n}(t,0,0,n=void 0===n||n,document.defaultView,s,c),s=!t.dispatchEvent(s);return i.mode=0,s}function b(t,i){if(!t||t===s[7])return i;if(i===f[1]){if(0===t.indexOf(f[1]))return f[1]}else if(i===f[3]){if(0===t.indexOf(f[3])||-1<t.indexOf("Link"))return f[3]}else if(i===f[2]&&(0===t.indexOf(f[2])||-1<t.indexOf("Move")))return f[2];return f[0]}var w=(x.prototype.o=function(){var n=this;this.u=1,this.l=f[0],this.v={data:{},effectAllowed:void 0,mode:3,types:[]},this.p={x:null,y:null},this.g={x:null,y:null};var h=this.m;if(this.I=new p(this.v,function(t,i,s){h=t,"number"!=typeof i&&"number"!=typeof s||(n.j={x:i||0,y:s||0})}),this.v.mode=2,this.I.dropEffect=f[0],y("dragstart",this.m,this.k,this.v,this.I))return this.u=3,this.C(),!1;a("page",this.k,this.g);var i,t,s=this.S.dragImageSetup(h);return this.A=(i=s,d.map(function(t){t=i.style[t+"transform"];return t&&"none"!==t?t.replace(/translate\(\D*\d+[^,]*,\D*\d+[^,]*\)\s*/g,""):""})),s.style.position="absolute",s.style.left="0px",s.style.top="0px",s.style.zIndex="999999",s.classList.add("dnd-poly-drag-image"),s.classList.add("dnd-poly-icon"),this.O=s,this.j||(this.S.dragImageOffset?this.j={x:this.S.dragImageOffset.x,y:this.S.dragImageOffset.y}:this.S.dragImageCenterOnTouch?(t=getComputedStyle(h),this.j={x:0-parseInt(t.marginLeft,10),y:0-parseInt(t.marginTop,10)}):(s=h.getBoundingClientRect(),t=getComputedStyle(h),this.j={x:s.left-this.M.clientX-parseInt(t.marginLeft,10)+s.width/2,y:s.top-this.M.clientY-parseInt(t.marginTop,10)+s.height/2})),v(this.O,this.g,this.A,this.j,this.S.dragImageCenterOnTouch),document.body.appendChild(this.O),this.D=window.setInterval(function(){n.F||(n.F=!0,n.N(),n.F=!1)},this.S.iterationInterval),!0},x.prototype.C=function(){this.D&&(clearInterval(this.D),this.D=null),n("touchmove",this.P),n("touchend",this.T),n("touchcancel",this.T),this.O&&(this.O.parentNode.removeChild(this.O),this.O=null),this.L(this.S,this.k,this.u)},x.prototype._=function(t){var s=this;if(!1!==r(t,this.M.identifier)){if(this.k=t,0===this.u){var i=void 0;if(this.S.dragStartConditionOverride)try{i=this.S.dragStartConditionOverride(t)}catch(t){i=!1}else i=1===t.touches.length;return i?void(!0===this.o()&&(this.H.preventDefault(),t.preventDefault())):void this.C()}if(t.preventDefault(),a("client",t,this.p),a("page",t,this.g),this.S.dragImageTranslateOverride)try{var n=!1;if(this.S.dragImageTranslateOverride(t,{x:this.p.x,y:this.p.y},this.V,function(t,i){s.O&&(n=!0,s.p.x+=t,s.p.y+=i,s.g.x+=t,s.g.y+=i,v(s.O,s.g,s.A,s.j,s.S.dragImageCenterOnTouch))}),n)return}catch(t){}v(this.O,this.g,this.A,this.j,this.S.dragImageCenterOnTouch)}},x.prototype.X=function(t){if(!1!==r(t,this.M.identifier)){if(this.S.dragImageTranslateOverride)try{this.S.dragImageTranslateOverride(void 0,void 0,void 0,function(){})}catch(t){}0!==this.u?(t.preventDefault(),this.u="touchcancel"===t.type?3:2):this.C()}},x.prototype.N=function(){var t=this,i=this.l;this.v.mode=3,this.I.dropEffect=f[0];var s,n,h,e,r,o=y("drag",this.m,this.k,this.v,this.I);if(o&&(this.l=f[0]),o||2===this.u||3===this.u)return this.Y(this.u)?(e=this.m,s=this.O,n=this.A,a=function(){t.q()},void("hidden"!==(r=getComputedStyle(e)).visibility&&"none"!==r.display?(s.classList.add("dnd-poly-snapback"),h=getComputedStyle(s),o=parseFloat(h.transitionDuration),isNaN(o)||0===o?a():((e={x:(u=e.getBoundingClientRect()).left,y:u.top}).x+=document.body.scrollLeft||document.documentElement.scrollLeft,e.y+=document.body.scrollTop||document.documentElement.scrollTop,e.x-=parseInt(r.marginLeft,10),e.y-=parseInt(r.marginTop,10),u=parseFloat(h.transitionDelay),u=Math.round(1e3*(o+u)),v(s,e,n,void 0,!1),setTimeout(a,u))):a())):void this.q();var u=this.S.elementFromPoint(this.p.x,this.p.y),a=this.B;u!==this.V&&u!==this.B&&(this.V=u,null!==this.B&&(this.v.mode=3,this.I.dropEffect=f[0],y("dragexit",this.B,this.k,this.v,this.I,!1)),null===this.V?this.B=this.V:(this.v.mode=3,this.I.dropEffect=m(this.v.effectAllowed,this.m),y("dragenter",this.V,this.k,this.v,this.I)?(this.B=this.V,this.l=b(this.I.effectAllowed,this.I.dropEffect)):this.V!==document.body&&(this.B=document.body))),a!==this.B&&l(a)&&(this.v.mode=3,this.I.dropEffect=f[0],y("dragleave",a,this.k,this.v,this.I,!1,this.B)),l(this.B)&&(this.v.mode=3,this.I.dropEffect=m(this.v.effectAllowed,this.m),!1===y("dragover",this.B,this.k,this.v,this.I)?this.l=f[0]:this.l=b(this.I.effectAllowed,this.I.dropEffect)),i!==this.l&&this.O.classList.remove(c+i);i=c+this.l;this.O.classList.add(i)},x.prototype.Y=function(t){t=this.l===f[0]||null===this.B||3===t;return t?l(this.B)&&(this.v.mode=3,this.I.dropEffect=f[0],y("dragleave",this.B,this.k,this.v,this.I,!1)):l(this.B)&&(this.v.mode=1,this.I.dropEffect=this.l,!0===y("drop",this.B,this.k,this.v,this.I)?this.l=this.I.dropEffect:this.l=f[0]),t},x.prototype.q=function(){this.v.mode=3,this.I.dropEffect=this.l,y("dragend",this.m,this.k,this.v,this.I,!1),this.u=2,this.C()},x);function x(t,i,s,n){this.H=t,this.S=i,this.m=s,this.L=n,this.u=0,this.V=null,this.B=null,this.k=t,this.M=t.changedTouches[0],this.P=this._.bind(this),this.T=this.X.bind(this),h("touchmove",this.P,!1),h("touchend",this.T,!1),h("touchcancel",this.T,!1)}var I,j={iterationInterval:150,tryFindDraggableTarget:function(t){for(var i=0,s=t.composedPath();i<s.length;i++){var n=s[i];do{if(!1!==n.draggable){if(!0===n.draggable)return n;if(n.getAttribute&&"true"===n.getAttribute("draggable"))return n}}while((n=n.parentNode)&&n!==document.body)}},dragImageSetup:function(t){var i=t.cloneNode(!0);return function t(i,s){if(1===i.nodeType){for(var n,h,e=getComputedStyle(i),r=0;r<e.length;r++){var o=e[r];s.style.setProperty(o,e.getPropertyValue(o),e.getPropertyPriority(o))}s.style.pointerEvents="none",s.removeAttribute("id"),s.removeAttribute("class"),s.removeAttribute("draggable"),"CANVAS"===s.nodeName&&(n=s,h=(h=i).getContext("2d").getImageData(0,0,h.width,h.height),n.getContext("2d").putImageData(h,0,0))}if(i.hasChildNodes())for(r=0;r<i.childNodes.length;r++)t(i.childNodes[r],s.childNodes[r]);!function t(i){if(i instanceof HTMLElement&&(i.style.pointerEvents="none"),i.children&&i.children.length)for(var s=0;s<i.children.length;s++)t(i.children[s]);if(i.shadowRoot&&i.shadowRoot.children.length)for(s=0;s<i.shadowRoot.children.length;s++)t(i.shadowRoot.children[s])}(s)}(t,i),i},elementFromPoint:function(t,i){var s=document.elementFromPoint(t,i);if(s){for(;s.shadowRoot;){var n=s.shadowRoot.elementFromPoint(t,i);if(null===n||n===s)break;s=n}return s}}};function k(i){if(!I){var t=j.tryFindDraggableTarget(i);if(t)try{I=new w(i,j,t,S)}catch(t){throw S(j,i,3),t}}}function C(t){function i(t){h.off(),e.off(),r.off(),o.off(),s&&s.dispatchEvent(new CustomEvent("dnd-poly-dragstart-cancel",{bubbles:!0,cancelable:!0})),clearTimeout(n)}var s=t.target;s&&s.dispatchEvent(new CustomEvent("dnd-poly-dragstart-pending",{bubbles:!0,cancelable:!0}));var n=window.setTimeout(function(){h.off(),e.off(),r.off(),o.off(),k(t)},j.holdToDrag),h=u(s,"touchend",i),e=u(s,"touchcancel",i),r=u(s,"touchmove",i),o=u(window,"scroll",i,!0)}function S(t,i,s){if(0===s&&t.defaultActionOverride)try{t.defaultActionOverride(i),i.defaultPrevented}catch(t){}I=null}t.polyfill=function(i){if(i&&Object.keys(i).forEach(function(t){j[t]=i[t]}),!j.forceApply){t=(t=!!window.chrome||/chrome/i.test(navigator.userAgent),{dragEvents:"ondragstart"in document.documentElement,draggable:"draggable"in document.documentElement,userAgentSupportingNativeDnD:!(/iPad|iPhone|iPod|Android/.test(navigator.userAgent)||t&&"ontouchstart"in document.documentElement)});if(t.userAgentSupportingNativeDnD&&t.draggable&&t.dragEvents)return!1}var t;return j.holdToDrag?h("touchstart",C,!1):h("touchstart",k,!1),!0},t.supportsPassiveEventListener=i,Object.defineProperty(t,"G",{value:!0})});
//# sourceMappingURL=index.min.js.map

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/App.js":
/*!***********************!*\
  !*** ./src/js/App.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ "./src/js/UI.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player */ "./src/js/Player.js");



const App = () => {
  let player = (0,_Player__WEBPACK_IMPORTED_MODULE_1__.Player)();
  let ui = (0,_UI__WEBPACK_IMPORTED_MODULE_0__.UI)();
  let computer = (0,_Player__WEBPACK_IMPORTED_MODULE_1__.Player)();
  let gameStart = false;
  let playerTurn = false;

  const createGameboard = (gameboardArr, user) => {
    gameboardArr.forEach(obj => ui.renderGameboard(obj, user));
  };

  const createShips = shipsArr => {
    shipsArr.forEach((ship, index) => {
      ui.renderShip(ship, index);
    });
    ui.setMessage(`Place the ships to start the game`);
  };

  const createSmallShips = (shipsArr, user) => {
    shipsArr.forEach((ship, index) => {
      ui.renderSmallShip(ship, index, user);
    });
  };

  const shipEvents = shipsArr => {
    const rotateShips = shipIndex => {
      const ship = shipsArr[shipIndex];
      ship.properties.isVertical = !ship.properties.isVertical;
    };

    const placeShip = (shipIndex, coords, draggableShip, target) => {
      const ship = shipsArr[shipIndex];
      if (player.placeShip(coords, ship, ship.properties.isVertical)) {
        ui.renderSuccessfulPlacement(draggableShip, target);
        checkStart(player.shipsArr);
      } else ui.renderUnsuccessfulPlacement(draggableShip);
    };

    ui.addShipHandlers(rotateShips);
    ui.addContainerHandlers(placeShip);
  };

  const checkStart = shipsArr => {
    if (shipsArr.every(ship => ship.properties.isPlaced)) {
      ui.activateBtn(startGame);
    }
  };

  const startGame = () => {
    gameStart = true;
    playerTurn = true;
    computer.randomPlacement(computer.shipsArr);
    ui.setInactivePlayer('computer', 'player');
    ui.setMessage(`Sink all of the enemy's ships to win the game`);
    attackShip();
    createSmallShips(player.shipsArr, 'player');
    createSmallShips(computer.shipsArr, 'computer');
    const playAgain = () => {
      location.reload();
    };
    ui.startGame(playAgain);
  };

  const attackShip = () => {
    const attack = (coords, target) => {
      if (!gameStart) return;
      if (!playerTurn) return;
      const position = computer.gameboardArr.find(
        obj => obj.position === coords
      );
      position.hasShip
        ? ui.renderSuccesfulAttack(target)
        : ui.renderUnsuccesfulAttack(target);
      if (position.isShot) return;
      computer.receiveAttack(position.position);
      if (position.hasShip && position.hasShip.isSunk()) {
        markSunk(computer, 'computer', position);
        ui.markSmallShip(position.hasShip.properties.id, 'computer');
      }

      finishGame();
      if (!position.hasShip) {
        playerTurn = false;
        ui.setInactivePlayer('player', 'computer');
        computerAttack();
      }
    };
    ui.renderAttack(attack);
  };

  const computerAttack = () => {
    const attack = (position, coords) => {
      player.receiveAttack(coords);
      position.hasShip
        ? ui.renderSuccesfulAttack(coords)
        : ui.renderUnsuccesfulAttack(coords);
      if (position.hasShip && position.hasShip.isSunk()) {
        markSunk(player, 'player', position);
        ui.markSmallShip(position.hasShip.properties.id, 'player');
      }
      ui.removeMissedClass();
      finishGame();
      if (position.hasShip)
        player.checkAdjacentSquares(gameStart, coords, attack);
      else {
        playerTurn = true;
        ui.setInactivePlayer('computer', 'player');
      }
    };

    player.findValidSquare(gameStart, attack);
  };

  const markSunk = (user, userStr, position) => {
    const adjacentPositions =
      position.hasShip.properties.adjacentPositions.flat();
    adjacentPositions.forEach(position => {
      if (!position) return;
      user.receiveAttack(position.position);
      ui.markAdjacentSquares(userStr, position.position);
    });
  };

  const finishGame = () => {
    if (
      computer.shipsArr.every(ship => ship.isSunk()) ||
      player.shipsArr.every(ship => ship.isSunk())
    ) {
      gameStart = false;
      const text = `${
        computer.shipsArr.every(ship => ship.isSunk()) ? 'Player' : 'Computer'
      } has won!`;
      ui.setMessage(text);
    }
  };

  createGameboard(player.gameboardArr, 'player');
  createGameboard(computer.gameboardArr, 'computer');
  createShips(player.shipsArr);
  shipEvents(player.shipsArr, player.gameboardArr);
};


/***/ }),

/***/ "./src/js/Gameboard.js":
/*!*****************************!*\
  !*** ./src/js/Gameboard.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gameboard": () => (/* binding */ Gameboard)
/* harmony export */ });
const Gameboard = () => {
  const gameboardArr = [];

  const createGameboard = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const squares = numbers.flatMap(y => {
      return numbers.flatMap(x => {
        return {
          position: (x = y + '-' + x),
          hasShip: false,
          isShot: false,
          isValid: true,
        };
      });
    });
    gameboardArr.push(...squares);
  };

  const placeShip = (coords, ship) => {
    // find the position in the gameboard array
    const position = gameboardArr.find(obj => obj.position === coords);
    if (position.hasShip) return;
    const positionX = +position.position.split('-')[1];
    const positionY = +position.position.split('-')[0];

    // check if it's possible to place the ship
    const shipLength = +ship.properties.length;
    const width = 10;
    let shipPositions = [];
    for (let i = 0; i < shipLength; i++) {
      const condition = ship.properties.isVertical
        ? positionY + i + '-' + positionX
        : positionY + '-' + (positionX + i);
      const shipSquares = gameboardArr.find(obj => obj.position === condition);
      shipPositions.push(shipSquares);
      ship.properties.shipPositions.push(shipSquares);
    }

    if (
      (!ship.properties.isVertical &&
        positionX + (shipLength - 1) <= width &&
        shipPositions.every(pos => pos.isValid)) ||
      (ship.properties.isVertical &&
        positionY + (shipLength - 1) <= width &&
        shipPositions.every(pos => pos.isValid))
    ) {
      // if it's possible to place the ship, mark the ship squares
      const index = gameboardArr.indexOf(position);
      for (let i = 0; i < ship.properties.length; i++) {
        const position = ship.properties.isVertical
          ? gameboardArr[index + i * 10]
          : gameboardArr[index + i];
        const positionX = +position.position.split('-')[1];
        const positionY = +position.position.split('-')[0];
        position.hasShip = ship;
        ship.properties.isPlaced = true;

        // mark adjacent positions invalid
        const getPosition = (y, x) => {
          return gameboardArr.find(obj => obj.position === y + '-' + x);
        };
        const adjacentPositions = [
          getPosition(positionY - 1, positionX),
          getPosition(positionY + 1, positionX),
          getPosition(positionY - 1, positionX - 1),
          getPosition(positionY + 1, positionX + 1),
          getPosition(positionY - 1, positionX + 1),
          getPosition(positionY + 1, positionX - 1),
          getPosition(positionY, positionX - 1),
          getPosition(positionY, positionX + 1),
        ];
        ship.properties.adjacentPositions.push(adjacentPositions);
        adjacentPositions.map(obj => {
          if (obj) obj.isValid = false;
        });
      }
      return true;
    } else return false;
  };

  const receiveAttack = coords => {
    const position = gameboardArr.find(obj => obj.position === coords);
    position.hasShip && position.hasShip.hit();
    position.isShot = true;
    position.hasShip && position.hasShip.isSunk();
  };

  const getCoords = arr => {
    const index = Math.floor(Math.random() * arr.length);
    const coords = arr[index].position;
    return coords;
  };

  const randomPlacement = arr => {
    arr.forEach(ship => {
      const findValidSquare = () => {
        let index = Math.floor(Math.random() * 100);
        let coords = gameboardArr[index].position;
        let options = [true, false];
        let isVertical = options[Math.floor(Math.random() * 2)];
        placeShip(coords, ship, (ship.properties.isVertical = isVertical))
          ? placeShip(coords, ship, (ship.properties.isVertical = isVertical))
          : findValidSquare();
      };
      findValidSquare();
    });
  };

  const wait = delay => new Promise(resolve => setTimeout(resolve, delay));

  const findValidSquare = async (gameStart, helper) => {
    try {
      await wait(500);
      if (!gameStart) return;
      const availablePositions = [];
      gameboardArr.map(obj => !obj.isShot && availablePositions.push(obj));
      const coords = getCoords(availablePositions);
      const position = availablePositions.find(obj => obj.position === coords);
      position ? helper(position, coords) : findValidSquare(gameStart, helper);
    } catch (err) {
      console.error(err);
    }
  };

  const checkAdjacentSquares = async (gameStart, coords, helper) => {
    try {
      await wait(500);
      if (!gameStart) return;
      const position = gameboardArr.find(obj => obj.position === coords);

      const shipHitPositions = position.hasShip.properties.shipPositions.filter(
        obj => obj.isShot
      );
      // check if ship has been hit at least two times, if yes then hit the next square in a row/column
      if (shipHitPositions.length >= 2 && !position.hasShip.isSunk()) {
        const nextHit = position.hasShip.properties.shipPositions.find(
          obj => !obj.isShot
        );
        nextHit && helper(nextHit, nextHit.position);
      }
      // if it hasn't been hit, attack adjacent squares
      else {
        const positionX = +position.position.split('-')[1];
        const positionY = +position.position.split('-')[0];
        const getPosition = (y, x) => {
          return gameboardArr.find(obj => obj.position === y + '-' + x);
        };
        const adjacentPositions = [
          getPosition(positionY - 1, positionX),
          getPosition(positionY + 1, positionX),
          getPosition(positionY, positionX - 1),
          getPosition(positionY, positionX + 1),
        ];
        const filteredPositions = adjacentPositions.filter(
          obj => obj && !obj.isShot
        );
        // if there are no adjacent squares available, find a random position
        if (filteredPositions.length <= 0) findValidSquare(gameStart, helper);
        // if adjacent squares are available, attack one randomly
        else {
          const newCoords = getCoords(filteredPositions);
          const newPosition = gameboardArr.find(
            obj => obj.position === newCoords
          );
          helper(newPosition, newCoords);
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  return {
    createGameboard,
    gameboardArr,
    placeShip,
    receiveAttack,
    getCoords,
    randomPlacement,
    findValidSquare,
    checkAdjacentSquares,
  };
};


/***/ }),

/***/ "./src/js/Player.js":
/*!**************************!*\
  !*** ./src/js/Player.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ "./src/js/Gameboard.js");
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ship */ "./src/js/Ship.js");



const Player = () => {
  const gameboard = (0,_Gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();
  gameboard.createGameboard();
  const gameboardArr = gameboard.gameboardArr;
  const receiveAttack = gameboard.receiveAttack;
  const placeShip = gameboard.placeShip;
  const getCoords = gameboard.getCoords;
  const randomPlacement = gameboard.randomPlacement;
  const findValidSquare = gameboard.findValidSquare;
  const checkAdjacentSquares = gameboard.checkAdjacentSquares;
  const shipsArr = [
    (0,_Ship__WEBPACK_IMPORTED_MODULE_1__.Ship)(4, 0),
    (0,_Ship__WEBPACK_IMPORTED_MODULE_1__.Ship)(3, 1),
    (0,_Ship__WEBPACK_IMPORTED_MODULE_1__.Ship)(3, 2),
    (0,_Ship__WEBPACK_IMPORTED_MODULE_1__.Ship)(2, 3),
    (0,_Ship__WEBPACK_IMPORTED_MODULE_1__.Ship)(2, 4),
    (0,_Ship__WEBPACK_IMPORTED_MODULE_1__.Ship)(2, 5),
    (0,_Ship__WEBPACK_IMPORTED_MODULE_1__.Ship)(1, 6),
    (0,_Ship__WEBPACK_IMPORTED_MODULE_1__.Ship)(1, 7),
    (0,_Ship__WEBPACK_IMPORTED_MODULE_1__.Ship)(1, 8),
    (0,_Ship__WEBPACK_IMPORTED_MODULE_1__.Ship)(1, 9),
  ];

  return {
    gameboardArr,
    getCoords,
    receiveAttack,
    shipsArr,
    placeShip,
    randomPlacement,
    findValidSquare,
    checkAdjacentSquares,
  };
};


/***/ }),

/***/ "./src/js/Ship.js":
/*!************************!*\
  !*** ./src/js/Ship.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ship": () => (/* binding */ Ship)
/* harmony export */ });
const Ship = (length, id) => {
  const properties = {
    length: length,
    id: id,
    hits: 0,
    isVertical: false,
    isPlaced: false,
    shipPositions: [],
    adjacentPositions: [],
  };

  const hit = () => {
    properties.hits++;
  };

  const isSunk = () => {
    return properties.length <= properties.hits ? true : false;
  };

  return { properties, hit, isSunk };
};


/***/ }),

/***/ "./src/js/UI.js":
/*!**********************!*\
  !*** ./src/js/UI.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UI": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var mobile_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobile-drag-drop */ "./node_modules/mobile-drag-drop/index.min.js");
/* harmony import */ var mobile_drag_drop__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobile_drag_drop__WEBPACK_IMPORTED_MODULE_0__);


const UI = () => {
  const playerContainer = document.getElementById('playerContainer');
  const computerContainer = document.getElementById('computerContainer');

  const renderGameboard = (obj, user) => {
    const square = document.createElement('div');
    square.classList.add('box');
    square.classList.add(`box-${user}`);
    square.dataset.id = obj.position;
    if (user === 'player') playerContainer.appendChild(square);
    if (user === 'computer') computerContainer.appendChild(square);
  };

  const renderShip = (ship, index) => {
    const shipDiv = document.createElement('div');
    shipDiv.classList.add('ship');
    shipDiv.setAttribute('draggable', true);
    shipDiv.setAttribute('data-length', ship.properties.length);
    shipDiv.setAttribute('data-index', index);
    shipDiv.setAttribute('data-vertical', false);
    shipDiv.style.width = `calc(${ship.properties.length * 2}rem + ${
      ship.properties.length - 1
    }px)`;
    document.getElementById('shipsContainer').appendChild(shipDiv);
  };

  const renderSmallShip = (ship, index, user) => {
    const shipDiv = document.createElement('div');
    shipDiv.classList.add('ship--small');
    shipDiv.classList.add(`ship--${user}`);
    shipDiv.setAttribute('draggable', true);
    shipDiv.setAttribute('data-length', ship.properties.length);
    shipDiv.setAttribute('data-index', index);
    shipDiv.setAttribute('data-vertical', false);
    shipDiv.style.width = `calc(${ship.properties.length * 1}rem + ${
      ship.properties.length - 1
    }px)`;
    document.getElementById(`${user}Ships`).appendChild(shipDiv);
  };

  const _dragAndDrop = ship => {
    ship.addEventListener('dragstart', e => {
      e.target.classList.add('dragging');
    });
    ship.addEventListener('dragend', e => {
      e.target.classList.remove('dragging');
    });
  };

  const _rotate = (ship, helper) => {
    ship.addEventListener('click', e => {
      if (ship.draggable === false) return;
      const shipIndex = e.target.dataset.index;
      helper(shipIndex);
      ship.setAttribute(
        'data-vertical',
        ship.dataset.vertical === 'false' ? 'true' : 'false'
      );
      if (ship.dataset.vertical === 'true') {
        e.target.style.width = '2rem';
        e.target.style.height = `calc(${ship.dataset.length * 2}rem + ${
          ship.dataset.length - 1
        }px)`;
      } else {
        e.target.style.height = '2rem';
        e.target.style.width = `calc(${ship.dataset.length * 2}rem + ${
          ship.dataset.length - 1
        }px)`;
      }
    });
  };

  const addShipHandlers = helper => {
    const ships = document.querySelectorAll('.ship');
    ships.forEach(ship => {
      _rotate(ship, helper);
      _dragAndDrop(ship);
    });
  };

  const addContainerHandlers = helper => {
    // add the highlight to the target square
    playerContainer.addEventListener('dragleave', e => {
      e.preventDefault();
      if (e.target.classList.contains('box')) {
        e.target.style.background = '';
      }
    });

    playerContainer.addEventListener('dragenter', e => {
      e.preventDefault();
      if (e.target.classList.contains('box')) {
        e.target.style.background = '#20BDC6';
      }
    });

    // make it possible to place the ship
    playerContainer.addEventListener('dragover', e => {
      e.preventDefault();
    });

    playerContainer.addEventListener('drop', e => {
      e.preventDefault();
      const target = e.target;
      if (!target.parentNode.firstElementChild.classList.contains('box'))
        return;
      const draggableShip = document.querySelector('.dragging');
      const shipIndex = draggableShip.dataset.index;
      const coords = e.target.dataset.id;
      target.style.background = '';
      helper(shipIndex, coords, draggableShip, target);
    });
  };

  const renderSuccessfulPlacement = (draggableShip, target) => {
    draggableShip.setAttribute('draggable', false);
    draggableShip.style.position = 'absolute';
    draggableShip.style.userSelect = 'none';
    draggableShip.style.cursor = 'default';
    draggableShip.style.zIndex = '-1';
    target.appendChild(draggableShip);
  };

  const renderUnsuccessfulPlacement = draggableShip => {
    draggableShip.style.position = '';
  };

  const renderAttack = helper => {
    computerContainer.addEventListener('click', e => {
      const target = e.target;
      if (!target.classList.contains('box')) return;
      const coords = e.target.dataset.id;
      helper(coords, target);
    });
  };

  const renderSuccesfulAttack = target => {
    if (typeof target === 'string')
      target = document.querySelector(`.box-player[data-id='${target}']`);
    target.classList.add('shot');
  };

  const renderUnsuccesfulAttack = target => {
    if (typeof target === 'string')
      target = document.querySelector(`.box-player[data-id='${target}']`);
    target.classList.add('missed');
  };

  const markAdjacentSquares = (user, position) => {
    const square = document.querySelector(
      `.box-${user}[data-id='${position}']`
    );
    square.classList.add('missed');
  };

  const removeMissedClass = () => {
    const squares = document.querySelectorAll('.box');
    squares.forEach(square => {
      if (
        square.classList.contains('shot') &&
        square.classList.contains('missed')
      )
        square.classList.remove('missed');
    });
  };

  const activateBtn = helper => {
    const btn = document.getElementById('btn');
    if (btn.classList.contains('btn--inactive'))
      btn.classList.remove('btn--inactive');
    btn.addEventListener('click', helper);
  };

  const startGame = helper => {
    const computerGameboard = document.getElementById('computerGameboard');
    computerGameboard.classList.remove('hidden');
    computerGameboard.classList.add('animation');
    const btn = document.getElementById('btn');
    btn.textContent = 'Play again';
    btn.addEventListener('click', helper);
  };

  const setMessage = text => {
    const message = document.getElementById('message');
    message.textContent = text;
  };

  const markSmallShip = (id, user) => {
    const ship = document.querySelector(`.ship--${user}[data-index='${id}']`);
    ship.style.backgroundColor = '#ffc8bf';
    ship.style.outline = '1px solid #FE7965';
    ship.style.border = '1px solid #FE7965';
  };

  const setInactivePlayer = (active, inactive) => {
    document.getElementById(`${active}Container`).classList.remove('inactive');
    document.getElementById(`${inactive}Container`).classList.add('inactive');
  };

  return {
    renderGameboard,
    renderShip,
    addShipHandlers,
    addContainerHandlers,
    renderAttack,
    renderSuccesfulAttack,
    renderUnsuccesfulAttack,
    renderSuccessfulPlacement,
    renderUnsuccessfulPlacement,
    markAdjacentSquares,
    activateBtn,
    startGame,
    setMessage,
    renderSmallShip,
    markSmallShip,
    removeMissedClass,
    setInactivePlayer,
  };
};

(0,mobile_drag_drop__WEBPACK_IMPORTED_MODULE_0__.polyfill)();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/main.scss */ "./src/sass/main.scss");
/* harmony import */ var _js_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/App */ "./src/js/App.js");



const app = (0,_js_App__WEBPACK_IMPORTED_MODULE_1__.App)();

})();

/******/ })()
;