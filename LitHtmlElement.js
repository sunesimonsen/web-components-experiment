import { html, render } from 'https://unpkg.com/lit-html@0.11.0?module';

export default class LitHtmlElement extends HTMLElement {
  // Respond to attribute changes.
  attributeChangedCallback(attr, oldValue, newValue) {
    if (oldValue !== newValue) {
      this[attr] = this.getAttribute(attr)
      this.invalidate()
    }
  }

  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.invalidate()
  }

  invalidate() {
    if (!this.needsRender) {
      this.needsRender = true;
      Promise.resolve().then(() => {
        this.needsRender = false;
        render(this.render(), this.shadowRoot);
      });
    }
  }
}
