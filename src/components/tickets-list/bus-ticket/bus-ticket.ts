import { LitElement, html } from 'lit';
import { localized, msg } from '@lit/localize';
import { property, customElement } from 'lit/decorators.js';

// import styles from './style.scss';

@customElement('bus-ticket')
@localized()
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
				<small class="flaps">${msg(this.period as string)}</small>
				<a href="sms:9011;?&body=${this.ticket?.text}">${this.ticket?.text}<small class="zone">${msg(this.ticket?.zone as string)}</small></a>
				<small class="flaps">${this.ticket?.price} ${msg('din')}</small>
			</p>
		</div>
	`;
  }
}