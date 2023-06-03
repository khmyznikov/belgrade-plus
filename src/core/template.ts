import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { msg } from '@lit/localize';

const template = () => {
    // const installDialogClasses = () => { return {available: installAvailable, gallery: galleryRequested }};
    // <div class="install-dialog chrome ${classMap(installDialogClasses())}">

    return html`
        <main>
            <header>
                <img id="app-logo" src="icons/logo.png" alt="Belgrade +plus logo"/>

                <h1 id="app-title"><span>${msg('Belgrade')}</span><small>${msg('+plus')}</small></h1>
                <p id="app-subtitle">${msg('Click on the ticket to pay via SMS.')}</p>
            </header>
            <tickets-list></tickets-list>
            <nav id="navigation-bar">
                <button>map</button>
                <button>ticket</button>
                <button>info</button>
            </nav>
        </main>

        `;
};
export default template;
