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

	private TicketClicked = new Event('ticket-clicked', {bubbles: true, composed: true});

	createRenderRoot() {
		return this;
	}
	
	private ticketClicked = () => {
		this.dispatchEvent(this.TicketClicked);
	}

  	render() {
		return html`
			<div class="ticket">
				<p>
					<small class="flaps">${msg(this.period as string)}</small>
					<a href="sms:9011;?&body=${this.ticket?.text}" @click=${this.ticketClicked}>
						${this.ticket?.text}<small class="zone">${msg(this.ticket?.zone as string)}</small>
					</a>
					<small class="flaps">${this.ticket?.price} ${msg('rsd')}</small>
				</p>
			</div>
		`;
  	}
}