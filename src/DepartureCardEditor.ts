import type { HomeAssistant, LovelaceCardEditor } from "custom-card-helpers"
import { fireEvent } from "custom-card-helpers"
import { LitElement, css, html } from "lit"
import { customElement, property, state } from "lit/decorators"

import { DepartureCardConfig } from './DepartureCard/DepartureCard.config'

@customElement('hasl-departure-card-editor')
export class HASLDepartureCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false })
  public hass?: HomeAssistant;

  @state()
  private _config?: DepartureCardConfig

  static styles = css`
    .mt1 {
      margin-top: 8px;
    }

    ha-formfield {
      margin-top: 16px;
    }

    ha-textfield {
      margin-top: 16px;
    }

    .section-flex {
      display: flex;
      flex-direction: column;
    }

    .border {
      border: 1px solid var(--primary-text-color);
      border-radius: 8px;
    }

    .subsection {
      margin: 16px;
      padding: 0 16px 16px 16px;
    }
  `

  public setConfig(config: DepartureCardConfig): void {
    this._config = config
  }

  render() {
    const departureConfigs = (enabled: boolean = true) => {
      const disabled = !enabled
      return html`
        <ha-formfield .label=${`Show departure header`}>
          <ha-switch .disabled=${disabled} .checked=${this._config?.show_header} @change=${this.checkboxHandler} .configValue=${`show_header`}/>
        </ha-formfield>
        <ha-formfield .label=${`Show transport icon`}>
          <ha-switch .disabled=${disabled} .checked=${this._config?.show_icon} @change=${this.checkboxHandler} .configValue=${`show_icon`}/>
        </ha-formfield>
        <ha-textfield
          type="number"
          inputmode="numeric"
          min="1"
          max="10"
          .disabled=${disabled}
          .label=${`Maximum departures to show`}
          .value=${this._config?.max_departures}
          .configValue=${`max_departures`}
          @change=${this.numHandler}>
        </ha-textfield>
        <ha-formfield .label=${`Hide already departed`}>
          <ha-switch .disabled=${disabled} .checked=${this._config?.hide_departed} @change=${this.checkboxHandler} .configValue=${`hide_departed`}/>
        </ha-formfield>
        <ha-textfield
          type="number"
          inputmode="numeric"
          min="0"
          max="30"
          .disabled=${disabled || !!!this._config?.hide_departed}
          .label=${`Show departed within ... minutes`}
          .value=${this._config?.show_departed_offeset}
          .configValue=${`show_departed_offeset`}
          @change=${this.numHandler}>
        </ha-textfield>
        <ha-formfield .label=${`Always show departure time in HH:MM form`}>
          <ha-switch .disabled=${disabled} .checked=${this._config?.show_time_always} @change=${this.checkboxHandler} .configValue=${`show_time_always`}/>
        </ha-formfield>
        <ha-formfield .label=${`Adjust departure time to update time`}>
          <ha-switch
            .checked=${this._config?.adjust_departure_time}
            .disabled=${disabled || this._config?.show_time_always}
            .configValue=${`adjust_departure_time`}
            @change=${this.checkboxHandler}/>
        </ha-formfield>
        <ha-formfield .label=${`Show 'Last Updated'`}>
          <ha-switch .disabled=${disabled} .checked=${this._config?.show_updated} @change=${this.checkboxHandler} .configValue=${`show_updated`}/>
        </ha-formfield>
      `
    }

    // TODO: add all fields from config
    return html`
      <div class="section-flex">
        <ha-selector
          .hass=${this.hass}
          .selector=${{ entity: { multiple: true, filter: { domain: 'sensor' }}}}
          .value=${this._config?.entities}
          .configValue=${'entities'}
          @value-changed=${this.pickerHandler}
        />
      </div>
      <div class="section-flex mt1">
        <ha-formfield .label=${`Show card name`}>
          <ha-switch .checked=${this._config?.show_name} @change=${this.checkboxHandler} .configValue=${`show_name`}/>
        </ha-formfield>
        <ha-textfield
          .label=${`Card name`}
          .value=${this._config?.name}
          .configValue=${`name`}
          .disabled=${!!!this._config?.show_name}
          @change=${this.textHandler}>
        </ha-textfield>
        <ha-formfield .label=${`Show entity name`}>
          <ha-switch .checked=${this._config?.show_entity_name} @change=${this.checkboxHandler} .configValue=${`show_entity_name`}/>
        </ha-formfield>
        <ha-formfield .label=${`Show departures`}>
          <ha-switch .checked=${this._config?.show_departures} @change=${this.checkboxHandler} .configValue=${`show_departures`}/>
        </ha-formfield>
        <div class="section-flex border subsection">
          ${departureConfigs(this._config?.show_departures)}
        </div>
      </div>
      `
  }

  private sortObjectByKeys(object: { [x: string]: any; }) {
    return Object.keys(object).sort().reduce((r, k) => (r[k] = object[k], r), {});
  }

  private inputChangedHandler(_type: (event) => DepartureCardConfig) {
    const handler = (ev) => {
      if (!this._config || !this.hass) {
        return;
      }

      const newConfig = _type(ev)
      if (newConfig !== undefined) {
        this._config = { ...newConfig }
        fireEvent(this, 'config-changed', { config: this.sortObjectByKeys(this._config) });
      }
    }

    return handler
  }

  private checkboxHandler = this.inputChangedHandler((ev) => {
    const { target, target: { checked: value } } = ev

    if (target.configValue) {
      return {...this._config, [target.configValue]: value}
    }
  })

  private textHandler = this.inputChangedHandler((ev) => {
    const { target, target: { value: value } } = ev

    if (target.configValue) {
      return {...this._config, [target.configValue]: value}
    }
  })

  private numHandler = this.inputChangedHandler((ev) => {
    const { target, target: { value: value } } = ev

    if (target.configValue) {
      return {...this._config, [target.configValue]: parseInt(value)}
    }
  })

  private pickerHandler = this.inputChangedHandler((ev) => {
    const target = ev.target;
    const value = ev.detail.value;

    if (target.configValue) {
      if (value) {
        return {...this._config, [target.configValue]: value};
      } else {
        const newConfig = { ...this._config }
        delete newConfig[target.configValue]
        return newConfig
      }
    }
  })
}