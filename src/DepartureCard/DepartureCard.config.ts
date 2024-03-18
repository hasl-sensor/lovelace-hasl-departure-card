import { LovelaceCardConfig } from "custom-card-helpers"

export interface DepartureCardConfig extends LovelaceCardConfig {
    entities: string[]

    name?: string
    show_name: boolean

    show_entity_name?: boolean
    show_header?: boolean
    show_icon?: boolean
    show_departures: boolean
    max_departures: number
    hide_departed: boolean
    show_departed_offeset?: number
    adjust_departure_time?: boolean
    show_time_always?: boolean
    show_updated?: boolean

    language?: string

    tap_action?: 'info' | 'service'
    tap_action_entity?: string
    service_config?: {
        domain: string
        service: string
        data: object
    }
}

export const DEFAULT_CONFIG: Partial<DepartureCardConfig> = {
    entities: [],

    name: '',
    show_name: false,

    show_entity_name: true,
    show_header: true,
    show_icon: true,
    show_departures: true,
    max_departures: 5,
    hide_departed: true,
    show_departed_offeset: 5,
    show_updated: true,

    tap_action: 'info',
}