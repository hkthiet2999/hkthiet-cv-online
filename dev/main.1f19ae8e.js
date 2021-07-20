// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel/src/builtins/bundle-url.js"}],"css/minimal-css-reset.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel/src/builtins/css-loader.js"}],"../data/template/style.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel/src/builtins/css-loader.js"}],"../node_modules/vue/dist/vue.min.js":[function(require,module,exports) {
var define;
var global = arguments[3];
/*!
 * Vue.js v2.6.11
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).Vue=t()}(this,function(){"use strict";var e=Object.freeze({});function t(e){return null==e}function n(e){return null!=e}function r(e){return!0===e}function i(e){return"string"==typeof e||"number"==typeof e||"symbol"==typeof e||"boolean"==typeof e}function o(e){return null!==e&&"object"==typeof e}var a=Object.prototype.toString;function s(e){return"[object Object]"===a.call(e)}function c(e){var t=parseFloat(String(e));return t>=0&&Math.floor(t)===t&&isFinite(e)}function u(e){return n(e)&&"function"==typeof e.then&&"function"==typeof e.catch}function l(e){return null==e?"":Array.isArray(e)||s(e)&&e.toString===a?JSON.stringify(e,null,2):String(e)}function f(e){var t=parseFloat(e);return isNaN(t)?e:t}function p(e,t){for(var n=Object.create(null),r=e.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}var d=p("slot,component",!0),v=p("key,ref,slot,slot-scope,is");function h(e,t){if(e.length){var n=e.indexOf(t);if(n>-1)return e.splice(n,1)}}var m=Object.prototype.hasOwnProperty;function y(e,t){return m.call(e,t)}function g(e){var t=Object.create(null);return function(n){return t[n]||(t[n]=e(n))}}var _=/-(\w)/g,b=g(function(e){return e.replace(_,function(e,t){return t?t.toUpperCase():""})}),$=g(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),w=/\B([A-Z])/g,C=g(function(e){return e.replace(w,"-$1").toLowerCase()});var x=Function.prototype.bind?function(e,t){return e.bind(t)}:function(e,t){function n(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n};function k(e,t){t=t||0;for(var n=e.length-t,r=new Array(n);n--;)r[n]=e[n+t];return r}function A(e,t){for(var n in t)e[n]=t[n];return e}function O(e){for(var t={},n=0;n<e.length;n++)e[n]&&A(t,e[n]);return t}function S(e,t,n){}var T=function(e,t,n){return!1},E=function(e){return e};function N(e,t){if(e===t)return!0;var n=o(e),r=o(t);if(!n||!r)return!n&&!r&&String(e)===String(t);try{var i=Array.isArray(e),a=Array.isArray(t);if(i&&a)return e.length===t.length&&e.every(function(e,n){return N(e,t[n])});if(e instanceof Date&&t instanceof Date)return e.getTime()===t.getTime();if(i||a)return!1;var s=Object.keys(e),c=Object.keys(t);return s.length===c.length&&s.every(function(n){return N(e[n],t[n])})}catch(e){return!1}}function j(e,t){for(var n=0;n<e.length;n++)if(N(e[n],t))return n;return-1}function D(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}var L="data-server-rendered",M=["component","directive","filter"],I=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],F={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:T,isReservedAttr:T,isUnknownElement:T,getTagNamespace:S,parsePlatformTagName:E,mustUseProp:T,async:!0,_lifecycleHooks:I},P=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function R(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var H=new RegExp("[^"+P.source+".$_\\d]");var B,U="__proto__"in{},z="undefined"!=typeof window,V="undefined"!=typeof WXEnvironment&&!!WXEnvironment.platform,K=V&&WXEnvironment.platform.toLowerCase(),J=z&&window.navigator.userAgent.toLowerCase(),q=J&&/msie|trident/.test(J),W=J&&J.indexOf("msie 9.0")>0,Z=J&&J.indexOf("edge/")>0,G=(J&&J.indexOf("android"),J&&/iphone|ipad|ipod|ios/.test(J)||"ios"===K),X=(J&&/chrome\/\d+/.test(J),J&&/phantomjs/.test(J),J&&J.match(/firefox\/(\d+)/)),Y={}.watch,Q=!1;if(z)try{var ee={};Object.defineProperty(ee,"passive",{get:function(){Q=!0}}),window.addEventListener("test-passive",null,ee)}catch(e){}var te=function(){return void 0===B&&(B=!z&&!V&&"undefined"!=typeof global&&(global.process&&"server"===global.process.env.VUE_ENV)),B},ne=z&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function re(e){return"function"==typeof e&&/native code/.test(e.toString())}var ie,oe="undefined"!=typeof Symbol&&re(Symbol)&&"undefined"!=typeof Reflect&&re(Reflect.ownKeys);ie="undefined"!=typeof Set&&re(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var ae=S,se=0,ce=function(){this.id=se++,this.subs=[]};ce.prototype.addSub=function(e){this.subs.push(e)},ce.prototype.removeSub=function(e){h(this.subs,e)},ce.prototype.depend=function(){ce.target&&ce.target.addDep(this)},ce.prototype.notify=function(){for(var e=this.subs.slice(),t=0,n=e.length;t<n;t++)e[t].update()},ce.target=null;var ue=[];function le(e){ue.push(e),ce.target=e}function fe(){ue.pop(),ce.target=ue[ue.length-1]}var pe=function(e,t,n,r,i,o,a,s){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=t&&t.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},de={child:{configurable:!0}};de.child.get=function(){return this.componentInstance},Object.defineProperties(pe.prototype,de);var ve=function(e){void 0===e&&(e="");var t=new pe;return t.text=e,t.isComment=!0,t};function he(e){return new pe(void 0,void 0,void 0,String(e))}function me(e){var t=new pe(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isComment=e.isComment,t.fnContext=e.fnContext,t.fnOptions=e.fnOptions,t.fnScopeId=e.fnScopeId,t.asyncMeta=e.asyncMeta,t.isCloned=!0,t}var ye=Array.prototype,ge=Object.create(ye);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(e){var t=ye[e];R(ge,e,function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];var i,o=t.apply(this,n),a=this.__ob__;switch(e){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2)}return i&&a.observeArray(i),a.dep.notify(),o})});var _e=Object.getOwnPropertyNames(ge),be=!0;function $e(e){be=e}var we=function(e){var t;this.value=e,this.dep=new ce,this.vmCount=0,R(e,"__ob__",this),Array.isArray(e)?(U?(t=ge,e.__proto__=t):function(e,t,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];R(e,o,t[o])}}(e,ge,_e),this.observeArray(e)):this.walk(e)};function Ce(e,t){var n;if(o(e)&&!(e instanceof pe))return y(e,"__ob__")&&e.__ob__ instanceof we?n=e.__ob__:be&&!te()&&(Array.isArray(e)||s(e))&&Object.isExtensible(e)&&!e._isVue&&(n=new we(e)),t&&n&&n.vmCount++,n}function xe(e,t,n,r,i){var o=new ce,a=Object.getOwnPropertyDescriptor(e,t);if(!a||!1!==a.configurable){var s=a&&a.get,c=a&&a.set;s&&!c||2!==arguments.length||(n=e[t]);var u=!i&&Ce(n);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=s?s.call(e):n;return ce.target&&(o.depend(),u&&(u.dep.depend(),Array.isArray(t)&&function e(t){for(var n=void 0,r=0,i=t.length;r<i;r++)(n=t[r])&&n.__ob__&&n.__ob__.dep.depend(),Array.isArray(n)&&e(n)}(t))),t},set:function(t){var r=s?s.call(e):n;t===r||t!=t&&r!=r||s&&!c||(c?c.call(e,t):n=t,u=!i&&Ce(t),o.notify())}})}}function ke(e,t,n){if(Array.isArray(e)&&c(t))return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(t in e&&!(t in Object.prototype))return e[t]=n,n;var r=e.__ob__;return e._isVue||r&&r.vmCount?n:r?(xe(r.value,t,n),r.dep.notify(),n):(e[t]=n,n)}function Ae(e,t){if(Array.isArray(e)&&c(t))e.splice(t,1);else{var n=e.__ob__;e._isVue||n&&n.vmCount||y(e,t)&&(delete e[t],n&&n.dep.notify())}}we.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)xe(e,t[n])},we.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)Ce(e[t])};var Oe=F.optionMergeStrategies;function Se(e,t){if(!t)return e;for(var n,r,i,o=oe?Reflect.ownKeys(t):Object.keys(t),a=0;a<o.length;a++)"__ob__"!==(n=o[a])&&(r=e[n],i=t[n],y(e,n)?r!==i&&s(r)&&s(i)&&Se(r,i):ke(e,n,i));return e}function Te(e,t,n){return n?function(){var r="function"==typeof t?t.call(n,n):t,i="function"==typeof e?e.call(n,n):e;return r?Se(r,i):i}:t?e?function(){return Se("function"==typeof t?t.call(this,this):t,"function"==typeof e?e.call(this,this):e)}:t:e}function Ee(e,t){var n=t?e?e.concat(t):Array.isArray(t)?t:[t]:e;return n?function(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}(n):n}function Ne(e,t,n,r){var i=Object.create(e||null);return t?A(i,t):i}Oe.data=function(e,t,n){return n?Te(e,t,n):t&&"function"!=typeof t?e:Te(e,t)},I.forEach(function(e){Oe[e]=Ee}),M.forEach(function(e){Oe[e+"s"]=Ne}),Oe.watch=function(e,t,n,r){if(e===Y&&(e=void 0),t===Y&&(t=void 0),!t)return Object.create(e||null);if(!e)return t;var i={};for(var o in A(i,e),t){var a=i[o],s=t[o];a&&!Array.isArray(a)&&(a=[a]),i[o]=a?a.concat(s):Array.isArray(s)?s:[s]}return i},Oe.props=Oe.methods=Oe.inject=Oe.computed=function(e,t,n,r){if(!e)return t;var i=Object.create(null);return A(i,e),t&&A(i,t),i},Oe.provide=Te;var je=function(e,t){return void 0===t?e:t};function De(e,t,n){if("function"==typeof t&&(t=t.options),function(e,t){var n=e.props;if(n){var r,i,o={};if(Array.isArray(n))for(r=n.length;r--;)"string"==typeof(i=n[r])&&(o[b(i)]={type:null});else if(s(n))for(var a in n)i=n[a],o[b(a)]=s(i)?i:{type:i};e.props=o}}(t),function(e,t){var n=e.inject;if(n){var r=e.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(s(n))for(var o in n){var a=n[o];r[o]=s(a)?A({from:o},a):{from:a}}}}(t),function(e){var t=e.directives;if(t)for(var n in t){var r=t[n];"function"==typeof r&&(t[n]={bind:r,update:r})}}(t),!t._base&&(t.extends&&(e=De(e,t.extends,n)),t.mixins))for(var r=0,i=t.mixins.length;r<i;r++)e=De(e,t.mixins[r],n);var o,a={};for(o in e)c(o);for(o in t)y(e,o)||c(o);function c(r){var i=Oe[r]||je;a[r]=i(e[r],t[r],n,r)}return a}function Le(e,t,n,r){if("string"==typeof n){var i=e[t];if(y(i,n))return i[n];var o=b(n);if(y(i,o))return i[o];var a=$(o);return y(i,a)?i[a]:i[n]||i[o]||i[a]}}function Me(e,t,n,r){var i=t[e],o=!y(n,e),a=n[e],s=Pe(Boolean,i.type);if(s>-1)if(o&&!y(i,"default"))a=!1;else if(""===a||a===C(e)){var c=Pe(String,i.type);(c<0||s<c)&&(a=!0)}if(void 0===a){a=function(e,t,n){if(!y(t,"default"))return;var r=t.default;if(e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n])return e._props[n];return"function"==typeof r&&"Function"!==Ie(t.type)?r.call(e):r}(r,i,e);var u=be;$e(!0),Ce(a),$e(u)}return a}function Ie(e){var t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:""}function Fe(e,t){return Ie(e)===Ie(t)}function Pe(e,t){if(!Array.isArray(t))return Fe(t,e)?0:-1;for(var n=0,r=t.length;n<r;n++)if(Fe(t[n],e))return n;return-1}function Re(e,t,n){le();try{if(t)for(var r=t;r=r.$parent;){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{if(!1===i[o].call(r,e,t,n))return}catch(e){Be(e,r,"errorCaptured hook")}}Be(e,t,n)}finally{fe()}}function He(e,t,n,r,i){var o;try{(o=n?e.apply(t,n):e.call(t))&&!o._isVue&&u(o)&&!o._handled&&(o.catch(function(e){return Re(e,r,i+" (Promise/async)")}),o._handled=!0)}catch(e){Re(e,r,i)}return o}function Be(e,t,n){if(F.errorHandler)try{return F.errorHandler.call(null,e,t,n)}catch(t){t!==e&&Ue(t,null,"config.errorHandler")}Ue(e,t,n)}function Ue(e,t,n){if(!z&&!V||"undefined"==typeof console)throw e;console.error(e)}var ze,Ve=!1,Ke=[],Je=!1;function qe(){Je=!1;var e=Ke.slice(0);Ke.length=0;for(var t=0;t<e.length;t++)e[t]()}if("undefined"!=typeof Promise&&re(Promise)){var We=Promise.resolve();ze=function(){We.then(qe),G&&setTimeout(S)},Ve=!0}else if(q||"undefined"==typeof MutationObserver||!re(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())ze="undefined"!=typeof setImmediate&&re(setImmediate)?function(){setImmediate(qe)}:function(){setTimeout(qe,0)};else{var Ze=1,Ge=new MutationObserver(qe),Xe=document.createTextNode(String(Ze));Ge.observe(Xe,{characterData:!0}),ze=function(){Ze=(Ze+1)%2,Xe.data=String(Ze)},Ve=!0}function Ye(e,t){var n;if(Ke.push(function(){if(e)try{e.call(t)}catch(e){Re(e,t,"nextTick")}else n&&n(t)}),Je||(Je=!0,ze()),!e&&"undefined"!=typeof Promise)return new Promise(function(e){n=e})}var Qe=new ie;function et(e){!function e(t,n){var r,i;var a=Array.isArray(t);if(!a&&!o(t)||Object.isFrozen(t)||t instanceof pe)return;if(t.__ob__){var s=t.__ob__.dep.id;if(n.has(s))return;n.add(s)}if(a)for(r=t.length;r--;)e(t[r],n);else for(i=Object.keys(t),r=i.length;r--;)e(t[i[r]],n)}(e,Qe),Qe.clear()}var tt=g(function(e){var t="&"===e.charAt(0),n="~"===(e=t?e.slice(1):e).charAt(0),r="!"===(e=n?e.slice(1):e).charAt(0);return{name:e=r?e.slice(1):e,once:n,capture:r,passive:t}});function nt(e,t){function n(){var e=arguments,r=n.fns;if(!Array.isArray(r))return He(r,null,arguments,t,"v-on handler");for(var i=r.slice(),o=0;o<i.length;o++)He(i[o],null,e,t,"v-on handler")}return n.fns=e,n}function rt(e,n,i,o,a,s){var c,u,l,f;for(c in e)u=e[c],l=n[c],f=tt(c),t(u)||(t(l)?(t(u.fns)&&(u=e[c]=nt(u,s)),r(f.once)&&(u=e[c]=a(f.name,u,f.capture)),i(f.name,u,f.capture,f.passive,f.params)):u!==l&&(l.fns=u,e[c]=l));for(c in n)t(e[c])&&o((f=tt(c)).name,n[c],f.capture)}function it(e,i,o){var a;e instanceof pe&&(e=e.data.hook||(e.data.hook={}));var s=e[i];function c(){o.apply(this,arguments),h(a.fns,c)}t(s)?a=nt([c]):n(s.fns)&&r(s.merged)?(a=s).fns.push(c):a=nt([s,c]),a.merged=!0,e[i]=a}function ot(e,t,r,i,o){if(n(t)){if(y(t,r))return e[r]=t[r],o||delete t[r],!0;if(y(t,i))return e[r]=t[i],o||delete t[i],!0}return!1}function at(e){return i(e)?[he(e)]:Array.isArray(e)?function e(o,a){var s=[];var c,u,l,f;for(c=0;c<o.length;c++)t(u=o[c])||"boolean"==typeof u||(l=s.length-1,f=s[l],Array.isArray(u)?u.length>0&&(st((u=e(u,(a||"")+"_"+c))[0])&&st(f)&&(s[l]=he(f.text+u[0].text),u.shift()),s.push.apply(s,u)):i(u)?st(f)?s[l]=he(f.text+u):""!==u&&s.push(he(u)):st(u)&&st(f)?s[l]=he(f.text+u.text):(r(o._isVList)&&n(u.tag)&&t(u.key)&&n(a)&&(u.key="__vlist"+a+"_"+c+"__"),s.push(u)));return s}(e):void 0}function st(e){return n(e)&&n(e.text)&&!1===e.isComment}function ct(e,t){if(e){for(var n=Object.create(null),r=oe?Reflect.ownKeys(e):Object.keys(e),i=0;i<r.length;i++){var o=r[i];if("__ob__"!==o){for(var a=e[o].from,s=t;s;){if(s._provided&&y(s._provided,a)){n[o]=s._provided[a];break}s=s.$parent}if(!s&&"default"in e[o]){var c=e[o].default;n[o]="function"==typeof c?c.call(t):c}}}return n}}function ut(e,t){if(!e||!e.length)return{};for(var n={},r=0,i=e.length;r<i;r++){var o=e[r],a=o.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,o.context!==t&&o.fnContext!==t||!a||null==a.slot)(n.default||(n.default=[])).push(o);else{var s=a.slot,c=n[s]||(n[s]=[]);"template"===o.tag?c.push.apply(c,o.children||[]):c.push(o)}}for(var u in n)n[u].every(lt)&&delete n[u];return n}function lt(e){return e.isComment&&!e.asyncFactory||" "===e.text}function ft(t,n,r){var i,o=Object.keys(n).length>0,a=t?!!t.$stable:!o,s=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&r&&r!==e&&s===r.$key&&!o&&!r.$hasNormal)return r;for(var c in i={},t)t[c]&&"$"!==c[0]&&(i[c]=pt(n,c,t[c]))}else i={};for(var u in n)u in i||(i[u]=dt(n,u));return t&&Object.isExtensible(t)&&(t._normalized=i),R(i,"$stable",a),R(i,"$key",s),R(i,"$hasNormal",o),i}function pt(e,t,n){var r=function(){var e=arguments.length?n.apply(null,arguments):n({});return(e=e&&"object"==typeof e&&!Array.isArray(e)?[e]:at(e))&&(0===e.length||1===e.length&&e[0].isComment)?void 0:e};return n.proxy&&Object.defineProperty(e,t,{get:r,enumerable:!0,configurable:!0}),r}function dt(e,t){return function(){return e[t]}}function vt(e,t){var r,i,a,s,c;if(Array.isArray(e)||"string"==typeof e)for(r=new Array(e.length),i=0,a=e.length;i<a;i++)r[i]=t(e[i],i);else if("number"==typeof e)for(r=new Array(e),i=0;i<e;i++)r[i]=t(i+1,i);else if(o(e))if(oe&&e[Symbol.iterator]){r=[];for(var u=e[Symbol.iterator](),l=u.next();!l.done;)r.push(t(l.value,r.length)),l=u.next()}else for(s=Object.keys(e),r=new Array(s.length),i=0,a=s.length;i<a;i++)c=s[i],r[i]=t(e[c],c,i);return n(r)||(r=[]),r._isVList=!0,r}function ht(e,t,n,r){var i,o=this.$scopedSlots[e];o?(n=n||{},r&&(n=A(A({},r),n)),i=o(n)||t):i=this.$slots[e]||t;var a=n&&n.slot;return a?this.$createElement("template",{slot:a},i):i}function mt(e){return Le(this.$options,"filters",e)||E}function yt(e,t){return Array.isArray(e)?-1===e.indexOf(t):e!==t}function gt(e,t,n,r,i){var o=F.keyCodes[t]||n;return i&&r&&!F.keyCodes[t]?yt(i,r):o?yt(o,e):r?C(r)!==t:void 0}function _t(e,t,n,r,i){if(n)if(o(n)){var a;Array.isArray(n)&&(n=O(n));var s=function(o){if("class"===o||"style"===o||v(o))a=e;else{var s=e.attrs&&e.attrs.type;a=r||F.mustUseProp(t,s,o)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var c=b(o),u=C(o);c in a||u in a||(a[o]=n[o],i&&((e.on||(e.on={}))["update:"+o]=function(e){n[o]=e}))};for(var c in n)s(c)}else;return e}function bt(e,t){var n=this._staticTrees||(this._staticTrees=[]),r=n[e];return r&&!t?r:(wt(r=n[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),"__static__"+e,!1),r)}function $t(e,t,n){return wt(e,"__once__"+t+(n?"_"+n:""),!0),e}function wt(e,t,n){if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]&&"string"!=typeof e[r]&&Ct(e[r],t+"_"+r,n);else Ct(e,t,n)}function Ct(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function xt(e,t){if(t)if(s(t)){var n=e.on=e.on?A({},e.on):{};for(var r in t){var i=n[r],o=t[r];n[r]=i?[].concat(i,o):o}}else;return e}function kt(e,t,n,r){t=t||{$stable:!n};for(var i=0;i<e.length;i++){var o=e[i];Array.isArray(o)?kt(o,t,n):o&&(o.proxy&&(o.fn.proxy=!0),t[o.key]=o.fn)}return r&&(t.$key=r),t}function At(e,t){for(var n=0;n<t.length;n+=2){var r=t[n];"string"==typeof r&&r&&(e[t[n]]=t[n+1])}return e}function Ot(e,t){return"string"==typeof e?t+e:e}function St(e){e._o=$t,e._n=f,e._s=l,e._l=vt,e._t=ht,e._q=N,e._i=j,e._m=bt,e._f=mt,e._k=gt,e._b=_t,e._v=he,e._e=ve,e._u=kt,e._g=xt,e._d=At,e._p=Ot}function Tt(t,n,i,o,a){var s,c=this,u=a.options;y(o,"_uid")?(s=Object.create(o))._original=o:(s=o,o=o._original);var l=r(u._compiled),f=!l;this.data=t,this.props=n,this.children=i,this.parent=o,this.listeners=t.on||e,this.injections=ct(u.inject,o),this.slots=function(){return c.$slots||ft(t.scopedSlots,c.$slots=ut(i,o)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return ft(t.scopedSlots,this.slots())}}),l&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=ft(t.scopedSlots,this.$slots)),u._scopeId?this._c=function(e,t,n,r){var i=Pt(s,e,t,n,r,f);return i&&!Array.isArray(i)&&(i.fnScopeId=u._scopeId,i.fnContext=o),i}:this._c=function(e,t,n,r){return Pt(s,e,t,n,r,f)}}function Et(e,t,n,r,i){var o=me(e);return o.fnContext=n,o.fnOptions=r,t.slot&&((o.data||(o.data={})).slot=t.slot),o}function Nt(e,t){for(var n in t)e[b(n)]=t[n]}St(Tt.prototype);var jt={init:function(e,t){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var r=e;jt.prepatch(r,r)}else{(e.componentInstance=function(e,t){var r={_isComponent:!0,_parentVnode:e,parent:t},i=e.data.inlineTemplate;n(i)&&(r.render=i.render,r.staticRenderFns=i.staticRenderFns);return new e.componentOptions.Ctor(r)}(e,Wt)).$mount(t?e.elm:void 0,t)}},prepatch:function(t,n){var r=n.componentOptions;!function(t,n,r,i,o){var a=i.data.scopedSlots,s=t.$scopedSlots,c=!!(a&&!a.$stable||s!==e&&!s.$stable||a&&t.$scopedSlots.$key!==a.$key),u=!!(o||t.$options._renderChildren||c);t.$options._parentVnode=i,t.$vnode=i,t._vnode&&(t._vnode.parent=i);if(t.$options._renderChildren=o,t.$attrs=i.data.attrs||e,t.$listeners=r||e,n&&t.$options.props){$e(!1);for(var l=t._props,f=t.$options._propKeys||[],p=0;p<f.length;p++){var d=f[p],v=t.$options.props;l[d]=Me(d,v,n,t)}$e(!0),t.$options.propsData=n}r=r||e;var h=t.$options._parentListeners;t.$options._parentListeners=r,qt(t,r,h),u&&(t.$slots=ut(o,i.context),t.$forceUpdate())}(n.componentInstance=t.componentInstance,r.propsData,r.listeners,n,r.children)},insert:function(e){var t,n=e.context,r=e.componentInstance;r._isMounted||(r._isMounted=!0,Yt(r,"mounted")),e.data.keepAlive&&(n._isMounted?((t=r)._inactive=!1,en.push(t)):Xt(r,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?function e(t,n){if(n&&(t._directInactive=!0,Gt(t)))return;if(!t._inactive){t._inactive=!0;for(var r=0;r<t.$children.length;r++)e(t.$children[r]);Yt(t,"deactivated")}}(t,!0):t.$destroy())}},Dt=Object.keys(jt);function Lt(i,a,s,c,l){if(!t(i)){var f=s.$options._base;if(o(i)&&(i=f.extend(i)),"function"==typeof i){var p;if(t(i.cid)&&void 0===(i=function(e,i){if(r(e.error)&&n(e.errorComp))return e.errorComp;if(n(e.resolved))return e.resolved;var a=Ht;a&&n(e.owners)&&-1===e.owners.indexOf(a)&&e.owners.push(a);if(r(e.loading)&&n(e.loadingComp))return e.loadingComp;if(a&&!n(e.owners)){var s=e.owners=[a],c=!0,l=null,f=null;a.$on("hook:destroyed",function(){return h(s,a)});var p=function(e){for(var t=0,n=s.length;t<n;t++)s[t].$forceUpdate();e&&(s.length=0,null!==l&&(clearTimeout(l),l=null),null!==f&&(clearTimeout(f),f=null))},d=D(function(t){e.resolved=Bt(t,i),c?s.length=0:p(!0)}),v=D(function(t){n(e.errorComp)&&(e.error=!0,p(!0))}),m=e(d,v);return o(m)&&(u(m)?t(e.resolved)&&m.then(d,v):u(m.component)&&(m.component.then(d,v),n(m.error)&&(e.errorComp=Bt(m.error,i)),n(m.loading)&&(e.loadingComp=Bt(m.loading,i),0===m.delay?e.loading=!0:l=setTimeout(function(){l=null,t(e.resolved)&&t(e.error)&&(e.loading=!0,p(!1))},m.delay||200)),n(m.timeout)&&(f=setTimeout(function(){f=null,t(e.resolved)&&v(null)},m.timeout)))),c=!1,e.loading?e.loadingComp:e.resolved}}(p=i,f)))return function(e,t,n,r,i){var o=ve();return o.asyncFactory=e,o.asyncMeta={data:t,context:n,children:r,tag:i},o}(p,a,s,c,l);a=a||{},$n(i),n(a.model)&&function(e,t){var r=e.model&&e.model.prop||"value",i=e.model&&e.model.event||"input";(t.attrs||(t.attrs={}))[r]=t.model.value;var o=t.on||(t.on={}),a=o[i],s=t.model.callback;n(a)?(Array.isArray(a)?-1===a.indexOf(s):a!==s)&&(o[i]=[s].concat(a)):o[i]=s}(i.options,a);var d=function(e,r,i){var o=r.options.props;if(!t(o)){var a={},s=e.attrs,c=e.props;if(n(s)||n(c))for(var u in o){var l=C(u);ot(a,c,u,l,!0)||ot(a,s,u,l,!1)}return a}}(a,i);if(r(i.options.functional))return function(t,r,i,o,a){var s=t.options,c={},u=s.props;if(n(u))for(var l in u)c[l]=Me(l,u,r||e);else n(i.attrs)&&Nt(c,i.attrs),n(i.props)&&Nt(c,i.props);var f=new Tt(i,c,a,o,t),p=s.render.call(null,f._c,f);if(p instanceof pe)return Et(p,i,f.parent,s);if(Array.isArray(p)){for(var d=at(p)||[],v=new Array(d.length),h=0;h<d.length;h++)v[h]=Et(d[h],i,f.parent,s);return v}}(i,d,a,s,c);var v=a.on;if(a.on=a.nativeOn,r(i.options.abstract)){var m=a.slot;a={},m&&(a.slot=m)}!function(e){for(var t=e.hook||(e.hook={}),n=0;n<Dt.length;n++){var r=Dt[n],i=t[r],o=jt[r];i===o||i&&i._merged||(t[r]=i?Mt(o,i):o)}}(a);var y=i.options.name||l;return new pe("vue-component-"+i.cid+(y?"-"+y:""),a,void 0,void 0,void 0,s,{Ctor:i,propsData:d,listeners:v,tag:l,children:c},p)}}}function Mt(e,t){var n=function(n,r){e(n,r),t(n,r)};return n._merged=!0,n}var It=1,Ft=2;function Pt(e,a,s,c,u,l){return(Array.isArray(s)||i(s))&&(u=c,c=s,s=void 0),r(l)&&(u=Ft),function(e,i,a,s,c){if(n(a)&&n(a.__ob__))return ve();n(a)&&n(a.is)&&(i=a.is);if(!i)return ve();Array.isArray(s)&&"function"==typeof s[0]&&((a=a||{}).scopedSlots={default:s[0]},s.length=0);c===Ft?s=at(s):c===It&&(s=function(e){for(var t=0;t<e.length;t++)if(Array.isArray(e[t]))return Array.prototype.concat.apply([],e);return e}(s));var u,l;if("string"==typeof i){var f;l=e.$vnode&&e.$vnode.ns||F.getTagNamespace(i),u=F.isReservedTag(i)?new pe(F.parsePlatformTagName(i),a,s,void 0,void 0,e):a&&a.pre||!n(f=Le(e.$options,"components",i))?new pe(i,a,s,void 0,void 0,e):Lt(f,a,e,s,i)}else u=Lt(i,a,e,s);return Array.isArray(u)?u:n(u)?(n(l)&&function e(i,o,a){i.ns=o;"foreignObject"===i.tag&&(o=void 0,a=!0);if(n(i.children))for(var s=0,c=i.children.length;s<c;s++){var u=i.children[s];n(u.tag)&&(t(u.ns)||r(a)&&"svg"!==u.tag)&&e(u,o,a)}}(u,l),n(a)&&function(e){o(e.style)&&et(e.style);o(e.class)&&et(e.class)}(a),u):ve()}(e,a,s,c,u)}var Rt,Ht=null;function Bt(e,t){return(e.__esModule||oe&&"Module"===e[Symbol.toStringTag])&&(e=e.default),o(e)?t.extend(e):e}function Ut(e){return e.isComment&&e.asyncFactory}function zt(e){if(Array.isArray(e))for(var t=0;t<e.length;t++){var r=e[t];if(n(r)&&(n(r.componentOptions)||Ut(r)))return r}}function Vt(e,t){Rt.$on(e,t)}function Kt(e,t){Rt.$off(e,t)}function Jt(e,t){var n=Rt;return function r(){null!==t.apply(null,arguments)&&n.$off(e,r)}}function qt(e,t,n){Rt=e,rt(t,n||{},Vt,Kt,Jt,e),Rt=void 0}var Wt=null;function Zt(e){var t=Wt;return Wt=e,function(){Wt=t}}function Gt(e){for(;e&&(e=e.$parent);)if(e._inactive)return!0;return!1}function Xt(e,t){if(t){if(e._directInactive=!1,Gt(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)Xt(e.$children[n]);Yt(e,"activated")}}function Yt(e,t){le();var n=e.$options[t],r=t+" hook";if(n)for(var i=0,o=n.length;i<o;i++)He(n[i],e,null,e,r);e._hasHookEvent&&e.$emit("hook:"+t),fe()}var Qt=[],en=[],tn={},nn=!1,rn=!1,on=0;var an=0,sn=Date.now;if(z&&!q){var cn=window.performance;cn&&"function"==typeof cn.now&&sn()>document.createEvent("Event").timeStamp&&(sn=function(){return cn.now()})}function un(){var e,t;for(an=sn(),rn=!0,Qt.sort(function(e,t){return e.id-t.id}),on=0;on<Qt.length;on++)(e=Qt[on]).before&&e.before(),t=e.id,tn[t]=null,e.run();var n=en.slice(),r=Qt.slice();on=Qt.length=en.length=0,tn={},nn=rn=!1,function(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,Xt(e[t],!0)}(n),function(e){var t=e.length;for(;t--;){var n=e[t],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&Yt(r,"updated")}}(r),ne&&F.devtools&&ne.emit("flush")}var ln=0,fn=function(e,t,n,r,i){this.vm=e,i&&(e._watcher=this),e._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++ln,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new ie,this.newDepIds=new ie,this.expression="","function"==typeof t?this.getter=t:(this.getter=function(e){if(!H.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}(t),this.getter||(this.getter=S)),this.value=this.lazy?void 0:this.get()};fn.prototype.get=function(){var e;le(this);var t=this.vm;try{e=this.getter.call(t,t)}catch(e){if(!this.user)throw e;Re(e,t,'getter for watcher "'+this.expression+'"')}finally{this.deep&&et(e),fe(),this.cleanupDeps()}return e},fn.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},fn.prototype.cleanupDeps=function(){for(var e=this.deps.length;e--;){var t=this.deps[e];this.newDepIds.has(t.id)||t.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},fn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():function(e){var t=e.id;if(null==tn[t]){if(tn[t]=!0,rn){for(var n=Qt.length-1;n>on&&Qt[n].id>e.id;)n--;Qt.splice(n+1,0,e)}else Qt.push(e);nn||(nn=!0,Ye(un))}}(this)},fn.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||o(e)||this.deep){var t=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,t)}catch(e){Re(e,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,e,t)}}},fn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},fn.prototype.depend=function(){for(var e=this.deps.length;e--;)this.deps[e].depend()},fn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||h(this.vm._watchers,this);for(var e=this.deps.length;e--;)this.deps[e].removeSub(this);this.active=!1}};var pn={enumerable:!0,configurable:!0,get:S,set:S};function dn(e,t,n){pn.get=function(){return this[t][n]},pn.set=function(e){this[t][n]=e},Object.defineProperty(e,n,pn)}function vn(e){e._watchers=[];var t=e.$options;t.props&&function(e,t){var n=e.$options.propsData||{},r=e._props={},i=e.$options._propKeys=[];e.$parent&&$e(!1);var o=function(o){i.push(o);var a=Me(o,t,n,e);xe(r,o,a),o in e||dn(e,"_props",o)};for(var a in t)o(a);$e(!0)}(e,t.props),t.methods&&function(e,t){e.$options.props;for(var n in t)e[n]="function"!=typeof t[n]?S:x(t[n],e)}(e,t.methods),t.data?function(e){var t=e.$options.data;s(t=e._data="function"==typeof t?function(e,t){le();try{return e.call(t,t)}catch(e){return Re(e,t,"data()"),{}}finally{fe()}}(t,e):t||{})||(t={});var n=Object.keys(t),r=e.$options.props,i=(e.$options.methods,n.length);for(;i--;){var o=n[i];r&&y(r,o)||(a=void 0,36!==(a=(o+"").charCodeAt(0))&&95!==a&&dn(e,"_data",o))}var a;Ce(t,!0)}(e):Ce(e._data={},!0),t.computed&&function(e,t){var n=e._computedWatchers=Object.create(null),r=te();for(var i in t){var o=t[i],a="function"==typeof o?o:o.get;r||(n[i]=new fn(e,a||S,S,hn)),i in e||mn(e,i,o)}}(e,t.computed),t.watch&&t.watch!==Y&&function(e,t){for(var n in t){var r=t[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)_n(e,n,r[i]);else _n(e,n,r)}}(e,t.watch)}var hn={lazy:!0};function mn(e,t,n){var r=!te();"function"==typeof n?(pn.get=r?yn(t):gn(n),pn.set=S):(pn.get=n.get?r&&!1!==n.cache?yn(t):gn(n.get):S,pn.set=n.set||S),Object.defineProperty(e,t,pn)}function yn(e){return function(){var t=this._computedWatchers&&this._computedWatchers[e];if(t)return t.dirty&&t.evaluate(),ce.target&&t.depend(),t.value}}function gn(e){return function(){return e.call(this,this)}}function _n(e,t,n,r){return s(n)&&(r=n,n=n.handler),"string"==typeof n&&(n=e[n]),e.$watch(t,n,r)}var bn=0;function $n(e){var t=e.options;if(e.super){var n=$n(e.super);if(n!==e.superOptions){e.superOptions=n;var r=function(e){var t,n=e.options,r=e.sealedOptions;for(var i in n)n[i]!==r[i]&&(t||(t={}),t[i]=n[i]);return t}(e);r&&A(e.extendOptions,r),(t=e.options=De(n,e.extendOptions)).name&&(t.components[t.name]=e)}}return t}function wn(e){this._init(e)}function Cn(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,r=n.cid,i=e._Ctor||(e._Ctor={});if(i[r])return i[r];var o=e.name||n.options.name,a=function(e){this._init(e)};return(a.prototype=Object.create(n.prototype)).constructor=a,a.cid=t++,a.options=De(n.options,e),a.super=n,a.options.props&&function(e){var t=e.options.props;for(var n in t)dn(e.prototype,"_props",n)}(a),a.options.computed&&function(e){var t=e.options.computed;for(var n in t)mn(e.prototype,n,t[n])}(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,M.forEach(function(e){a[e]=n[e]}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=e,a.sealedOptions=A({},a.options),i[r]=a,a}}function xn(e){return e&&(e.Ctor.options.name||e.tag)}function kn(e,t){return Array.isArray(e)?e.indexOf(t)>-1:"string"==typeof e?e.split(",").indexOf(t)>-1:(n=e,"[object RegExp]"===a.call(n)&&e.test(t));var n}function An(e,t){var n=e.cache,r=e.keys,i=e._vnode;for(var o in n){var a=n[o];if(a){var s=xn(a.componentOptions);s&&!t(s)&&On(n,o,r,i)}}}function On(e,t,n,r){var i=e[t];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),e[t]=null,h(n,t)}!function(t){t.prototype._init=function(t){var n=this;n._uid=bn++,n._isVue=!0,t&&t._isComponent?function(e,t){var n=e.$options=Object.create(e.constructor.options),r=t._parentVnode;n.parent=t.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}(n,t):n.$options=De($n(n.constructor),t||{},n),n._renderProxy=n,n._self=n,function(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}(n),function(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&qt(e,t)}(n),function(t){t._vnode=null,t._staticTrees=null;var n=t.$options,r=t.$vnode=n._parentVnode,i=r&&r.context;t.$slots=ut(n._renderChildren,i),t.$scopedSlots=e,t._c=function(e,n,r,i){return Pt(t,e,n,r,i,!1)},t.$createElement=function(e,n,r,i){return Pt(t,e,n,r,i,!0)};var o=r&&r.data;xe(t,"$attrs",o&&o.attrs||e,null,!0),xe(t,"$listeners",n._parentListeners||e,null,!0)}(n),Yt(n,"beforeCreate"),function(e){var t=ct(e.$options.inject,e);t&&($e(!1),Object.keys(t).forEach(function(n){xe(e,n,t[n])}),$e(!0))}(n),vn(n),function(e){var t=e.$options.provide;t&&(e._provided="function"==typeof t?t.call(e):t)}(n),Yt(n,"created"),n.$options.el&&n.$mount(n.$options.el)}}(wn),function(e){var t={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",n),e.prototype.$set=ke,e.prototype.$delete=Ae,e.prototype.$watch=function(e,t,n){if(s(t))return _n(this,e,t,n);(n=n||{}).user=!0;var r=new fn(this,e,t,n);if(n.immediate)try{t.call(this,r.value)}catch(e){Re(e,this,'callback for immediate watcher "'+r.expression+'"')}return function(){r.teardown()}}}(wn),function(e){var t=/^hook:/;e.prototype.$on=function(e,n){var r=this;if(Array.isArray(e))for(var i=0,o=e.length;i<o;i++)r.$on(e[i],n);else(r._events[e]||(r._events[e]=[])).push(n),t.test(e)&&(r._hasHookEvent=!0);return r},e.prototype.$once=function(e,t){var n=this;function r(){n.$off(e,r),t.apply(n,arguments)}return r.fn=t,n.$on(e,r),n},e.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(e)){for(var r=0,i=e.length;r<i;r++)n.$off(e[r],t);return n}var o,a=n._events[e];if(!a)return n;if(!t)return n._events[e]=null,n;for(var s=a.length;s--;)if((o=a[s])===t||o.fn===t){a.splice(s,1);break}return n},e.prototype.$emit=function(e){var t=this._events[e];if(t){t=t.length>1?k(t):t;for(var n=k(arguments,1),r='event handler for "'+e+'"',i=0,o=t.length;i<o;i++)He(t[i],this,n,this,r)}return this}}(wn),function(e){e.prototype._update=function(e,t){var n=this,r=n.$el,i=n._vnode,o=Zt(n);n._vnode=e,n.$el=i?n.__patch__(i,e):n.__patch__(n.$el,e,t,!1),o(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},e.prototype.$forceUpdate=function(){this._watcher&&this._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){Yt(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||h(t.$children,e),e._watcher&&e._watcher.teardown();for(var n=e._watchers.length;n--;)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),Yt(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}(wn),function(e){St(e.prototype),e.prototype.$nextTick=function(e){return Ye(e,this)},e.prototype._render=function(){var e,t=this,n=t.$options,r=n.render,i=n._parentVnode;i&&(t.$scopedSlots=ft(i.data.scopedSlots,t.$slots,t.$scopedSlots)),t.$vnode=i;try{Ht=t,e=r.call(t._renderProxy,t.$createElement)}catch(n){Re(n,t,"render"),e=t._vnode}finally{Ht=null}return Array.isArray(e)&&1===e.length&&(e=e[0]),e instanceof pe||(e=ve()),e.parent=i,e}}(wn);var Sn=[String,RegExp,Array],Tn={KeepAlive:{name:"keep-alive",abstract:!0,props:{include:Sn,exclude:Sn,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)On(this.cache,e,this.keys)},mounted:function(){var e=this;this.$watch("include",function(t){An(e,function(e){return kn(t,e)})}),this.$watch("exclude",function(t){An(e,function(e){return!kn(t,e)})})},render:function(){var e=this.$slots.default,t=zt(e),n=t&&t.componentOptions;if(n){var r=xn(n),i=this.include,o=this.exclude;if(i&&(!r||!kn(i,r))||o&&r&&kn(o,r))return t;var a=this.cache,s=this.keys,c=null==t.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):t.key;a[c]?(t.componentInstance=a[c].componentInstance,h(s,c),s.push(c)):(a[c]=t,s.push(c),this.max&&s.length>parseInt(this.max)&&On(a,s[0],s,this._vnode)),t.data.keepAlive=!0}return t||e&&e[0]}}};!function(e){var t={get:function(){return F}};Object.defineProperty(e,"config",t),e.util={warn:ae,extend:A,mergeOptions:De,defineReactive:xe},e.set=ke,e.delete=Ae,e.nextTick=Ye,e.observable=function(e){return Ce(e),e},e.options=Object.create(null),M.forEach(function(t){e.options[t+"s"]=Object.create(null)}),e.options._base=e,A(e.options.components,Tn),function(e){e.use=function(e){var t=this._installedPlugins||(this._installedPlugins=[]);if(t.indexOf(e)>-1)return this;var n=k(arguments,1);return n.unshift(this),"function"==typeof e.install?e.install.apply(e,n):"function"==typeof e&&e.apply(null,n),t.push(e),this}}(e),function(e){e.mixin=function(e){return this.options=De(this.options,e),this}}(e),Cn(e),function(e){M.forEach(function(t){e[t]=function(e,n){return n?("component"===t&&s(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&"function"==typeof n&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}})}(e)}(wn),Object.defineProperty(wn.prototype,"$isServer",{get:te}),Object.defineProperty(wn.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(wn,"FunctionalRenderContext",{value:Tt}),wn.version="2.6.11";var En=p("style,class"),Nn=p("input,textarea,option,select,progress"),jn=function(e,t,n){return"value"===n&&Nn(e)&&"button"!==t||"selected"===n&&"option"===e||"checked"===n&&"input"===e||"muted"===n&&"video"===e},Dn=p("contenteditable,draggable,spellcheck"),Ln=p("events,caret,typing,plaintext-only"),Mn=function(e,t){return Hn(t)||"false"===t?"false":"contenteditable"===e&&Ln(t)?t:"true"},In=p("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),Fn="http://www.w3.org/1999/xlink",Pn=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},Rn=function(e){return Pn(e)?e.slice(6,e.length):""},Hn=function(e){return null==e||!1===e};function Bn(e){for(var t=e.data,r=e,i=e;n(i.componentInstance);)(i=i.componentInstance._vnode)&&i.data&&(t=Un(i.data,t));for(;n(r=r.parent);)r&&r.data&&(t=Un(t,r.data));return function(e,t){if(n(e)||n(t))return zn(e,Vn(t));return""}(t.staticClass,t.class)}function Un(e,t){return{staticClass:zn(e.staticClass,t.staticClass),class:n(e.class)?[e.class,t.class]:t.class}}function zn(e,t){return e?t?e+" "+t:e:t||""}function Vn(e){return Array.isArray(e)?function(e){for(var t,r="",i=0,o=e.length;i<o;i++)n(t=Vn(e[i]))&&""!==t&&(r&&(r+=" "),r+=t);return r}(e):o(e)?function(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}(e):"string"==typeof e?e:""}var Kn={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},Jn=p("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),qn=p("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Wn=function(e){return Jn(e)||qn(e)};function Zn(e){return qn(e)?"svg":"math"===e?"math":void 0}var Gn=Object.create(null);var Xn=p("text,number,password,search,email,tel,url");function Yn(e){if("string"==typeof e){var t=document.querySelector(e);return t||document.createElement("div")}return e}var Qn=Object.freeze({createElement:function(e,t){var n=document.createElement(e);return"select"!==e?n:(t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n)},createElementNS:function(e,t){return document.createElementNS(Kn[e],t)},createTextNode:function(e){return document.createTextNode(e)},createComment:function(e){return document.createComment(e)},insertBefore:function(e,t,n){e.insertBefore(t,n)},removeChild:function(e,t){e.removeChild(t)},appendChild:function(e,t){e.appendChild(t)},parentNode:function(e){return e.parentNode},nextSibling:function(e){return e.nextSibling},tagName:function(e){return e.tagName},setTextContent:function(e,t){e.textContent=t},setStyleScope:function(e,t){e.setAttribute(t,"")}}),er={create:function(e,t){tr(t)},update:function(e,t){e.data.ref!==t.data.ref&&(tr(e,!0),tr(t))},destroy:function(e){tr(e,!0)}};function tr(e,t){var r=e.data.ref;if(n(r)){var i=e.context,o=e.componentInstance||e.elm,a=i.$refs;t?Array.isArray(a[r])?h(a[r],o):a[r]===o&&(a[r]=void 0):e.data.refInFor?Array.isArray(a[r])?a[r].indexOf(o)<0&&a[r].push(o):a[r]=[o]:a[r]=o}}var nr=new pe("",{},[]),rr=["create","activate","update","remove","destroy"];function ir(e,i){return e.key===i.key&&(e.tag===i.tag&&e.isComment===i.isComment&&n(e.data)===n(i.data)&&function(e,t){if("input"!==e.tag)return!0;var r,i=n(r=e.data)&&n(r=r.attrs)&&r.type,o=n(r=t.data)&&n(r=r.attrs)&&r.type;return i===o||Xn(i)&&Xn(o)}(e,i)||r(e.isAsyncPlaceholder)&&e.asyncFactory===i.asyncFactory&&t(i.asyncFactory.error))}function or(e,t,r){var i,o,a={};for(i=t;i<=r;++i)n(o=e[i].key)&&(a[o]=i);return a}var ar={create:sr,update:sr,destroy:function(e){sr(e,nr)}};function sr(e,t){(e.data.directives||t.data.directives)&&function(e,t){var n,r,i,o=e===nr,a=t===nr,s=ur(e.data.directives,e.context),c=ur(t.data.directives,t.context),u=[],l=[];for(n in c)r=s[n],i=c[n],r?(i.oldValue=r.value,i.oldArg=r.arg,fr(i,"update",t,e),i.def&&i.def.componentUpdated&&l.push(i)):(fr(i,"bind",t,e),i.def&&i.def.inserted&&u.push(i));if(u.length){var f=function(){for(var n=0;n<u.length;n++)fr(u[n],"inserted",t,e)};o?it(t,"insert",f):f()}l.length&&it(t,"postpatch",function(){for(var n=0;n<l.length;n++)fr(l[n],"componentUpdated",t,e)});if(!o)for(n in s)c[n]||fr(s[n],"unbind",e,e,a)}(e,t)}var cr=Object.create(null);function ur(e,t){var n,r,i=Object.create(null);if(!e)return i;for(n=0;n<e.length;n++)(r=e[n]).modifiers||(r.modifiers=cr),i[lr(r)]=r,r.def=Le(t.$options,"directives",r.name);return i}function lr(e){return e.rawName||e.name+"."+Object.keys(e.modifiers||{}).join(".")}function fr(e,t,n,r,i){var o=e.def&&e.def[t];if(o)try{o(n.elm,e,n,r,i)}catch(r){Re(r,n.context,"directive "+e.name+" "+t+" hook")}}var pr=[er,ar];function dr(e,r){var i=r.componentOptions;if(!(n(i)&&!1===i.Ctor.options.inheritAttrs||t(e.data.attrs)&&t(r.data.attrs))){var o,a,s=r.elm,c=e.data.attrs||{},u=r.data.attrs||{};for(o in n(u.__ob__)&&(u=r.data.attrs=A({},u)),u)a=u[o],c[o]!==a&&vr(s,o,a);for(o in(q||Z)&&u.value!==c.value&&vr(s,"value",u.value),c)t(u[o])&&(Pn(o)?s.removeAttributeNS(Fn,Rn(o)):Dn(o)||s.removeAttribute(o))}}function vr(e,t,n){e.tagName.indexOf("-")>-1?hr(e,t,n):In(t)?Hn(n)?e.removeAttribute(t):(n="allowfullscreen"===t&&"EMBED"===e.tagName?"true":t,e.setAttribute(t,n)):Dn(t)?e.setAttribute(t,Mn(t,n)):Pn(t)?Hn(n)?e.removeAttributeNS(Fn,Rn(t)):e.setAttributeNS(Fn,t,n):hr(e,t,n)}function hr(e,t,n){if(Hn(n))e.removeAttribute(t);else{if(q&&!W&&"TEXTAREA"===e.tagName&&"placeholder"===t&&""!==n&&!e.__ieph){var r=function(t){t.stopImmediatePropagation(),e.removeEventListener("input",r)};e.addEventListener("input",r),e.__ieph=!0}e.setAttribute(t,n)}}var mr={create:dr,update:dr};function yr(e,r){var i=r.elm,o=r.data,a=e.data;if(!(t(o.staticClass)&&t(o.class)&&(t(a)||t(a.staticClass)&&t(a.class)))){var s=Bn(r),c=i._transitionClasses;n(c)&&(s=zn(s,Vn(c))),s!==i._prevClass&&(i.setAttribute("class",s),i._prevClass=s)}}var gr,_r,br,$r,wr,Cr,xr={create:yr,update:yr},kr=/[\w).+\-_$\]]/;function Ar(e){var t,n,r,i,o,a=!1,s=!1,c=!1,u=!1,l=0,f=0,p=0,d=0;for(r=0;r<e.length;r++)if(n=t,t=e.charCodeAt(r),a)39===t&&92!==n&&(a=!1);else if(s)34===t&&92!==n&&(s=!1);else if(c)96===t&&92!==n&&(c=!1);else if(u)47===t&&92!==n&&(u=!1);else if(124!==t||124===e.charCodeAt(r+1)||124===e.charCodeAt(r-1)||l||f||p){switch(t){case 34:s=!0;break;case 39:a=!0;break;case 96:c=!0;break;case 40:p++;break;case 41:p--;break;case 91:f++;break;case 93:f--;break;case 123:l++;break;case 125:l--}if(47===t){for(var v=r-1,h=void 0;v>=0&&" "===(h=e.charAt(v));v--);h&&kr.test(h)||(u=!0)}}else void 0===i?(d=r+1,i=e.slice(0,r).trim()):m();function m(){(o||(o=[])).push(e.slice(d,r).trim()),d=r+1}if(void 0===i?i=e.slice(0,r).trim():0!==d&&m(),o)for(r=0;r<o.length;r++)i=Or(i,o[r]);return i}function Or(e,t){var n=t.indexOf("(");if(n<0)return'_f("'+t+'")('+e+")";var r=t.slice(0,n),i=t.slice(n+1);return'_f("'+r+'")('+e+(")"!==i?","+i:i)}function Sr(e,t){console.error("[Vue compiler]: "+e)}function Tr(e,t){return e?e.map(function(e){return e[t]}).filter(function(e){return e}):[]}function Er(e,t,n,r,i){(e.props||(e.props=[])).push(Rr({name:t,value:n,dynamic:i},r)),e.plain=!1}function Nr(e,t,n,r,i){(i?e.dynamicAttrs||(e.dynamicAttrs=[]):e.attrs||(e.attrs=[])).push(Rr({name:t,value:n,dynamic:i},r)),e.plain=!1}function jr(e,t,n,r){e.attrsMap[t]=n,e.attrsList.push(Rr({name:t,value:n},r))}function Dr(e,t,n,r,i,o,a,s){(e.directives||(e.directives=[])).push(Rr({name:t,rawName:n,value:r,arg:i,isDynamicArg:o,modifiers:a},s)),e.plain=!1}function Lr(e,t,n){return n?"_p("+t+',"'+e+'")':e+t}function Mr(t,n,r,i,o,a,s,c){var u;(i=i||e).right?c?n="("+n+")==='click'?'contextmenu':("+n+")":"click"===n&&(n="contextmenu",delete i.right):i.middle&&(c?n="("+n+")==='click'?'mouseup':("+n+")":"click"===n&&(n="mouseup")),i.capture&&(delete i.capture,n=Lr("!",n,c)),i.once&&(delete i.once,n=Lr("~",n,c)),i.passive&&(delete i.passive,n=Lr("&",n,c)),i.native?(delete i.native,u=t.nativeEvents||(t.nativeEvents={})):u=t.events||(t.events={});var l=Rr({value:r.trim(),dynamic:c},s);i!==e&&(l.modifiers=i);var f=u[n];Array.isArray(f)?o?f.unshift(l):f.push(l):u[n]=f?o?[l,f]:[f,l]:l,t.plain=!1}function Ir(e,t,n){var r=Fr(e,":"+t)||Fr(e,"v-bind:"+t);if(null!=r)return Ar(r);if(!1!==n){var i=Fr(e,t);if(null!=i)return JSON.stringify(i)}}function Fr(e,t,n){var r;if(null!=(r=e.attrsMap[t]))for(var i=e.attrsList,o=0,a=i.length;o<a;o++)if(i[o].name===t){i.splice(o,1);break}return n&&delete e.attrsMap[t],r}function Pr(e,t){for(var n=e.attrsList,r=0,i=n.length;r<i;r++){var o=n[r];if(t.test(o.name))return n.splice(r,1),o}}function Rr(e,t){return t&&(null!=t.start&&(e.start=t.start),null!=t.end&&(e.end=t.end)),e}function Hr(e,t,n){var r=n||{},i=r.number,o="$$v";r.trim&&(o="(typeof $$v === 'string'? $$v.trim(): $$v)"),i&&(o="_n("+o+")");var a=Br(t,o);e.model={value:"("+t+")",expression:JSON.stringify(t),callback:"function ($$v) {"+a+"}"}}function Br(e,t){var n=function(e){if(e=e.trim(),gr=e.length,e.indexOf("[")<0||e.lastIndexOf("]")<gr-1)return($r=e.lastIndexOf("."))>-1?{exp:e.slice(0,$r),key:'"'+e.slice($r+1)+'"'}:{exp:e,key:null};_r=e,$r=wr=Cr=0;for(;!zr();)Vr(br=Ur())?Jr(br):91===br&&Kr(br);return{exp:e.slice(0,wr),key:e.slice(wr+1,Cr)}}(e);return null===n.key?e+"="+t:"$set("+n.exp+", "+n.key+", "+t+")"}function Ur(){return _r.charCodeAt(++$r)}function zr(){return $r>=gr}function Vr(e){return 34===e||39===e}function Kr(e){var t=1;for(wr=$r;!zr();)if(Vr(e=Ur()))Jr(e);else if(91===e&&t++,93===e&&t--,0===t){Cr=$r;break}}function Jr(e){for(var t=e;!zr()&&(e=Ur())!==t;);}var qr,Wr="__r",Zr="__c";function Gr(e,t,n){var r=qr;return function i(){null!==t.apply(null,arguments)&&Qr(e,i,n,r)}}var Xr=Ve&&!(X&&Number(X[1])<=53);function Yr(e,t,n,r){if(Xr){var i=an,o=t;t=o._wrapper=function(e){if(e.target===e.currentTarget||e.timeStamp>=i||e.timeStamp<=0||e.target.ownerDocument!==document)return o.apply(this,arguments)}}qr.addEventListener(e,t,Q?{capture:n,passive:r}:n)}function Qr(e,t,n,r){(r||qr).removeEventListener(e,t._wrapper||t,n)}function ei(e,r){if(!t(e.data.on)||!t(r.data.on)){var i=r.data.on||{},o=e.data.on||{};qr=r.elm,function(e){if(n(e[Wr])){var t=q?"change":"input";e[t]=[].concat(e[Wr],e[t]||[]),delete e[Wr]}n(e[Zr])&&(e.change=[].concat(e[Zr],e.change||[]),delete e[Zr])}(i),rt(i,o,Yr,Qr,Gr,r.context),qr=void 0}}var ti,ni={create:ei,update:ei};function ri(e,r){if(!t(e.data.domProps)||!t(r.data.domProps)){var i,o,a=r.elm,s=e.data.domProps||{},c=r.data.domProps||{};for(i in n(c.__ob__)&&(c=r.data.domProps=A({},c)),s)i in c||(a[i]="");for(i in c){if(o=c[i],"textContent"===i||"innerHTML"===i){if(r.children&&(r.children.length=0),o===s[i])continue;1===a.childNodes.length&&a.removeChild(a.childNodes[0])}if("value"===i&&"PROGRESS"!==a.tagName){a._value=o;var u=t(o)?"":String(o);ii(a,u)&&(a.value=u)}else if("innerHTML"===i&&qn(a.tagName)&&t(a.innerHTML)){(ti=ti||document.createElement("div")).innerHTML="<svg>"+o+"</svg>";for(var l=ti.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;l.firstChild;)a.appendChild(l.firstChild)}else if(o!==s[i])try{a[i]=o}catch(e){}}}}function ii(e,t){return!e.composing&&("OPTION"===e.tagName||function(e,t){var n=!0;try{n=document.activeElement!==e}catch(e){}return n&&e.value!==t}(e,t)||function(e,t){var r=e.value,i=e._vModifiers;if(n(i)){if(i.number)return f(r)!==f(t);if(i.trim)return r.trim()!==t.trim()}return r!==t}(e,t))}var oi={create:ri,update:ri},ai=g(function(e){var t={},n=/:(.+)/;return e.split(/;(?![^(]*\))/g).forEach(function(e){if(e){var r=e.split(n);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t});function si(e){var t=ci(e.style);return e.staticStyle?A(e.staticStyle,t):t}function ci(e){return Array.isArray(e)?O(e):"string"==typeof e?ai(e):e}var ui,li=/^--/,fi=/\s*!important$/,pi=function(e,t,n){if(li.test(t))e.style.setProperty(t,n);else if(fi.test(n))e.style.setProperty(C(t),n.replace(fi,""),"important");else{var r=vi(t);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)e.style[r]=n[i];else e.style[r]=n}},di=["Webkit","Moz","ms"],vi=g(function(e){if(ui=ui||document.createElement("div").style,"filter"!==(e=b(e))&&e in ui)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<di.length;n++){var r=di[n]+t;if(r in ui)return r}});function hi(e,r){var i=r.data,o=e.data;if(!(t(i.staticStyle)&&t(i.style)&&t(o.staticStyle)&&t(o.style))){var a,s,c=r.elm,u=o.staticStyle,l=o.normalizedStyle||o.style||{},f=u||l,p=ci(r.data.style)||{};r.data.normalizedStyle=n(p.__ob__)?A({},p):p;var d=function(e,t){var n,r={};if(t)for(var i=e;i.componentInstance;)(i=i.componentInstance._vnode)&&i.data&&(n=si(i.data))&&A(r,n);(n=si(e.data))&&A(r,n);for(var o=e;o=o.parent;)o.data&&(n=si(o.data))&&A(r,n);return r}(r,!0);for(s in f)t(d[s])&&pi(c,s,"");for(s in d)(a=d[s])!==f[s]&&pi(c,s,null==a?"":a)}}var mi={create:hi,update:hi},yi=/\s+/;function gi(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(yi).forEach(function(t){return e.classList.add(t)}):e.classList.add(t);else{var n=" "+(e.getAttribute("class")||"")+" ";n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim())}}function _i(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(yi).forEach(function(t){return e.classList.remove(t)}):e.classList.remove(t),e.classList.length||e.removeAttribute("class");else{for(var n=" "+(e.getAttribute("class")||"")+" ",r=" "+t+" ";n.indexOf(r)>=0;)n=n.replace(r," ");(n=n.trim())?e.setAttribute("class",n):e.removeAttribute("class")}}function bi(e){if(e){if("object"==typeof e){var t={};return!1!==e.css&&A(t,$i(e.name||"v")),A(t,e),t}return"string"==typeof e?$i(e):void 0}}var $i=g(function(e){return{enterClass:e+"-enter",enterToClass:e+"-enter-to",enterActiveClass:e+"-enter-active",leaveClass:e+"-leave",leaveToClass:e+"-leave-to",leaveActiveClass:e+"-leave-active"}}),wi=z&&!W,Ci="transition",xi="animation",ki="transition",Ai="transitionend",Oi="animation",Si="animationend";wi&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(ki="WebkitTransition",Ai="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Oi="WebkitAnimation",Si="webkitAnimationEnd"));var Ti=z?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(e){return e()};function Ei(e){Ti(function(){Ti(e)})}function Ni(e,t){var n=e._transitionClasses||(e._transitionClasses=[]);n.indexOf(t)<0&&(n.push(t),gi(e,t))}function ji(e,t){e._transitionClasses&&h(e._transitionClasses,t),_i(e,t)}function Di(e,t,n){var r=Mi(e,t),i=r.type,o=r.timeout,a=r.propCount;if(!i)return n();var s=i===Ci?Ai:Si,c=0,u=function(){e.removeEventListener(s,l),n()},l=function(t){t.target===e&&++c>=a&&u()};setTimeout(function(){c<a&&u()},o+1),e.addEventListener(s,l)}var Li=/\b(transform|all)(,|$)/;function Mi(e,t){var n,r=window.getComputedStyle(e),i=(r[ki+"Delay"]||"").split(", "),o=(r[ki+"Duration"]||"").split(", "),a=Ii(i,o),s=(r[Oi+"Delay"]||"").split(", "),c=(r[Oi+"Duration"]||"").split(", "),u=Ii(s,c),l=0,f=0;return t===Ci?a>0&&(n=Ci,l=a,f=o.length):t===xi?u>0&&(n=xi,l=u,f=c.length):f=(n=(l=Math.max(a,u))>0?a>u?Ci:xi:null)?n===Ci?o.length:c.length:0,{type:n,timeout:l,propCount:f,hasTransform:n===Ci&&Li.test(r[ki+"Property"])}}function Ii(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max.apply(null,t.map(function(t,n){return Fi(t)+Fi(e[n])}))}function Fi(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function Pi(e,r){var i=e.elm;n(i._leaveCb)&&(i._leaveCb.cancelled=!0,i._leaveCb());var a=bi(e.data.transition);if(!t(a)&&!n(i._enterCb)&&1===i.nodeType){for(var s=a.css,c=a.type,u=a.enterClass,l=a.enterToClass,p=a.enterActiveClass,d=a.appearClass,v=a.appearToClass,h=a.appearActiveClass,m=a.beforeEnter,y=a.enter,g=a.afterEnter,_=a.enterCancelled,b=a.beforeAppear,$=a.appear,w=a.afterAppear,C=a.appearCancelled,x=a.duration,k=Wt,A=Wt.$vnode;A&&A.parent;)k=A.context,A=A.parent;var O=!k._isMounted||!e.isRootInsert;if(!O||$||""===$){var S=O&&d?d:u,T=O&&h?h:p,E=O&&v?v:l,N=O&&b||m,j=O&&"function"==typeof $?$:y,L=O&&w||g,M=O&&C||_,I=f(o(x)?x.enter:x),F=!1!==s&&!W,P=Bi(j),R=i._enterCb=D(function(){F&&(ji(i,E),ji(i,T)),R.cancelled?(F&&ji(i,S),M&&M(i)):L&&L(i),i._enterCb=null});e.data.show||it(e,"insert",function(){var t=i.parentNode,n=t&&t._pending&&t._pending[e.key];n&&n.tag===e.tag&&n.elm._leaveCb&&n.elm._leaveCb(),j&&j(i,R)}),N&&N(i),F&&(Ni(i,S),Ni(i,T),Ei(function(){ji(i,S),R.cancelled||(Ni(i,E),P||(Hi(I)?setTimeout(R,I):Di(i,c,R)))})),e.data.show&&(r&&r(),j&&j(i,R)),F||P||R()}}}function Ri(e,r){var i=e.elm;n(i._enterCb)&&(i._enterCb.cancelled=!0,i._enterCb());var a=bi(e.data.transition);if(t(a)||1!==i.nodeType)return r();if(!n(i._leaveCb)){var s=a.css,c=a.type,u=a.leaveClass,l=a.leaveToClass,p=a.leaveActiveClass,d=a.beforeLeave,v=a.leave,h=a.afterLeave,m=a.leaveCancelled,y=a.delayLeave,g=a.duration,_=!1!==s&&!W,b=Bi(v),$=f(o(g)?g.leave:g),w=i._leaveCb=D(function(){i.parentNode&&i.parentNode._pending&&(i.parentNode._pending[e.key]=null),_&&(ji(i,l),ji(i,p)),w.cancelled?(_&&ji(i,u),m&&m(i)):(r(),h&&h(i)),i._leaveCb=null});y?y(C):C()}function C(){w.cancelled||(!e.data.show&&i.parentNode&&((i.parentNode._pending||(i.parentNode._pending={}))[e.key]=e),d&&d(i),_&&(Ni(i,u),Ni(i,p),Ei(function(){ji(i,u),w.cancelled||(Ni(i,l),b||(Hi($)?setTimeout(w,$):Di(i,c,w)))})),v&&v(i,w),_||b||w())}}function Hi(e){return"number"==typeof e&&!isNaN(e)}function Bi(e){if(t(e))return!1;var r=e.fns;return n(r)?Bi(Array.isArray(r)?r[0]:r):(e._length||e.length)>1}function Ui(e,t){!0!==t.data.show&&Pi(t)}var zi=function(e){var o,a,s={},c=e.modules,u=e.nodeOps;for(o=0;o<rr.length;++o)for(s[rr[o]]=[],a=0;a<c.length;++a)n(c[a][rr[o]])&&s[rr[o]].push(c[a][rr[o]]);function l(e){var t=u.parentNode(e);n(t)&&u.removeChild(t,e)}function f(e,t,i,o,a,c,l){if(n(e.elm)&&n(c)&&(e=c[l]=me(e)),e.isRootInsert=!a,!function(e,t,i,o){var a=e.data;if(n(a)){var c=n(e.componentInstance)&&a.keepAlive;if(n(a=a.hook)&&n(a=a.init)&&a(e,!1),n(e.componentInstance))return d(e,t),v(i,e.elm,o),r(c)&&function(e,t,r,i){for(var o,a=e;a.componentInstance;)if(a=a.componentInstance._vnode,n(o=a.data)&&n(o=o.transition)){for(o=0;o<s.activate.length;++o)s.activate[o](nr,a);t.push(a);break}v(r,e.elm,i)}(e,t,i,o),!0}}(e,t,i,o)){var f=e.data,p=e.children,m=e.tag;n(m)?(e.elm=e.ns?u.createElementNS(e.ns,m):u.createElement(m,e),g(e),h(e,p,t),n(f)&&y(e,t),v(i,e.elm,o)):r(e.isComment)?(e.elm=u.createComment(e.text),v(i,e.elm,o)):(e.elm=u.createTextNode(e.text),v(i,e.elm,o))}}function d(e,t){n(e.data.pendingInsert)&&(t.push.apply(t,e.data.pendingInsert),e.data.pendingInsert=null),e.elm=e.componentInstance.$el,m(e)?(y(e,t),g(e)):(tr(e),t.push(e))}function v(e,t,r){n(e)&&(n(r)?u.parentNode(r)===e&&u.insertBefore(e,t,r):u.appendChild(e,t))}function h(e,t,n){if(Array.isArray(t))for(var r=0;r<t.length;++r)f(t[r],n,e.elm,null,!0,t,r);else i(e.text)&&u.appendChild(e.elm,u.createTextNode(String(e.text)))}function m(e){for(;e.componentInstance;)e=e.componentInstance._vnode;return n(e.tag)}function y(e,t){for(var r=0;r<s.create.length;++r)s.create[r](nr,e);n(o=e.data.hook)&&(n(o.create)&&o.create(nr,e),n(o.insert)&&t.push(e))}function g(e){var t;if(n(t=e.fnScopeId))u.setStyleScope(e.elm,t);else for(var r=e;r;)n(t=r.context)&&n(t=t.$options._scopeId)&&u.setStyleScope(e.elm,t),r=r.parent;n(t=Wt)&&t!==e.context&&t!==e.fnContext&&n(t=t.$options._scopeId)&&u.setStyleScope(e.elm,t)}function _(e,t,n,r,i,o){for(;r<=i;++r)f(n[r],o,e,t,!1,n,r)}function b(e){var t,r,i=e.data;if(n(i))for(n(t=i.hook)&&n(t=t.destroy)&&t(e),t=0;t<s.destroy.length;++t)s.destroy[t](e);if(n(t=e.children))for(r=0;r<e.children.length;++r)b(e.children[r])}function $(e,t,r){for(;t<=r;++t){var i=e[t];n(i)&&(n(i.tag)?(w(i),b(i)):l(i.elm))}}function w(e,t){if(n(t)||n(e.data)){var r,i=s.remove.length+1;for(n(t)?t.listeners+=i:t=function(e,t){function n(){0==--n.listeners&&l(e)}return n.listeners=t,n}(e.elm,i),n(r=e.componentInstance)&&n(r=r._vnode)&&n(r.data)&&w(r,t),r=0;r<s.remove.length;++r)s.remove[r](e,t);n(r=e.data.hook)&&n(r=r.remove)?r(e,t):t()}else l(e.elm)}function C(e,t,r,i){for(var o=r;o<i;o++){var a=t[o];if(n(a)&&ir(e,a))return o}}function x(e,i,o,a,c,l){if(e!==i){n(i.elm)&&n(a)&&(i=a[c]=me(i));var p=i.elm=e.elm;if(r(e.isAsyncPlaceholder))n(i.asyncFactory.resolved)?O(e.elm,i,o):i.isAsyncPlaceholder=!0;else if(r(i.isStatic)&&r(e.isStatic)&&i.key===e.key&&(r(i.isCloned)||r(i.isOnce)))i.componentInstance=e.componentInstance;else{var d,v=i.data;n(v)&&n(d=v.hook)&&n(d=d.prepatch)&&d(e,i);var h=e.children,y=i.children;if(n(v)&&m(i)){for(d=0;d<s.update.length;++d)s.update[d](e,i);n(d=v.hook)&&n(d=d.update)&&d(e,i)}t(i.text)?n(h)&&n(y)?h!==y&&function(e,r,i,o,a){for(var s,c,l,p=0,d=0,v=r.length-1,h=r[0],m=r[v],y=i.length-1,g=i[0],b=i[y],w=!a;p<=v&&d<=y;)t(h)?h=r[++p]:t(m)?m=r[--v]:ir(h,g)?(x(h,g,o,i,d),h=r[++p],g=i[++d]):ir(m,b)?(x(m,b,o,i,y),m=r[--v],b=i[--y]):ir(h,b)?(x(h,b,o,i,y),w&&u.insertBefore(e,h.elm,u.nextSibling(m.elm)),h=r[++p],b=i[--y]):ir(m,g)?(x(m,g,o,i,d),w&&u.insertBefore(e,m.elm,h.elm),m=r[--v],g=i[++d]):(t(s)&&(s=or(r,p,v)),t(c=n(g.key)?s[g.key]:C(g,r,p,v))?f(g,o,e,h.elm,!1,i,d):ir(l=r[c],g)?(x(l,g,o,i,d),r[c]=void 0,w&&u.insertBefore(e,l.elm,h.elm)):f(g,o,e,h.elm,!1,i,d),g=i[++d]);p>v?_(e,t(i[y+1])?null:i[y+1].elm,i,d,y,o):d>y&&$(r,p,v)}(p,h,y,o,l):n(y)?(n(e.text)&&u.setTextContent(p,""),_(p,null,y,0,y.length-1,o)):n(h)?$(h,0,h.length-1):n(e.text)&&u.setTextContent(p,""):e.text!==i.text&&u.setTextContent(p,i.text),n(v)&&n(d=v.hook)&&n(d=d.postpatch)&&d(e,i)}}}function k(e,t,i){if(r(i)&&n(e.parent))e.parent.data.pendingInsert=t;else for(var o=0;o<t.length;++o)t[o].data.hook.insert(t[o])}var A=p("attrs,class,staticClass,staticStyle,key");function O(e,t,i,o){var a,s=t.tag,c=t.data,u=t.children;if(o=o||c&&c.pre,t.elm=e,r(t.isComment)&&n(t.asyncFactory))return t.isAsyncPlaceholder=!0,!0;if(n(c)&&(n(a=c.hook)&&n(a=a.init)&&a(t,!0),n(a=t.componentInstance)))return d(t,i),!0;if(n(s)){if(n(u))if(e.hasChildNodes())if(n(a=c)&&n(a=a.domProps)&&n(a=a.innerHTML)){if(a!==e.innerHTML)return!1}else{for(var l=!0,f=e.firstChild,p=0;p<u.length;p++){if(!f||!O(f,u[p],i,o)){l=!1;break}f=f.nextSibling}if(!l||f)return!1}else h(t,u,i);if(n(c)){var v=!1;for(var m in c)if(!A(m)){v=!0,y(t,i);break}!v&&c.class&&et(c.class)}}else e.data!==t.text&&(e.data=t.text);return!0}return function(e,i,o,a){if(!t(i)){var c,l=!1,p=[];if(t(e))l=!0,f(i,p);else{var d=n(e.nodeType);if(!d&&ir(e,i))x(e,i,p,null,null,a);else{if(d){if(1===e.nodeType&&e.hasAttribute(L)&&(e.removeAttribute(L),o=!0),r(o)&&O(e,i,p))return k(i,p,!0),e;c=e,e=new pe(u.tagName(c).toLowerCase(),{},[],void 0,c)}var v=e.elm,h=u.parentNode(v);if(f(i,p,v._leaveCb?null:h,u.nextSibling(v)),n(i.parent))for(var y=i.parent,g=m(i);y;){for(var _=0;_<s.destroy.length;++_)s.destroy[_](y);if(y.elm=i.elm,g){for(var w=0;w<s.create.length;++w)s.create[w](nr,y);var C=y.data.hook.insert;if(C.merged)for(var A=1;A<C.fns.length;A++)C.fns[A]()}else tr(y);y=y.parent}n(h)?$([e],0,0):n(e.tag)&&b(e)}}return k(i,p,l),i.elm}n(e)&&b(e)}}({nodeOps:Qn,modules:[mr,xr,ni,oi,mi,z?{create:Ui,activate:Ui,remove:function(e,t){!0!==e.data.show?Ri(e,t):t()}}:{}].concat(pr)});W&&document.addEventListener("selectionchange",function(){var e=document.activeElement;e&&e.vmodel&&Xi(e,"input")});var Vi={inserted:function(e,t,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?it(n,"postpatch",function(){Vi.componentUpdated(e,t,n)}):Ki(e,t,n.context),e._vOptions=[].map.call(e.options,Wi)):("textarea"===n.tag||Xn(e.type))&&(e._vModifiers=t.modifiers,t.modifiers.lazy||(e.addEventListener("compositionstart",Zi),e.addEventListener("compositionend",Gi),e.addEventListener("change",Gi),W&&(e.vmodel=!0)))},componentUpdated:function(e,t,n){if("select"===n.tag){Ki(e,t,n.context);var r=e._vOptions,i=e._vOptions=[].map.call(e.options,Wi);if(i.some(function(e,t){return!N(e,r[t])}))(e.multiple?t.value.some(function(e){return qi(e,i)}):t.value!==t.oldValue&&qi(t.value,i))&&Xi(e,"change")}}};function Ki(e,t,n){Ji(e,t,n),(q||Z)&&setTimeout(function(){Ji(e,t,n)},0)}function Ji(e,t,n){var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var o,a,s=0,c=e.options.length;s<c;s++)if(a=e.options[s],i)o=j(r,Wi(a))>-1,a.selected!==o&&(a.selected=o);else if(N(Wi(a),r))return void(e.selectedIndex!==s&&(e.selectedIndex=s));i||(e.selectedIndex=-1)}}function qi(e,t){return t.every(function(t){return!N(t,e)})}function Wi(e){return"_value"in e?e._value:e.value}function Zi(e){e.target.composing=!0}function Gi(e){e.target.composing&&(e.target.composing=!1,Xi(e.target,"input"))}function Xi(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function Yi(e){return!e.componentInstance||e.data&&e.data.transition?e:Yi(e.componentInstance._vnode)}var Qi={model:Vi,show:{bind:function(e,t,n){var r=t.value,i=(n=Yi(n)).data&&n.data.transition,o=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;r&&i?(n.data.show=!0,Pi(n,function(){e.style.display=o})):e.style.display=r?o:"none"},update:function(e,t,n){var r=t.value;!r!=!t.oldValue&&((n=Yi(n)).data&&n.data.transition?(n.data.show=!0,r?Pi(n,function(){e.style.display=e.__vOriginalDisplay}):Ri(n,function(){e.style.display="none"})):e.style.display=r?e.__vOriginalDisplay:"none")},unbind:function(e,t,n,r,i){i||(e.style.display=e.__vOriginalDisplay)}}},eo={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function to(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?to(zt(t.children)):e}function no(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;for(var o in i)t[b(o)]=i[o];return t}function ro(e,t){if(/\d-keep-alive$/.test(t.tag))return e("keep-alive",{props:t.componentOptions.propsData})}var io=function(e){return e.tag||Ut(e)},oo=function(e){return"show"===e.name},ao={name:"transition",props:eo,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(io)).length){var r=this.mode,o=n[0];if(function(e){for(;e=e.parent;)if(e.data.transition)return!0}(this.$vnode))return o;var a=to(o);if(!a)return o;if(this._leaving)return ro(e,o);var s="__transition-"+this._uid+"-";a.key=null==a.key?a.isComment?s+"comment":s+a.tag:i(a.key)?0===String(a.key).indexOf(s)?a.key:s+a.key:a.key;var c=(a.data||(a.data={})).transition=no(this),u=this._vnode,l=to(u);if(a.data.directives&&a.data.directives.some(oo)&&(a.data.show=!0),l&&l.data&&!function(e,t){return t.key===e.key&&t.tag===e.tag}(a,l)&&!Ut(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var f=l.data.transition=A({},c);if("out-in"===r)return this._leaving=!0,it(f,"afterLeave",function(){t._leaving=!1,t.$forceUpdate()}),ro(e,o);if("in-out"===r){if(Ut(a))return u;var p,d=function(){p()};it(c,"afterEnter",d),it(c,"enterCancelled",d),it(f,"delayLeave",function(e){p=e})}}return o}}},so=A({tag:String,moveClass:String},eo);function co(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function uo(e){e.data.newPos=e.elm.getBoundingClientRect()}function lo(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var o=e.elm.style;o.transform=o.WebkitTransform="translate("+r+"px,"+i+"px)",o.transitionDuration="0s"}}delete so.mode;var fo={Transition:ao,TransitionGroup:{props:so,beforeMount:function(){var e=this,t=this._update;this._update=function(n,r){var i=Zt(e);e.__patch__(e._vnode,e.kept,!1,!0),e._vnode=e.kept,i(),t.call(e,n,r)}},render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],a=no(this),s=0;s<i.length;s++){var c=i[s];c.tag&&null!=c.key&&0!==String(c.key).indexOf("__vlist")&&(o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=a)}if(r){for(var u=[],l=[],f=0;f<r.length;f++){var p=r[f];p.data.transition=a,p.data.pos=p.elm.getBoundingClientRect(),n[p.key]?u.push(p):l.push(p)}this.kept=e(t,null,u),this.removed=l}return e(t,null,o)},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";e.length&&this.hasMove(e[0].elm,t)&&(e.forEach(co),e.forEach(uo),e.forEach(lo),this._reflow=document.body.offsetHeight,e.forEach(function(e){if(e.data.moved){var n=e.elm,r=n.style;Ni(n,t),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(Ai,n._moveCb=function e(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(Ai,e),n._moveCb=null,ji(n,t))})}}))},methods:{hasMove:function(e,t){if(!wi)return!1;if(this._hasMove)return this._hasMove;var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach(function(e){_i(n,e)}),gi(n,t),n.style.display="none",this.$el.appendChild(n);var r=Mi(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}}};wn.config.mustUseProp=jn,wn.config.isReservedTag=Wn,wn.config.isReservedAttr=En,wn.config.getTagNamespace=Zn,wn.config.isUnknownElement=function(e){if(!z)return!0;if(Wn(e))return!1;if(e=e.toLowerCase(),null!=Gn[e])return Gn[e];var t=document.createElement(e);return e.indexOf("-")>-1?Gn[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:Gn[e]=/HTMLUnknownElement/.test(t.toString())},A(wn.options.directives,Qi),A(wn.options.components,fo),wn.prototype.__patch__=z?zi:S,wn.prototype.$mount=function(e,t){return function(e,t,n){var r;return e.$el=t,e.$options.render||(e.$options.render=ve),Yt(e,"beforeMount"),r=function(){e._update(e._render(),n)},new fn(e,r,S,{before:function(){e._isMounted&&!e._isDestroyed&&Yt(e,"beforeUpdate")}},!0),n=!1,null==e.$vnode&&(e._isMounted=!0,Yt(e,"mounted")),e}(this,e=e&&z?Yn(e):void 0,t)},z&&setTimeout(function(){F.devtools&&ne&&ne.emit("init",wn)},0);var po=/\{\{((?:.|\r?\n)+?)\}\}/g,vo=/[-.*+?^${}()|[\]\/\\]/g,ho=g(function(e){var t=e[0].replace(vo,"\\$&"),n=e[1].replace(vo,"\\$&");return new RegExp(t+"((?:.|\\n)+?)"+n,"g")});var mo={staticKeys:["staticClass"],transformNode:function(e,t){t.warn;var n=Fr(e,"class");n&&(e.staticClass=JSON.stringify(n));var r=Ir(e,"class",!1);r&&(e.classBinding=r)},genData:function(e){var t="";return e.staticClass&&(t+="staticClass:"+e.staticClass+","),e.classBinding&&(t+="class:"+e.classBinding+","),t}};var yo,go={staticKeys:["staticStyle"],transformNode:function(e,t){t.warn;var n=Fr(e,"style");n&&(e.staticStyle=JSON.stringify(ai(n)));var r=Ir(e,"style",!1);r&&(e.styleBinding=r)},genData:function(e){var t="";return e.staticStyle&&(t+="staticStyle:"+e.staticStyle+","),e.styleBinding&&(t+="style:("+e.styleBinding+"),"),t}},_o=function(e){return(yo=yo||document.createElement("div")).innerHTML=e,yo.textContent},bo=p("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),$o=p("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),wo=p("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),Co=/^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,xo=/^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,ko="[a-zA-Z_][\\-\\.0-9_a-zA-Z"+P.source+"]*",Ao="((?:"+ko+"\\:)?"+ko+")",Oo=new RegExp("^<"+Ao),So=/^\s*(\/?)>/,To=new RegExp("^<\\/"+Ao+"[^>]*>"),Eo=/^<!DOCTYPE [^>]+>/i,No=/^<!\--/,jo=/^<!\[/,Do=p("script,style,textarea",!0),Lo={},Mo={"&lt;":"<","&gt;":">","&quot;":'"',"&amp;":"&","&#10;":"\n","&#9;":"\t","&#39;":"'"},Io=/&(?:lt|gt|quot|amp|#39);/g,Fo=/&(?:lt|gt|quot|amp|#39|#10|#9);/g,Po=p("pre,textarea",!0),Ro=function(e,t){return e&&Po(e)&&"\n"===t[0]};function Ho(e,t){var n=t?Fo:Io;return e.replace(n,function(e){return Mo[e]})}var Bo,Uo,zo,Vo,Ko,Jo,qo,Wo,Zo=/^@|^v-on:/,Go=/^v-|^@|^:|^#/,Xo=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,Yo=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,Qo=/^\(|\)$/g,ea=/^\[.*\]$/,ta=/:(.*)$/,na=/^:|^\.|^v-bind:/,ra=/\.[^.\]]+(?=[^\]]*$)/g,ia=/^v-slot(:|$)|^#/,oa=/[\r\n]/,aa=/\s+/g,sa=g(_o),ca="_empty_";function ua(e,t,n){return{type:1,tag:e,attrsList:t,attrsMap:ma(t),rawAttrsMap:{},parent:n,children:[]}}function la(e,t){Bo=t.warn||Sr,Jo=t.isPreTag||T,qo=t.mustUseProp||T,Wo=t.getTagNamespace||T;t.isReservedTag;zo=Tr(t.modules,"transformNode"),Vo=Tr(t.modules,"preTransformNode"),Ko=Tr(t.modules,"postTransformNode"),Uo=t.delimiters;var n,r,i=[],o=!1!==t.preserveWhitespace,a=t.whitespace,s=!1,c=!1;function u(e){if(l(e),s||e.processed||(e=fa(e,t)),i.length||e===n||n.if&&(e.elseif||e.else)&&da(n,{exp:e.elseif,block:e}),r&&!e.forbidden)if(e.elseif||e.else)a=e,(u=function(e){var t=e.length;for(;t--;){if(1===e[t].type)return e[t];e.pop()}}(r.children))&&u.if&&da(u,{exp:a.elseif,block:a});else{if(e.slotScope){var o=e.slotTarget||'"default"';(r.scopedSlots||(r.scopedSlots={}))[o]=e}r.children.push(e),e.parent=r}var a,u;e.children=e.children.filter(function(e){return!e.slotScope}),l(e),e.pre&&(s=!1),Jo(e.tag)&&(c=!1);for(var f=0;f<Ko.length;f++)Ko[f](e,t)}function l(e){if(!c)for(var t;(t=e.children[e.children.length-1])&&3===t.type&&" "===t.text;)e.children.pop()}return function(e,t){for(var n,r,i=[],o=t.expectHTML,a=t.isUnaryTag||T,s=t.canBeLeftOpenTag||T,c=0;e;){if(n=e,r&&Do(r)){var u=0,l=r.toLowerCase(),f=Lo[l]||(Lo[l]=new RegExp("([\\s\\S]*?)(</"+l+"[^>]*>)","i")),p=e.replace(f,function(e,n,r){return u=r.length,Do(l)||"noscript"===l||(n=n.replace(/<!\--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),Ro(l,n)&&(n=n.slice(1)),t.chars&&t.chars(n),""});c+=e.length-p.length,e=p,A(l,c-u,c)}else{var d=e.indexOf("<");if(0===d){if(No.test(e)){var v=e.indexOf("--\x3e");if(v>=0){t.shouldKeepComment&&t.comment(e.substring(4,v),c,c+v+3),C(v+3);continue}}if(jo.test(e)){var h=e.indexOf("]>");if(h>=0){C(h+2);continue}}var m=e.match(Eo);if(m){C(m[0].length);continue}var y=e.match(To);if(y){var g=c;C(y[0].length),A(y[1],g,c);continue}var _=x();if(_){k(_),Ro(_.tagName,e)&&C(1);continue}}var b=void 0,$=void 0,w=void 0;if(d>=0){for($=e.slice(d);!(To.test($)||Oo.test($)||No.test($)||jo.test($)||(w=$.indexOf("<",1))<0);)d+=w,$=e.slice(d);b=e.substring(0,d)}d<0&&(b=e),b&&C(b.length),t.chars&&b&&t.chars(b,c-b.length,c)}if(e===n){t.chars&&t.chars(e);break}}function C(t){c+=t,e=e.substring(t)}function x(){var t=e.match(Oo);if(t){var n,r,i={tagName:t[1],attrs:[],start:c};for(C(t[0].length);!(n=e.match(So))&&(r=e.match(xo)||e.match(Co));)r.start=c,C(r[0].length),r.end=c,i.attrs.push(r);if(n)return i.unarySlash=n[1],C(n[0].length),i.end=c,i}}function k(e){var n=e.tagName,c=e.unarySlash;o&&("p"===r&&wo(n)&&A(r),s(n)&&r===n&&A(n));for(var u=a(n)||!!c,l=e.attrs.length,f=new Array(l),p=0;p<l;p++){var d=e.attrs[p],v=d[3]||d[4]||d[5]||"",h="a"===n&&"href"===d[1]?t.shouldDecodeNewlinesForHref:t.shouldDecodeNewlines;f[p]={name:d[1],value:Ho(v,h)}}u||(i.push({tag:n,lowerCasedTag:n.toLowerCase(),attrs:f,start:e.start,end:e.end}),r=n),t.start&&t.start(n,f,u,e.start,e.end)}function A(e,n,o){var a,s;if(null==n&&(n=c),null==o&&(o=c),e)for(s=e.toLowerCase(),a=i.length-1;a>=0&&i[a].lowerCasedTag!==s;a--);else a=0;if(a>=0){for(var u=i.length-1;u>=a;u--)t.end&&t.end(i[u].tag,n,o);i.length=a,r=a&&i[a-1].tag}else"br"===s?t.start&&t.start(e,[],!0,n,o):"p"===s&&(t.start&&t.start(e,[],!1,n,o),t.end&&t.end(e,n,o))}A()}(e,{warn:Bo,expectHTML:t.expectHTML,isUnaryTag:t.isUnaryTag,canBeLeftOpenTag:t.canBeLeftOpenTag,shouldDecodeNewlines:t.shouldDecodeNewlines,shouldDecodeNewlinesForHref:t.shouldDecodeNewlinesForHref,shouldKeepComment:t.comments,outputSourceRange:t.outputSourceRange,start:function(e,o,a,l,f){var p=r&&r.ns||Wo(e);q&&"svg"===p&&(o=function(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];ya.test(r.name)||(r.name=r.name.replace(ga,""),t.push(r))}return t}(o));var d,v=ua(e,o,r);p&&(v.ns=p),"style"!==(d=v).tag&&("script"!==d.tag||d.attrsMap.type&&"text/javascript"!==d.attrsMap.type)||te()||(v.forbidden=!0);for(var h=0;h<Vo.length;h++)v=Vo[h](v,t)||v;s||(!function(e){null!=Fr(e,"v-pre")&&(e.pre=!0)}(v),v.pre&&(s=!0)),Jo(v.tag)&&(c=!0),s?function(e){var t=e.attrsList,n=t.length;if(n)for(var r=e.attrs=new Array(n),i=0;i<n;i++)r[i]={name:t[i].name,value:JSON.stringify(t[i].value)},null!=t[i].start&&(r[i].start=t[i].start,r[i].end=t[i].end);else e.pre||(e.plain=!0)}(v):v.processed||(pa(v),function(e){var t=Fr(e,"v-if");if(t)e.if=t,da(e,{exp:t,block:e});else{null!=Fr(e,"v-else")&&(e.else=!0);var n=Fr(e,"v-else-if");n&&(e.elseif=n)}}(v),function(e){null!=Fr(e,"v-once")&&(e.once=!0)}(v)),n||(n=v),a?u(v):(r=v,i.push(v))},end:function(e,t,n){var o=i[i.length-1];i.length-=1,r=i[i.length-1],u(o)},chars:function(e,t,n){if(r&&(!q||"textarea"!==r.tag||r.attrsMap.placeholder!==e)){var i,u,l,f=r.children;if(e=c||e.trim()?"script"===(i=r).tag||"style"===i.tag?e:sa(e):f.length?a?"condense"===a&&oa.test(e)?"":" ":o?" ":"":"")c||"condense"!==a||(e=e.replace(aa," ")),!s&&" "!==e&&(u=function(e,t){var n=t?ho(t):po;if(n.test(e)){for(var r,i,o,a=[],s=[],c=n.lastIndex=0;r=n.exec(e);){(i=r.index)>c&&(s.push(o=e.slice(c,i)),a.push(JSON.stringify(o)));var u=Ar(r[1].trim());a.push("_s("+u+")"),s.push({"@binding":u}),c=i+r[0].length}return c<e.length&&(s.push(o=e.slice(c)),a.push(JSON.stringify(o))),{expression:a.join("+"),tokens:s}}}(e,Uo))?l={type:2,expression:u.expression,tokens:u.tokens,text:e}:" "===e&&f.length&&" "===f[f.length-1].text||(l={type:3,text:e}),l&&f.push(l)}},comment:function(e,t,n){if(r){var i={type:3,text:e,isComment:!0};r.children.push(i)}}}),n}function fa(e,t){var n,r;(r=Ir(n=e,"key"))&&(n.key=r),e.plain=!e.key&&!e.scopedSlots&&!e.attrsList.length,function(e){var t=Ir(e,"ref");t&&(e.ref=t,e.refInFor=function(e){var t=e;for(;t;){if(void 0!==t.for)return!0;t=t.parent}return!1}(e))}(e),function(e){var t;"template"===e.tag?(t=Fr(e,"scope"),e.slotScope=t||Fr(e,"slot-scope")):(t=Fr(e,"slot-scope"))&&(e.slotScope=t);var n=Ir(e,"slot");n&&(e.slotTarget='""'===n?'"default"':n,e.slotTargetDynamic=!(!e.attrsMap[":slot"]&&!e.attrsMap["v-bind:slot"]),"template"===e.tag||e.slotScope||Nr(e,"slot",n,function(e,t){return e.rawAttrsMap[":"+t]||e.rawAttrsMap["v-bind:"+t]||e.rawAttrsMap[t]}(e,"slot")));if("template"===e.tag){var r=Pr(e,ia);if(r){var i=va(r),o=i.name,a=i.dynamic;e.slotTarget=o,e.slotTargetDynamic=a,e.slotScope=r.value||ca}}else{var s=Pr(e,ia);if(s){var c=e.scopedSlots||(e.scopedSlots={}),u=va(s),l=u.name,f=u.dynamic,p=c[l]=ua("template",[],e);p.slotTarget=l,p.slotTargetDynamic=f,p.children=e.children.filter(function(e){if(!e.slotScope)return e.parent=p,!0}),p.slotScope=s.value||ca,e.children=[],e.plain=!1}}}(e),function(e){"slot"===e.tag&&(e.slotName=Ir(e,"name"))}(e),function(e){var t;(t=Ir(e,"is"))&&(e.component=t);null!=Fr(e,"inline-template")&&(e.inlineTemplate=!0)}(e);for(var i=0;i<zo.length;i++)e=zo[i](e,t)||e;return function(e){var t,n,r,i,o,a,s,c,u=e.attrsList;for(t=0,n=u.length;t<n;t++)if(r=i=u[t].name,o=u[t].value,Go.test(r))if(e.hasBindings=!0,(a=ha(r.replace(Go,"")))&&(r=r.replace(ra,"")),na.test(r))r=r.replace(na,""),o=Ar(o),(c=ea.test(r))&&(r=r.slice(1,-1)),a&&(a.prop&&!c&&"innerHtml"===(r=b(r))&&(r="innerHTML"),a.camel&&!c&&(r=b(r)),a.sync&&(s=Br(o,"$event"),c?Mr(e,'"update:"+('+r+")",s,null,!1,0,u[t],!0):(Mr(e,"update:"+b(r),s,null,!1,0,u[t]),C(r)!==b(r)&&Mr(e,"update:"+C(r),s,null,!1,0,u[t])))),a&&a.prop||!e.component&&qo(e.tag,e.attrsMap.type,r)?Er(e,r,o,u[t],c):Nr(e,r,o,u[t],c);else if(Zo.test(r))r=r.replace(Zo,""),(c=ea.test(r))&&(r=r.slice(1,-1)),Mr(e,r,o,a,!1,0,u[t],c);else{var l=(r=r.replace(Go,"")).match(ta),f=l&&l[1];c=!1,f&&(r=r.slice(0,-(f.length+1)),ea.test(f)&&(f=f.slice(1,-1),c=!0)),Dr(e,r,i,o,f,c,a,u[t])}else Nr(e,r,JSON.stringify(o),u[t]),!e.component&&"muted"===r&&qo(e.tag,e.attrsMap.type,r)&&Er(e,r,"true",u[t])}(e),e}function pa(e){var t;if(t=Fr(e,"v-for")){var n=function(e){var t=e.match(Xo);if(!t)return;var n={};n.for=t[2].trim();var r=t[1].trim().replace(Qo,""),i=r.match(Yo);i?(n.alias=r.replace(Yo,"").trim(),n.iterator1=i[1].trim(),i[2]&&(n.iterator2=i[2].trim())):n.alias=r;return n}(t);n&&A(e,n)}}function da(e,t){e.ifConditions||(e.ifConditions=[]),e.ifConditions.push(t)}function va(e){var t=e.name.replace(ia,"");return t||"#"!==e.name[0]&&(t="default"),ea.test(t)?{name:t.slice(1,-1),dynamic:!0}:{name:'"'+t+'"',dynamic:!1}}function ha(e){var t=e.match(ra);if(t){var n={};return t.forEach(function(e){n[e.slice(1)]=!0}),n}}function ma(e){for(var t={},n=0,r=e.length;n<r;n++)t[e[n].name]=e[n].value;return t}var ya=/^xmlns:NS\d+/,ga=/^NS\d+:/;function _a(e){return ua(e.tag,e.attrsList.slice(),e.parent)}var ba=[mo,go,{preTransformNode:function(e,t){if("input"===e.tag){var n,r=e.attrsMap;if(!r["v-model"])return;if((r[":type"]||r["v-bind:type"])&&(n=Ir(e,"type")),r.type||n||!r["v-bind"]||(n="("+r["v-bind"]+").type"),n){var i=Fr(e,"v-if",!0),o=i?"&&("+i+")":"",a=null!=Fr(e,"v-else",!0),s=Fr(e,"v-else-if",!0),c=_a(e);pa(c),jr(c,"type","checkbox"),fa(c,t),c.processed=!0,c.if="("+n+")==='checkbox'"+o,da(c,{exp:c.if,block:c});var u=_a(e);Fr(u,"v-for",!0),jr(u,"type","radio"),fa(u,t),da(c,{exp:"("+n+")==='radio'"+o,block:u});var l=_a(e);return Fr(l,"v-for",!0),jr(l,":type",n),fa(l,t),da(c,{exp:i,block:l}),a?c.else=!0:s&&(c.elseif=s),c}}}}];var $a,wa,Ca={expectHTML:!0,modules:ba,directives:{model:function(e,t,n){var r=t.value,i=t.modifiers,o=e.tag,a=e.attrsMap.type;if(e.component)return Hr(e,r,i),!1;if("select"===o)!function(e,t,n){var r='var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return '+(n&&n.number?"_n(val)":"val")+"});";r=r+" "+Br(t,"$event.target.multiple ? $$selectedVal : $$selectedVal[0]"),Mr(e,"change",r,null,!0)}(e,r,i);else if("input"===o&&"checkbox"===a)!function(e,t,n){var r=n&&n.number,i=Ir(e,"value")||"null",o=Ir(e,"true-value")||"true",a=Ir(e,"false-value")||"false";Er(e,"checked","Array.isArray("+t+")?_i("+t+","+i+")>-1"+("true"===o?":("+t+")":":_q("+t+","+o+")")),Mr(e,"change","var $$a="+t+",$$el=$event.target,$$c=$$el.checked?("+o+"):("+a+");if(Array.isArray($$a)){var $$v="+(r?"_n("+i+")":i)+",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&("+Br(t,"$$a.concat([$$v])")+")}else{$$i>-1&&("+Br(t,"$$a.slice(0,$$i).concat($$a.slice($$i+1))")+")}}else{"+Br(t,"$$c")+"}",null,!0)}(e,r,i);else if("input"===o&&"radio"===a)!function(e,t,n){var r=n&&n.number,i=Ir(e,"value")||"null";Er(e,"checked","_q("+t+","+(i=r?"_n("+i+")":i)+")"),Mr(e,"change",Br(t,i),null,!0)}(e,r,i);else if("input"===o||"textarea"===o)!function(e,t,n){var r=e.attrsMap.type,i=n||{},o=i.lazy,a=i.number,s=i.trim,c=!o&&"range"!==r,u=o?"change":"range"===r?Wr:"input",l="$event.target.value";s&&(l="$event.target.value.trim()"),a&&(l="_n("+l+")");var f=Br(t,l);c&&(f="if($event.target.composing)return;"+f),Er(e,"value","("+t+")"),Mr(e,u,f,null,!0),(s||a)&&Mr(e,"blur","$forceUpdate()")}(e,r,i);else if(!F.isReservedTag(o))return Hr(e,r,i),!1;return!0},text:function(e,t){t.value&&Er(e,"textContent","_s("+t.value+")",t)},html:function(e,t){t.value&&Er(e,"innerHTML","_s("+t.value+")",t)}},isPreTag:function(e){return"pre"===e},isUnaryTag:bo,mustUseProp:jn,canBeLeftOpenTag:$o,isReservedTag:Wn,getTagNamespace:Zn,staticKeys:function(e){return e.reduce(function(e,t){return e.concat(t.staticKeys||[])},[]).join(",")}(ba)},xa=g(function(e){return p("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap"+(e?","+e:""))});function ka(e,t){e&&($a=xa(t.staticKeys||""),wa=t.isReservedTag||T,function e(t){t.static=function(e){if(2===e.type)return!1;if(3===e.type)return!0;return!(!e.pre&&(e.hasBindings||e.if||e.for||d(e.tag)||!wa(e.tag)||function(e){for(;e.parent;){if("template"!==(e=e.parent).tag)return!1;if(e.for)return!0}return!1}(e)||!Object.keys(e).every($a)))}(t);if(1===t.type){if(!wa(t.tag)&&"slot"!==t.tag&&null==t.attrsMap["inline-template"])return;for(var n=0,r=t.children.length;n<r;n++){var i=t.children[n];e(i),i.static||(t.static=!1)}if(t.ifConditions)for(var o=1,a=t.ifConditions.length;o<a;o++){var s=t.ifConditions[o].block;e(s),s.static||(t.static=!1)}}}(e),function e(t,n){if(1===t.type){if((t.static||t.once)&&(t.staticInFor=n),t.static&&t.children.length&&(1!==t.children.length||3!==t.children[0].type))return void(t.staticRoot=!0);if(t.staticRoot=!1,t.children)for(var r=0,i=t.children.length;r<i;r++)e(t.children[r],n||!!t.for);if(t.ifConditions)for(var o=1,a=t.ifConditions.length;o<a;o++)e(t.ifConditions[o].block,n)}}(e,!1))}var Aa=/^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/,Oa=/\([^)]*?\);*$/,Sa=/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,Ta={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},Ea={esc:["Esc","Escape"],tab:"Tab",enter:"Enter",space:[" ","Spacebar"],up:["Up","ArrowUp"],left:["Left","ArrowLeft"],right:["Right","ArrowRight"],down:["Down","ArrowDown"],delete:["Backspace","Delete","Del"]},Na=function(e){return"if("+e+")return null;"},ja={stop:"$event.stopPropagation();",prevent:"$event.preventDefault();",self:Na("$event.target !== $event.currentTarget"),ctrl:Na("!$event.ctrlKey"),shift:Na("!$event.shiftKey"),alt:Na("!$event.altKey"),meta:Na("!$event.metaKey"),left:Na("'button' in $event && $event.button !== 0"),middle:Na("'button' in $event && $event.button !== 1"),right:Na("'button' in $event && $event.button !== 2")};function Da(e,t){var n=t?"nativeOn:":"on:",r="",i="";for(var o in e){var a=La(e[o]);e[o]&&e[o].dynamic?i+=o+","+a+",":r+='"'+o+'":'+a+","}return r="{"+r.slice(0,-1)+"}",i?n+"_d("+r+",["+i.slice(0,-1)+"])":n+r}function La(e){if(!e)return"function(){}";if(Array.isArray(e))return"["+e.map(function(e){return La(e)}).join(",")+"]";var t=Sa.test(e.value),n=Aa.test(e.value),r=Sa.test(e.value.replace(Oa,""));if(e.modifiers){var i="",o="",a=[];for(var s in e.modifiers)if(ja[s])o+=ja[s],Ta[s]&&a.push(s);else if("exact"===s){var c=e.modifiers;o+=Na(["ctrl","shift","alt","meta"].filter(function(e){return!c[e]}).map(function(e){return"$event."+e+"Key"}).join("||"))}else a.push(s);return a.length&&(i+=function(e){return"if(!$event.type.indexOf('key')&&"+e.map(Ma).join("&&")+")return null;"}(a)),o&&(i+=o),"function($event){"+i+(t?"return "+e.value+"($event)":n?"return ("+e.value+")($event)":r?"return "+e.value:e.value)+"}"}return t||n?e.value:"function($event){"+(r?"return "+e.value:e.value)+"}"}function Ma(e){var t=parseInt(e,10);if(t)return"$event.keyCode!=="+t;var n=Ta[e],r=Ea[e];return"_k($event.keyCode,"+JSON.stringify(e)+","+JSON.stringify(n)+",$event.key,"+JSON.stringify(r)+")"}var Ia={on:function(e,t){e.wrapListeners=function(e){return"_g("+e+","+t.value+")"}},bind:function(e,t){e.wrapData=function(n){return"_b("+n+",'"+e.tag+"',"+t.value+","+(t.modifiers&&t.modifiers.prop?"true":"false")+(t.modifiers&&t.modifiers.sync?",true":"")+")"}},cloak:S},Fa=function(e){this.options=e,this.warn=e.warn||Sr,this.transforms=Tr(e.modules,"transformCode"),this.dataGenFns=Tr(e.modules,"genData"),this.directives=A(A({},Ia),e.directives);var t=e.isReservedTag||T;this.maybeComponent=function(e){return!!e.component||!t(e.tag)},this.onceId=0,this.staticRenderFns=[],this.pre=!1};function Pa(e,t){var n=new Fa(t);return{render:"with(this){return "+(e?Ra(e,n):'_c("div")')+"}",staticRenderFns:n.staticRenderFns}}function Ra(e,t){if(e.parent&&(e.pre=e.pre||e.parent.pre),e.staticRoot&&!e.staticProcessed)return Ha(e,t);if(e.once&&!e.onceProcessed)return Ba(e,t);if(e.for&&!e.forProcessed)return za(e,t);if(e.if&&!e.ifProcessed)return Ua(e,t);if("template"!==e.tag||e.slotTarget||t.pre){if("slot"===e.tag)return function(e,t){var n=e.slotName||'"default"',r=qa(e,t),i="_t("+n+(r?","+r:""),o=e.attrs||e.dynamicAttrs?Ga((e.attrs||[]).concat(e.dynamicAttrs||[]).map(function(e){return{name:b(e.name),value:e.value,dynamic:e.dynamic}})):null,a=e.attrsMap["v-bind"];!o&&!a||r||(i+=",null");o&&(i+=","+o);a&&(i+=(o?"":",null")+","+a);return i+")"}(e,t);var n;if(e.component)n=function(e,t,n){var r=t.inlineTemplate?null:qa(t,n,!0);return"_c("+e+","+Va(t,n)+(r?","+r:"")+")"}(e.component,e,t);else{var r;(!e.plain||e.pre&&t.maybeComponent(e))&&(r=Va(e,t));var i=e.inlineTemplate?null:qa(e,t,!0);n="_c('"+e.tag+"'"+(r?","+r:"")+(i?","+i:"")+")"}for(var o=0;o<t.transforms.length;o++)n=t.transforms[o](e,n);return n}return qa(e,t)||"void 0"}function Ha(e,t){e.staticProcessed=!0;var n=t.pre;return e.pre&&(t.pre=e.pre),t.staticRenderFns.push("with(this){return "+Ra(e,t)+"}"),t.pre=n,"_m("+(t.staticRenderFns.length-1)+(e.staticInFor?",true":"")+")"}function Ba(e,t){if(e.onceProcessed=!0,e.if&&!e.ifProcessed)return Ua(e,t);if(e.staticInFor){for(var n="",r=e.parent;r;){if(r.for){n=r.key;break}r=r.parent}return n?"_o("+Ra(e,t)+","+t.onceId+++","+n+")":Ra(e,t)}return Ha(e,t)}function Ua(e,t,n,r){return e.ifProcessed=!0,function e(t,n,r,i){if(!t.length)return i||"_e()";var o=t.shift();return o.exp?"("+o.exp+")?"+a(o.block)+":"+e(t,n,r,i):""+a(o.block);function a(e){return r?r(e,n):e.once?Ba(e,n):Ra(e,n)}}(e.ifConditions.slice(),t,n,r)}function za(e,t,n,r){var i=e.for,o=e.alias,a=e.iterator1?","+e.iterator1:"",s=e.iterator2?","+e.iterator2:"";return e.forProcessed=!0,(r||"_l")+"(("+i+"),function("+o+a+s+"){return "+(n||Ra)(e,t)+"})"}function Va(e,t){var n="{",r=function(e,t){var n=e.directives;if(!n)return;var r,i,o,a,s="directives:[",c=!1;for(r=0,i=n.length;r<i;r++){o=n[r],a=!0;var u=t.directives[o.name];u&&(a=!!u(e,o,t.warn)),a&&(c=!0,s+='{name:"'+o.name+'",rawName:"'+o.rawName+'"'+(o.value?",value:("+o.value+"),expression:"+JSON.stringify(o.value):"")+(o.arg?",arg:"+(o.isDynamicArg?o.arg:'"'+o.arg+'"'):"")+(o.modifiers?",modifiers:"+JSON.stringify(o.modifiers):"")+"},")}if(c)return s.slice(0,-1)+"]"}(e,t);r&&(n+=r+","),e.key&&(n+="key:"+e.key+","),e.ref&&(n+="ref:"+e.ref+","),e.refInFor&&(n+="refInFor:true,"),e.pre&&(n+="pre:true,"),e.component&&(n+='tag:"'+e.tag+'",');for(var i=0;i<t.dataGenFns.length;i++)n+=t.dataGenFns[i](e);if(e.attrs&&(n+="attrs:"+Ga(e.attrs)+","),e.props&&(n+="domProps:"+Ga(e.props)+","),e.events&&(n+=Da(e.events,!1)+","),e.nativeEvents&&(n+=Da(e.nativeEvents,!0)+","),e.slotTarget&&!e.slotScope&&(n+="slot:"+e.slotTarget+","),e.scopedSlots&&(n+=function(e,t,n){var r=e.for||Object.keys(t).some(function(e){var n=t[e];return n.slotTargetDynamic||n.if||n.for||Ka(n)}),i=!!e.if;if(!r)for(var o=e.parent;o;){if(o.slotScope&&o.slotScope!==ca||o.for){r=!0;break}o.if&&(i=!0),o=o.parent}var a=Object.keys(t).map(function(e){return Ja(t[e],n)}).join(",");return"scopedSlots:_u(["+a+"]"+(r?",null,true":"")+(!r&&i?",null,false,"+function(e){var t=5381,n=e.length;for(;n;)t=33*t^e.charCodeAt(--n);return t>>>0}(a):"")+")"}(e,e.scopedSlots,t)+","),e.model&&(n+="model:{value:"+e.model.value+",callback:"+e.model.callback+",expression:"+e.model.expression+"},"),e.inlineTemplate){var o=function(e,t){var n=e.children[0];if(n&&1===n.type){var r=Pa(n,t.options);return"inlineTemplate:{render:function(){"+r.render+"},staticRenderFns:["+r.staticRenderFns.map(function(e){return"function(){"+e+"}"}).join(",")+"]}"}}(e,t);o&&(n+=o+",")}return n=n.replace(/,$/,"")+"}",e.dynamicAttrs&&(n="_b("+n+',"'+e.tag+'",'+Ga(e.dynamicAttrs)+")"),e.wrapData&&(n=e.wrapData(n)),e.wrapListeners&&(n=e.wrapListeners(n)),n}function Ka(e){return 1===e.type&&("slot"===e.tag||e.children.some(Ka))}function Ja(e,t){var n=e.attrsMap["slot-scope"];if(e.if&&!e.ifProcessed&&!n)return Ua(e,t,Ja,"null");if(e.for&&!e.forProcessed)return za(e,t,Ja);var r=e.slotScope===ca?"":String(e.slotScope),i="function("+r+"){return "+("template"===e.tag?e.if&&n?"("+e.if+")?"+(qa(e,t)||"undefined")+":undefined":qa(e,t)||"undefined":Ra(e,t))+"}",o=r?"":",proxy:true";return"{key:"+(e.slotTarget||'"default"')+",fn:"+i+o+"}"}function qa(e,t,n,r,i){var o=e.children;if(o.length){var a=o[0];if(1===o.length&&a.for&&"template"!==a.tag&&"slot"!==a.tag){var s=n?t.maybeComponent(a)?",1":",0":"";return""+(r||Ra)(a,t)+s}var c=n?function(e,t){for(var n=0,r=0;r<e.length;r++){var i=e[r];if(1===i.type){if(Wa(i)||i.ifConditions&&i.ifConditions.some(function(e){return Wa(e.block)})){n=2;break}(t(i)||i.ifConditions&&i.ifConditions.some(function(e){return t(e.block)}))&&(n=1)}}return n}(o,t.maybeComponent):0,u=i||Za;return"["+o.map(function(e){return u(e,t)}).join(",")+"]"+(c?","+c:"")}}function Wa(e){return void 0!==e.for||"template"===e.tag||"slot"===e.tag}function Za(e,t){return 1===e.type?Ra(e,t):3===e.type&&e.isComment?(r=e,"_e("+JSON.stringify(r.text)+")"):"_v("+(2===(n=e).type?n.expression:Xa(JSON.stringify(n.text)))+")";var n,r}function Ga(e){for(var t="",n="",r=0;r<e.length;r++){var i=e[r],o=Xa(i.value);i.dynamic?n+=i.name+","+o+",":t+='"'+i.name+'":'+o+","}return t="{"+t.slice(0,-1)+"}",n?"_d("+t+",["+n.slice(0,-1)+"])":t}function Xa(e){return e.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}new RegExp("\\b"+"do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b")+"\\b");function Ya(e,t){try{return new Function(e)}catch(n){return t.push({err:n,code:e}),S}}function Qa(e){var t=Object.create(null);return function(n,r,i){(r=A({},r)).warn;delete r.warn;var o=r.delimiters?String(r.delimiters)+n:n;if(t[o])return t[o];var a=e(n,r),s={},c=[];return s.render=Ya(a.render,c),s.staticRenderFns=a.staticRenderFns.map(function(e){return Ya(e,c)}),t[o]=s}}var es,ts,ns=(es=function(e,t){var n=la(e.trim(),t);!1!==t.optimize&&ka(n,t);var r=Pa(n,t);return{ast:n,render:r.render,staticRenderFns:r.staticRenderFns}},function(e){function t(t,n){var r=Object.create(e),i=[],o=[];if(n)for(var a in n.modules&&(r.modules=(e.modules||[]).concat(n.modules)),n.directives&&(r.directives=A(Object.create(e.directives||null),n.directives)),n)"modules"!==a&&"directives"!==a&&(r[a]=n[a]);r.warn=function(e,t,n){(n?o:i).push(e)};var s=es(t.trim(),r);return s.errors=i,s.tips=o,s}return{compile:t,compileToFunctions:Qa(t)}})(Ca),rs=(ns.compile,ns.compileToFunctions);function is(e){return(ts=ts||document.createElement("div")).innerHTML=e?'<a href="\n"/>':'<div a="\n"/>',ts.innerHTML.indexOf("&#10;")>0}var os=!!z&&is(!1),as=!!z&&is(!0),ss=g(function(e){var t=Yn(e);return t&&t.innerHTML}),cs=wn.prototype.$mount;return wn.prototype.$mount=function(e,t){if((e=e&&Yn(e))===document.body||e===document.documentElement)return this;var n=this.$options;if(!n.render){var r=n.template;if(r)if("string"==typeof r)"#"===r.charAt(0)&&(r=ss(r));else{if(!r.nodeType)return this;r=r.innerHTML}else e&&(r=function(e){if(e.outerHTML)return e.outerHTML;var t=document.createElement("div");return t.appendChild(e.cloneNode(!0)),t.innerHTML}(e));if(r){var i=rs(r,{outputSourceRange:!1,shouldDecodeNewlines:os,shouldDecodeNewlinesForHref:as,delimiters:n.delimiters,comments:n.comments},this),o=i.render,a=i.staticRenderFns;n.render=o,n.staticRenderFns=a}}return cs.call(this,e,t)},wn.compile=rs,wn});
},{}],"../data/data.json":[function(require,module,exports) {
module.exports = {
  "settings": {
    "siteName": "CV Template for Web",
    "multiLang": true,
    "langDefault": "en",
    "langAvailable": [{
      "flag": "🇬🇧",
      "name": "English",
      "code": "en"
    }, {
      "flag": "🇷🇺",
      "name": "Русский",
      "code": "ru"
    }, {
      "flag": "🇯🇵",
      "name": "日本語",
      "code": "jp"
    }],
    "backToSite": {
      "url": "https://github.com/userkris/cv-template-for-web",
      "text": {
        "en": "Back to Github",
        "ru": "Вернуться на Github",
        "jp": "Githubに戻る"
      }
    }
  },
  "name": {
    "en": "Jon Doe",
    "ru": "Джон Доу",
    "jp": "ジョン・ドウ"
  },
  "occupation": {
    "en": "Web Developer",
    "ru": "Веб-разработчик",
    "jp": "ウェブ開発者"
  },
  "profile": {
    "title": {
      "en": "Profile",
      "ru": "Профиль",
      "jp": "プロフィール"
    },
    "text": {
      "en": "A strong conceptual thinker who has a keen interest in all things related to the Internet. Jon has the ability and experience needed to design and execute complex software projects for a diverse variety of users. He is committed to having an impact on the future of any company that he works for, and possesses the enthusiasm and commitment to learn and develop his career within a fast paced and growing business. He has a track record of building fluid and dynamic interfaces that are user-friendly, and which positively impact on people’s lives.",
      "ru": "Сильный концептуальный мыслитель, который интересуется всем, что связано с Интернетом. Джон обладает способностями и опытом, необходимыми для разработки и реализации сложных программных проектов для самых разных пользователей. Он стремится оказывать влияние на будущее любой компании, в которой он работает, и обладает энтузиазмом и стремлением учиться и развивать свою карьеру в быстро меняющемся и растущем бизнесе. Он имеет опыт создания гибких и динамических интерфейсов, удобных для пользователя и положительно влияющих на жизнь людей.",
      "jp": "インターネットに関連するすべてのものに強い関心を持っている強力な概念思想家。 ジョンは、多様なユーザー向けの複雑なソフトウェアプロジェクトを設計および実行するために必要な能力と経験を持っています。 彼は自分が働いている会社の将来に影響を与えることを約束し、急速に成長しているビジネスで彼のキャリアを学び、発展させる熱意とコミットメントを持っています。 彼は、ユーザーフレンドリーで、人々の生活に良い影響を与える、流動的で動的なインターフェースを構築した実績があります。"
    }
  },
  "contact": {
    "link": [{
      "title": "Github",
      "url": "https://github.com/userkris/cv-template-for-web",
      "text": "jondoe"
    }, {
      "title": "Example",
      "url": "#",
      "text": "example.com"
    }],
    "email": ["jon@example.com"],
    "location": [{
      "en": "London, UK",
      "ru": "Лондон, Великобритания",
      "jp": "イギリス、ロンドン"
    }]
  },
  "work": {
    "title": {
      "en": "Work Experience",
      "ru": "Опыт работы",
      "jp": "実務経験"
    },
    "data": [{
      "title": {
        "en": "Web Developer",
        "ru": "Веб-разработчик",
        "jp": "ウェブ開発者"
      },
      "place": {
        "en": "Second Job Ltd"
      },
      "date": {
        "en": "May 2020 - present",
        "ru": "Май 2020 - настоящее время",
        "jp": "2020年5月-現在"
      },
      "description": {
        "en": "Worked as part of a multi-disciplinary team, carrying out ad-hoc tasks as requested by the IT Manager. Had a specific brief to ensure the websites build for customer’s precisely matched their requirements.",
        "ru": "Работал в составе междисциплинарной команды, выполняя специальные задачи по запросу ИТ-менеджера. У меня было конкретное задание, чтобы убедиться, что сайты создаются для клиентов, точно соответствующих их требованиям.",
        "jp": "学際的なチームの一員として働き、ITマネージャーの要求に応じて臨時のタスクを実行した。 顧客向けに構築されたWebサイトが要件に正確に一致することを保証するための具体的な説明がありました。"
      },
      "assets": {
        "languages": ["JavaScript", "HTML", "CSS"],
        "systems": ["Vue.js", "Node.js", "Express.js", "npm", "Parcel"]
      },
      "features": [{
        "groupTitle": true,
        "en": "Front-end",
        "jp": "フロントエンド"
      }, {
        "en": "Developing and maintaining the front end functionality of websites",
        "ru": "Разработка и поддержка веб-сайт интерфейсов",
        "jp": "Webサイトのフロントエンド機能の開発と保守"
      }, {
        "en": "Designing prototypes for apps and websites",
        "ru": "Разработка прототипов приложений и веб-сайтов",
        "jp": "アプリとウェブサイトのプロトタイプを設計する"
      }, {
        "en": "Writing cross-browser compliant",
        "ru": "Написание кросс-браузерной совместимости",
        "jp": "クロスブラウザ対応の記述"
      }, {
        "groupTitle": true,
        "en": "Back-end",
        "jp": "バックエンド"
      }, {
        "en": "Involved in a project to develop RESTful API for online gaming website",
        "ru": "Участвовал в проекте по разработке RESTful API для сайта онлайн-игр",
        "jp": "オンラインゲームWebサイト用のRESTful APIを開発するプロジェクトに関与"
      }]
    }, {
      "title": {
        "en": "Wordpress Developer",
        "ru": "Веб-разработчик",
        "jp": "ウェブ開発者"
      },
      "place": {
        "en": "First Job Company"
      },
      "date": {
        "en": "January 2018 - March 2020",
        "ru": "Январь 2018 - Март 2020",
        "jp": "2018年1月〜2020年3月"
      },
      "description": {
        "en": "Work with a team of four web developers who create and manage a platform for organizational development and employee education. Use JavaScript and PHP among other tools, to design the platform. Write two to four pieces of SEO content every month to use in building the company’s online ranking.",
        "ru": "Работал в команде из четырех веб-разработчиков для создания и управления платформой для организационного развития и обучения сотрудников. Использовал JavaScript и PHP на фоне другие инструментов для разработки платформы. Разрабатывал от двух до четырех частей контента SEO каждый месяц, чтобы использовать его для построения онлайн-рейтинга компании.",
        "jp": "組織開発と従業員教育のためのプラットフォームを作成および管理する4人のWeb開発者のチームと協力します。 他のツールの中でも特にJavaScriptとPHPを使用して、プラットフォームを設計します。 毎月2〜4個のSEOコンテンツを書き、会社のオンラインランキングの構築に使用します。"
      },
      "assets": {
        "languages": ["PHP", "JavaScript", "HTML", "CSS"],
        "systems": ["Wordpress"]
      },
      "features": [{
        "en": "Developed plugins for Wordpress",
        "ru": "Разработывал плагины для Wordpress",
        "jp": "Wordpress用に開発されたプラグイン"
      }, {
        "en": "Implement SEO improvements for webistes",
        "ru": "Внедрить SEO улучшения для сайтов",
        "jp": "WebサイトにSEOの改善を実装する"
      }]
    }]
  },
  "education": {
    "title": {
      "en": "Education",
      "ru": "Образование",
      "jp": "教育"
    },
    "data": [{
      "title": {
        "en": "BSc (Hons) in Computer Science",
        "ru": "Бакалавр компьютерных наук",
        "jp": "コンピュータサイエンスの理学士（優等）"
      },
      "place": {
        "en": "University of London, UK",
        "ru": "Лондонский университет, Великобритания",
        "jp": "英国ロンドン大学"
      },
      "date": {
        "en": "September 2014 - June 2017",
        "ru": "Сентябрь 2014 - Июнь 2017",
        "jp": "2014年9月〜2017年6月"
      },
      "features": [{
        "en": "National Student Volunteer Award",
        "ru": "Национальная студенческая волонтерская премия",
        "jp": "全国学生ボランティア賞"
      }, {
        "en": "Coursework in Programming, Data Structure, and Computer Architecture",
        "ru": "Курсовая работа по программированию, структуре данных и компьютерной архитектуре",
        "jp": "プログラミング、データ構造、およびコンピュータアーキテクチャのコースワーク"
      }]
    }]
  },
  "hobby": {
    "title": {
      "en": "Hobby",
      "ru": "Хобби",
      "jp": "趣味"
    },
    "data": [{
      "emoji": "🎸",
      "value": {
        "en": "Music",
        "ru": "Музыка",
        "jp": "音楽"
      }
    }, {
      "emoji": "🚴",
      "value": {
        "en": "Cycling",
        "ru": "Катание на велосипеды",
        "jp": "サイクリング"
      }
    }, {
      "emoji": "🧳",
      "value": {
        "en": "Travelling",
        "ru": "Путешествия",
        "jp": "旅行"
      }
    }, {
      "emoji": "🥘",
      "value": {
        "en": "Cooking",
        "ru": "Приготовление еды",
        "jp": "料理"
      }
    }]
  }
};
},{}],"../data/assets.json":[function(require,module,exports) {
module.exports = {
  "languages": {
    "JavaScript": {
      "color": "#f1e05a",
      "url": "https://github.com/trending?l=JavaScript"
    },
    "HTML": {
      "color": "#e34c26",
      "url": "https://github.com/trending?l=HTML"
    },
    "CSS": {
      "color": "#563d7c",
      "url": "https://github.com/trending?l=CSS"
    },
    "PHP": {
      "color": "#4F5D95",
      "url": "https://github.com/trending?l=PHP"
    },
    "Shell": {
      "color": "#89e051",
      "url": "https://github.com/trending?l=Shell"
    },
    "SQL": {
      "color": "#eee",
      "url": "https://en.wikipedia.org/wiki/SQL"
    }
  },
  "systems": {
    "Email": {
      "icon": "data:image/png;base64,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"
    },
    "Location": {
      "icon": "data:image/png;base64,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"
    },
    "Apache": {
      "url": "https://httpd.apache.org/",
      "icon": "data:image/png;base64,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"
    },
    "MySQL": {
      "url": "https://www.mysql.com/",
      "icon": "data:image/png;base64,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"
    },
    "cPanel": {
      "url": "https://cpanel.net/",
      "icon": " data:image/png;base64,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"
    },
    "Vue.js": {
      "url": "https://vuejs.org/",
      "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH5AcJEBE46dRYUAAABD9JREFUeNrNmz9v20Ychp8jJUeIIQGJHaBAdwcJnKFAralLpsYI3GRzuhVQP0G7JlO+RNBk6FagU1EDRYZaBtqxQz9Fh6JjK8YCQv46kJTPtkTekfcnLyDAsEha97zPnQjSVA/fvvwN+AwoaIsCWeQq++kvVfyzBGWyB3+qQXKI8PcfJ9+37gBwcPQVKD6S98UvwCeANO4gkNy5wc2nH4vaTqVl6zoJ8HsCvAIWQNr6ElK1nSbDvbECFNL6AuGB5PJYljnTZ7PWTzU9niHLHMnlMcKD6hjNfwfUcG+s1HaaIAbjKF8L4FUCnABnRsyqDO6OSW5vtfWy2hyRr9Uo3ZUsb924eJejRukuIjNg0LqDQHJ7i+Hdsc0QAObASQL8C7wBMqPdBJLJgOG9ickUqPc5kFyeyHmzBdNnMzjPkVyeIhwYHVvB8P4ENRmYFkI11jfAf0n1i9OKiHE6WDBTo3S3WGy2QLL33drf69T+HMqFAMr58JoAFrBhLZgez5Dzom7/U6Njdm//dTVmkrNHL+o3glkgayyQLEeN0juB2j8FOHv0YmUABLRAljnT4wsLDi5W/icB2v+uGitQTYEYFhTvNAvCtj/Xx5xc2aCbBfc7rAXnpQXTiO1fAtDLgr2Oa0GWU5Qrf5T2LwHQEswCWeawLKK1fw1ABAt21CjdCdD+ajx6+9cAaAllwZHk8oXn9uuxLNa9eQ1AHwuG9hZ8i8g3RJj7GwGsIWdsgbK3YB9h32hbD+1vBBDQAlNQXtrfCECLfwtM4qn9RgAfjAUe228EoCWuBX3bl+YP0QggugUu2j983h2AljgWeJz7xgCiWeB57hsD0LKgPJ8OY0GA9o0BaCRXdE3TyYJA7RsD0BLGgkDtWwEIZkG/6/xW7VsB0OLXgrr9sf/2rQFcseDUZl8jCwSSnXDtWwPQYkfc1AIFw3vh2u8EwNtaEKH9TgC0uLUgQvudATi3oF/7q7s8wQBocWNB9/bNv41cA3BmQaS53xsAgCrb6mdBxPZ7A5gf9rTg1hbJrXjt9wYAq6nczYL9CcP9eO1rn79fHr59CbAN/AAcme4nywIUqC2rHn4GvgSyvu2DAwO0WH8nqxuJ7eDtrkyFAtDnG8EyG+/xRQWgpfeZmcGxnbXvFEAAC5y37xQAUK/kPizw0r5zAGc9zgta4qV95wC0uLRAa9/lDUdPADysBVr7z3seKgAALS4s8Db3vQLoczfpSrzNfa8AtGz87yyDrNp3P/MDAHCwFqzan3tq3ysAoD4v6GKB97kfBECP8wLvcz8IAC02Fly073PyhwLQ4W7SRfuf+20/CAAtl57U2BCnV3s+GAAWFpxSPcHme+4HBaClyYLg7QcFYGBB8PaDAtCyzoIo7QcH0GDBr0RoPzgALbUFGQHP+tYlwKnG9VT3EW4CP1KeMB/j6Dq/bdofVPCXjPLJ9frnKPkfhgWPmvSP0yEAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDctMDlUMTY6MTc6NTYrMDA6MDCuUSIrAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA3LTA5VDE2OjE3OjU2KzAwOjAw3wyalwAAAABJRU5ErkJggg=="
    },
    "Node.js": {
      "url": "https://nodejs.org/en/",
      "icon": "data:image/png;base64,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"
    },
    "Linux": {
      "url": "https://en.wikipedia.org/wiki/Linux",
      "icon": "data:image/png;base64,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"
    },
    "npm": {
      "url": "https://www.npmjs.com/",
      "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOIAAADfCAMAAADcKv+WAAAASFBMVEXLODf////or6/JKSjLNjXKMTDZd3bekJDJLizIISD03NzJKyrjoaDx0NDPS0r78PDmqqrdjIvHHBrGCATRVlXNPTzy1tbVZ2ZMcXmRAAABZklEQVR4nO3PUVbCQBBFwQATFBUDBHT/O/UT/iYcwmHyrLuAfl3dKr7u1Q88v39C3K8jOwxX4vG0SWz8uBLf3rvEdogBISaEmBBiQogJISaEmBBiQogJISaEmBBiQogJISaEmBBiQvcSS99W8xPLedtWZXbi59eqrUrdiIj4+hAREdsIERGxjRAREdsIERGxjRAREdsIERGxjRAREdsIERHxsYYJLZu4H3fVLgsn7qpT5RsRERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERER8bF+2iWW83aWfvv61GXKobrwXmJX+nmqL02bmnDnXuICQ0wIMSHEhBATQkwIMSHEhBATQkwIMSHEhBATQkwIMSHEhBATuiUeT5vExhvifh3ZYbgSw0NM6A8BGqNKRN9lgwAAAABJRU5ErkJggg=="
    },
    "Blancco": {
      "url": "https://www.blancco.com/",
      "icon": "data:image/png;base64,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"
    },
    "jQuery": {
      "url": "https://jquery.com/",
      "icon": "data:image/png;base64,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"
    },
    "Wordpress": {
      "url": "https://wordpress.com/",
      "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAH7AAAB+wHFzaaLAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAo5QTFRF////AAD/AICAAFWqAICAAGaZAICqAG2SAICfAHGqAICZAHSiAICVAHadAG2kAHeZAHCfAHiWAHGcAHmhAHOZAHmeAHSiAHqbAHWfAHadAHGhAHabAHKeAHeZAHOcAHSbAHieAHWgAHicAHWfAHmaAHmfAHOeAHScAHefAHSbAHedAHWfAHicAHWeAHibAHadAHifAHacAHSeAHabAHSdAHeeAHWcAHedAHecAHWeAHibAHadAHieAHacAHabAHWcAHedAHWfAHecAHWeAHecAHadAHeeAHacAHSdAHabAHWcAHedAHWeAHecAHWeAHecAHadAHeeAHacAHWdAHacAHWdAHaeAHadAHWeAHedAHecAHadAHeeAHacAHedAHaeAHWcAHadAHWeAHadAHecAHacAHedAHacAHWdAHadAHWeAHadAHadAHecAHadAHacAHedAHaeAHWdAHaeAHWcAHadAHWeAHadAHadAHecAHeeAHadAHedAHaeAHadAHWcAHadAHWeAHadAHadAHadAHeeAHadAHedAHaeAHadAHWcAHadAHWeAHadAHadAHacAHadAHeeAHadAHedAHaeAHadAHWcAHadAHadAHacAHadAHadAHadAHedAHaeAHedAHadAHWdAHadAHWeAHadAHadAHadAHadAHaeAHedAHadAHWdAHadAHadAHacAHadAHadAHadAHadAHaeAHedAHadAHWdAHadAHadAHadAHadAHacAHadAHadAHaeAHadAHadAHedAHadAHadAHadAHadAHadAHadAHadAHadAHadAHaeAHadAHadAHedAHadAHadAHadAHadAHadAHadAHadAHadAHadAHadAHadiLj0lwAAANl0Uk5TAAECAwQFBgcICQoLDA0ODxAREhMUFRYXGBobHB0eHyEiIyQlJigqLC0uLzAxMjM0NTY3ODk6Ozw+P0BBQkNFSElKS0xNTk9QUVJVVldYWVpbXF1eX2BhY2RlZ2hpamtub3Bxc3R3eHl6fX5/gIGChIWGh4iJiouMjY6QkZKTlZaXmJmanJ2en6Cio6SlpqeoqaqrrK2vsLO0tba3uLm6u7y9vr/Aw8TFx8jJysvNz9DR0tPU1dbX2Nna29ze4OHi4+Tl5ufo6err7O3u7/Dx8/T19vf5+vz9/gHOP2EAAAWeSURBVFjDrZf5X1RlFMYfQXABXFI0K0Rs0wory6UxMpVSoyxLzVSyGrW0xApTyFzQMK0htUwKLMqgLFIhCXGXVDREx2TC+f43/fDe997LJvrR89Od555z7rznPctzpE4kITOYV1ReFw7XlRflBTMTdEOSkl3STCtpLslOuV7rnsEqgEj17sKc+ZmZ83IKS6sjAFXBntdhHju3HmgKZfXxo32yQk1A/dzYruyn10KkICOu/Zu4jIII1E6/pvnQvRANpZofg0c/v3hDadnWj956YaRBUkNR2Du0c/txDVCWLkkasyXsj+HJdRN7SFJ6GTSM68x+ToTGyZLUf+FB2kl43RBJmtxIZE7H0cuHmjRJd2xtpkNpXp0sKa0G8juIZewuKE6SNO0fOpXwOzFSUjHsau8hH3JjpN6buKaU9JdiciG/3fkhV1L6IbqQYw9KyoU2cRgXoThGmhrpyr6lMi9Riikm0uouhjZQkySN+rcr+9pHjUFSDQ3+fNhLY5p01+mu7M/cZi3SGtnry1+YLCVWdWXPc57NZHCzOraWMin2uy7tryb6/nUZtfYu5xJNl3rea6UWDtzbRioATvnjlh5lrlP/9YRaXckB+K3tNe8GYLz7u5sUot70hyCRVPfFgEAgcBT+CgQCwyyWGggEKgH40dUbL6VGCEqSqijwvjS4xT3xLxab4kVhisVWJ0kFVElSCmRIyfbN965y1F50nFcd9X0dbFW2lAEpkrJpilPsl9bBK97n3rbYBg8rdKDcaimuiWxJJYSkCS23O2+SrrjKB91E913lkwbaxlgpRImU0EyWtIY3rPZ2T/kBG/ITHvadgfbxhZRFc4IyifSRTvC7dfCMp7zSYrm+ZDLj4RIXpD4RMhWkWhoBDHeU4xu9TtjNwUb4zpAtSf1aoJ9UTVB57JamAsvs5wo85Scs9qeHbZCk2cBDUil5KqJQeh045OaIp7zJYks87FdJ+gGYLhVSpHJypPcBRrUP2YV42zCiLlZn022RlEO56pgvbQHI6yBkz1qswoUqJS0EWCfNo05hMs0/4u8YR3mk52CjdbDAhX6QVAlQKmUSNg72+HPEH7KZFhr4n4W2S/cAsMc4qGO+9BUAn7YL2RWvg3xrsUXScgC+MkcoJ8feXFOPtiHb4ZXpi9ZBunQEgAITxCIKpRXm3bS2IZumHoMs5bnsXEyMRpunFeYa89gtzTDQ19bBfPP7Yg9lvWmxkMG+kdaapxkmkYJUS8Od6WlZyQATss1SaaWvDQO8qu7nzNNwk8qmmJz8n221iwF4SkNauNuBup8HiPTTJKPb6BSTKeedBiyzDl4AOBurJfCexdYD7HLPstMpZ6ehOJPPtpXeYWCtdAgOWwdjAbKU6My/CU5DMS1N+w3qhmwrMEaPAzxia+Q4hHtpptHc77Y001RneYkuSZoIx7tpE8DHFvsAPpdKjeYst6math5/xuA2ZLENfKhelwDO2Al2Pzxt+/6ZeLetO4NlqXHwrv3cJ4zUSziX4Uj1+e6mEGGpb7CY0Zbc7Fa7JOmxGqnMKH9mscXrnUKkOdk32pzh6hTsw1Z7hlKuGuiSpcgpY51CZIF/uDrjXRuBVuxpaQe0YLnbJnzj3SEYcRUAp2PcAXzUOvjGc3AEoCKuNcGwFGfQSYCM9s010t9iowFODmpLcSzJSr/im37a7HW21yy2FriS3p5kuTTvMlx02kqCj23/bAvqHISndkDzXKJ5zz73aLN90yh6p8EmwR93d0g0Xaobvyq60wDlfnq1yGkq0ZVxnVBdj2w/dayvJA2L+h3slyQlHs5Qp2Tbo/sDh3sX7sp9kjR0wDXovn/hcGrXLyvcztbpwtF65UkuOuW3P7vGIYfXXHnaLF2pLy9bu+2nPTvW58xMu86l6+bXvluweN786nsLlu8bW///B6oi2KuqZm2MAAAAAElFTkSuQmCC"
    },
    "Express.js": {
      "url": "https://expressjs.com/",
      "icon": "data:image/png;base64,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"
    },
    "OpenCart": {
      "url": "https://www.opencart.com/",
      "icon": "data:image/png;base64,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"
    },
    "Github": {
      "url": "https://github.com",
      "icon": "data:image/png;base64,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"
    },
    "Parcel": {
      "url": "https://parceljs.org",
      "icon": "data:image/png;base64,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"
    }
  }
};
},{}],"main.js":[function(require,module,exports) {
"use strict";

require("./css/minimal-css-reset.css");

require("../data/template/style.css");

var _vueMin = _interopRequireDefault(require("vue/dist/vue.min.js"));

var _data = _interopRequireDefault(require("../data/data.json"));

var _assets = _interopRequireDefault(require("../data/assets.json"));

var _template = _interopRequireDefault(require("../data/template/template.html"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var content = _data.default;

if (!content.settings || _typeof(content.settings) !== 'object') {
  content.settings = {};
  content.settings.siteName = 'CV Template for Web';
  content.settings.langDefault = 'en';
}

content.assets = _assets.default;
content.lang = '';
content.show = true;

_vueMin.default.component('main-component', {
  data: function data() {
    return content;
  },
  mounted: function mounted() {
    this.setLanguage();
  },
  methods: {
    setTitle: function setTitle() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '- ';
      var title = document.querySelector('title');

      if (!title) {
        title = document.createElement('title');
        document.querySelector('meta').appendChild(title);
      }

      title.innerHTML = this.settings.siteName ? "".concat(value, " | ").concat(this.settings.siteName) : value;
    },
    setLanguage: function setLanguage() {
      var _this = this;

      var lang = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.settings.langDefault;
      this.show = false;
      var available = false;

      if (this.settings.langAvailable) {
        this.settings.langAvailable.find(function (item) {
          if (item.code === lang) {
            available = true;
          }
        });
      }

      if (!this.settings.langDefault) this.settings.langDefault = 'en';
      if (available === false) lang = this.settings.langDefault;
      this.lang = lang;
      document.querySelector('html').setAttribute('lang', lang);
      document.querySelector('main').classList.add('fade-in');
      if (this.name) this.setTitle(this.name[this.lang]);
      setTimeout(function () {
        return _this.show = true;
      }, 300);
    },
    date: function date() {
      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (obj.date) {
        if (obj.date[this.lang]) return obj.date[this.lang];
        if (obj.date[this.settings.langDefault]) return obj.date[this.settings.langDefault];
      }

      return null;
    },
    renderAssets: function renderAssets() {
      var _this2 = this;

      var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'languages';
      var assets = [];
      arr.forEach(function (item, i) {
        var match = null;
        Object.keys(_this2.assets[type]).forEach(function (key, i) {
          if (key === item) match = _this2.assets[type][key];
        });

        if (match) {
          match.name = item;
          assets.push(match);
        } else {
          assets.push({
            name: item,
            icon: null,
            color: 'var(--col-main)'
          });
        }
      });
      return assets;
    },
    linkIcon: function linkIcon(linkKey) {
      var _this3 = this;

      var icon = null;
      Object.keys(this.assets.systems).forEach(function (key, i) {
        if (key === linkKey) {
          icon = _this3.assets.systems[key].icon;
        }
      });
      return icon;
    },
    renderLang: function renderLang() {
      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (obj) return obj[this.lang] ? obj[this.lang] : obj[this.settings.langDefault];
      return obj;
    }
  },
  template: _template.default
});

var load = document.getElementById('load');
load.classList.add('transparent');
setTimeout(function () {
  document.getElementById('app').innerHTML = '<main-component/>';
  new _vueMin.default({
    el: '#app'
  });
  load.style.display = 'none';
  document.querySelectorAll('body').forEach(function (body) {
    body.classList.remove('no-scroll');
  });
}, 500);
},{"./css/minimal-css-reset.css":"css/minimal-css-reset.css","../data/template/style.css":"../data/template/style.css","vue/dist/vue.min.js":"../node_modules/vue/dist/vue.min.js","../data/data.json":"../data/data.json","../data/assets.json":"../data/assets.json","../data/template/template.html":"../data/template/template.html"}],"../node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63946" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}],"../node_modules/parcel/src/builtins/bundle-loader.js":[function(require,module,exports) {
var getBundleURL = require('./bundle-url').getBundleURL;

function loadBundlesLazy(bundles) {
  if (!Array.isArray(bundles)) {
    bundles = [bundles];
  }

  var id = bundles[bundles.length - 1];

  try {
    return Promise.resolve(require(id));
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return new LazyPromise(function (resolve, reject) {
        loadBundles(bundles.slice(0, -1)).then(function () {
          return require(id);
        }).then(resolve, reject);
      });
    }

    throw err;
  }
}

function loadBundles(bundles) {
  return Promise.all(bundles.map(loadBundle));
}

var bundleLoaders = {};

function registerBundleLoader(type, loader) {
  bundleLoaders[type] = loader;
}

module.exports = exports = loadBundlesLazy;
exports.load = loadBundles;
exports.register = registerBundleLoader;
var bundles = {};

function loadBundle(bundle) {
  var id;

  if (Array.isArray(bundle)) {
    id = bundle[1];
    bundle = bundle[0];
  }

  if (bundles[bundle]) {
    return bundles[bundle];
  }

  var type = (bundle.substring(bundle.lastIndexOf('.') + 1, bundle.length) || bundle).toLowerCase();
  var bundleLoader = bundleLoaders[type];

  if (bundleLoader) {
    return bundles[bundle] = bundleLoader(getBundleURL() + bundle).then(function (resolved) {
      if (resolved) {
        module.bundle.register(id, resolved);
      }

      return resolved;
    }).catch(function (e) {
      delete bundles[bundle];
      throw e;
    });
  }
}

function LazyPromise(executor) {
  this.executor = executor;
  this.promise = null;
}

LazyPromise.prototype.then = function (onSuccess, onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.then(onSuccess, onError);
};

LazyPromise.prototype.catch = function (onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.catch(onError);
};
},{"./bundle-url":"../node_modules/parcel/src/builtins/bundle-url.js"}],"../node_modules/parcel/src/builtins/loaders/browser/html-loader.js":[function(require,module,exports) {
module.exports = function loadHTMLBundle(bundle) {
  return fetch(bundle).then(function (res) {
    return res.text();
  });
};
},{}],0:[function(require,module,exports) {
var b=require("../node_modules/parcel/src/builtins/bundle-loader.js");b.register("html",require("../node_modules/parcel/src/builtins/loaders/browser/html-loader.js"));b.load([["template.ba543a59.html","../data/template/template.html"]]).then(function(){require("main.js");});
},{}]},{},["../node_modules/parcel/src/builtins/hmr-runtime.js",0], null)