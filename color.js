import { html } from './vendor/lit-html/lib/lit-extended.js'
import LitHtmlElement from './LitHtmlElement.js'

export class Color extends LitHtmlElement {
  static get observedAttributes() { return ['value']; }

  render() {
    return html`
      <style>
        .color {
          height: 80px;
        }
      </style>
      <div class="color" style="background: ${this.value}"></div>
    `;
  }
}

customElements.define('z-color', Color);
