import { LitElement, html } from 'lit';
import { localized } from '@lit/localize';
import { property, customElement } from 'lit/decorators.js';

// import styles from './style.scss';

@localized()
@customElement('bus-ticket')
export class BusTicket extends LitElement {
	// static get styles() {
	// 	return [ styles ];
	// }

	@property() ticket: {zone: string, price: string, text: string} | null = null;
	@property() period: string | null = null;

	createRenderRoot() {
		return this;
	  }

  render() {
	return html`
	  	<div class="ticket">
			<p>
				<small class="flaps">${this.period}</small>
				<data value="A90">${this.ticket?.text}<small class="zone">${this.ticket?.zone}</small></data>
				<small class="flaps">${this.ticket?.price}</small>
			</p>
		</div>
	`;
  }
}