import { LitElement, html, unsafeCSS } from "lit";
import { localized } from "@lit/localize";
import { customElement } from "lit/decorators.js";

import leafletstyle from "leaflet/dist/leaflet.css";
import leaflet, { LatLngExpression } from "leaflet";

import { zoneA, zoneB } from "./data";

import logo from '../../assets/icons/pin_point.svg';

import styles from "./style.css";

const MAX_ZOOM = 17;

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
        maxZoom: MAX_ZOOM,
      })
      .addTo(this.map);

    const zoneALayer = leaflet
      .polyline(zoneA as LatLngExpression[], {
        color: "red",
        fill: true,
        weight: 6,
        smoothFactor: 4,
      })
      .addTo(this.map);
    const zoneBLayer = leaflet
      .polyline(zoneB as LatLngExpression[], {
        color: "blue",
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
      this.map?.setView(e.latlng, MAX_ZOOM/1.5 , { animate: true });
      marker.setLatLng(e.latlng).addTo(this.map!);
      console.log(e);
    });
    this.map.on("locationerror", (e) => {
      console.log(e);
    });

  }

  // method findMe () {
  //   this.map.locate({ setView: false, enableHighAccuracy: true, maxZoom: MAX_ZOOM/1.5});
  // }

  render() {
    return html` <article id="map">
      <button type="button" id="locate">Locate me</button>
    </article> `;
  }
}
