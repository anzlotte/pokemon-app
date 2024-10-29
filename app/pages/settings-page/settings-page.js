/* eslint-disable no-unused-expressions */
import { CellsPageMixin as cellsPage } from '@cells/cells-page-mixin';
import { html, LitElement } from 'lit-element';
import { BbvaCoreIntlMixin as intl } from '@bbva-web-components/bbva-core-intl-mixin';
import '@cells-demo/demo-web-template/demo-web-template.js';
import styles from './settings-page.css.js';
import '@pokeEvolution/pokemon-ui/pokemon-ui.js';

class SettingsPage extends intl(cellsPage(LitElement)) {
  static get is() {
    return 'settings-page';
  }

  static get properties() {
    return {
      titulo: { type: String}
    };
  }

  constructor() {
    super();

    this.titulo = 'Pokemones';
  }

  static get styles() {
    return [ styles ];
  }

  render() {
    return html`
      <demo-web-template>
        <div slot="app-top-content" class="overlap">
            <h1>${this.t('title')}</h1>
            <pokemon-ui></pokemon-ui>
        </div>
      </demo-web-template>
    `;
  }

}

window.customElements.define(SettingsPage.is, SettingsPage);
