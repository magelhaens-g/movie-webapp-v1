class HeaderComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `<h1 onclick="window.location.reload();">Movies.com</h1>`;
  }
}

customElements.define("header-component", HeaderComponent);
