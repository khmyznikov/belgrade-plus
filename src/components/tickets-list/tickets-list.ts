import { LitElement, html, unsafeCSS } from "lit";
import { localized, msg } from "@lit/localize";
import { property, customElement } from "lit/decorators.js";

import { BusTicket } from "./bus-ticket/bus-ticket";
import { ticketsData } from "./data";

import style from "./style.css";
import styleTicket from "./bus-ticket/style.css";

@customElement("tickets-list")
@localized()
export class TicketsList extends LitElement {
  static get styles() {
    return [unsafeCSS(style), unsafeCSS(styleTicket)];
  }

  connectedCallback() {
    BusTicket.finalized;
    super.connectedCallback();
  }

  render() {
    return html`
      <dl class="tickets-list">
        ${ticketsData.map(
          (category) => html`
            <dt><h3>${msg(category.type)}</h3><small>${msg(category.period)}</small></dt>
            ${category.tickets.map(
              (ticket) => html`
                <dd>
                  <bus-ticket
                    .ticket=${ticket}
                    .period=${category.period}
                  ></bus-ticket>
                </dd>
              `
            )}
          `
        )}
      </dl>

      <svg id="svg-filters">
        <defs>
          <clipPath id="ticket-shape" clipPathUnits="objectBoundingBox">
            <path
              d="M0.016,0.881 C0.065,0.889,0.078,0.968,0.079,1 C0.344,1,0.888,1,0.937,1 C0.946,0.898,0.998,0.879,1,0.877 C1,0.876,1,0.86,1,0.856 C1,0.852,0.993,0.848,0.993,0.834 C0.993,0.821,0.999,0.81,1,0.806 C1,0.803,1,0.779,1,0.774 C1,0.768,0.992,0.755,0.992,0.74 C0.992,0.725,1,0.715,1,0.694 C1,0.672,0.993,0.665,0.992,0.644 C0.99,0.622,1,0.623,1,0.599 C1,0.575,0.992,0.577,0.992,0.555 C0.992,0.534,1,0.533,1,0.508 C1,0.483,0.992,0.479,0.992,0.458 C0.992,0.438,1,0.44,1,0.412 C1,0.384,0.992,0.379,0.992,0.364 C0.992,0.348,1,0.328,1,0.317 C1,0.299,0.993,0.295,0.992,0.276 C0.99,0.257,1,0.247,1,0.225 C1,0.202,0.991,0.195,0.991,0.182 C0.99,0.166,1,0.147,0.989,0.131 C0.957,0.119,0.941,0.043,0.936,0.008 H0.086 C0.086,0.008,0.082,0.008,0.082,0.012 C0.068,0.138,0.026,0.131,0.023,0.131 C0.02,0.131,0.021,0.125,0.014,0.139 C0.007,0.154,0.016,0.173,0.016,0.207 C0.016,0.241,0.006,0.253,0.008,0.265 C0.01,0.277,0.016,0.281,0.016,0.309 C0.016,0.337,0.007,0.328,0.004,0.347 C0.001,0.365,0.016,0.368,0.016,0.396 C0.016,0.425,0.006,0.41,0.006,0.439 C0.006,0.469,0.016,0.457,0.016,0.485 C0.016,0.513,0.006,0.513,0.006,0.537 C0.006,0.561,0.016,0.561,0.016,0.585 C0.016,0.608,0.006,0.605,0.006,0.624 C0.006,0.643,0.016,0.659,0.016,0.676 C0.016,0.692,0.006,0.701,0.006,0.719 C0.006,0.736,0.016,0.759,0.016,0.771 C0.016,0.783,0.008,0.805,0.008,0.818 C0.008,0.829,0.012,0.847,0.014,0.855 C0.014,0.86,0.016,0.871,0.016,0.881"
            ></path>
          </clipPath>
        </defs>
      </svg>
    `;
  }
}
