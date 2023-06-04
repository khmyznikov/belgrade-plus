import { LitElement, html, unsafeCSS } from "lit";
import { localized } from "@lit/localize";
import { customElement } from "lit/decorators.js";

import leafletstyle from "leaflet/dist/leaflet.css";
import leaflet, { LatLngExpression } from "leaflet";

import { zone1, zone2 } from "./data";

import styles from "./style.css";

@localized()
@customElement("map-embed")
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
        maxZoom: 17,
      })
      .addTo(this.map);

	const zone1Layer = leaflet.polyline(zone1 as LatLngExpression[], {color: 'red', fill: true, weight: 6, smoothFactor: 4}).addTo(this.map);
	const zone2Layer = leaflet.polyline(zone2 as LatLngExpression[], {color: 'blue', fill: true, weight: 6, smoothFactor: 4}).addTo(this.map);
	this.map.fitBounds(zone1Layer.getBounds().extend(zone2Layer.getBounds()), { animate: false });
	this.map.setMaxBounds(this.map.getBounds());
	this.map.setMinZoom(this.map.getZoom());
  }

  render() {
    return html` <article id="map"></article> `;
  }
}
