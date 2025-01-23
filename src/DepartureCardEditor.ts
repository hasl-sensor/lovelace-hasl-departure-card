import type { HomeAssistant, LovelaceCardEditor } from "custom-card-helpers"
import { fireEvent } from "custom-card-helpers"
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

  public setConfig(config: DepartureCardConfig): void {
    this._config = config
  }

  private _schema = (_ : (key :string) => string) => [
    { name: "title", selector: { text: {} } },
    { name: "language", select: { mode: 'dropdown', options: languages } },
    { name: "entity", selector: { entity: { filter: [
      { domain: 'sensor', integration: 'hasl3' },
      { domain: 'sensor', integration: 'london_tfl' }
    ]}} },
    { name: "show_entity_name", type: "boolean" },
    {
      name: "",
      type: "expandable",
      icon: "mdi:clock",
      title: "Departures",
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
    { name: "show_updated", type: "boolean" },
  ];

  private _valueChanged(ev: CustomEvent): void {
    fireEvent(this, "config-changed", { config: ev.detail.value });
  }

  render() {
    const lang = getLanguage()
    const _ = translateTo(lang)

    return html`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${this._schema(_)}
        .computeLabel=${(item, data) => _(`editor_${item.name}`) || item.label || item.name }
        @value-changed=${this._valueChanged}>
      </ha-form>
    `
  }
}
