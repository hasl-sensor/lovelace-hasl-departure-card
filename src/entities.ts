import { LitElement, html, nothing, css } from 'lit'
import { property } from 'lit/decorators'
import { Departure, TransportType } from './models'
import { t } from './translations'
import { diffMinutes } from './utils'
import lineStyles from './lineStyles'

type EntityConfig = {
    lang: string
    showHeader: boolean
    showUpdated: boolean
    friendlyName: string
    hideDeparted: boolean
    departedOffset: number
    lastUpdated: Date
    lastChanged: Date
    // Departure config
    alwaysTime: boolean
    adjustTime: boolean
}

export type PartialEntityConfig = Partial<EntityConfig>

const DEFAULT_CONFIG: EntityConfig  = {
    lang: 'sv-SE',
    showHeader: true,
    showUpdated: false,
    friendlyName: '',
    hideDeparted: false,
    departedOffset: 0,
    lastUpdated: new Date(),
    lastChanged: new Date(),
    alwaysTime: false,
    adjustTime: false,
}

export class HASLDepartureEntity extends LitElement {
    static styles = [css`
        .name {
            display: flex;
        }
        .header {            
            padding: 4px 0px 12px;

            font-family: var(--paper-font-headline_-_font-family);
            -webkit-font-smoothing: var(--paper-font-headline_-_-webkit-font-smoothing);
            font-size: var(--paper-font-headline_-_font-size);
            font-weight: var(--paper-font-headline_-_font-weight);
            letter-spacing: var(--paper-font-headline_-_letter-spacing);
            line-height: var(--paper-font-headline_-_line-height);
            text-rendering: var(--paper-font-common-expensive-kerning_-_text-rendering);
            opacity: var(--dark-primary-opacity);
        }
        .departures {
            width: 100%
        }

        .center { text-align: center; }
        .left { text-align: left; }
        .right { text-align: right; }

        .row {
            padding-top: 3px;
        }

        ha-icon {
            transition: color 0.3s ease-in-out, filter 0.3s ease-in-out;
            width: 24px;
            height: 24px;
            color: var(--paper-item-icon-color);
        }
    `, lineStyles]

    @property({ type: Object })
    config: EntityConfig = DEFAULT_CONFIG

    @property({ type: Array })
    departures = new Array<Departure>()

    render() {
        const c = {...DEFAULT_CONFIG, ...this.config}
        const _ = (key: string) => t(c.lang, key)

        const filtered = this.departures.filter((d) => {
            if (!c.hideDeparted) return true;

            const diffBase = c.adjustTime ? c.lastUpdated : new Date()
            const diff = diffMinutes(new Date(d.expected), diffBase)
            return diff + c.departedOffset >= 0
        })

        const departureTime = (dep: Departure) => {            
            const expectedAt = new Date(dep.expected)
            
            const text = c.alwaysTime
                ? expectedAt.toLocaleTimeString(
                    c.lang, {
                        hour: "numeric",
                        minute: "numeric",
                    }
                )
                : (() => {
                    const diffBase = c.adjustTime ? c.lastUpdated : new Date()
                    if (diffBase.getTime() === 0) return "-"

                    const diff = diffMinutes(expectedAt, diffBase)
                    return diff === 0
                        ? _("now")
                        : (diff > 0)
                            ? `${diff.toString()} ${_("min")}`
                            : _("departed")
                })()    
        
            return html`<span class="leaves-in">${text}</span>`
        }

        return html`
            <div class="entity">
                ${c.friendlyName ? html`<div class="name">${c.friendlyName}</div` : ''}
                <table class="table departures">
                    ${c.showHeader ? html`
                        <thead class="row header">
                            <tr>
                            <td class="col small"></td>
                            <td class="col left wider">${_("line")}</td>
                            <td class="col right">${_("departure")}</td>
                            </tr>
                        </thead>`: nothing}
                    <tbody>
                    ${filtered.map(dep => html`
                        <tr class="row departure fade-in">
                            <td class="col left small">
                                ${dep.icon ? html`<ha-icon class="line-icon" icon="${dep.icon}"/>` : nothing}
                            </td>
                            <td class="col left wider">
                                ${this.iconForClass(dep.type, dep.line, dep.groupofline)} ${dep.destination}
                            </td>
                            <td class="col right">
                                ${departureTime(dep)}
                            </td>
                        </tr>`)}
                    </tbody>
                </table>
                ${(c.showUpdated && c.lastChanged) ? html`
                    <div class="updated">
                        ${_("last_updated")}
                        ${c.lastChanged}
                    </div>` : nothing}
            </div>
        `
    }

    private iconForClass(type: TransportType, line: string, group: string) {
        const iconClass = () => {
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
                        case "13":
                        case "14":
                            cls = `${cls} red`
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

        return html`<span class="line-icon ${iconClass()}">${line}</span>`
    }
}