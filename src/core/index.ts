import { LitElement, html, unsafeCSS } from 'lit';
import { localized } from '@lit/localize';
import { customElement } from 'lit/decorators.js';

import { createRouter } from "@nanostores/router";
import { useStores } from '@nanostores/lit';

import { changeLocale } from '../localization';
import '../components/tickets-list/tickets-list';
import '../components/settings/settings';
import '../components/map/map';

import styles from './style.css';
import template from './template';

import "../index.css";

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

	connectedCallback() {
		try { 
			changeLocale(localStorage.getItem('locale') || navigator.language);
		} catch {
			console.warn(`bus-plus: localStorage is not available`);
		}

		super.connectedCallback();
	}

	render() {
		return html`${template(
				router.get()?.route || 'home',
			)}`;
	}
}
