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

	createRenderRoot() {
		return this;
	  }

  render() {
	return html`
	  	<div class="ticket">
			<p>
				<small>30 dana</small>
				<data value="A90">A90<br>ZONA A</data>
				<small>3.300rsd</small>
			</p>
		</div>
	`;
  }
}