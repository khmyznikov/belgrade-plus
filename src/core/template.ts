import { html } from 'lit';
import { msg } from '@lit/localize';

const template = (routeName: string) => {
    // const installDialogClasses = () => { return {available: installAvailable, gallery: galleryRequested }};
    // <div class="install-dialog chrome ${classMap(installDialogClasses())}">

    return html`
        <main>
            <header>
                <img id="app-logo" src="icons/logo.png" alt="Belgrade +plus logo"/>

                <h1 id="app-title"><span>${msg('Belgrade')}</span><small>${msg('+plus')}</small></h1>
                <p id="app-subtitle">${msg('Click on the ticket to pay via SMS.')}</p>
            </header>
            ${routeName === 'home' ? html`<tickets-list></tickets-list>` : ''}
            ${routeName === 'map' ? html`<map-embed></map-embed>` : ''}
            ${routeName === 'info' ? html`INFO` : ''}
            <nav id="navigation-bar">
                <a href="/map">map</a>
                <a href="/">ticket</a>
                <a href="/info">info</a>
            </nav>
        </main>

        `;
};
export default template;
