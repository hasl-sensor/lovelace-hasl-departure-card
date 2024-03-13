import { HASLDepartureCard } from "./card"
import { HASLDepartureEntity } from "./entities"

declare global {
    interface Window {
        customCards: Array<Object>
    }
}
customElements.define('hasl-departure-card', HASLDepartureCard)
customElements.define('hasl-departure-entity', HASLDepartureEntity)

window.customCards = window.customCards || []
window.customCards.push({
    type: "toggle-card-typescript",
    name: "HASL Departure card",
    description: "Show departure times for SL Trafik",
})
