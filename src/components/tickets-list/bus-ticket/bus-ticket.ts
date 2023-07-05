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
	
	private ticketClicked(params: {price?: string , zone?: string}){
		this.dispatchEvent(new CustomEvent('ticket-clicked', {bubbles: true, composed: true, detail: params}));
	}

  	render() {
		return html`
			<div class="ticket">
				<p>
					<small class="flaps">${msg(this.period as string)}</small>
					<a href="sms:9011;?&body=${this.ticket?.text}" @click=${{handleEvent: () =>  this.ticketClicked({price: this.ticket?.price, zone: this.ticket?.zone}), passive: true}}>
						${this.ticket?.text}<small class="zone">${msg(this.ticket?.zone as string)}</small>
					</a>
					<small class="flaps">${this.ticket?.price} ${msg('rsd')}</small>
				</p>
			</div>
		`;
  	}
}