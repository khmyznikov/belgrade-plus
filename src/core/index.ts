import { LitElement, html, unsafeCSS } from 'lit';
import { localized } from '@lit/localize';
import { customElement } from 'lit/decorators.js';

import { createRouter } from "@nanostores/router";
import { useStores } from '@nanostores/lit';

import { changeLocale, currentLocale } from '../localization';
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

	render() {
		return html`${template(
				router.get()?.route || 'home',
			)}`;
	}
}
