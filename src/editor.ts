import type { HassEntity } from "home-assistant-js-websocket"
import { HomeAssistant, LovelaceCardEditor, fireEvent, EntityConfig } from "custom-card-helpers"
import { LitElement, css, html } from "lit"
import { property, state } from "lit/decorators"

import { DepartureCardConfig } from './DepartureCardConfig'

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

    .section-flex {
      display: flex;
      flex-direction: column;
    }
  `

  public setConfig(config: DepartureCardConfig): void {
    this._config = config
  }

  render() {
    // TODO: add all fields from config
    return html`
      <div class="section-flex">
        <ha-textfield .label=${`Card name`} .value=${this._config?.name} @change=${this.textHandler} .configValue=${`name`}></ha-textfield>
        <ha-formfield .label=${`Show card name`}>
          <ha-switch .checked=${this._config?.show_cardname} @change=${this.checkboxHandler} .configValue=${`show_cardname`}/>
        </ha-formfield>
      </div>
      <div class="section-flex mt1">
        <ha-selector
          .hass=${this.hass}
          .selector=${{ entity: { multiple: true, filter: { domain: 'sensor' }}}}
          .value=${this._config?.entities}
          .configValue=${'entities'}
          @value-changed=${this.pickerHandler}
        />
      </div>
      <div class="section-flex mt1">
        <ha-formfield .label=${`Show header`}>
          <ha-switch .checked=${this._config?.header} @change=${this.checkboxHandler} .configValue=${`header`}/>
        </ha-formfield>
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
    const target = ev.target;
    const value = ev.target.checked;

    if (target.configValue) {
      return {...this._config, [target.configValue]: value}
    }
  })

  private textHandler = this.inputChangedHandler((ev) => {
    const target = ev.target;
    const value = ev.target.value;

    if (target.configValue) {
      return {...this._config, [target.configValue]: value}
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