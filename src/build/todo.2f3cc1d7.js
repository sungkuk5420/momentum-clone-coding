parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"T99w":[function(require,module,exports) {
var e=document.querySelector(".js-toDoForm"),t=e.querySelector("input"),n=document.querySelector(".js-toDoList"),o="toDos",c=[],a=function(){m(),e.addEventListener("submit",s)},r=function(e,t,n){var o={id:e,checked:t,text:n};c.push(o),d()},d=function(){localStorage.setItem(o,JSON.stringify(c))},i=function(e){e.target.parentNode.remove();e.taget;var t=e.target.parentNode;t.remove();var n=c.filter(function(e){return e.id!==parseInt(t.id)});c=n,d()},l=function(){n.scrollTop=99999},u=function(e){var t=event.target,n=t.parentNode.dataset.todoid,a=t.parentNode.querySelector("input[type=checkbox]").checked,r=localStorage.getItem(o);if(console.log(r),null!==r){var i=JSON.parse(r);i.forEach(function(e){e.id==n&&(e.checked=a)}),c=i,d()}},p=function(e,t){var o=document.createElement("li"),c=document.createElement("button"),a=document.createElement("label"),d=document.createElement("input"),p=document.createElement("span"),s=(new Date).getTime();p.innerText=e,d.type="checkbox",console.log(t),d.checked=t,a.classList.add("material-checkbox"),a.addEventListener("click",u),a.dataset.todoid=s,o.id=s,c.innerText="✕",c.addEventListener("click",i),a.appendChild(d),a.appendChild(p),o.appendChild(a),o.appendChild(c),n.appendChild(o),r(s,t,e),l()},s=function(e){e.preventDefault();var n=t.value;p(n,!1),t.value=""},m=function(e){var t=localStorage.getItem(o);(console.log(t),null!==t)&&JSON.parse(t).forEach(function(e){p(e.text,e.checked)})};a();
},{}]},{},["T99w"], null)
//# sourceMappingURL=/todo.2f3cc1d7.map