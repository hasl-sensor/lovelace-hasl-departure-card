
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire55a1"];
var parcelRegister = parcelRequire.register;
parcelRegister("jlj1D", function(module, exports) {

$parcel$export(module.exports, "HASLDepartureCardEditor", () => $91eb62869907e39c$export$8d2c87e174389bfd);

var $8HQfp = parcelRequire("8HQfp");

var $j0ZcV = parcelRequire("j0ZcV");

var $1ZxoT = parcelRequire("1ZxoT");

var $gjUL4 = parcelRequire("gjUL4");
class $91eb62869907e39c$export$8d2c87e174389bfd extends (0, $j0ZcV.LitElement) {
    setConfig(config) {
        this._config = config;
        this._schema = this.getSchema((0, $gjUL4.translateTo)((0, $gjUL4.getLanguage)()));
        // Migrate to multiple entities
        if (config.entity && !config.entities?.length) {
            const { entity: entity, ...rest } = config;
            this._dispatchConfigChangedEvent({
                ...rest,
                entities: [
                    config.entity
                ]
            });
        }
    }
    _valueChanged(ev) {
        ev.stopPropagation();
        this._dispatchConfigChangedEvent(ev.detail.value);
    }
    _dispatchConfigChangedEvent(newConfig) {
        const event = new Event("config-changed", {
            bubbles: true,
            composed: true
        });
        event.detail = {
            config: newConfig
        };
        this.dispatchEvent(event);
    }
    render() {
        const lang = (0, $gjUL4.getLanguage)();
        const _ = (0, $gjUL4.translateTo)(lang);
        return (0, $j0ZcV.html)`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${this._schema || []}
        .computeLabel=${(item, data)=>_(`editor_${item.name}`) || item.label || item.name}
        @value-changed=${this._valueChanged}>
      </ha-form>
    `;
    }
    constructor(...args){
        super(...args);
        this.getSchema = (_)=>{
            const haveMultipleEntities = this._config?.entities?.length > 1;
            return [
                {
                    name: "title",
                    selector: {
                        text: {}
                    }
                },
                // { name: "language", selector: { select: { mode: 'dropdown', options: languages } } },
                {
                    name: "",
                    type: "expandable",
                    icon: "mdi:database",
                    title: _("editor_entities"),
                    schema: [
                        {
                            name: "show_entity_name",
                            type: "boolean",
                            disabled: haveMultipleEntities
                        },
                        {
                            name: "entities",
                            selector: {
                                entity: {
                                    multiple: true,
                                    filter: [
                                        {
                                            domain: "sensor",
                                            integration: "hasl3"
                                        },
                                        {
                                            domain: "sensor",
                                            integration: "london_tfl"
                                        }
                                    ]
                                }
                            }
                        }
                    ]
                },
                {
                    name: "",
                    type: "expandable",
                    icon: "mdi:clock",
                    title: _("editor_departures"),
                    schema: [
                        {
                            name: "show_departures",
                            type: "boolean"
                        },
                        {
                            name: "show_header",
                            type: "boolean"
                        },
                        {
                            name: "direction",
                            selector: {
                                select: {
                                    options: [
                                        {
                                            value: 0,
                                            label: _(`editor_direction_all`)
                                        },
                                        {
                                            value: 1,
                                            label: _(`editor_direction_left`)
                                        },
                                        {
                                            value: 2,
                                            label: _(`editor_direction_right`)
                                        }
                                    ]
                                }
                            }
                        },
                        {
                            name: "show_icon",
                            type: "boolean"
                        },
                        {
                            name: "show_time_always",
                            type: "boolean"
                        },
                        {
                            name: "max_departures",
                            selector: {
                                number: {
                                    mode: "box",
                                    min: 1,
                                    max: 10
                                }
                            }
                        },
                        {
                            name: "",
                            type: "grid",
                            schema: [
                                {
                                    name: "hide_departed",
                                    type: "boolean"
                                },
                                {
                                    name: "show_departed_offeset",
                                    selector: {
                                        number: {
                                            mode: "box",
                                            min: 0,
                                            max: 30
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "show_updated",
                    type: "boolean",
                    disabled: haveMultipleEntities
                }
            ];
        };
    }
}
(0, $8HQfp._)([
    (0, $1ZxoT.property)({
        attribute: false
    })
], $91eb62869907e39c$export$8d2c87e174389bfd.prototype, "hass", void 0);
(0, $8HQfp._)([
    (0, $1ZxoT.state)()
], $91eb62869907e39c$export$8d2c87e174389bfd.prototype, "_config", void 0);
(0, $8HQfp._)([
    (0, $1ZxoT.state)()
], $91eb62869907e39c$export$8d2c87e174389bfd.prototype, "_schema", void 0);
$91eb62869907e39c$export$8d2c87e174389bfd = (0, $8HQfp._)([
    (0, $1ZxoT.customElement)("hasl4-departure-card-editor")
], $91eb62869907e39c$export$8d2c87e174389bfd);

});


//# sourceMappingURL=hasl4-departure-card-editor.js.map
