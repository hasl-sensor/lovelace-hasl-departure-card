import { LitElement, html, nothing, css } from 'lit'
import { property, state } from 'lit/decorators';

import type { HomeAssistant, LovelaceCard } from "custom-card-helpers";

import type { DepartureAttributes, DeviationsAttributes } from "../models"
import type { PartialEntityConfig } from './DepartureEntity.config'
import { translateTo, getLanguage } from '../translations'
import { DepartureCardConfig, DEFAULT_CONFIG, ClickAction, EntityInfoAction, ServiceCallAction } from './DepartureCard.config'
import { HASLDepartureEntity } from './DepartureEntity';


export class HASLDepartureCard extends LitElement implements LovelaceCard {
    static styles = css`
        .card-header {
            display: flex;
            justify-content: space-between;
        }
        .card-header .name {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: elipsis;
        }
    `

    @state()
    private config?: DepartureCardConfig

    @property({ attribute: false })
    public hass?: HomeAssistant

    setConfig(config: DepartureCardConfig) {
        this.config = {...DEFAULT_CONFIG, ...config}
    }

    getCardSize = () => this.config.entities.length + 1;

    // configuration card is loaded in async manner
    static async getConfigElement () {
        return await import('../DepartureCardEditor').then(() => document.createElement("hasl4-departure-card-editor"))
    }
    static getStubConfig = () => ({...DEFAULT_CONFIG})

    render() {
        // console.debug('render!', this.config, this.hass)
        if (!this.config || !this.hass) return nothing
        const lang = getLanguage(this.config?.language)
        const _ = translateTo(lang)

        const missing = html`<span>${_(`entity_missing`)}</span>`
        const entities = (this.config?.entities?.length
            ? this.config?.entities.map(entity => {
                const data = this.hass?.states[entity]
                if (data === undefined) return nothing;

                if(isDepartureAttrs(data.attributes) && this.config?.show_departures) {
                    const attrs = data.attributes
                    const config: PartialEntityConfig = {
                        lang: lang,
                        showHeader: this.config?.show_header,
                        showUpdated: this.config?.show_updated,
                        showName: this.config?.show_entity_name,
                        showIcon: this.config?.show_icon,
                        friendlyName: attrs.friendly_name,
                        direction: this.config?.direction,
                        hideDeparted: this.config?.hide_departed,
                        departedOffset: this.config?.show_departed_offeset,
                        lastUpdated: new Date(data.last_updated),
                        lastChanged: new Date(data.last_changed),
                        alwaysTime: this.config?.show_time_always,
                    }

                    const maxDepartures = this.config?.max_departures || attrs.departures.length
                    const departures = attrs.departures.slice(0, maxDepartures)
                    return html`<hasl4-departure-entity
                        .hass=${this.hass}
                        .config=${config}
                        .departures=${departures}
                        @click=${this.clickHandler(entity)}
                    />`
                } else if (isDeviationsAttrs(data.attributes)) {
                    // TODO: figure out how to present stop deviations
                    // console.debug('deviations!', data.attributes)
                }

                return nothing

            })
            : missing
        ) || nothing

        return html`
            <ha-card @click="${this.clickHandler()}">
                ${this.config?.show_name
                    ? (this.config?.name
                        ? html`<h1 class="card-header"><div class="name">${this.config.name}</div></h1>`
                        : nothing)
                    : nothing}
                <div id="departures" class="card-content">
                    ${this.config?.show_departures ? entities : nothing}
                </div>
            </ha-card>
        `
    }

    private clickHandler = (entity?: string) => (e: Event) => {
        const action = this.config?.click_action
        if (action === undefined) return

        if (action == 'info' && entity) {
            e.preventDefault()
            this._showAttributes(this, "hass-more-info", { entityId: entity })
            return
        } else if (isEntityInfoAction(action)) {
            e.preventDefault()
            this._showAttributes(this, "hass-more-info", { entityId: action.entityId })
            return
        } else if (isServiceCallAction(action)) {
            e.preventDefault()
            this._serviceCall(action.domain, action.service, action.data)
            return
        }
    }

    private _serviceCall (domain, service, data) {
        this.hass.callService(domain, service, data)
    }

    private _showAttributes (el: HTMLElement, type: string, detail?: object, options?: { bubbles?: boolean, cancelable?: boolean, composed?: boolean }) {
        const event = new Event(type, {
            bubbles: Boolean(options?.bubbles),
            cancelable: Boolean(options?.cancelable),
            composed: Boolean(options?.composed) || true
        });
        event.detail = detail || {};

        el.dispatchEvent(event);
        return event;
    }
}

const isEntityInfoAction = (a: ClickAction): a is EntityInfoAction => (a as any).entityId !== undefined
const isServiceCallAction = (a: ClickAction): a is ServiceCallAction => (a as any).service !== undefined

function isDepartureAttrs(item: { [key:string]: any }): item is DepartureAttributes {
    return (item as DepartureAttributes).departures !== undefined
}

function isDeviationsAttrs(item: { [key:string]: any }): item is DeviationsAttributes {
    return (item as DeviationsAttributes).deviations !== undefined
}

declare global {
    interface HTMLElementTagNameMap {
        "hasl4-departure-card": HASLDepartureCard,
        "hasl4-departure-entity": HASLDepartureEntity,
    }
    interface Event {
        detail?: object
    }
}
