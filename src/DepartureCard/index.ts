import { LitElement, html, nothing, css } from 'lit'
import { property, state } from 'lit/decorators';

import type { HomeAssistant, LovelaceCard } from "custom-card-helpers";

import type { DepartureAttributes, DeviationsAttributes, Departure } from "../models"
import { TransportType } from '../models'
import { translateTo, getLanguage } from '../translations'
import { DepartureCardConfig, DEFAULT_CONFIG, ClickAction, EntityInfoAction, ServiceCallAction } from './DepartureCard.config'
import styles from './DepartureCard.styles'

const diffMinutes = (from: Date, to: Date) => {
    const diffMinutes = Math.ceil((from.getTime() - to.getTime()) / 1000 / 60)
    return diffMinutes
}

export class HASLDepartureCard extends LitElement implements LovelaceCard {
    static styles = styles;

    @state()
    private config?: DepartureCardConfig

    @property({ attribute: false })
    public hass?: HomeAssistant

    setConfig(config: DepartureCardConfig) {
        this.config = {...DEFAULT_CONFIG, ...config}
    }

    getCardSize() {
        const deps = this.getDepartures();
        const entity = this.config?.entity;
        const data = this.hass?.states[entity]
        const attrs = data.attributes

        const size = [
            !!this.config.title ? 1 : 0,
            ((this.config.show_entity_name && attrs.friendly_name)) ? 1 : 0,
            !!this.config.show_header ? 1 : 0,
            deps?.length || 0,
        ].reduce((sum, entity) => sum += entity ? entity : 0, 0);

        return Math.max(size, 1);
    };

    getLayoutOptions() {
        return {
          grid_min_columns: 3,
          grid_min_rows: 2,
        };
    }

    // configuration card is loaded in async manner
    static async getConfigElement () {
        return await import('../DepartureCardEditor').then(() => document.createElement("hasl4-departure-card-editor"))
    }

    static getStubConfig = () => ({...DEFAULT_CONFIG})

    render() {
        if (!this.config || !this.hass) return nothing
        const lang = getLanguage(this.config?.language)
        const _ = translateTo(lang)

        const missing = html`<span>${_(`entity_missing`)}</span>`;
        const departures = this.config?.show_departures ? this.renderDepartures() : nothing ;
        const deviations = nothing;

        // if (isDeviationsAttrs(data.attributes)) {
            // TODO: figure out how to present stop deviations
            // console.debug('deviations!', data.attributes)
        // }

        return html`
            <ha-card @click="${this.clickHandler()}">
                ${this.config?.title
                    ? html`<h1 class="card-header"><div class="name">${this.config.title}</div></h1>`
                    : nothing}
                <div id="departures" class="card-content">
                    ${departures}
                    ${(departures === nothing) && (deviations === nothing) ? missing : nothing}
                </div>
            </ha-card>
        `
    }

    private getDepartures() {
        const entity = this.config?.entity;
        const data = this.hass?.states[entity]

        if (entity === undefined) return undefined;
        if (data === undefined) return undefined;
        if (!isDepartureAttrs(data.attributes)) return undefined;

        const now = new Date()

        return (data.attributes.departures
            // filter direction
            ?.filter((d) => {
                if (this.config?.direction === 0) return true
                return d.direction_code === this.config?.direction
            })
            // filter by departure time
            .filter((d) => {
            if (!this.config?.hide_departed) return true

            const diff = diffMinutes(new Date(d.expected), now)
            return diff + this.config?.show_departed_offeset >= 0
        }) || []).slice(0, this.config?.max_departures)
    }

    private renderDepartures = () => {
        const entity = this.config?.entity;
        const data = this.hass?.states[entity]
        const attrs = data.attributes

        if (entity === undefined) return nothing;
        if (data === undefined) return nothing;
        if (!isDepartureAttrs(attrs)) return nothing;

        const now = new Date()
        const lang = getLanguage(this.config?.language)
        const _ = translateTo(lang)

        const departures = this.getDepartures()

        return html`
            <div class="entity">
                <div class="departures">
                    ${(this.config.show_entity_name && attrs.friendly_name) ? html`<div class="row name">${attrs.friendly_name}</div` : ''}
                    ${this.config.show_header ? html`
                        <div class="row header">
                            ${this.config?.show_icon ? html`<div class="col icon"></div>` : nothing}
                            <div class="col main left">${_("line")}</div>
                            <div class="col right">${_("departure")}</div>
                        </div>`: nothing}

                    ${departures.map(dep => {
                        const expectedAt = new Date(dep.expected)
                        const diff = diffMinutes(expectedAt, now)

                        const isAtThePlatform = diff === 0
                        const isDeparted = diff < 0

                        const departureTime = this.config?.show_time_always
                            ? expectedAt.toLocaleTimeString(
                                lang, {
                                    hour: "numeric",
                                    minute: "numeric",
                                }
                            )
                            : (() => {
                                return isAtThePlatform
                                    ? _("now")
                                    : html`<ha-relative-time .hass=${this.hass} .datetime=${expectedAt}></ha-relative-time>`
                            })()

                        const icon = {
                            [TransportType.METRO]: 'mdi:subway',
                            [TransportType.BUS]: 'mdi:bus',
                            [TransportType.TRAM]: 'mdi:tram',
                            [TransportType.TRAIN]: 'mdi:train',
                            [TransportType.SHIP]: 'mdi:ship',
                            [TransportType.FERRY]: 'mdi:ferry',
                            [TransportType.TAXI]: 'mdi:taxi',
                        }[dep.line.transport_mode] || 'mdi:train'

                        const lineIconClass = this.lineIconClass(dep.line.transport_mode, dep.line.designation, dep.line.group_of_lines)

                        return html`
                        <div class="row departure fade-in ${isDeparted ? 'departed' : ''}">
                            ${this.config?.show_icon ? html`
                                <div class="col icon">
                                    <ha-icon class="transport-icon" icon="${icon}"/>
                                </div>
                            ` : nothing}
                            <div class="col">
                                <span class="line-icon mr1 ${lineIconClass}">${dep.line.designation}</span>
                            </div>
                            <div class="col main left">
                                ${dep.destination}
                            </div>
                            <div class="col right">
                                <span class="leaves-in">${departureTime}</span>
                            </div>
                        </div>`
                    })}
                </div>
                    ${(this.config?.show_updated && data.last_updated) ? html`
                        <div class="updated right">
                            ${_("last_updated")}
                            ${new Date(data.last_changed).toLocaleTimeString(lang)}
                        </div>` : nothing}
            </div>
        `
    }

    private lineIconClass(type: TransportType, line: string, group: string) {
        let cls = ''
        switch (type) {
            case TransportType.BUS:
                cls = `bus bus_${line}`
                cls = group === "blåbuss" ? `${cls} blue` : cls
                break
            case TransportType.METRO:
                cls = `metro metro_${line}`
                switch (line) {
                    case "10":
                    case "11":
                        cls = `${cls} blue`
                        break;
                    case "13":
                    case "14":
                        cls = `${cls} red`
                        break;
                    default:
                        cls = `${cls} green`
                }
                break
            case TransportType.TRAM:
                cls = `tram tram_${line}`
                break
            case TransportType.TRAIN:
                cls = `train train_${line}`
                break
        }
        return cls
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
    interface Event {
        detail?: object
    }
}
