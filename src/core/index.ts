import { LitElement, html, unsafeCSS } from 'lit';
import { localized } from '@lit/localize';
import { customElement } from 'lit/decorators.js';

import { createRouter, openPage } from "@nanostores/router";
import { useStores } from '@nanostores/lit';

import { changeLocale, currentLocale } from '../localization';
import '@khmyznikov/pwa-install';
import '../components/tickets-list/tickets-list';
import '../components/settings/settings';
import '../components/map/map';

import styles from './style.css';
import template from './template';

import "../index.css";
import { setThemeMode } from '../components/settings/theme.helper';

const router = createRouter({
	home: '/',
	map: '/map',
	settings: '/settings'
});

@customElement('core-root')
@useStores(router)
@localized()
export class CoreRoot extends LitElement {

	static get styles() {
		return [  unsafeCSS(styles) ];
	}

	async connectedCallback() {
		try { 
			await changeLocale(localStorage.getItem('locale') || navigator.language, true);
			document.documentElement.setAttribute('lang', currentLocale());
		} catch {
			console.warn(`bus-plus: localStorage is not available`);
		}
		setThemeMode();
		super.connectedCallback();
	}

	private openRoute = (event: Event, route: "home" | "map" | "settings") => {
		event.preventDefault();
		
		this.shadowRoot?.getElementById('main')?.scrollTo(0, 0);
		openPage(router, route);
	}

	render() {
		return html`${template(
				router.get()?.route || 'home',
				this.openRoute,
			)}`;
	}
}
