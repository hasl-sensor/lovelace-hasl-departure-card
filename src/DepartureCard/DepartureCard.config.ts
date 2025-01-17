import { LovelaceCardConfig } from "custom-card-helpers"

export type EntityInfoAction = {
    entityId: string
}

export type ServiceCallAction = {
    domain: string
    service: string
    data: object
}

export type ClickAction = 'info' | EntityInfoAction | ServiceCallAction

export interface DepartureCardConfig extends LovelaceCardConfig {
    title?: string
    entity: string

    show_entity_name?: boolean
    show_header?: boolean
    show_icon?: boolean
    show_departures: boolean
    direction: number
    max_departures: number
    hide_departed: boolean
    show_departed_offeset?: number
    show_time_always?: boolean
    show_updated?: boolean

    language?: string

    click_action?: ClickAction
}

export const DEFAULT_CONFIG: Partial<DepartureCardConfig> = {
    entity: '',
    title: '',

    show_entity_name: true,
    show_header: true,
    show_icon: true,
    show_departures: true,
    direction: 0,
    max_departures: 5,
    hide_departed: true,
    show_departed_offeset: 5,
    show_updated: true,

    tap_action: 'info',
}
