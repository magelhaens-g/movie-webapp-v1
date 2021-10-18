class AsideComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
      <aside>
        <article class="profile card">
          <header>
            <h2>Profil</h2>
            <img
              class="profile_img"
              src="http://api.puro.del.ac.id/v1/file/4d44c1608ea93c9e560a31c06f228547"
              alt="Foto Profile"
            />
          </header>
          <section>
            <table id="profile_info">
              <tr>
                <th>Nama</th>
                <td>Magelhaens Gultom</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>magelhaensg@gmail.com</td>
              </tr>
              <tr>
                <th>Tanggal lahir</th>
                <td>24 November 1999</td>
              </tr>
              <tr>
                <th>Status</th>
                <td>Mahasiswa</td>
              </tr>
            </table>
          </section>
        </article>
      </aside>    
    `;
  }
}

customElements.define("aside-component", AsideComponent);
