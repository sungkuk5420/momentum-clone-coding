parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"T99w":[function(require,module,exports) {
var e=document.querySelector(".js-toDoForm"),t=e.querySelector("input"),n=document.querySelector(".js-toDoList"),o="toDos",r=[],a=function(){m(),e.addEventListener("submit",p)},c=function(e){var t={id:r.length+1,text:e};r.push(t),l()},l=function(){localStorage.setItem(o,JSON.stringify(r))},i=function(e){e.target.parentNode.remove();e.taget;var t=e.target.parentNode;t.remove();var n=r.filter(function(e){return e.id!==parseInt(t.id)});r=n,l()},u=function(){n.scrollTop=99999},d=function(e){var t=document.createElement("li"),o=document.createElement("button"),a=document.createElement("label"),l=document.createElement("input"),d=document.createElement("span");d.innerText=e,l.type="checkbox",a.classList.add("material-checkbox");var p=r.length+1;t.id=p,o.innerText="✕",o.addEventListener("click",i),a.appendChild(l),a.appendChild(d),t.appendChild(a),t.appendChild(o),n.appendChild(t),c(e),u()},p=function(e){e.preventDefault();var n=t.value;d(n),t.value=""},m=function(e){var t=localStorage.getItem(o);(console.log(t),null!==t)&&JSON.parse(t).forEach(function(e){d(e.text)})};a();
},{}]},{},["T99w"], null)
//# sourceMappingURL=todo.12e044c6.map