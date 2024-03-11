export enum TransportType {
    METRO = 'METRO',
    BUS = 'BUS',
    TRAM = 'TRAM',
    TRAIN = 'TRAIN',
    SHIP = 'SHIP'
}

export type Departure = {
    time: number
    expected: string 
    line: string
    groupofline: string
    type: TransportType
    destination: string
    icon: string
}

export type DepartureAttributes = {
    friendly_name: string
    departures: Departure[]
}