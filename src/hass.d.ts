export type HassEvent = Event & { detail: object }
export type Hass<T> = {
    callService: (domain: string, service: string, data: object) => void
    states: T[]
}