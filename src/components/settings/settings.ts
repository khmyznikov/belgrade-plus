import { LitElement, html, unsafeCSS } from "lit";
import { localized } from "@lit/localize";
import { property, customElement } from "lit/decorators.js";

import { changeLocale } from '../../localization';

// import style from "./style.css";

@customElement("settings-info")
@localized()
export class SettingsInfo extends LitElement {
//   static get styles() {
//     return [unsafeCSS(style)];
//   }

 private changeLang = () => {
	changeLocale('ru');
	this.requestUpdate();
};


  render() {
    return html`
	  <button @click=${this.changeLang}>changeLocale</button>
    `;
  }
}
