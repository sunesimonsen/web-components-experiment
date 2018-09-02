!function(e){var t={};function o(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(r,s,function(t){return e[t]}.bind(null,s));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const r=(e=>e()==e())(()=>e=>e``),s=new Map,n=(new Map,(e,...t)=>i(e,t,s,!1));function i(e,t,o,s){const n=r?e:e.join("{{--uniqueness-workaround--}}");let i=o.get(n);return void 0===i&&(i=new f(e,s),o.set(n,i)),new a(i,t)}class a{constructor(e,t){this.template=e,this.values=t}}const l=`{{lit-${String(Math.random()).slice(2)}}}`,c=`\x3c!--${l}--\x3e`,u=new RegExp(`${l}|${c}`),d=/[ \x09\x0a\x0c\x0d]([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)[ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*)$/;function h(e){const t=e.lastIndexOf(">");return e.indexOf("<",t+1)>-1?e.length:t}class p{constructor(e,t,o,r,s){this.type=e,this.index=t,this.name=o,this.rawName=r,this.strings=s}}class f{constructor(e,t=!1){this.parts=[];const o=this.element=document.createElement("template");o.innerHTML=this._getHtml(e,t);const r=o.content;if(t){const e=r.firstChild;r.removeChild(e),N(r,e.firstChild)}const s=document.createTreeWalker(r,133,null,!1);let n=-1,i=0;const a=[];let c,h;for(;s.nextNode();){n++,c=h;const t=h=s.currentNode;if(1===t.nodeType){if(!t.hasAttributes())continue;const o=t.attributes;let r=0;for(let e=0;e<o.length;e++)o[e].value.indexOf(l)>=0&&r++;for(;r-- >0;){const r=e[i],s=d.exec(r)[1],a=o.getNamedItem(s),l=a.value.split(u);this.parts.push(new p("attribute",n,a.name,s,l)),t.removeAttribute(a.name),i+=l.length-1}}else if(3===t.nodeType){const e=t.nodeValue;if(e.indexOf(l)<0)continue;const o=t.parentNode,r=e.split(u),s=r.length-1;i+=s,t.textContent=r[s];for(let e=0;e<s;e++)o.insertBefore(document.createTextNode(r[e]),t),this.parts.push(new p("node",n++))}else if(8===t.nodeType&&t.nodeValue===l){const e=t.parentNode,o=t.previousSibling;null===o||o!==c||o.nodeType!==Node.TEXT_NODE?e.insertBefore(document.createTextNode(""),t):n--,this.parts.push(new p("node",n++)),a.push(t),null===t.nextSibling?e.insertBefore(document.createTextNode(""),t):n--,h=c,i++}}for(const e of a)e.parentNode.removeChild(e)}_getHtml(e,t){const o=e.length-1;let r="",s=!0;for(let t=0;t<o;t++){const o=e[t];r+=o;const n=h(o);r+=(s=n>-1?n<o.length:s)?c:l}return r+=e[o],t?`<svg>${r}</svg>`:r}}const g=(e,t)=>b(t)?(t=t(e),v):null===t?void 0:t,m=e=>(e.__litDirective=!0,e),b=e=>"function"==typeof e&&!0===e.__litDirective,v={};class x{constructor(e,t,o,r){this.instance=e,this.element=t,this.name=o,this.strings=r,this.size=r.length-1}_interpolate(e,t){const o=this.strings,r=o.length-1;let s="";for(let n=0;n<r;n++){s+=o[n];const r=g(this,e[t+n]);if(r&&r!==v&&(Array.isArray(r)||"string"!=typeof r&&r[Symbol.iterator]))for(const e of r)s+=e;else s+=r}return s+o[r]}setValue(e,t){const o=this._interpolate(e,t);this.element.setAttribute(this.name,o)}}class y{constructor(e,t,o){this.instance=e,this.startNode=t,this.endNode=o,this._previousValue=void 0}setValue(e){if((e=g(this,e))!==v)if(null===e||"object"!=typeof e&&"function"!=typeof e){if(e===this._previousValue)return;this._setText(e)}else e instanceof a?this._setTemplateResult(e):Array.isArray(e)||e[Symbol.iterator]?this._setIterable(e):e instanceof Node?this._setNode(e):void 0!==e.then?this._setPromise(e):this._setText(e)}_insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}_setNode(e){this._previousValue!==e&&(this.clear(),this._insert(e),this._previousValue=e)}_setText(e){const t=this.startNode.nextSibling;e=void 0===e?"":e,t===this.endNode.previousSibling&&t.nodeType===Node.TEXT_NODE?t.textContent=e:this._setNode(document.createTextNode(e)),this._previousValue=e}_setTemplateResult(e){let t;this._previousValue&&this._previousValue.template===e.template?t=this._previousValue:(t=new w(e.template,this.instance._partCallback),this._setNode(t._clone()),this._previousValue=t),t.update(e.values)}_setIterable(e){Array.isArray(this._previousValue)||(this.clear(),this._previousValue=[]);const t=this._previousValue;let o=0;for(const r of e){let e=t[o];if(void 0===e){let r=this.startNode;if(o>0){r=t[o-1].endNode=document.createTextNode(""),this._insert(r)}e=new y(this.instance,r,this.endNode),t.push(e)}e.setValue(r),o++}if(0===o)this.clear(),this._previousValue=void 0;else if(o<t.length){const e=t[o-1];t.length=o,this.clear(e.endNode.previousSibling),e.endNode=this.endNode}}_setPromise(e){this._previousValue=e,e.then(t=>{this._previousValue===e&&this.setValue(t)})}clear(e=this.startNode){C(this.startNode.parentNode,e.nextSibling,this.endNode)}}const _=(e,t,o)=>{if("attribute"===t.type)return new x(e,o,t.name,t.strings);if("node"===t.type)return new y(e,o,o.nextSibling);throw new Error(`Unknown part type ${t.type}`)};class w{constructor(e,t=_){this._parts=[],this.template=e,this._partCallback=t}update(e){let t=0;for(const o of this._parts)void 0===o.size?(o.setValue(e[t]),t++):(o.setValue(e,t),t+=o.size)}_clone(){const e=document.importNode(this.template.element.content,!0),t=this.template.parts;if(t.length>0){const o=document.createTreeWalker(e,133,null,!1);let r=-1;for(let e=0;e<t.length;e++){const s=t[e];for(;r<s.index;)r++,o.nextNode();this._parts.push(this._partCallback(this,s,o.currentNode))}}return e}}const N=(e,t,o=null,r=null)=>{let s=t;for(;s!==o;){const t=s.nextSibling;e.insertBefore(s,r),s=t}},C=(e,t,o=null)=>{let r=t;for(;r!==o;){const t=r.nextSibling;e.removeChild(r),r=t}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
function k(e,t){!function(e,t,o=_){let r=t.__templateInstance;if(void 0!==r&&r.template===e.template&&r._partCallback===o)return void r.update(e.values);r=new w(e.template,o),t.__templateInstance=r;const s=r._clone();r.update(e.values),C(t,t.firstChild),t.appendChild(s)}(e,t,z)}const z=(e,t,o)=>{if("attribute"===t.type){if(t.rawName.startsWith("on-")){return new class{constructor(e,t,o){this.instance=e,this.element=t,this.eventName=o}setValue(e){const t=g(this,e),o=this._listener;t!==o&&(this._listener=t,null!=o&&this.element.removeEventListener(this.eventName,o),null!=t&&this.element.addEventListener(this.eventName,t))}}(e,o,t.rawName.slice(3))}if(t.name.endsWith("$")){const r=t.name.slice(0,-1);return new x(e,o,r,t.strings)}return new class extends x{setValue(e,t){const o=this.strings;let r;r=2===o.length&&""===o[0]&&""===o[1]?g(this,e[t]):this._interpolate(e,t),this.element[this.name]=r}}(e,o,t.rawName,t.strings)}return _(e,t,o)};function V(e,t,o){const{type:r,attrName:s}=o;function n(){return this.__values__[t]}Object.defineProperty(e,t,o.computed?{get:n}:{get:n,set:function(e){let o=null===e||void 0===e?e:r===Array?e:r(e);this._setPropertyValue(t,o),s&&this._setAttributeValue(s,o,r),this.invalidate()}})}class E extends HTMLElement{constructor(){super(),this._needsRender=!1,this._lookupCache={},this._attrMap={},this._deps={},this.__values__={},this.attachShadow({mode:"open"});for(const e in this.constructor.properties){const t=this.constructor.properties[e],{value:o,attrName:r,computed:s}=t;"string"==typeof r&&r.length&&(this._attrMap[r]=e),r||void 0===o||this._setPropertyValue(e,o);const n=/(\w+)\((.+)\)/.exec(s);if(n){const t=n[1],o=n[2].split(/,\s*/),r=()=>{const r=o.map(e=>this[e]);if(this[t]&&r.every(e=>void 0!==e)){const o=this[t].apply(this,r);this._setPropertyValue(e,o)}};for(const e of o)this._deps[e]?this._deps[e].push(r):this._deps[e]=[r];r()}}}_setPropertyValue(e,t){this.__values__[e]=t,this._deps[e]&&this._deps[e].map(e=>e())}_setPropertyValueFromAttributeValue(e,t){const o=this._attrMap[e],{type:r}=this.constructor.properties[o];let s;s="Boolean"===r.name?""===t||!!t&&t===e.toLowerCase():null!==t?r(t):void 0,this._setPropertyValue(o,s)}_setAttributeValue(e,t,o){"Boolean"===o.name?t?this.setAttribute(e,""):this.removeAttribute(e):this.setAttribute(e,t)}static get properties(){return{}}static get listeners(){return[]}static get observedAttributes(){return Object.keys(this.properties).map(e=>this.properties[e].attrName).filter(e=>e)}static withProperties(){for(const e in this.properties)V(this.prototype,e,this.properties[e]);return this}renderCallback(){k(this.render(this),this.shadowRoot)}render(e){return n``}attributeChangedCallback(e,t,o){this._setPropertyValueFromAttributeValue(e,o),this.invalidate()}connectedCallback(){for(const e of this.constructor.observedAttributes)this._setPropertyValueFromAttributeValue(e,this.getAttribute(e));this.invalidate().then(()=>{for(const e of this.constructor.listeners){("string"==typeof e.target?this.$(e.target):e.target).addEventListener(e.eventName,e.handler.bind(this))}})}async invalidate(){this._needsRender||(this._needsRender=!0,this._needsRender=await!1,this.renderCallback())}$(e){let t=this._lookupCache[e];if(!t&&this.shadowRoot){const o=this.shadowRoot.getElementById(e);o&&(t=o,this._lookupCache[e]=o)}return t}}customElements.define("z-button",class extends E{render(){return n`
      <style>
        button {
          transition: border-color .25s ease-in-out,box-shadow .1s ease-in-out,background-color .25s ease-in-out,color .25s ease-in-out;
          border: 1px solid #30aabc;
          border-radius: 4px;
          background-color: transparent;
          cursor: pointer;
          padding: 0.6em 2.25em;
          text-align: center;
          color: #30aabc;
          font-size: 12px;
          font-weight: 400;
          box-sizing: border-box;
          user-select: none;
        }

        button:hover {
          border-color: transparent;
          background-color: #41c8dc;
          color: #fff;
        }

        button:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(48,170,188,.4);
        }

        button:active {
          transition: border-color .1s ease-in-out,background-color .1s ease-in-out,color .1s ease-in-out;
          border-color: transparent;
          background-color: #3094a3;
          text-decoration: none;
          color: #fff;
          box-shadow: none;
        }
      </style>
      <button><slot></slot></button>
    `}});customElements.define("z-callout",class extends E{static get properties(){return{title:{type:String,attrName:"title",value:""},type:{type:String,attrName:"type",value:""}}}render(){return n`
      <style>
        .callout {
          display: block;
          position: relative;
          border: 1px solid #ddd;
          border-radius: 4px;
          background-color: #fff;
          padding: 20px 40px;
          line-height: 1.42857;
          color: #777;
          font-size: 14px;
        }

        .error, .success, .warning {
            background-repeat: no-repeat;
            background-position: 20px 23px;
            padding-left: 50px;
        }

        .success {
          border-color: #16ba52;
          background-color: rgba(22,186,82,.1);
          background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14' color='%2316BA52'%3E%3Cpath fill='currentColor' d='M7 0C3.13 0 0 3.13 0 7s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm3.09 5.363l-3.3 4.2a.75.75 0 0 1-.545.286H6.2a.748.748 0 0 1-.53-.22L3.97 7.93a.75.75 0 1 1 1.06-1.06l1.103 1.102L8.91 4.437a.75.75 0 0 1 1.18.926z'/%3E%3C/svg%3E");
        }

        .warning {
          border-color: #ffc800;
          background-color: rgba(255,200,0,.1);
          background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14' color='%23FFC800'%3E%3Cpath fill='currentColor' d='M7 0C3.13 0 0 3.13 0 7s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm-.75 3.75c0-.41.34-.75.75-.75s.75.34.75.75v2.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.5zM7 11c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z'/%3E%3C/svg%3E");
        }

        .error {
          border-color: #eb6651;
          background-color: hsla(8,79%,62%,.1);
          background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14' color='%23EB6651'%3E%3Cpath fill='currentColor' d='M7 0C3.13 0 0 3.13 0 7s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm-.75 3.75c0-.41.34-.75.75-.75s.75.34.75.75v2.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.5zM7 11c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z'/%3E%3C/svg%3E");
        }

        h1 {
          display: block;
          margin: 0;
          color: #555;
          font-size: 14px;
          font-weight: 600;
        }

        ::slotted(z-callout-content) {
          display: block;
          margin: 10px 0 0;
        }
      </style>
      <div class$="callout ${this.type}">
        <h1>${this.title}</h1>
        <slot></slot>
      </div>
    `}}.withProperties()),customElements.define("z-callout-content",class extends HTMLElement{});
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const S=new WeakMap;function A(e,t,o){e.startNode.parentNode||o.delete(t)}customElements.define("z-color",class extends E{static get properties(){return{value:{type:String,attrName:"value",value:""}}}render(){return n`
      <style>
        .color {
          height: 80px;
        }
      </style>
      <div class="color" style="background: ${this.value}"></div>
    `}}.withProperties());const T=["#001f3f","#0074D9","#7FDBFF","#39CCCC","#3D9970","#2ECC40","#01FF70","#FFDC00","#FF851B","#FF4136","#85144b","#F012BE","#B10DC9","#111111","#AAAAAA","#DDDDDD"];customElements.define("z-color-swap",class extends E{constructor(){super(),setInterval(()=>{const e=Math.floor(Math.random()*T.length),t=Math.floor(Math.random()*T.length),o=T[e];T[e]=T[t],T[t]=o,this.invalidate()},1e3),this.invalidate()}render(){return n`
      <style>
        .colors {
          display: grid;
          grid-template-columns: repeat(16, 1fr);
          margin: 20px;
        }
      </style>
      <div class="colors">
        ${function(e,t,o){let r;return 2===arguments.length?o=t:3===arguments.length&&(r=t),m(t=>{if(!(t instanceof y))throw new Error("repeat can only be used on NodeParts");let s=S.get(t);void 0===s&&(s=new Map,S.set(t,s));const n=t.startNode.parentNode;let i=-1,a=t.startNode.nextSibling;for(const l of e){let e,c;try{e=o(l,++i),c=r?r(l):i}catch(e){console.error(e);continue}let u=s.get(c);if(void 0===u){const e=document.createTextNode(""),o=document.createTextNode("");n.insertBefore(e,a),n.insertBefore(o,a),u=new y(t.instance,e,o),void 0!==c&&s.set(c,u)}else if(a!==u.startNode){const e=u.endNode.nextSibling;a!==e&&N(n,u.startNode,e,a)}else a=u.endNode.nextSibling;u.setValue(e)}a!==t.endNode&&(C(n,a,t.endNode),s.forEach(A))})}(T,e=>e,e=>n`<z-color value=${e}></z-color>`)}
      </div>
    `}}),o.d(t,"App",function(){return P});const M=e=>{alert("Click!")};class P extends E{render(){return n`
      <style>
        :host {
          font-family: system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Oxygen-Sans,Arial,sans-serif;
          font-size: 14px;
        }
        button {
          background: darkred;
          color: white;
          border: thin solid red;
        }

        h1 { font-size: 18px; }
        p { margin: 8px; }

        .callouts {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 20px;
          margin: 20px;
        }
      </style>
      <section>
        <h1>Buttons</h1>
        <p>This is a custom button: <z-button onclick=${M}><strong>button</strong></z-button></p>
        <p>This is another custom button: <z-button onclick=${M}>Another button</z-button></p>
        <p>This is a normal button: <button onclick=${M}><strong>button</strong></button></p>
      </section>
      <section>
        <h1>Callouts</h1>
        <div class='callouts'>
          <z-callout title="Callout: Standard (Multi-line)">
            <z-callout-content>
              Chicharrones brooklyn cardigan marfa pour-over craft beer dreamcatcher cold-pressed brunch meggings. Live-edge disrupt narwhal irony neutra single-origin coffee, biodiesel before they sold out roof party venmo farm-to-table direct trade poke tousled aesthetic. Prism dreamcatcher glossier cloud bread blue bottle farm-to-table celiac chicharrones single-origin coffee salvia knausgaard raclette.
            </z-callout-content>
          </z-callout>
          <z-callout type="success" title="Success Callout: Standard (Multi-line)">
            <z-callout-content>
              Chicharrones brooklyn cardigan marfa pour-over craft beer dreamcatcher cold-pressed brunch meggings. Live-edge disrupt narwhal irony neutra single-origin coffee, biodiesel before they sold out roof party venmo farm-to-table direct trade poke tousled aesthetic. Prism dreamcatcher glossier cloud bread blue bottle farm-to-table celiac chicharrones single-origin coffee salvia knausgaard raclette.
            </z-callout-content>
          </z-callout>
          <z-callout type="warning" title="Warning Callout: Standard (Multi-line)">
            <z-callout-content>
              Chicharrones brooklyn cardigan marfa pour-over craft beer dreamcatcher cold-pressed brunch meggings. Live-edge disrupt narwhal irony neutra single-origin coffee, biodiesel before they sold out roof party venmo farm-to-table direct trade poke tousled aesthetic. Prism dreamcatcher glossier cloud bread blue bottle farm-to-table celiac chicharrones single-origin coffee salvia knausgaard raclette.
            </z-callout-content>
          </z-callout>
          <z-callout type="error" title="Error Callout: Standard (Multi-line)">
            <z-callout-content>
              Chicharrones brooklyn cardigan marfa pour-over craft beer dreamcatcher cold-pressed brunch meggings. Live-edge disrupt narwhal irony neutra single-origin coffee, biodiesel before they sold out roof party venmo farm-to-table direct trade poke tousled aesthetic. Prism dreamcatcher glossier cloud bread blue bottle farm-to-table celiac chicharrones single-origin coffee salvia knausgaard raclette.
            </z-callout-content>
          </z-callout>
        </div>
        <z-color-swap></z-color-swap>
      </section>
    `}}customElements.define("z-app",P);const F=document.createElement("z-app");document.body.appendChild(F)}]);