import { LitElement, html } from 'lit';
import { localized } from '@lit/localize';
import { property, customElement } from 'lit/decorators.js';

import { changeLocale } from '../localization';
import { TicketsList } from '../components/tickets-list/tickets-list';

declare const window: Window;

import styles from './styles.scss';
import template from './template';


@localized()
@customElement('core-root')
export class CoreRoot extends LitElement {

	// @property() icon = '';
	// @property() name = '';
	// @property() description = '';

	static get styles() {
		return [ styles ];
	}


	connectedCallback() {
		changeLocale(navigator.language);
		TicketsList.finalized;
		super.connectedCallback();
	}

	render() {
		return html`${template(
				
			)}`;
	}
}
