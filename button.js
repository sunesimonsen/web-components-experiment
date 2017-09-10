import { html } from './vendor/lit-html/lib/lit-extended.js'
import LitHtmlElement from './LitHtmlElement.js'

export class Button extends LitHtmlElement {
  render() {
    return html`
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
    `;
  }
}

customElements.define('z-button', Button);
