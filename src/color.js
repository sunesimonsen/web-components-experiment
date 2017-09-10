import { LitElement, html } from "../vendor/lit-html-element/lit-element.js";

export class Color extends LitElement {
  static get properties() {
    return {
      value: {
        type: String,
        attrName: "value",
        value: ""
      }
    };
  }

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

customElements.define("z-color", Color.withProperties());
