import { LitElement, html, nothing, css } from 'lit'
import type { HomeAssistant, LovelaceCardConfig } from "custom-card-helpers";

import type { HassEvent } from './hass'
import type { DepartureAttributes } from "./models"
import type { PartialEntityConfig } from './entities'
import { t } from './translations'


type Config = {
    show_cardname: boolean
    header?: boolean
    departures?: boolean
    max_departures?: number

    adjust_times?: boolean
    offeset?: number

    name?: string
    language?: string

    entities?: string[]

    hide_departed: boolean

    tap_action?: 'info' | 'service'
    tap_action_entity?: string
    service_config?: {
        domain: string
        service: string
        data: object
    }
}

const DEFAULT_CONFIG: Config = {
    show_cardname: true,
    adjust_times: false,
    departures: true,
    tap_action: 'info',
    hide_departed: false,
}

type CardConfig = LovelaceCardConfig & Config

export class HASLDepartureCard extends LitElement {
    static styles = css`
        ha-card {
            display: block;
            position: relative;
            background-size: cover;

            padding: 16px;
        }

        .header {
            font-family: var(--paper-font-headline_-_font-family);
            -webkit-font-smoothing: var(--paper-font-headline_-_-webkit-font-smoothing);
            font-size: var(--paper-font-headline_-_font-size);
            font-weight: var(--paper-font-headline_-_font-weight);
            letter-spacing: var(--paper-font-headline_-_letter-spacing);
            line-height: var(--paper-font-headline_-_line-height);
            text-rendering: var(--paper-font-common-expensive-kerning_-_text-rendering);
            opacity: var(--dark-primary-opacity);
            padding: 4px 0px 12px;
            display: flex;
            justify-content: space-between;
        }
    `
    
    private config?: CardConfig
    public hass?: HomeAssistant

    static properties = {
        hass: {},
        config: {}
    }

    setConfig(config: CardConfig) {
        if (!config.entities) {
            throw new Error('You need to define one or more entities');
        }

        this.config = {...DEFAULT_CONFIG, ...config}
    }

    getCardSize = () => this.config.entities.length + 1;

    // TODO: add editor
    // static getConfigElement() {
    //     return document.createElement("toggle-card-typescript-editor");
    // }

    // static getStubConfig() {
    //     return {
    //         entity: "input_boolean.tcts",
    //         header: "",
    //     };
    // }

    render() {
        // console.debug('render!', this.config, this.hass)
        if (!this.config || !this.hass) return nothing

        const lang = (this.config?.language
            ? this.config.language
            : navigator.language) ?? 'sv-SE'

        const _ = (key: string): string => t(lang, key)

        const entities = this.config?.entities?.map(entity => {
            const data = this.hass?.states[entity]
            if (data === undefined) return;
            const attrs = (data.attributes as DepartureAttributes)

            const config: PartialEntityConfig = {
                lang: lang,
                showHeader: this.config?.header,
                friendlyName: attrs.friendly_name,
                lastUpdated: new Date(data.last_updated),
                lastChanged: new Date(data.last_changed),
                hideDeparted: this.config?.hide_departed,
            }
            
            const maxDepartures = this.config?.max_departures || attrs.departures.length
            const departures = attrs.departures.slice(0, maxDepartures)
            return html`<hasl-departure-entity
                .config=${config}
                .departures=${departures}
            />`
        }) || nothing

        return html`
            <ha-card @click="${this._handleClick}">
                ${this.config?.show_cardname
                    ? (this.config?.name
                        ? html`<div class="header"><div class="name">${this.config.name}</div></div>`
                        : nothing)
                    : nothing}
                ${this.config?.departures ? entities : nothing}
            </ha-card>
        `
    }

    _handleClick(e) {
        switch (this.config?.tap_action) {
            case 'info':
                this._showAttributes(this, "hass-more-info", { entityId: this.config.tap_action_entity });
                break
            case 'service':
                this._serviceCall(this.config.service_config.domain, this.config.service_config.service, this.config.service_config.data)
                break
        }
    }

    _serviceCall (domain, service, data) {
        this.hass.callService(domain, service, data)
    }

    _showAttributes (el: HTMLElement, type: string, detail?: object, options?: { bubbles?: boolean, cancelable?: boolean, composed?: boolean }) {
        const event = new Event(type, {
            bubbles: Boolean(options?.bubbles),
            cancelable: Boolean(options?.cancelable),
            composed: Boolean(options?.composed) || true
        });
        (event as HassEvent).detail = detail || {};

        el.dispatchEvent(event);
        return event;
    }
}

