import './button.js'
import { html, render } from 'https://unpkg.com/lit-html@0.11.0?module';
import LitHtmlElement from './LitHtmlElement.js'

export class Callout extends LitHtmlElement {
  static get observedAttributes() { return ['type', 'title']; }

  render() {
    return html`
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
      <div class="callout ${this.type || ''}">
        <h1>${this.title}</h1>
        <slot></slot>
      </div>
    `;
  }
}

export class CalloutContent extends HTMLElement {}

customElements.define('z-callout', Callout);
customElements.define('z-callout-content', CalloutContent);
