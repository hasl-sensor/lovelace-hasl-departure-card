export type DepartureEntityConfig = {
    lang: string
    showHeader: boolean
    showUpdated: boolean
    showName: boolean
    showIcon: boolean
    friendlyName: string
    direction: number
    hideDeparted: boolean
    departedOffset: number
    lastUpdated: Date
    lastChanged: Date
    // Departure config
    alwaysTime: boolean
    maxDepartures: number
}

export type PartialEntityConfig = Partial<DepartureEntityConfig>

export const DEFAULT_CONFIG: DepartureEntityConfig  = {
    lang: 'sv-SE',
    showHeader: true,
    showUpdated: false,
    showName: true,
    showIcon: true,
    friendlyName: '',
    direction: 0,
    hideDeparted: false,
    departedOffset: 0,
    lastUpdated: new Date(),
    lastChanged: new Date(),
    alwaysTime: false,
    maxDepartures: 5,
}
