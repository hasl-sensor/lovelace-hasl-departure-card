import { LitElement, html, nothing, unsafeCSS, css } from 'lit'
import type { HomeAssistant, LovelaceCardConfig } from "custom-card-helpers";

import type { HassEvent } from './hass'
import { styles } from "./card.styles"
import { Departure, DepartureAttributes, TransportType } from "./models"


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
    max_departures: 5,
    departures: true,
    tap_action: 'info',
}

type CardConfig = LovelaceCardConfig & Config

const leftPad = (s: string, width: number, char: string) => {
    if (!char) return s
    if (s.length >= width) return s

    const padding = new Array(width - s.length + 1).join(char);
    return padding + s;
}

export class HASLDepartureCard extends LitElement {
    static styles = styles
    
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

    private iconForClass(type: TransportType, line: string, group: string) {
        const iconClass = () => {
            switch (type) {
                case TransportType.BUS:
                    return (group === "blåbuss" ? 'bus_blue bus_blue_' : 'bus_blue bus_blue_') + line
                case TransportType.METRO:
                    switch (line) {
                        case "10":
                        case "11":
                            return 'met_blue met_blue_' + line
                        case "13":
                        case "14":
                            return 'met_red met_red_' + line
                        default:
                            return 'met_green met_green_' + line
                    }
                    break;
                case TransportType.TRAM:
                    return 'trm trm_' + line 
                case TransportType.TRAIN:
                    return 'trn trn_' + line 
                default:
                    return 'mdi:bus'
            }
        }

        return html`<span class="line-icon ${iconClass()}">${line}</span>`
    }

    render() {
        console.debug('render!', this.config, this.hass)
        if (!this.config || !this.hass) return nothing

        const language = (this.config?.language
            ? this.config.language
            : navigator.language) ?? 'sv-SE'

        const _ = (key: string): string => HASLDepartureCard.translation[language][key] ?? key
        const now = new Date()
        const expanded = this.config?.compact === false

        const entities = this.config?.entities?.map(entity => {
            const data = this.hass?.states[entity]
            if (data === undefined) return;

            // const timeStr = this.adjustTime(data.last_updated, now, language)
            
            // TODO: finish card rendering
            const header = this.config?.header ? 
                html`
                    <tr>
                        <th class="col1">${_("line")}</th>
                        <th class="col2">${_("destination")}</th>
                        <th class="col3 wider">${_("departure")}</th>
                    </tr>
                ` : nothing
            
            const updatedTime = new Date(data.last_updated)
            const attrs = (data.attributes as DepartureAttributes)
            const departures = attrs.departures
                .filter((_, i) => i <= (this.config?.max_departures || 100) )
                .filter((d) => {
                    // TODO: filter by 
                    // departureInMinutes - config.offset < 0 && config.hide_departed
                    return true
                })
                .map((dep) => {
                    if (this.config?.timeleft) { 
                        const expectedTime = new Date(dep.expected)
                        const departureTime = expectedTime.toLocaleTimeString(
                            language, {
                                hour: "numeric",
                                minute: "numeric",
                            }
                        )

                        // TODO: calculate diff updatedTime and expectedTime
                        const diff = 0
                        if (diff > 0) {
                            // leaves in
                        } else if (diff === 0) {
                            // now
                        } else {
                            // departed
                        }
                    }

                    return html`
                        <tr>
                            <td class="col1 ${expanded?'': 'loose-icon'}"><ha-icon icon="${dep.icon}"></ha-icon></td>
                            <td class="col2 ${expanded?'': 'loose-cell loose-padding'}">${this.iconForClass(dep.type, dep.line, dep.groupofline)} ${dep.destination}</td>
                        </tr>
                    `
                })
            // TODO: limit departures to config.max_departures

            return html`
                ${this.config.show_cardname ? html`<tr class="header"><td span=3>${attrs.friendly_name}</td></tr>` : ''}
                ${header}
                ${departures}
            `
        }) || nothing

        return html`
            <ha-card @click="${this._handleClick}">
                ${this.config?.show_cardname
                    ? (this.config?.name
                        ? html`<div class="header"><div class="name">${this.config.name}</div></div>`
                        : nothing)
                    : nothing}
                <table class="sl-table">
                    <tbody>
                        ${this.config?.departures ? entities : nothing}
                    </tbody>
                </table>
            </ha-card>
        `
    }

    private adjustTime(timeLike: string, from: Date, lang: string): string {
        const _ = (key: string) => HASLDepartureCard.translation[lang][key] ?? key

        const time = new Date(timeLike);
        let updatedValue = '';
        try {
            updatedValue = time.toLocaleString(lang);
        } catch(e) {
            updatedValue = `${leftPad(`${time.getHours()}`, 2, '0')}:${leftPad(`${time.getMinutes()}`, 2, '0')}`
        }

        if (this.config.adjust_times === true) {
            const minutesSinceUpdate = Math.floor(((from.getTime() - time.getTime()) / 1000 / 60))
            updatedValue = `${minutesSinceUpdate} ${_("min")} (${updatedValue})`
        }

        return updatedValue
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

    private static translation = {
        'sv-SE': {
            entity_missing: 'Ingen data hittades',
            line: 'Linje',
            destination: 'Till',
            departure: 'Avg&aring;ng',
            min: 'min',
            last_updated: 'Senast uppdaterad ',
            now: 'Nu',
            departed: 'Avg&aring;tt',
        },
        'en-EN': {
            entity_missing: 'Entity data missing',
            line: 'Line',
            destination: 'Destination',
            departure: 'Departure',
            min: 'min',
            last_updated: 'Last updated ',
            now: 'Now',
            departed: 'Departed',
        },
        'fr-FR': {
            entity_missing: 'Aucune info trouv&eacute;e',
            line: 'Ligne',
            destination: 'Terminus',
            departure: 'D&eacute;part',
            min: 'min',
            last_updated: 'Mis à jour ',
            now: 'Maintenant ',
            departed: 'Parti ',
        }
    }
}

