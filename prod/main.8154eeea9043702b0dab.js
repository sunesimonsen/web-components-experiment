!function(e){var t={};function o(s){if(t[s])return t[s].exports;var n=t[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(s,n,function(t){return e[t]}.bind(null,n));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);
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
const s=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,n=(e,t,o=null)=>{let s=t;for(;s!==o;){const t=s.nextSibling;e.removeChild(s),s=t}},i=new WeakMap,r=e=>i.has(e),a=`{{lit-${String(Math.random()).slice(2)}}}`,l=`\x3c!--${a}--\x3e`,c=new RegExp(`${a}|${l}`),d=(()=>{const e=document.createElement("div");return e.setAttribute("style","{{bad value}}"),"{{bad value}}"!==e.getAttribute("style")})();class u{constructor(e,t){this.parts=[],this.element=t;let o=-1,s=0;const n=[],i=t=>{const r=t.content,l=document.createTreeWalker(r,133,null,!1);let u,h;for(;l.nextNode();){o++,u=h;const t=h=l.currentNode;if(1===t.nodeType){if(t.hasAttributes()){const n=t.attributes;let i=0;for(let e=0;e<n.length;e++)n[e].value.indexOf(a)>=0&&i++;for(;i-- >0;){const n=e.strings[s],i=m.exec(n)[2],r=d&&"style"===i?"style$":/^[a-zA-Z-]*$/.test(i)?i:i.toLowerCase(),a=t.getAttribute(r).split(c);this.parts.push({type:"attribute",index:o,name:i,strings:a}),t.removeAttribute(r),s+=a.length-1}}"TEMPLATE"===t.tagName&&i(t)}else if(3===t.nodeType){const e=t.nodeValue;if(e.indexOf(a)<0)continue;const i=t.parentNode,r=e.split(c),l=r.length-1;s+=l;for(let e=0;e<l;e++)i.insertBefore(""===r[e]?p():document.createTextNode(r[e]),t),this.parts.push({type:"node",index:o++});i.insertBefore(""===r[l]?p():document.createTextNode(r[l]),t),n.push(t)}else if(8===t.nodeType)if(t.nodeValue===a){const e=t.parentNode,i=t.previousSibling;null===i||i!==u||i.nodeType!==Node.TEXT_NODE?e.insertBefore(p(),t):o--,this.parts.push({type:"node",index:o++}),n.push(t),null===t.nextSibling?e.insertBefore(p(),t):o--,h=u,s++}else{let e=-1;for(;-1!==(e=t.nodeValue.indexOf(a,e+1));)this.parts.push({type:"node",index:-1})}}};i(t);for(const e of n)e.parentNode.removeChild(e)}}const h=e=>-1!==e.index,p=()=>document.createComment(""),m=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class g{constructor(e,t,o){this._parts=[],this.template=e,this.processor=t,this._getTemplate=o}update(e){let t=0;for(const o of this._parts)void 0!==o&&o.setValue(e[t]),t++;for(const e of this._parts)void 0!==e&&e.commit()}_clone(){const e=s?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=this.template.parts;let o=0,n=0;const i=e=>{const s=document.createTreeWalker(e,133,null,!1);let r=s.nextNode();for(;o<t.length&&null!==r;){const e=t[o];if(h(e))if(n===e.index){if("node"===e.type){const e=this.processor.handleTextExpression(this._getTemplate);e.insertAfterNode(r),this._parts.push(e)}else this._parts.push(...this.processor.handleAttributeExpressions(r,e.name,e.strings));o++}else n++,"TEMPLATE"===r.nodeName&&i(r.content),r=s.nextNode();else this._parts.push(void 0),o++}};return i(e),e}}
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
 */const f={},b=e=>null===e||!("object"==typeof e||"function"==typeof e);class v{constructor(e,t,o){this.dirty=!0,this.element=e,this.name=t,this.strings=o,this.parts=[];for(let e=0;e<o.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new x(this)}_getValue(){const e=this.strings,t=e.length-1;let o="";for(let s=0;s<t;s++){o+=e[s];const t=this.parts[s];if(void 0!==t){const e=t.value;if(null!=e&&(Array.isArray(e)||"string"!=typeof e&&e[Symbol.iterator]))for(const t of e)o+="string"==typeof t?t:String(t);else o+="string"==typeof e?e:String(e)}}return o+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class x{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===f||b(e)&&e===this.value||(this.value=e,r(e)||(this.committer.dirty=!0))}commit(){for(;r(this.value);){const e=this.value;this.value=f,e(this)}this.value!==f&&this.committer.commit()}}class y{constructor(e){this.value=void 0,this._pendingValue=void 0,this.templateFactory=e}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e._insert(this.startNode=p()),e._insert(this.endNode=p())}insertAfterPart(e){e._insert(this.startNode=p()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this._pendingValue=e}commit(){for(;r(this._pendingValue);){const e=this._pendingValue;this._pendingValue=f,e(this)}const e=this._pendingValue;e!==f&&(b(e)?e!==this.value&&this._commitText(e):e instanceof z?this._commitTemplateResult(e):e instanceof Node?this._commitNode(e):Array.isArray(e)||e[Symbol.iterator]?this._commitIterable(e):void 0!==e.then?this._commitPromise(e):this._commitText(e))}_insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}_commitNode(e){this.value!==e&&(this.clear(),this._insert(e),this.value=e)}_commitText(e){const t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&t.nodeType===Node.TEXT_NODE?t.textContent=e:this._commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}_commitTemplateResult(e){const t=this.templateFactory(e);let o;if(this.value&&this.value.template===t)o=this.value;else{const n=(o=new g(t,e.processor,this.templateFactory))._clone();s&&!this.endNode.isConnected&&(document.adoptNode(n),customElements.upgrade(n)),this._commitNode(n),this.value=o}o.update(e.values)}_commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let o,s=0;for(const n of e)void 0===(o=t[s])&&(o=new y(this.templateFactory),t.push(o),0===s?o.appendIntoPart(this):o.insertAfterPart(t[s-1])),o.setValue(n),o.commit(),s++;s<t.length&&(t.length=s,this.clear(o&&o.endNode))}_commitPromise(e){this.value=e,e.then(t=>{this.value===e&&(this.setValue(t),this.commit())})}clear(e=this.startNode){n(this.startNode.parentNode,e.nextSibling,this.endNode)}}class _{constructor(e,t,o){if(this.value=void 0,this._pendingValue=void 0,2!==o.length||""!==o[0]||""!==o[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=o}setValue(e){this._pendingValue=e}commit(){for(;r(this._pendingValue);){const e=this._pendingValue;this._pendingValue=f,e(this)}if(this._pendingValue===f)return;const e=!!this._pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=e,this._pendingValue=f}}class w extends v{constructor(e,t,o){super(e,t,o),this.single=2===o.length&&""===o[0]&&""===o[1]}_createPart(){return new N(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class N extends x{}class E{constructor(e,t){this.value=void 0,this._pendingValue=void 0,this.element=e,this.eventName=t}setValue(e){this._pendingValue=e}commit(){for(;r(this._pendingValue);){const e=this._pendingValue;this._pendingValue=f,e(this)}this._pendingValue!==f&&(null==this._pendingValue!=(null==this.value)&&(null==this._pendingValue?this.element.removeEventListener(this.eventName,this):this.element.addEventListener(this.eventName,this)),this.value=this._pendingValue,this._pendingValue=f)}handleEvent(e){"function"==typeof this.value?this.value.call(this.element,e):"function"==typeof this.value.handleEvent&&this.value.handleEvent(e)}}
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
 */const k=new class{handleAttributeExpressions(e,t,o){const s=t[0];return"."===s?new w(e,t.slice(1),o).parts:"@"===s?[new E(e,t.slice(1))]:"?"===s?[new _(e,t.slice(1),o)]:new v(e,t,o).parts}handleTextExpression(e){return new y(e)}};
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
 */class z{constructor(e,t,o,s=k){this.strings=e,this.values=t,this.type=o,this.processor=s}getHTML(){const e=this.strings.length-1;let t="",o=!0;for(let s=0;s<e;s++){const e=this.strings[s];t+=e;const n=e.lastIndexOf(">");!(o=(n>-1||o)&&-1===e.indexOf("<",n+1))&&d&&(t=t.replace(m,(e,t,o,s)=>"style"===o?`${t}style$${s}`:e)),t+=o?l:a}return t+=this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}const C=new Map;
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
 */function T(e,t,o=
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
function(e){let t=C.get(e.type);void 0===t&&(t=new Map,C.set(e.type,t));let o=t.get(e.strings);return void 0===o&&(o=new u(e,e.getTemplateElement()),t.set(e.strings,o)),o}){const i=o(e);let r=t.__templateInstance;if(void 0!==r&&r.template===i&&r.processor===e.processor)return void r.update(e.values);r=new g(i,e.processor,o),t.__templateInstance=r;const a=r._clone();n(t,t.firstChild),s&&!t.isConnected&&(document.adoptNode(a),customElements.upgrade(a)),t.appendChild(a),r.update(e.values)}
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
 */const V=(e,...t)=>new z(e,t,"html");class S extends HTMLElement{attributeChangedCallback(e,t,o){t!==o&&(this[e]=this.getAttribute(e),this.invalidate())}constructor(){super(),this.attachShadow({mode:"open"}),this.invalidate()}invalidate(){this.needsRender||(this.needsRender=!0,Promise.resolve().then(()=>{this.needsRender=!1,T(this.render(),this.shadowRoot)}))}}customElements.define("z-button",class extends S{render(){return V`
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
    `}});customElements.define("z-callout",class extends S{static get observedAttributes(){return["type","title"]}render(){return V`
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
      <div class="callout ${this.type||""}">
        <h1>${this.title}</h1>
        <slot></slot>
      </div>
    `}}),customElements.define("z-callout-content",class extends HTMLElement{});const A=e=>{alert("Click!")};T((e=>V`
  <style>
    html {
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
    <p>This is a custom button: <z-button onclick=${A}><strong>${e}</strong></z-button></p>
    <p>This is another custom button: <z-button onclick=${A}>Another ${e}</z-button></p>
    <p>This is a normal button: <button onclick=${A}><strong>${e}</strong></button></p>
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
  </section>
`)("button"),document.body)}]);