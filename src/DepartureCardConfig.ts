import { LovelaceCardConfig } from "custom-card-helpers"

export interface DepartureCardConfig extends LovelaceCardConfig {
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

export const DEFAULT_CONFIG: Partial<DepartureCardConfig> = {
    show_cardname: true,
    adjust_times: false,
    departures: true,
    tap_action: 'info',
    hide_departed: false,
}