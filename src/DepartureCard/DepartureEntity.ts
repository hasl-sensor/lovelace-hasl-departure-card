import { LitElement, html, nothing, css } from 'lit'
import { property } from 'lit/decorators'
import { Departure, TransportType } from '../models'
import { translateTo } from '../translations'
import styles from './DepartureEntity.styles'
import { DepartureEntityConfig, DEFAULT_CONFIG } from './DepartureEntity.config'

const diffMinutes = (from: Date, to: Date) => {
    const diffMinutes = Math.ceil((from.getTime() - to.getTime()) / 1000 / 60)
    return diffMinutes
}

export class HASLDepartureEntity extends LitElement {
    static styles = styles

    @property({ type: Object })
    config: DepartureEntityConfig = DEFAULT_CONFIG

    @property({ type: Array })
    departures = new Array<Departure>()

    render() {
        const c = {...DEFAULT_CONFIG, ...this.config}
        const _ = translateTo(c.lang)

        const departures = this.departures
            // filter direction
            ?.filter((d) => {
                if (c.direction === 0) return true
                return d.direction_code === c.direction
            })
            // filter by departure time
            .filter((d) => {
            if (!c.hideDeparted) return true;

            const diffBase = c.adjustTime ? c.lastUpdated : new Date()
            const diff = diffMinutes(new Date(d.expected), diffBase)
            return diff + c.departedOffset >= 0
        }) || []

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
                            ?  `${diff.toString()} ${_("min")}`
                            : _("departed")
                })()

            return html`<span class="leaves-in">${text}</span>`
        }

        return html`
            <div class="entity">
                ${(c.showName && c.friendlyName) ? html`<div class="name">${c.friendlyName}</div` : ''}
                <div class="table departures">
                    ${c.showHeader ? html`
                        <div class="table-header header">
                            <div class="row">
                                ${c.showIcon ? html`<div class="col small"></div>` : nothing}
                                <div class="col left pl2">${_("line")}</div>
                                <div class="col right">${_("departure")}</div>
                            </div>
                        </div>`: nothing}
                    <div class="table-body">
                    ${departures.map(dep => html`
                        <div class="row departure fade-in">
                            ${c.showIcon ? html`
                                <div class="col small">
                                    ${this.iconForTransport(dep.line.transport_mode)}
                                </div>
                            ` : nothing}
                            <div class="col left pl2">
                                ${this.iconForLine(dep.line.transport_mode, dep.line.designation, dep.line.group_of_lines)} ${dep.destination}
                            </div>
                            <div class="col right">
                                ${departureTime(dep)}
                            </div>
                        </div>`)}
                    </div>
                </div>
                ${(c.showUpdated && c.lastChanged) ? html`
                    <div class="updated right">
                        ${_("last_updated")}
                        ${c.lastChanged.toLocaleTimeString(c.lang)}
                    </div>` : nothing}
            </div>
        `
    }

    private iconForTransport(type: TransportType) {
        const icon = {
            [TransportType.METRO]: 'mdi:subway',
            [TransportType.BUS]: 'mdi:bus',
            [TransportType.TRAM]: 'mdi:tram',
            [TransportType.TRAIN]: 'mdi:train',
            [TransportType.SHIP]: 'mdi:ship',
            [TransportType.FERRY]: 'mdi:ferry',
            [TransportType.TAXI]: 'mdi:taxi',
        }[type] || 'mdi:train'


        return html`<ha-icon class="transport-icon" icon="${icon}"/>`
    }

    private iconForLine(type: TransportType, line: string, group: string) {
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

        return html`<span class="line-icon mr1 ${iconClass()}">${line}</span>`
    }
}