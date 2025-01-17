const defaultLang = `en-US`
const defaultTranslation = {
    entity_missing: 'Entity data missing',
    line: 'Line',
    destination: 'Destination',
    departure: 'Departure',
    min: 'min',
    last_updated: 'Last updated',
    now: 'Now',
    // configuration translations
    editor_show_name: 'Show card name',
    editor_title: 'Card name',
    editor_show_entity_name: 'Show entity name',
    editor_show_departures: 'Show departures',
    editor_show_header: 'Show departure header',
    editor_show_transport_icon: 'Show transport icon',
    editor_max_departures: 'Maximum departures to show',
    editor_hide_departed: 'Hide already departed',
    editor_show_departed_offeset: '... but show departed number of minutes ago',
    editor_show_time_always: 'Always show departure time in HH:MM form',
    editor_show_updated: `Show 'Last Updated'`,
    editor_direction: `Direction filter`,
    editor_direction_all: `All`,
    editor_direction_left: `Left`,
    editor_direction_right: `Right`,
    language: 'Language',
}
type Translation = typeof defaultTranslation
export type TranslationKey = keyof Translation

export const translations: {[lang: string]: Translation} = {
    [defaultLang]: defaultTranslation,
    'sv-SE': {
        entity_missing: 'Ingen data hittades',
        line: 'Linje',
        destination: 'Till',
        departure: 'Avresa',
        min: 'min',
        last_updated: 'Senast uppdaterad',
        now: 'Nu',
        editor_show_name: 'Visa kortnamn',
        editor_title: 'Kortnamn',
        editor_show_entity_name: 'Visa enhetsnamn',
        editor_show_departures: 'Visa avgångar',
        editor_show_header: 'Visa avgångshuvud',
        editor_show_transport_icon: 'Visa transportikon',
        editor_max_departures: 'Max antal avgångar',
        editor_hide_departed: 'Dölj redan avgångna',
        editor_show_departed_offeset: '... men visa avgångna för antal minuter sedan',
        editor_show_time_always: 'Visa alltid avgångstid i HH:MM-form',
        editor_show_updated: `Visa 'Senast uppdaterad'`,
        editor_direction: `Riktning filter`,
        editor_direction_all: `Alla`,
        editor_direction_left: `Vänster`,
        editor_direction_right: `Höger`,
        language: 'Språk',
    },
    'fr-FR': {
        entity_missing: 'Aucune info trouv&eacute;e',
        line: 'Ligne',
        destination: 'Terminus',
        departure: 'D&eacute;part',
        min: 'min',
        last_updated: 'Mis à jour',
        now: 'Maintenant',
        editor_show_name: 'Afficher le nom de la carte',
        editor_title: 'Nom de la carte',
        editor_show_entity_name: 'Afficher le nom de l\'entité',
        editor_show_departures: 'Afficher les départs',
        editor_show_header: 'Afficher l\'entête des départs',
        editor_show_transport_icon: 'Afficher l\'icône de transport',
        editor_max_departures: 'Nombre maximum de départs',
        editor_hide_departed: 'Masquer les départs passés',
        editor_show_departed_offeset: '... mais montrer les départs depuis le nombre de minutes',
        editor_show_time_always: 'Toujours afficher l\'heure de départ en HH:MM',
        editor_show_updated: `Afficher 'Mis à jour'`,
        editor_direction: `Filtre de direction`,
        editor_direction_all: `Tous`,
        editor_direction_left: `Gauche`,
        editor_direction_right: `Droite`,
        language: 'Langue',
    }
}

export const languages = Object.keys(translations)
export const t = (key: TranslationKey, lang?: string): string => translations[lang]?.[key] ?? defaultTranslation[key]
export const getLanguage = (configLang?: string): string => configLang ?? navigator.language ?? defaultLang
export const translateTo = (lang?: string) => (key: TranslationKey) => t(key, lang)
