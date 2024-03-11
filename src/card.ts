import { LitElement, html, nothing } from 'lit'
import { HomeAssistant, LovelaceCardConfig } from "custom-card-helpers";

import type { HassEvent } from './hass'
import { styles } from "./card.styles";

type DepartureState = {
    last_updated: string
    attributes: {
        friendly_name: string
    }
}

type Config = LovelaceCardConfig & {
    show_cardname: boolean
    adjust_times: boolean

    name?: string
    language?: string

    entities: string[]

    tap_action?: 'info' | 'service'
    tap_action_entity?: string
    service_config?: {
        domain: string
        service: string
        data: object
    }
}

const leftPad = (s: string, width: number, char: string) => {
    if (!char) return s
    if (s.length >= width) return s

    const padding = new Array(width - s.length + 1).join(char);
    return padding + s;
}

export class HASLDepartureCard extends LitElement {
    static styles = styles
    
    private config?: Config
    private hass?: HomeAssistant

    static properties = {
        hass: {},
        config: {}
    }

    setConfig(config: Config) {
        if (!config.entities) {
            throw new Error('You need to define one or more entities');
        }

        this.config = config
        // if (!this.config.tap_action) this.config.tap_action = 'info';
        // if (!this.config.tap_action_entity) this.config.tap_action_entity = this.config.entities[0];
        // this.config.show_cardname ? this.config.show_cardname = true : this.config.show_cardname = this.config.show_cardname;
        // this.config.compact ? this.config.compact = this.config.compact : this.config.compact = true;
        // if (!this.config.offset) this.config.offset = 0;
        // if (!this.config.replace) this.config.replace = {};
        // if (!this.config.updated_minutes) this.config.updated_minutes = 0;
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
        console.debug('render!', this.config, this.hass)
        if (!this.config || !this.hass) return nothing

        const language = (this.config?.language
            ? this.config.language
            : navigator.language) ?? 'sv-SE'

        const _ = (key: string): string => HASLDepartureCard.translation[language][key] ?? key

        const items = this.config?.entities?.map(entity => {
            const data = this.hass?.states[entity]
            if (data === undefined) return;

            const timeStr = this.adjustTime(data.last_updated, language)
            
            // TODO: finish card rendering

            return html`
                ${this.config.show_cardname ? html`<tr class="header"><td span=3>${data.attributes.friendly_name}</td></tr>` : ''}
                <tr>
                    <td class="col1">
                        <ha-icon class="line-icon" icon="mdi:bus"></ha-icon>
                    </td>
                    <td class="col2">
                    </td>
                </tr>
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
                        ${items}
                    </tbody>
                </table>
            </ha-card>
        `
    }

    private adjustTime(timeLike: string, lang: string): string {
        const _ = (key: string) => HASLDepartureCard.translation[lang][key] ?? key

        const time = new Date(timeLike);
        let updatedValue = '';
        try {
            updatedValue = time.toLocaleString(lang);
        } catch(e) {
            updatedValue = `${leftPad(`${time.getHours()}`, 2, '0')}:${leftPad(`${time.getMinutes()}`, 2, '0')}`
        }

        const now = new Date();
        if (this.config.adjust_times === true) {
            const minutesSinceUpdate = Math.floor(((now.getTime() - time.getTime()) / 1000 / 60))
            updatedValue = `${minutesSinceUpdate} ${_("min")} (${updatedValue})`
        }

        return updatedValue
    }

    _handleClick() {
        switch (this.config.tap_action) {
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

