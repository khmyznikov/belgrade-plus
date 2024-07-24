import { LitElement, PropertyValueMap, html, unsafeCSS } from 'lit';
import { localized } from '@lit/localize';
import { customElement, query, queryAsync } from 'lit/decorators.js';

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

import { PWAInstallElement } from '@khmyznikov/pwa-install';
import { TrackEvent, TrackPage } from '../components/analytics.helper';

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

	private appInstall: PWAInstallElement | null | undefined = null;

	async connectedCallback() {
		try { 
			await changeLocale(localStorage.getItem('locale') || navigator.language, true);
			document.documentElement.setAttribute('lang', currentLocale());
			TrackEvent('locale', {lang: currentLocale()});
		} catch {
			console.warn(`bus-plus: localStorage is not available`);
		}
		setThemeMode();

		TrackPage(router.get()?.route || 'home');
		super.connectedCallback();
	}

	protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
		this.appInstall = this.shadowRoot?.querySelector('pwa-install');

		this.appInstall?.addEventListener('pwa-user-choice-result-event', (event) => {
			TrackEvent('pwa-user-choice', (<CustomEvent>event).detail);
		});

		this.addEventListener('ticket-clicked', (event) => {
			this.appInstall?.isInstallAvailable && this.appInstall?.userChoiceResult != 'dismissed' && this.appInstall?.showDialog();
			TrackEvent('ticket-clicked', (<CustomEvent>event).detail);
		});

		if (this.appInstall?.isUnderStandaloneMode) {
			TrackEvent('pwa-standalone-mode');
		}
	}

	private openRoute = async (event: Event, route: "home" | "map" | "settings") => {
		event.preventDefault();
		
		if (!document.startViewTransition) {
			openPage(router, route);
			return;
		}
		else {
	
			await document.startViewTransition({
				// @ts-ignore
				update: async () => { 
					openPage(router, route);
					await this.updateComplete; 
				},
				types: [route == "map" || (route == "home" && router.get()?.route === 'settings' ) ? 'backwards' : 'forwards']
			});
		}
		TrackPage(route);
	}

	render() {
		return html`${template(
				router.get()?.route || 'home',
				this.openRoute,
			)}`;
	}
}
