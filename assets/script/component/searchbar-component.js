class SearchbarComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector("#search").value;
  }

  render() {
    this.innerHTML = `
      <div class="search_container">
        <div class="input_search">
          <input id="search" type="text" placeholder="Search movie..." />
          <div id="clear_input" onclick="document.getElementById('search').value = ''">x</div>
        </div>
        <button id="button_search">Search</button>
      </div>
      `;

    this.querySelector("#button_search").addEventListener(
      "click",
      this._clickEvent
    );
  }
}

customElements.define("searchbar-component", SearchbarComponent);
