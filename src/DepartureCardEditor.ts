import type { HomeAssistant, LovelaceCardEditor } from "custom-card-helpers"
import { LitElement, css, html } from "lit"
import { customElement, property, state } from "lit/decorators"

import { DepartureCardConfig } from './DepartureCard/DepartureCard.config'
import { getLanguage, translateTo, languages } from "./translations"

@customElement('hasl4-departure-card-editor')
export class HASLDepartureCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false })
  public hass?: HomeAssistant;

  @state()
  private _config?: DepartureCardConfig

  @state()
  private _schema?: any

  public setConfig(config: DepartureCardConfig): void {
    this._config = config
    this._schema = this.getSchema(translateTo(getLanguage()))

    // Migrate to multiple entities
    if (config.entity && !config.entities?.length) {
      const { entity, ...rest } = config
      this._dispatchConfigChangedEvent({ ...rest, entities: [config.entity] })
    }
  }

  private getSchema = (_ : (key :string) => string) => {
    const haveMultipleEntities = this._config?.entities?.length > 1

    return [
    { name: "title", selector: { text: {} } },
    // { name: "language", selector: { select: { mode: 'dropdown', options: languages } } },
    {
      name: "",
      type: "expandable",
      icon: "mdi:database",
      title: _("editor_entities"),
      schema: [
        { name: "show_entity_name", type: "boolean", disabled: haveMultipleEntities },
        { name: "entities", selector: { entity: { multiple: true, filter: [
          { domain: 'sensor', integration: 'hasl3' },
          { domain: 'sensor', integration: 'london_tfl' }
        ]}} },
      ],
    },
    {
      name: "",
      type: "expandable",
      icon: "mdi:clock",
      title: _("editor_departures"),
      schema: [
        { name: "show_departures", type: "boolean" },
        { name: "show_header", type: "boolean" },
        {
          name: "direction",
          selector: {
            select: {
              options: [
                { value: 0, label: _(`editor_direction_all`) },
                { value: 1, label: _(`editor_direction_left`) },
                { value: 2, label: _(`editor_direction_right`) },
              ]
            }
          }
        },
        { name: "show_icon", type: "boolean" },
        { name: "hide_line_number", type: "boolean" },
        { name: "show_time_always", type: "boolean" },
        { name: "max_departures", selector: { number: { mode: "box", min: 1, max: 10 } }, },
        {
          name: "",
          type: "grid",
          schema: [
            { name: "hide_departed", type: "boolean" },
            { name: "show_departed_offeset", selector: { number: { mode: "box", min: 0, max: 30 } }, },
          ],
        },
      ],
    },
    { name: "show_updated", type: "boolean", disabled: haveMultipleEntities },
  ]};

  private _valueChanged(ev: CustomEvent): void {
    ev.stopPropagation();
    this._dispatchConfigChangedEvent(ev.detail.value)
  }

  private _dispatchConfigChangedEvent(newConfig) {
    const event = new Event("config-changed", { bubbles: true, composed: true});
    event.detail = { config: newConfig };
    this.dispatchEvent(event);
  }

  render() {
    const lang = getLanguage()
    const _ = translateTo(lang)

    return html`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${this._schema || []}
        .computeLabel=${(item, data) => _(`editor_${item.name}`) || item.label || item.name }
        @value-changed=${this._valueChanged}>
      </ha-form>
    `
  }
}
