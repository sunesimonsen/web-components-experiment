import { LitElement, html } from "../vendor/lit-html-element/lit-element.js";
import { repeat } from "../vendor/lit-html/lib/repeat.js";
import "./color.js";

const colors = [
  "#001f3f",
  "#0074D9",
  "#7FDBFF",
  "#39CCCC",
  "#3D9970",
  "#2ECC40",
  "#01FF70",
  "#FFDC00",
  "#FF851B",
  "#FF4136",
  "#85144b",
  "#F012BE",
  "#B10DC9",
  "#111111",
  "#AAAAAA",
  "#DDDDDD"
];

export class ColorSwap extends LitElement {
  constructor() {
    super();

    setInterval(() => {
      const first = Math.floor(Math.random() * colors.length);
      const second = Math.floor(Math.random() * colors.length);

      const temp = colors[first];
      colors[first] = colors[second];
      colors[second] = temp;

      this.invalidate();
    }, 1000);

    this.invalidate();
  }

  render() {
    return html`
      <style>
        .colors {
          display: grid;
          grid-template-columns: repeat(16, 1fr);
          margin: 20px;
        }
      </style>
      <div class="colors">
        ${repeat(colors, c => c, c => html`<z-color value=${c}></z-color>`)}
      </div>
    `;
  }
}

customElements.define("z-color-swap", ColorSwap);
