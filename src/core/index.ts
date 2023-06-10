import { LitElement, html, unsafeCSS } from 'lit';
import { localized } from '@lit/localize';
import { customElement } from 'lit/decorators.js';

import { createRouter } from "@nanostores/router";
import { useStores } from '@nanostores/lit';

import { changeLocale } from '../localization';
import { TicketsList } from '../components/tickets-list/tickets-list';
import { MapEmbed } from '../components/map/map';

import styles from './style.css';
import template from './template';

import "../index.css";

const router = createRouter({
	home: '/',
	map: '#/map',
	info: '#/info'
});

@localized()
@customElement('core-root')
@useStores(router)
export class CoreRoot extends LitElement {

	static get styles() {
		return [  unsafeCSS(styles) ];
	}

	connectedCallback() {
		changeLocale(navigator.language);
		TicketsList.finalized;
		MapEmbed.finalized;
		super.connectedCallback();
		console.log(router.get()?.route);
	}

	render() {
		return html`${template(
				router.get()?.route || 'home',
			)}`;
	}
}
