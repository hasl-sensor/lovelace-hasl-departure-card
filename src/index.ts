import { HASLDepartureCard } from "./card";

declare global {
    interface Window {
        customCards: Array<Object>;
    }
}
customElements.define('hasl-departure-card', HASLDepartureCard);

window.customCards = window.customCards || [];
window.customCards.push({
    type: "toggle-card-typescript",
    name: "HASL Departure card",
    description: "Show departure times for SL Trafik",
});