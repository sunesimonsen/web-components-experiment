import "./button.js";
import "./callout.js";
import "./colorSwap.js";

import { LitElement, html } from "../vendor/lit-html-element/lit-element.js";

const handler = e => {
  alert("Click!");
};

export class App extends LitElement {
  render() {
    return html`
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
        p {
          margin: 8px;
        }

        z-button.big {
          --button-scale: 1.5;
        }

        .callouts {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 20px;
          margin: 20px;
        }
      </style>
      <section>
        <h1>Buttons</h1>
        <p>This is a custom button: <z-button onclick=${handler}><strong>button</strong></z-button></p>
        <p>This is another custom button: <z-button class='big' onclick=${handler}>Another button</z-button></p>
        <p>This is a normal button: <button onclick=${handler}><strong>button</strong></button></p>
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
    `;
  }
}

customElements.define("z-app", App);

const app = document.createElement("z-app");
document.body.appendChild(app);
