export enum TransportType {
    METRO = 'METRO',
    BUS = 'BUS',
    TRAM = 'TRAM',
    TRAIN = 'TRAIN',
    SHIP = 'SHIP',
    FERRY = 'FETTRY',
    TAXI = 'TAXI',
}

export type Departure = {
    destination: string
    direction: string
    direction_code: number
    state: string
    display: string
    stop_point: {
        name: string
        designation: string
    }
    line: {
        id: number
        designation: string
        transport_mode: TransportType
        group_of_lines: string
    }
    scheduled: string
    expected: string
}

export type DepartureAttributes = {
    friendly_name: string
    departures: Departure[]
}

export type Deviation = {}

export type DeviationsAttributes = {
    firendly_name: string
    deviations: Deviation[]
}