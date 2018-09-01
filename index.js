import './button.js'
import './callout.js'

import { html, render } from 'https://unpkg.com/lit-html@0.11.0?module';

const handler = (e) => {
  alert('Click!')
}


const indexTemplate = (text) => html`
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
    <p>This is a custom button: <z-button onclick=${handler}><strong>${text}</strong></z-button></p>
    <p>This is another custom button: <z-button onclick=${handler}>Another ${text}</z-button></p>
    <p>This is a normal button: <button onclick=${handler}><strong>${text}</strong></button></p>
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
`;

render(indexTemplate('button'), document.body);
