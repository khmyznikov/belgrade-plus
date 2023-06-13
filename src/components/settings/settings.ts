import { LitElement, html, unsafeCSS } from "lit";
import { localized, msg } from "@lit/localize";
import { property, customElement } from "lit/decorators.js";

import { changeLocale, currentLocale, locales } from "../../localization";

import style from "./style.css";

@customElement("settings-info")
@localized()
export class SettingsInfo extends LitElement {
  static get styles() {
    return [unsafeCSS(style)];
  }

  private changeLang = (event: Event) => {
    changeLocale((event?.target as HTMLSelectElement)?.value);
    this.requestUpdate();
  };

  private localeName = (locale: string) => {
    switch (locale) {
      case "ru":
        return "Русский";
      case "sr":
        return "Српски";
      default:
        return "English";
    }
  };

  @property()
  private preferredTheme: string | null = null;

  connectedCallback(): void {
    try {
      this.preferredTheme = localStorage.getItem("preferred-theme");
    } catch (e) {}

    super.connectedCallback();
  }

  private systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
    .matches
    ? "dark"
    : "light";
  private changeTheme(event: Event) {
    const _theme = (event?.target as HTMLSelectElement)?.value;
    localStorage.setItem("preferred-theme", _theme);
    document.documentElement.setAttribute("data-theme-mode", _theme);
  }

  // private changeTheme () {
  //   window
  //     .matchMedia('(prefers-color-scheme: dark)')
  //     .addEventListener('change', (e) => {
  //       if (localStorage.getItem('preferred-theme') === 'auto' || localStorage.getItem('preferred-theme') === null) {
  //         setTheme(e.matches ? 'dark' : 'light');
  //       }
  //     });

  //   setTheme(preferredTheme || systemMode);
  // };

  render() {
    return html`
      <h2 class="form-title">${msg("Settings")}</h2>
      <form id="settings-form">
        <p>
          <label for="language">${msg("Language")}</label>
          <select title="language" id="language" @change=${this.changeLang}>
            ${locales.map(
              (locale) =>
                html`<option
                  value=${locale}
                  ?selected=${locale === currentLocale()}
                >
                  ${this.localeName(locale)}
                </option>`
            )}
          </select>
        </p>
        <p>
          <label for="theme">${msg("Theme")}</label>
          <select title="theme" id="theme" @change=${this.changeTheme}>
            <option
              value="auto"
              ?selected=${this.preferredTheme == "auto" || null}
            >
              🤖${msg("Auto")}
            </option>
            <option
              value="light"
              ?selected=${this.preferredTheme == "light" || null}
            >
              ☀️${msg("Light")}
            </option>
            <option
              value="dark"
              ?selected=${this.preferredTheme == "dark" || null}
            >
              🌑${msg("Dark")}
            </option>
          </select>
        </p>
      </form>
    `;
  }
}
