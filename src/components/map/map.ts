import { LitElement, html, unsafeCSS } from "lit";
import { localized } from "@lit/localize";
import { customElement, property } from "lit/decorators.js";

import leafletstyle from "leaflet/dist/leaflet.css";
import leaflet, { LatLngExpression } from "leaflet";

import { zoneA, zoneB } from "./data";

import logo from '../../assets/icons/pin_point.svg';

import styles from "./style.css";

const MAX_ZOOM = 17;

@customElement("map-embed")
@localized()
export class MapEmbed extends LitElement {
  static get styles() {
    return [unsafeCSS(leafletstyle), unsafeCSS(styles)];
  }

  // createRenderRoot() {
  // 	return this;
  // }
  private map: leaflet.Map | null = null;

  //   connectedCallback(): void {
  // 	super.connectedCallback();

  //   }

  firstUpdated() {
    this.map = leaflet
      .map((this.renderRoot?.querySelector("#map") as HTMLElement) || "map")
      .setView([44.8133, 20.4559], 11);
    leaflet
      .tileLayer("https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png", {
        maxZoom: MAX_ZOOM,
      })
      .addTo(this.map);

    const zoneALayer = leaflet
      .polyline(zoneA as LatLngExpression[], {
        color: "var(--zone-a-color)",
        fill: true,
        weight: 6,
        smoothFactor: 4,
      })
      .addTo(this.map);
    const zoneBLayer = leaflet
      .polyline(zoneB as LatLngExpression[], {
        color: "var(--zone-b-color)",
        fill: true,
        weight: 6,
        smoothFactor: 4,
      })
      .addTo(this.map);
    this.map.fitBounds(zoneALayer.getBounds().extend(zoneBLayer.getBounds()), {
      animate: false,
    });
    this.map.setMaxBounds(this.map.getBounds());
    this.map.setMinZoom(this.map.getZoom());

    let marker = leaflet.marker([0, 0], { icon: leaflet.icon({ iconUrl: logo, iconSize: [32, 32] }) });
    marker.on("click", () => {
      marker.remove();
    });

    this.map.on("locationfound", (e) => {
      this.locationStatus = '';
      marker.setLatLng(e.latlng).addTo(this.map!);
      this.map?.setView(e.latlng, MAX_ZOOM - 1 , { animate: true });
      console.log(e);
    });
    this.map.on("locationerror", (e) => {
      this.locationStatus = 'error';
      console.log(e);
    });

  }

  @property()
  private locationStatus = '' as 'loading' | 'error' | '';

  findMe() {
    this.locationStatus = 'loading';
    this.map!.locate({ setView: false, enableHighAccuracy: true, });
  }

  render() {
    return html` <article id="map">
      <button type="button" id="locate" title="locate" @click=${this.findMe} .disabled=${this.locationStatus == 'loading'} class=${this.locationStatus} > 
        <svg viewBox="0 0 16 16" id="pin_point">
          <use href="${logo}#pin_point"></use>
        </svg>
      </button>
    </article> `;
  }
}
