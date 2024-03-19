import { HASLDepartureCard, HASLDepartureEntity } from "./DepartureCard"

declare global {
    interface Window {
        customCards: Array<Object>
    }
}
customElements.define('hasl4-departure-card', HASLDepartureCard)
customElements.define('hasl4-departure-entity', HASLDepartureEntity)

window.customCards = window.customCards || []
window.customCards.push({
    type: "hasl4-departure-card",
    name: "HASL4 Departure card",
    description: "Show departure times for SL Trafik",
})
