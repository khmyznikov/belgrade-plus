import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { msg } from '@lit/localize';

const template = () => {
    // const installDialogClasses = () => { return {available: installAvailable, gallery: galleryRequested }};
    // <div class="install-dialog chrome ${classMap(installDialogClasses())}">

    return html`
        <main>
            <tickets-list></tickets-list>
        </main>

        `;
};
export default template;
