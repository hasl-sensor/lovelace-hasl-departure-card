const defaultTranslation = {
    entity_missing: 'Entity data missing',
    line: 'Line',
    destination: 'Destination',
    departure: 'Departure',
    min: 'min',
    last_updated: 'Last updated',
    now: 'Now',
    departed: 'Departed',
}
type Translation = typeof defaultTranslation
export type TranslationKey = keyof Translation

export const translations: {[lang: string]: Translation} = {
    'sv-SE': {
        entity_missing: 'Ingen data hittades',
        line: 'Linje',
        destination: 'Till',
        departure: 'Avresa',
        min: 'min',
        last_updated: 'Senast uppdaterad',
        now: 'Nu',
        departed: 'Lämnade',
    },
    'fr-FR': {
        entity_missing: 'Aucune info trouv&eacute;e',
        line: 'Ligne',
        destination: 'Terminus',
        departure: 'D&eacute;part',
        min: 'min',
        last_updated: 'Mis à jour',
        now: 'Maintenant',
        departed: 'Parti',
    }
}

export const languages = Object.keys(translations)
export const t = (lang: string, key: TranslationKey): string => translations[lang]?.[key] ?? defaultTranslation[key]