import { LitElement, html, nothing, css } from 'lit'
import { property, state } from 'lit/decorators';

import type { HomeAssistant, LovelaceCard } from "custom-card-helpers";
import type { HassEntity } from "home-assistant-js-websocket";

import type { DepartureAttributes } from "../models"
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
        const singleEntitityExtras = (this.isManyEntitiesSet()
            ? () => 0
            : () => {
                const [_, attrs] = this.getFirstEntity()
                if (!attrs) return 0

                return (this.config.show_entity_name && attrs.friendly_name) ? 1 : 0
            })()

        const deps = this.getDepartures();

        const size = [
            !!this.config.title ? 1 : 0,
            singleEntitityExtras,
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

        const departures =
            this.config?.show_departures
                ? () => {
                    const data = this.renderDepartures()
                    return (data === nothing)
                        ? html`<span>${_(`entity_missing`)}</span>`
                        : data
                }
                : () => nothing

        const renderLastUpdated =
            this.isManyEntitiesSet()
                ? () => nothing
                : () => {
                    const [data, __] = this.getFirstEntity()
                    if (!data) return nothing;

                    return (this.config?.show_updated && data.last_updated)
                        ? html`
                            <div class="updated right">
                                ${_("last_updated")}
                                ${new Date(data.last_updated).toLocaleTimeString(lang)}
                            </div>`
                        : nothing
        }

        return html`
            <ha-card @click="${this.clickHandler()}">
                ${this.config?.title
                    ? html`<h1 class="card-header"><div class="name">${this.config.title}</div></h1>`
                    : nothing}
                <div class="card-content">
                    ${departures()}
                    ${renderLastUpdated()}
                </div>
            </ha-card>
        `
    }

    private isManyEntitiesSet = () => this.config?.entities?.length > 1

    private getFirstEntity(): [HassEntity, DepartureAttributes] | [undefined, undefined] {
        const data = this.hass?.states[this.config?.entities?.[0] || this.config?.entity];
        const attrs = data?.attributes
        if (data && attrs && isDepartureAttrs(attrs)) {
            return [data, attrs]
        }
        return [undefined, undefined]
    }

    private getDeparturesFor(attrs: DepartureAttributes | undefined) {
        if (!attrs) return []

        const now = new Date()

        return (attrs.departures
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

    private getDeparturesCombined(entities: string[]) {
        const now = new Date()

        return entities
            // filter invalid entities
            .filter(entity => {
                if (!!entity === false) return false

                const data = this.hass?.states[entity]
                if (data === undefined) return false
                if (!isDepartureAttrs(data.attributes)) return false

                return true
            })
            // map entity name to departures and gather all together
            .map(entity => {
                const state = this.hass?.states[entity]
                if (isDepartureAttrs(state.attributes))
                    return state.attributes
            })
            .flatMap(attrs => attrs.departures)
            // filter by departure time
            .filter((d) => {
                if (!this.config?.hide_departed) return true

                const diff = diffMinutes(new Date(d.expected), now)
                return diff + this.config?.show_departed_offeset >= 0
            })
            // filter direction
            .filter((d) => {
                if (this.config?.direction === 0) return true
                return d.direction_code === this.config?.direction
            })
            // sort by expected departure time
            .sort((a, b) => new Date(a.expected).getTime() - new Date(b.expected).getTime())
            // limit to max departures
            .slice(0, this.config?.max_departures)
    }

    private getDepartures() {
        if (this.isManyEntitiesSet()) {
            return this.getDeparturesCombined(this.config?.entities || [])
        }

        const [_, attrs] = this.getFirstEntity()
        if (!attrs) return undefined;

        return this.getDeparturesFor(attrs)
    }

    private renderDepartures = () => {
        const renderEntityName = () => {
            const [_, attrs] = this.getFirstEntity()
            if (!attrs) return nothing;

            return (this.config.show_entity_name && attrs.friendly_name)
                ? html`<div class="row name">${attrs.friendly_name}</div`
                : nothing
        };

        const now = new Date()
        const lang = getLanguage(this.config?.language)
        const _ = translateTo(lang)

        const departures = this.getDepartures()
        if (!departures) return nothing;
        const isMany = this.isManyEntitiesSet()

        return html`
            <div class="departures">
                ${isMany ? '' : renderEntityName()}
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
                    const hasDeviations  = (dep.deviations?.length || 0) > 0;
                    const mostImportantDeviation = dep.deviations?.sort((a, b) => b.importance_level - a.importance_level)?.[0];

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
                        ${this.config?.hide_line_number ? nothing : html`
                            <div class="col icon">
                                <span class="line-icon mr1 ${lineIconClass}">${dep.line.designation}</span>
                                ${hasDeviations ? html`<ha-icon class="warning" icon="mdi:alert"/>` : nothing}
                            </div>
                        `}
                        <div class="col main left">
                            ${dep.destination}
                            ${hasDeviations ? html`<span class="warning-message">${mostImportantDeviation.message}</span>` : nothing}
                        </div>
                        <div class="col right">
                            <span class="leaves-in">${departureTime}</span>
                        </div>
                    </div>`
                })}
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

declare global {
    interface Event {
        detail?: object
    }
}
