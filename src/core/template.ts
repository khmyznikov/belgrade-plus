import { html } from 'lit';
import { msg } from '@lit/localize';

import logo from '../assets/icons/logo.png';

const template = (routeName: string) => {
    // const installDialogClasses = () => { return {available: installAvailable, gallery: galleryRequested }};
    // <div class="install-dialog chrome ${classMap(installDialogClasses())}">

    return html`
        <main>
            <header>
                <img id="app-logo" src="${logo}" alt="Belgrade +plus logo"/>

                <h1 id="app-title"><span>${msg('Belgrade')}</span><small>${msg('+plus')}</small></h1>
                <p id="app-subtitle">
                    ${routeName === 'home' ? html`${msg('Click on the ticket to pay via SMS.')}` : ''}
                    ${routeName === 'map' ? html`
                    <strong class="zone-a">${msg('Zone A')}</strong>,
                    <strong class="zone-b">${msg('Zone B')}</strong>,
                    <span>${msg(' Zone C')}(<strong class="zone-a">A</strong>+<strong class="zone-b">B</strong>)</span>
                    ` : ''}
                </p>
            </header>
            ${routeName === 'home' ? html`<tickets-list></tickets-list>` : ''}
            ${routeName === 'map' ? html`<map-embed></map-embed>` : ''}
            ${routeName === 'info' ? html`INFO` : ''}
            <nav id="navigation-bar">
                <a class="link-button" href="/map" title="map">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title/><g id="Map"><path d="M462.4267,175.8809a120.5879,120.5879,0,0,1-6.6751,11.3647l-56.833,79.5718a51.3893,51.3893,0,0,1-41.748,21.477,50.7351,50.7351,0,0,1-14.8519-2.4747V450.3488l98.7643,31.0257a16.8769,16.8769,0,0,0,4.917.7236A17.0929,17.0929,0,0,0,463.0981,465V180A16.8392,16.8392,0,0,0,462.4267,175.8809Z"/><path d="M239.9919,147.6777l-35.9265,9.89V478.0208L308.119,449.3816V256.5845l-49.5271-69.33A121.5093,121.5093,0,0,1,239.9919,147.6777Z"/><path d="M55.7949,128.2788A17.0879,17.0879,0,0,0,48.9019,142V427A17.09,17.09,0,0,0,61.083,443.3745L169.8645,477.543V156.7092L70.917,125.6255A17.0653,17.0653,0,0,0,55.7949,128.2788Z"/><path d="M343.25,246.936a17.1006,17.1006,0,0,0,27.8321,0l56.833-79.5625a86.9389,86.9389,0,1,0-141.4981,0ZM357.166,88.3445a28.5,28.5,0,1,1-28.5,28.5A28.4992,28.4992,0,0,1,357.166,88.3445Z"/></g></svg>
                </a>
                <a class="link-button" href="/" title="ticket">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M490.18,181.4l-44.13-44.13a20,20,0,0,0-27-1,30.81,30.81,0,0,1-41.68-1.6h0A30.81,30.81,0,0,1,375.77,93a20,20,0,0,0-1-27L330.6,21.82a19.91,19.91,0,0,0-28.13,0L232.12,92.16a39.87,39.87,0,0,0-9.57,15.5,7.71,7.71,0,0,1-4.83,4.83,39.78,39.78,0,0,0-15.5,9.58L21.82,302.47a19.91,19.91,0,0,0,0,28.13L66,374.73a20,20,0,0,0,27,1,30.69,30.69,0,0,1,43.28,43.28,20,20,0,0,0,1,27l44.13,44.13a19.91,19.91,0,0,0,28.13,0l180.4-180.4a39.82,39.82,0,0,0,9.58-15.49,7.69,7.69,0,0,1,4.84-4.84,39.84,39.84,0,0,0,15.49-9.57l70.34-70.35A19.91,19.91,0,0,0,490.18,181.4ZM261.81,151.75a16,16,0,0,1-22.63,0l-11.51-11.51a16,16,0,0,1,22.63-22.62l11.51,11.5A16,16,0,0,1,261.81,151.75Zm44,44a16,16,0,0,1-22.62,0l-11-11a16,16,0,1,1,22.63-22.63l11,11A16,16,0,0,1,305.83,195.78Zm44,44a16,16,0,0,1-22.63,0l-11-11a16,16,0,0,1,22.63-22.62l11,11A16,16,0,0,1,349.86,239.8Zm44.43,44.54a16,16,0,0,1-22.63,0l-11.44-11.5a16,16,0,1,1,22.68-22.57l11.45,11.49A16,16,0,0,1,394.29,284.34Z"/></svg>
                </a>
                <a class="link-button" href="/info" title="info">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g id="Skills_cog"><path d="M422.9171,307.7019,389.3646,284.038a136.2519,136.2519,0,0,0,0-56.0756l33.5525-23.6639a20.4447,20.4447,0,0,0,5.9221-26.931L410.518,145.6329a20.4457,20.4457,0,0,0-26.2846-8.336L346.8147,154.591a135.9316,135.9316,0,0,0-48.4091-28.0564l-3.7217-40.94A20.4463,20.4463,0,0,0,274.3218,67H237.6781a20.446,20.446,0,0,0-20.3617,18.595l-3.7217,40.94a135.9266,135.9266,0,0,0-48.4091,28.0568l-37.4191-17.2945a20.4458,20.4458,0,0,0-26.2846,8.336L83.1607,177.3675a20.4444,20.4444,0,0,0,5.9225,26.931l33.5525,23.6643a136.2527,136.2527,0,0,0,0,56.0748L89.0832,307.7019a20.4443,20.4443,0,0,0-5.9225,26.931l18.3212,31.7342a20.4456,20.4456,0,0,0,26.2846,8.3364l37.4191-17.2945a135.9266,135.9266,0,0,0,48.4091,28.0568l3.7217,40.9392A20.4456,20.4456,0,0,0,237.6781,445h36.6437a20.446,20.446,0,0,0,20.3621-18.595l3.7217-40.9392a135.9316,135.9316,0,0,0,48.4091-28.0564l37.4187,17.2941a20.4455,20.4455,0,0,0,26.2846-8.3364l18.3212-31.7342A20.4446,20.4446,0,0,0,422.9171,307.7019ZM256,326a70,70,0,1,1,70-70A70,70,0,0,1,256,326Z"/></g></svg>
                </a>
            </nav>
        </main>

        `;
};
export default template;
