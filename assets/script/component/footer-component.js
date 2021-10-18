class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `<p>Submission Belajar Dasar Pemrograman Web 2020, Maghel Heans Gultom</p>`;
  }
}

customElements.define("footer-component", FooterComponent);
