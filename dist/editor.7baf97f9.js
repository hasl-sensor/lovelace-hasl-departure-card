
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire55a1"];
var parcelRegister = parcelRequire.register;
parcelRegister("jlj1D", function(module, exports) {

$parcel$export(module.exports, "HASLDepartureCardEditor", () => $91eb62869907e39c$export$8d2c87e174389bfd);

var $39J5i = parcelRequire("39J5i");

var $krgxk = parcelRequire("krgxk");

var $j0ZcV = parcelRequire("j0ZcV");

var $1ZxoT = parcelRequire("1ZxoT");

var $gjUL4 = parcelRequire("gjUL4");
class $91eb62869907e39c$export$8d2c87e174389bfd extends (0, $j0ZcV.LitElement) {
    static{
        this.styles = (0, $j0ZcV.css)`
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
      border-radius: 8px;
    }

    .subsection {
      background: var(--primary-background-color);
    }
  `;
    }
    setConfig(config) {
        this._config = config;
    }
    render() {
        const lang = (0, $gjUL4.getLanguage)();
        const _ = (0, $gjUL4.translateTo)(lang);
        const departureConfigs = (enabled = true)=>{
            const disabled = !enabled;
            return (0, $j0ZcV.html)`
        <div class="header">
          <ha-formfield .label=${_(`editor_show_departures`)}>
            <ha-switch .checked=${this._config?.show_departures} @change=${this.checkboxHandler} .configValue=${`show_departures`}/>
          </ha-formfield>
        </div>
        <ha-formfield .label=${_(`editor_show_departure_header`)}>
          <ha-switch .disabled=${disabled} .checked=${this._config?.show_header} @change=${this.checkboxHandler} .configValue=${`show_header`}/>
        </ha-formfield>
        <ha-formfield .label=${_(`editor_show_transport_icon`)}>
          <ha-switch .disabled=${disabled} .checked=${this._config?.show_icon} @change=${this.checkboxHandler} .configValue=${`show_icon`}/>
        </ha-formfield>
        <ha-textfield
          type="number"
          inputmode="numeric"
          min="1"
          max="10"
          .disabled=${disabled}
          .label=${_(`editor_max_departures`)}
          .value=${this._config?.max_departures}
          .configValue=${`max_departures`}
          @change=${this.numHandler}>
        </ha-textfield>
        <ha-formfield .label=${_(`editor_hide_departed`)}>
          <ha-switch .disabled=${disabled} .checked=${this._config?.hide_departed} @change=${this.checkboxHandler} .configValue=${`hide_departed`}/>
        </ha-formfield>
        <ha-textfield
          type="number"
          inputmode="numeric"
          min="0"
          max="30"
          .disabled=${disabled || !!!this._config?.hide_departed}
          .label=${_(`editor_show_departed_offeset`)}
          .value=${this._config?.show_departed_offeset}
          .configValue=${`show_departed_offeset`}
          @change=${this.numHandler}>
        </ha-textfield>
        <ha-formfield .label=${_(`editor_show_time_always`)}>
          <ha-switch .disabled=${disabled} .checked=${this._config?.show_time_always} @change=${this.checkboxHandler} .configValue=${`show_time_always`}/>
        </ha-formfield>
        <ha-formfield .label=${_(`editor_adjust_departure_time`)}>
          <ha-switch
            .checked=${this._config?.adjust_departure_time}
            .disabled=${disabled || this._config?.show_time_always}
            .configValue=${`adjust_departure_time`}
            @change=${this.checkboxHandler}/>
        </ha-formfield>
        <ha-formfield .label=${_(`editor_show_updated`)}>
          <ha-switch .disabled=${disabled} .checked=${this._config?.show_updated} @change=${this.checkboxHandler} .configValue=${`show_updated`}/>
        </ha-formfield>
      `;
        };
        return (0, $j0ZcV.html)`
      <div class="section-flex">
        <ha-selector
          .hass=${this.hass}
          .required=${false}
          .label=${_(`language`)}
          .selector=${{
            select: {
                mode: "dropdown",
                options: (0, $gjUL4.languages)
            }
        }}
          .value=${this._config?.language}
          .configValue=${"language"}
          @value-changed=${this.pickerHandler}>
        </ha-selector>
      </div>
      <div class="section-flex">
        <ha-selector
          .hass=${this.hass}
          .selector=${{
            entity: {
                multiple: true,
                filter: {
                    domain: "sensor",
                    integration: "hasl3"
                }
            }
        }}
          .value=${this._config?.entities}
          .configValue=${"entities"}
          @value-changed=${this.pickerHandler}>
        </ha-selector>
      </div>
      <div class="section-flex mt1">
        <ha-formfield .label=${_(`editor_show_name`)}>
          <ha-switch .checked=${this._config?.show_name} @change=${this.checkboxHandler} .configValue=${`show_name`}/>
        </ha-formfield>
        <ha-textfield
          .label=${_(`editor_card_name`)}
          .value=${this._config?.name}
          .configValue=${`name`}
          .disabled=${!!!this._config?.show_name}
          @change=${this.textHandler}>
        </ha-textfield>
        <ha-formfield .label=${_(`editor_show_entity_name`)}>
          <ha-switch .checked=${this._config?.show_entity_name} @change=${this.checkboxHandler} .configValue=${`show_entity_name`}/>
        </ha-formfield>
        <div class="section-flex subsection">
          ${departureConfigs(this._config?.show_departures)}
        </div>
      </div>
      `;
    }
    sortObjectByKeys(object) {
        return Object.keys(object).sort().reduce((r, k)=>(r[k] = object[k], r), {});
    }
    inputChangedHandler(_type) {
        const handler = (ev)=>{
            if (!this._config || !this.hass) return;
            const newConfig = _type(ev);
            if (newConfig !== undefined) {
                this._config = {
                    ...newConfig
                };
                (0, $krgxk.fireEvent)(this, "config-changed", {
                    config: this.sortObjectByKeys(this._config)
                });
            }
        };
        return handler;
    }
    constructor(...args){
        super(...args);
        this.checkboxHandler = this.inputChangedHandler((ev)=>{
            const { target: target, target: { checked: value } } = ev;
            if (target.configValue) return {
                ...this._config,
                [target.configValue]: value
            };
        });
        this.textHandler = this.inputChangedHandler((ev)=>{
            const { target: target, target: { value: value } } = ev;
            if (target.configValue) return {
                ...this._config,
                [target.configValue]: value
            };
        });
        this.numHandler = this.inputChangedHandler((ev)=>{
            const { target: target, target: { value: value } } = ev;
            if (target.configValue) return {
                ...this._config,
                [target.configValue]: parseInt(value)
            };
        });
        this.pickerHandler = this.inputChangedHandler((ev)=>{
            const target = ev.target;
            const value = ev.detail.value;
            if (target.configValue) {
                if (value) return {
                    ...this._config,
                    [target.configValue]: value
                };
                else {
                    const newConfig = {
                        ...this._config
                    };
                    delete newConfig[target.configValue];
                    return newConfig;
                }
            }
        });
    }
}
(0, $39J5i.__decorate)([
    (0, $1ZxoT.property)({
        attribute: false
    })
], $91eb62869907e39c$export$8d2c87e174389bfd.prototype, "hass", void 0);
(0, $39J5i.__decorate)([
    (0, $1ZxoT.state)()
], $91eb62869907e39c$export$8d2c87e174389bfd.prototype, "_config", void 0);
$91eb62869907e39c$export$8d2c87e174389bfd = (0, $39J5i.__decorate)([
    (0, $1ZxoT.customElement)("hasl4-departure-card-editor")
], $91eb62869907e39c$export$8d2c87e174389bfd);

});
parcelRegister("krgxk", function(module, exports) {

$parcel$export(module.exports, "fireEvent", () => $ee1328194d522913$export$43835e9acf248a15);

var $bMFcC = parcelRequire("bMFcC");
var $ee1328194d522913$export$27bce688931fdfcc, $ee1328194d522913$export$7fd1ce15b01d50ca, $ee1328194d522913$export$1a0dc7c974e8444d = function(e, t) {
    return $ee1328194d522913$var$i(t).format(e);
}, $ee1328194d522913$var$i = function(e) {
    return new Intl.DateTimeFormat(e.language, {
        weekday: "long",
        month: "long",
        day: "numeric"
    });
}, $ee1328194d522913$export$3ae94a2503e890a1 = function(e, t) {
    return $ee1328194d522913$var$o(t).format(e);
}, $ee1328194d522913$var$o = function(e) {
    return new Intl.DateTimeFormat(e.language, {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
}, $ee1328194d522913$export$fbb9ef859002af37 = function(e, t) {
    return $ee1328194d522913$var$c(t).format(e);
}, $ee1328194d522913$var$c = function(e) {
    return new Intl.DateTimeFormat(e.language, {
        year: "numeric",
        month: "numeric",
        day: "numeric"
    });
}, $ee1328194d522913$export$7813392c1f00426f = function(e, t) {
    return $ee1328194d522913$var$s(t).format(e);
}, $ee1328194d522913$var$s = function(e) {
    return new Intl.DateTimeFormat(e.language, {
        day: "numeric",
        month: "short"
    });
}, $ee1328194d522913$export$295e1e57d6713bf4 = function(e, t) {
    return $ee1328194d522913$var$d(t).format(e);
}, $ee1328194d522913$var$d = function(e) {
    return new Intl.DateTimeFormat(e.language, {
        month: "long",
        year: "numeric"
    });
}, $ee1328194d522913$export$cbc7ca92d37b9650 = function(e, t) {
    return $ee1328194d522913$var$g(t).format(e);
}, $ee1328194d522913$var$g = function(e) {
    return new Intl.DateTimeFormat(e.language, {
        month: "long"
    });
}, $ee1328194d522913$export$5a252a405018366 = function(e, t) {
    return $ee1328194d522913$var$h(t).format(e);
}, $ee1328194d522913$var$h = function(e) {
    return new Intl.DateTimeFormat(e.language, {
        year: "numeric"
    });
};
!function(e) {
    e.language = "language", e.system = "system", e.comma_decimal = "comma_decimal", e.decimal_comma = "decimal_comma", e.space_comma = "space_comma", e.none = "none";
}($ee1328194d522913$export$27bce688931fdfcc || ($ee1328194d522913$export$27bce688931fdfcc = {})), function(e) {
    e.language = "language", e.system = "system", e.am_pm = "12", e.twenty_four = "24";
}($ee1328194d522913$export$7fd1ce15b01d50ca || ($ee1328194d522913$export$7fd1ce15b01d50ca = {}));
var $ee1328194d522913$var$b = function(e) {
    if (e.time_format === $ee1328194d522913$export$7fd1ce15b01d50ca.language || e.time_format === $ee1328194d522913$export$7fd1ce15b01d50ca.system) {
        var t = e.time_format === $ee1328194d522913$export$7fd1ce15b01d50ca.language ? e.language : void 0, n = (new Date).toLocaleString(t);
        return n.includes("AM") || n.includes("PM");
    }
    return e.time_format === $ee1328194d522913$export$7fd1ce15b01d50ca.am_pm;
}, $ee1328194d522913$export$8b492ed8828f789c = function(e, t) {
    return $ee1328194d522913$var$_(t).format(e);
}, $ee1328194d522913$var$_ = function(e) {
    return new Intl.DateTimeFormat(e.language, {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: $ee1328194d522913$var$b(e) ? "numeric" : "2-digit",
        minute: "2-digit",
        hour12: $ee1328194d522913$var$b(e)
    });
}, $ee1328194d522913$export$c2c7ff0067c06a13 = function(e, t) {
    return $ee1328194d522913$var$w(t).format(e);
}, $ee1328194d522913$var$w = function(e) {
    return new Intl.DateTimeFormat(e.language, {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: $ee1328194d522913$var$b(e) ? "numeric" : "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: $ee1328194d522913$var$b(e)
    });
}, $ee1328194d522913$export$c8a72f22956ccab0 = function(e, t) {
    return $ee1328194d522913$var$x(t).format(e);
}, $ee1328194d522913$var$x = function(e) {
    return new Intl.DateTimeFormat(e.language, {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: $ee1328194d522913$var$b(e)
    });
}, $ee1328194d522913$export$3203edd9e5edd663 = function(e, t) {
    return $ee1328194d522913$var$S(t).format(e);
}, $ee1328194d522913$var$S = function(e) {
    return new Intl.DateTimeFormat(e.language, {
        hour: "numeric",
        minute: "2-digit",
        hour12: $ee1328194d522913$var$b(e)
    });
}, $ee1328194d522913$export$ec86e83f20e68cd8 = function(e, t) {
    return $ee1328194d522913$var$T(t).format(e);
}, $ee1328194d522913$var$T = function(e) {
    return new Intl.DateTimeFormat(e.language, {
        hour: $ee1328194d522913$var$b(e) ? "numeric" : "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: $ee1328194d522913$var$b(e)
    });
}, $ee1328194d522913$export$ad627f6ad084f5a2 = function(e, t) {
    return $ee1328194d522913$var$N(t).format(e);
}, $ee1328194d522913$var$N = function(e) {
    return new Intl.DateTimeFormat(e.language, {
        hour: $ee1328194d522913$var$b(e) ? "numeric" : "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: $ee1328194d522913$var$b(e)
    });
}, $ee1328194d522913$export$caddcc104251c1d7 = function(t, r, n, i) {
    void 0 === i && (i = !0);
    var a = (0, $bMFcC.selectUnit)(t, n);
    return i ? (function(e) {
        return new Intl.RelativeTimeFormat(e.language, {
            numeric: "auto"
        });
    })(r).format(a.value, a.unit) : Intl.NumberFormat(r.language, {
        style: "unit",
        unit: a.unit,
        unitDisplay: "long"
    }).format(Math.abs(a.value));
};
function $ee1328194d522913$export$50fe296bd2427aef(e) {
    var t, r = 3600 * (t = e.attributes.remaining.split(":").map(Number))[0] + 60 * t[1] + t[2];
    if ("active" === e.state) {
        var n = (new Date).getTime(), i = new Date(e.last_changed).getTime();
        r = Math.max(r - (n - i) / 1e3, 0);
    }
    return r;
}
function $ee1328194d522913$var$O() {
    return ($ee1328194d522913$var$O = Object.assign || function(e) {
        for(var t = 1; t < arguments.length; t++){
            var r = arguments[t];
            for(var n in r)Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
    }).apply(this, arguments);
}
var $ee1328194d522913$export$2a5af2efac2f8dc = function(e, t, r, n) {
    void 0 === n && (n = !1), e._themes || (e._themes = {});
    var i = t.default_theme;
    ("default" === r || r && t.themes[r]) && (i = r);
    var a = $ee1328194d522913$var$O({}, e._themes);
    if ("default" !== i) {
        var o = t.themes[i];
        Object.keys(o).forEach(function(t) {
            var r = "--" + t;
            e._themes[r] = "", a[r] = o[t];
        });
    }
    if (e.updateStyles ? e.updateStyles(a) : window.ShadyCSS && window.ShadyCSS.styleSubtree(e, a), n) {
        var u = document.querySelector("meta[name=theme-color]");
        if (u) {
            u.hasAttribute("default-content") || u.setAttribute("default-content", u.getAttribute("content"));
            var c = a["--primary-color"] || u.getAttribute("default-content");
            u.setAttribute("content", c);
        }
    }
}, $ee1328194d522913$export$67835a66b9f6da52 = function(e) {
    return "function" == typeof e.getCardSize ? e.getCardSize() : 4;
};
function $ee1328194d522913$export$2044bdc9670769ab(e) {
    return e.substr(0, e.indexOf("."));
}
function $ee1328194d522913$export$4c7757901b2ff860(e) {
    return e.substr(e.indexOf(".") + 1);
}
function $ee1328194d522913$export$5cacf63e4bbfecae(e) {
    var t, r = (null == e || null == (t = e.locale) ? void 0 : t.language) || "en";
    return e.translationMetadata.translations[r] && e.translationMetadata.translations[r].isRTL || !1;
}
function $ee1328194d522913$export$703829fe2802931b(e) {
    return $ee1328194d522913$export$5cacf63e4bbfecae(e) ? "rtl" : "ltr";
}
function $ee1328194d522913$export$5b7b50e8043fabe(e) {
    return $ee1328194d522913$export$2044bdc9670769ab(e.entity_id);
}
var $ee1328194d522913$export$88bfc1035e667f37 = function(e) {
    return !!e.attributes.unit_of_measurement || !!e.attributes.state_class;
}, $ee1328194d522913$export$5e25e39d6a8c0c11 = function(e) {
    switch(e.number_format){
        case $ee1328194d522913$export$27bce688931fdfcc.comma_decimal:
            return [
                "en-US",
                "en"
            ];
        case $ee1328194d522913$export$27bce688931fdfcc.decimal_comma:
            return [
                "de",
                "es",
                "it"
            ];
        case $ee1328194d522913$export$27bce688931fdfcc.space_comma:
            return [
                "fr",
                "sv",
                "cs"
            ];
        case $ee1328194d522913$export$27bce688931fdfcc.system:
            return;
        default:
            return e.language;
    }
}, $ee1328194d522913$export$2077e0241d6afd3c = function(e, t) {
    return void 0 === t && (t = 2), Math.round(e * Math.pow(10, t)) / Math.pow(10, t);
}, $ee1328194d522913$export$f5dd818bff069720 = function(e, r, n) {
    var i = r ? $ee1328194d522913$export$5e25e39d6a8c0c11(r) : void 0;
    if (Number.isNaN = Number.isNaN || function e(t) {
        return "number" == typeof t && e(t);
    }, (null == r ? void 0 : r.number_format) !== $ee1328194d522913$export$27bce688931fdfcc.none && !Number.isNaN(Number(e)) && Intl) try {
        return new Intl.NumberFormat(i, $ee1328194d522913$var$V(e, n)).format(Number(e));
    } catch (t) {
        return console.error(t), new Intl.NumberFormat(void 0, $ee1328194d522913$var$V(e, n)).format(Number(e));
    }
    return "string" == typeof e ? e : $ee1328194d522913$export$2077e0241d6afd3c(e, null == n ? void 0 : n.maximumFractionDigits).toString() + ("currency" === (null == n ? void 0 : n.style) ? " " + n.currency : "");
}, $ee1328194d522913$var$V = function(e, t) {
    var r = $ee1328194d522913$var$O({
        maximumFractionDigits: 2
    }, t);
    if ("string" != typeof e) return r;
    if (!t || !t.minimumFractionDigits && !t.maximumFractionDigits) {
        var n = e.indexOf(".") > -1 ? e.split(".")[1].length : 0;
        r.minimumFractionDigits = n, r.maximumFractionDigits = n;
    }
    return r;
}, $ee1328194d522913$export$278f9ea9192cff94 = function(e, t, r, n) {
    var i = void 0 !== n ? n : t.state;
    if ("unknown" === i || "unavailable" === i) return e("state.default." + i);
    if ($ee1328194d522913$export$88bfc1035e667f37(t)) {
        if ("monetary" === t.attributes.device_class) try {
            return $ee1328194d522913$export$f5dd818bff069720(i, r, {
                style: "currency",
                currency: t.attributes.unit_of_measurement
            });
        } catch (e) {}
        return $ee1328194d522913$export$f5dd818bff069720(i, r) + (t.attributes.unit_of_measurement ? " " + t.attributes.unit_of_measurement : "");
    }
    var o = $ee1328194d522913$export$5b7b50e8043fabe(t);
    if ("input_datetime" === o) {
        var u;
        if (void 0 === n) return t.attributes.has_date && t.attributes.has_time ? (u = new Date(t.attributes.year, t.attributes.month - 1, t.attributes.day, t.attributes.hour, t.attributes.minute), $ee1328194d522913$export$8b492ed8828f789c(u, r)) : t.attributes.has_date ? (u = new Date(t.attributes.year, t.attributes.month - 1, t.attributes.day), $ee1328194d522913$export$3ae94a2503e890a1(u, r)) : t.attributes.has_time ? ((u = new Date).setHours(t.attributes.hour, t.attributes.minute), $ee1328194d522913$export$3203edd9e5edd663(u, r)) : t.state;
        try {
            var c = n.split(" ");
            if (2 === c.length) return $ee1328194d522913$export$8b492ed8828f789c(new Date(c.join("T")), r);
            if (1 === c.length) {
                if (n.includes("-")) return $ee1328194d522913$export$3ae94a2503e890a1(new Date(n + "T00:00"), r);
                if (n.includes(":")) {
                    var m = new Date;
                    return $ee1328194d522913$export$3203edd9e5edd663(new Date(m.toISOString().split("T")[0] + "T" + n), r);
                }
            }
            return n;
        } catch (e) {
            return n;
        }
    }
    return "humidifier" === o && "on" === i && t.attributes.humidity ? t.attributes.humidity + " %" : "counter" === o || "number" === o || "input_number" === o ? $ee1328194d522913$export$f5dd818bff069720(i, r) : t.attributes.device_class && e("component." + o + ".state." + t.attributes.device_class + "." + i) || e("component." + o + ".state._." + i) || i;
}, $ee1328194d522913$export$25978a5d5a562f09 = "mdi:bookmark", $ee1328194d522913$export$f78a3169a0f9f31b = "lovelace", $ee1328194d522913$export$6df9924792233bc = [
    "climate",
    "cover",
    "configurator",
    "input_select",
    "input_number",
    "input_text",
    "lock",
    "media_player",
    "scene",
    "script",
    "timer",
    "vacuum",
    "water_heater",
    "weblink"
], $ee1328194d522913$export$b9a2b37e93bb73f2 = [
    "alarm_control_panel",
    "automation",
    "camera",
    "climate",
    "configurator",
    "cover",
    "fan",
    "group",
    "history_graph",
    "input_datetime",
    "light",
    "lock",
    "media_player",
    "script",
    "sun",
    "updater",
    "vacuum",
    "water_heater",
    "weather"
], $ee1328194d522913$export$ca927753507128f6 = [
    "input_number",
    "input_select",
    "input_text",
    "scene",
    "weblink"
], $ee1328194d522913$export$60e836dfbaf943c5 = [
    "camera",
    "configurator",
    "history_graph",
    "scene"
], $ee1328194d522913$export$23bace2b7923e5d1 = [
    "closed",
    "locked",
    "off"
], $ee1328194d522913$export$1b64f44bed0feb66 = new Set([
    "fan",
    "input_boolean",
    "light",
    "switch",
    "group",
    "automation"
]), $ee1328194d522913$export$3ed39d80c7b24b62 = "\xb0C", $ee1328194d522913$export$5c7f540eb0eef6a6 = "\xb0F", $ee1328194d522913$export$2c7beb20637e0bd1 = "group.default_view", $ee1328194d522913$export$43835e9acf248a15 = function(e, t, r, n) {
    n = n || {}, r = null == r ? {} : r;
    var i = new Event(t, {
        bubbles: void 0 === n.bubbles || n.bubbles,
        cancelable: Boolean(n.cancelable),
        composed: void 0 === n.composed || n.composed
    });
    return i.detail = r, e.dispatchEvent(i), i;
}, $ee1328194d522913$var$ie = new Set([
    "call-service",
    "divider",
    "section",
    "weblink",
    "cast",
    "select"
]), $ee1328194d522913$var$ae = {
    alert: "toggle",
    automation: "toggle",
    climate: "climate",
    cover: "cover",
    fan: "toggle",
    group: "group",
    input_boolean: "toggle",
    input_number: "input-number",
    input_select: "input-select",
    input_text: "input-text",
    light: "toggle",
    lock: "lock",
    media_player: "media-player",
    remote: "toggle",
    scene: "scene",
    script: "script",
    sensor: "sensor",
    timer: "timer",
    switch: "toggle",
    vacuum: "toggle",
    water_heater: "climate",
    input_datetime: "input-datetime"
}, $ee1328194d522913$export$5ad555b55cd85e0c = function(e, t) {
    void 0 === t && (t = !1);
    var r = function(e, t) {
        return n("hui-error-card", {
            type: "error",
            error: e,
            config: t
        });
    }, n = function(e, t) {
        var n = window.document.createElement(e);
        try {
            if (!n.setConfig) return;
            n.setConfig(t);
        } catch (n) {
            return console.error(e, n), r(n.message, t);
        }
        return n;
    };
    if (!e || "object" != typeof e || !t && !e.type) return r("No type defined", e);
    var i = e.type;
    if (i && i.startsWith("custom:")) i = i.substr(7);
    else if (t) {
        if ($ee1328194d522913$var$ie.has(i)) i = "hui-" + i + "-row";
        else {
            if (!e.entity) return r("Invalid config given.", e);
            var a = e.entity.split(".", 1)[0];
            i = "hui-" + ($ee1328194d522913$var$ae[a] || "text") + "-entity-row";
        }
    } else i = "hui-" + i + "-card";
    if (customElements.get(i)) return n(i, e);
    var o = r("Custom element doesn't exist: " + e.type + ".", e);
    o.style.display = "None";
    var u = setTimeout(function() {
        o.style.display = "";
    }, 2e3);
    return customElements.whenDefined(e.type).then(function() {
        clearTimeout(u), $ee1328194d522913$export$43835e9acf248a15(o, "ll-rebuild", {}, o);
    }), o;
}, $ee1328194d522913$export$61fc7d43ac8f84b0 = function(e, t, r) {
    var n;
    return void 0 === r && (r = !1), function() {
        var i = [].slice.call(arguments), a = this, o = function() {
            n = null, r || e.apply(a, i);
        }, u = r && !n;
        clearTimeout(n), n = setTimeout(o, t), u && e.apply(a, i);
    };
}, $ee1328194d522913$export$a76407ec79ca4ea3 = {
    alert: "mdi:alert",
    automation: "mdi:playlist-play",
    calendar: "mdi:calendar",
    camera: "mdi:video",
    climate: "mdi:thermostat",
    configurator: "mdi:settings",
    conversation: "mdi:text-to-speech",
    device_tracker: "mdi:account",
    fan: "mdi:fan",
    group: "mdi:google-circles-communities",
    history_graph: "mdi:chart-line",
    homeassistant: "mdi:home-assistant",
    homekit: "mdi:home-automation",
    image_processing: "mdi:image-filter-frames",
    input_boolean: "mdi:drawing",
    input_datetime: "mdi:calendar-clock",
    input_number: "mdi:ray-vertex",
    input_select: "mdi:format-list-bulleted",
    input_text: "mdi:textbox",
    light: "mdi:lightbulb",
    mailbox: "mdi:mailbox",
    notify: "mdi:comment-alert",
    person: "mdi:account",
    plant: "mdi:flower",
    proximity: "mdi:apple-safari",
    remote: "mdi:remote",
    scene: "mdi:google-pages",
    script: "mdi:file-document",
    sensor: "mdi:eye",
    simple_alarm: "mdi:bell",
    sun: "mdi:white-balance-sunny",
    switch: "mdi:flash",
    timer: "mdi:timer",
    updater: "mdi:cloud-upload",
    vacuum: "mdi:robot-vacuum",
    water_heater: "mdi:thermometer",
    weblink: "mdi:open-in-new"
};
function $ee1328194d522913$export$13fcd5035aa1446(e, t) {
    if (e in $ee1328194d522913$export$a76407ec79ca4ea3) return $ee1328194d522913$export$a76407ec79ca4ea3[e];
    switch(e){
        case "alarm_control_panel":
            switch(t){
                case "armed_home":
                    return "mdi:bell-plus";
                case "armed_night":
                    return "mdi:bell-sleep";
                case "disarmed":
                    return "mdi:bell-outline";
                case "triggered":
                    return "mdi:bell-ring";
                default:
                    return "mdi:bell";
            }
        case "binary_sensor":
            return t && "off" === t ? "mdi:radiobox-blank" : "mdi:checkbox-marked-circle";
        case "cover":
            return "closed" === t ? "mdi:window-closed" : "mdi:window-open";
        case "lock":
            return t && "unlocked" === t ? "mdi:lock-open" : "mdi:lock";
        case "media_player":
            return t && "off" !== t && "idle" !== t ? "mdi:cast-connected" : "mdi:cast";
        case "zwave":
            switch(t){
                case "dead":
                    return "mdi:emoticon-dead";
                case "sleeping":
                    return "mdi:sleep";
                case "initializing":
                    return "mdi:timer-sand";
                default:
                    return "mdi:z-wave";
            }
        default:
            return console.warn("Unable to find icon for domain " + e + " (" + t + ")"), "mdi:bookmark";
    }
}
var $ee1328194d522913$export$e2b36fa5c60547b2 = function(e, t) {
    var r = t.value || t, n = t.attribute ? e.attributes[t.attribute] : e.state;
    switch(t.operator || "=="){
        case "==":
            return n === r;
        case "<=":
            return n <= r;
        case "<":
            return n < r;
        case ">=":
            return n >= r;
        case ">":
            return n > r;
        case "!=":
            return n !== r;
        case "regex":
            return n.match(r);
        default:
            return !1;
    }
}, $ee1328194d522913$export$8bcf112cf396c716 = function(e) {
    $ee1328194d522913$export$43835e9acf248a15(window, "haptic", e);
}, $ee1328194d522913$export$ff7962acd6052c28 = function(e, t, r) {
    void 0 === r && (r = !1), r ? history.replaceState(null, "", t) : history.pushState(null, "", t), $ee1328194d522913$export$43835e9acf248a15(window, "location-changed", {
        replace: r
    });
}, $ee1328194d522913$export$3303cc16da6bc061 = function(e, t, r) {
    void 0 === r && (r = !0);
    var n, i = $ee1328194d522913$export$2044bdc9670769ab(t), a = "group" === i ? "homeassistant" : i;
    switch(i){
        case "lock":
            n = r ? "unlock" : "lock";
            break;
        case "cover":
            n = r ? "open_cover" : "close_cover";
            break;
        default:
            n = r ? "turn_on" : "turn_off";
    }
    return e.callService(a, n, {
        entity_id: t
    });
}, $ee1328194d522913$export$4f6896672dcf12b1 = function(e, t) {
    var r = $ee1328194d522913$export$23bace2b7923e5d1.includes(e.states[t].state);
    return $ee1328194d522913$export$3303cc16da6bc061(e, t, r);
}, $ee1328194d522913$export$fe63bc0ae3396800 = function(e, t, r, n) {
    if (n || (n = {
        action: "more-info"
    }), !n.confirmation || n.confirmation.exemptions && n.confirmation.exemptions.some(function(e) {
        return e.user === t.user.id;
    }) || ($ee1328194d522913$export$8bcf112cf396c716("warning"), confirm(n.confirmation.text || "Are you sure you want to " + n.action + "?"))) switch(n.action){
        case "more-info":
            (r.entity || r.camera_image) && $ee1328194d522913$export$43835e9acf248a15(e, "hass-more-info", {
                entityId: r.entity ? r.entity : r.camera_image
            });
            break;
        case "navigate":
            n.navigation_path && $ee1328194d522913$export$ff7962acd6052c28(0, n.navigation_path);
            break;
        case "url":
            n.url_path && window.open(n.url_path);
            break;
        case "toggle":
            r.entity && ($ee1328194d522913$export$4f6896672dcf12b1(t, r.entity), $ee1328194d522913$export$8bcf112cf396c716("success"));
            break;
        case "call-service":
            if (!n.service) return void $ee1328194d522913$export$8bcf112cf396c716("failure");
            var i = n.service.split(".", 2);
            t.callService(i[0], i[1], n.service_data, n.target), $ee1328194d522913$export$8bcf112cf396c716("success");
            break;
        case "fire-dom-event":
            $ee1328194d522913$export$43835e9acf248a15(e, "ll-custom", n);
    }
}, $ee1328194d522913$export$6c6c3f4b7541eaf1 = function(e, t, r, n) {
    var i;
    "double_tap" === n && r.double_tap_action ? i = r.double_tap_action : "hold" === n && r.hold_action ? i = r.hold_action : "tap" === n && r.tap_action && (i = r.tap_action), $ee1328194d522913$export$fe63bc0ae3396800(e, t, r, i);
}, $ee1328194d522913$export$b981489921ee18cd = function(e, t, r, n, i) {
    var a;
    if (i && r.double_tap_action ? a = r.double_tap_action : n && r.hold_action ? a = r.hold_action : !n && r.tap_action && (a = r.tap_action), a || (a = {
        action: "more-info"
    }), !a.confirmation || a.confirmation.exemptions && a.confirmation.exemptions.some(function(e) {
        return e.user === t.user.id;
    }) || confirm(a.confirmation.text || "Are you sure you want to " + a.action + "?")) switch(a.action){
        case "more-info":
            (a.entity || r.entity || r.camera_image) && ($ee1328194d522913$export$43835e9acf248a15(e, "hass-more-info", {
                entityId: a.entity ? a.entity : r.entity ? r.entity : r.camera_image
            }), a.haptic && $ee1328194d522913$export$8bcf112cf396c716(a.haptic));
            break;
        case "navigate":
            a.navigation_path && ($ee1328194d522913$export$ff7962acd6052c28(0, a.navigation_path), a.haptic && $ee1328194d522913$export$8bcf112cf396c716(a.haptic));
            break;
        case "url":
            a.url_path && window.open(a.url_path), a.haptic && $ee1328194d522913$export$8bcf112cf396c716(a.haptic);
            break;
        case "toggle":
            r.entity && ($ee1328194d522913$export$4f6896672dcf12b1(t, r.entity), a.haptic && $ee1328194d522913$export$8bcf112cf396c716(a.haptic));
            break;
        case "call-service":
            if (!a.service) return;
            var o = a.service.split(".", 2), u = o[0], c = o[1], m = $ee1328194d522913$var$O({}, a.service_data);
            "entity" === m.entity_id && (m.entity_id = r.entity), t.callService(u, c, m, a.target), a.haptic && $ee1328194d522913$export$8bcf112cf396c716(a.haptic);
            break;
        case "fire-dom-event":
            $ee1328194d522913$export$43835e9acf248a15(e, "ll-custom", a), a.haptic && $ee1328194d522913$export$8bcf112cf396c716(a.haptic);
    }
};
function $ee1328194d522913$export$e217e69099d082f5(e) {
    return void 0 !== e && "none" !== e.action;
}
function $ee1328194d522913$export$695b4dbcc1028091(e, t, r) {
    if (t.has("config") || r) return !0;
    if (e.config.entity) {
        var n = t.get("hass");
        return !n || n.states[e.config.entity] !== e.hass.states[e.config.entity];
    }
    return !1;
}
function $ee1328194d522913$export$72d503079d05a3cf(e) {
    return void 0 !== e && "none" !== e.action;
}
var $ee1328194d522913$export$8d080c28108db9dd = function(e, t, r) {
    void 0 === r && (r = !0);
    var n = {};
    t.forEach(function(t) {
        if ($ee1328194d522913$export$23bace2b7923e5d1.includes(e.states[t].state) === r) {
            var i = $ee1328194d522913$export$2044bdc9670769ab(t), a = [
                "cover",
                "lock"
            ].includes(i) ? i : "homeassistant";
            a in n || (n[a] = []), n[a].push(t);
        }
    }), Object.keys(n).forEach(function(t) {
        var i;
        switch(t){
            case "lock":
                i = r ? "unlock" : "lock";
                break;
            case "cover":
                i = r ? "open_cover" : "close_cover";
                break;
            default:
                i = r ? "turn_on" : "turn_off";
        }
        e.callService(t, i, {
            entity_id: n[t]
        });
    });
}, $ee1328194d522913$export$b5e56594b0d6a61e = function() {
    var e = document.querySelector("home-assistant");
    if (e = (e = (e = (e = (e = (e = (e = (e = e && e.shadowRoot) && e.querySelector("home-assistant-main")) && e.shadowRoot) && e.querySelector("app-drawer-layout partial-panel-resolver")) && e.shadowRoot || e) && e.querySelector("ha-panel-lovelace")) && e.shadowRoot) && e.querySelector("hui-root")) {
        var t = e.lovelace;
        return t.current_view = e.___curView, t;
    }
    return null;
}, $ee1328194d522913$var$xe = {
    humidity: "mdi:water-percent",
    illuminance: "mdi:brightness-5",
    temperature: "mdi:thermometer",
    pressure: "mdi:gauge",
    power: "mdi:flash",
    signal_strength: "mdi:wifi"
}, $ee1328194d522913$var$De = {
    binary_sensor: function(e, t) {
        var r = "off" === e;
        switch(null == t ? void 0 : t.attributes.device_class){
            case "battery":
                return r ? "mdi:battery" : "mdi:battery-outline";
            case "battery_charging":
                return r ? "mdi:battery" : "mdi:battery-charging";
            case "cold":
                return r ? "mdi:thermometer" : "mdi:snowflake";
            case "connectivity":
                return r ? "mdi:server-network-off" : "mdi:server-network";
            case "door":
                return r ? "mdi:door-closed" : "mdi:door-open";
            case "garage_door":
                return r ? "mdi:garage" : "mdi:garage-open";
            case "power":
                return r ? "mdi:power-plug-off" : "mdi:power-plug";
            case "gas":
            case "problem":
            case "safety":
            case "tamper":
                return r ? "mdi:check-circle" : "mdi:alert-circle";
            case "smoke":
                return r ? "mdi:check-circle" : "mdi:smoke";
            case "heat":
                return r ? "mdi:thermometer" : "mdi:fire";
            case "light":
                return r ? "mdi:brightness-5" : "mdi:brightness-7";
            case "lock":
                return r ? "mdi:lock" : "mdi:lock-open";
            case "moisture":
                return r ? "mdi:water-off" : "mdi:water";
            case "motion":
                return r ? "mdi:walk" : "mdi:run";
            case "occupancy":
                return r ? "mdi:home-outline" : "mdi:home";
            case "opening":
                return r ? "mdi:square" : "mdi:square-outline";
            case "plug":
                return r ? "mdi:power-plug-off" : "mdi:power-plug";
            case "presence":
                return r ? "mdi:home-outline" : "mdi:home";
            case "running":
                return r ? "mdi:stop" : "mdi:play";
            case "sound":
                return r ? "mdi:music-note-off" : "mdi:music-note";
            case "update":
                return r ? "mdi:package" : "mdi:package-up";
            case "vibration":
                return r ? "mdi:crop-portrait" : "mdi:vibrate";
            case "window":
                return r ? "mdi:window-closed" : "mdi:window-open";
            default:
                return r ? "mdi:radiobox-blank" : "mdi:checkbox-marked-circle";
        }
    },
    cover: function(e) {
        var t = "closed" !== e.state;
        switch(e.attributes.device_class){
            case "garage":
                return t ? "mdi:garage-open" : "mdi:garage";
            case "door":
                return t ? "mdi:door-open" : "mdi:door-closed";
            case "shutter":
                return t ? "mdi:window-shutter-open" : "mdi:window-shutter";
            case "blind":
                return t ? "mdi:blinds-open" : "mdi:blinds";
            case "window":
                return t ? "mdi:window-open" : "mdi:window-closed";
            default:
                return $ee1328194d522913$export$13fcd5035aa1446("cover", e.state);
        }
    },
    sensor: function(e) {
        var t = e.attributes.device_class;
        if (t && t in $ee1328194d522913$var$xe) return $ee1328194d522913$var$xe[t];
        if ("battery" === t) {
            var r = Number(e.state);
            if (isNaN(r)) return "mdi:battery-unknown";
            var n = 10 * Math.round(r / 10);
            return n >= 100 ? "mdi:battery" : n <= 0 ? "mdi:battery-alert" : "hass:battery-" + n;
        }
        var i = e.attributes.unit_of_measurement;
        return "\xb0C" === i || "\xb0F" === i ? "mdi:thermometer" : $ee1328194d522913$export$13fcd5035aa1446("sensor");
    },
    input_datetime: function(e) {
        return e.attributes.has_date ? e.attributes.has_time ? $ee1328194d522913$export$13fcd5035aa1446("input_datetime") : "mdi:calendar" : "mdi:clock";
    }
}, $ee1328194d522913$export$d138d1363acbec1f = function(e) {
    if (!e) return "mdi:bookmark";
    if (e.attributes.icon) return e.attributes.icon;
    var t = $ee1328194d522913$export$2044bdc9670769ab(e.entity_id);
    return t in $ee1328194d522913$var$De ? $ee1328194d522913$var$De[t](e) : $ee1328194d522913$export$13fcd5035aa1446(t, e.state);
};

});
parcelRegister("bMFcC", function(module, exports) {

$parcel$export(module.exports, "selectUnit", () => $8944235bd8be49ac$export$b8f7189986dd5395);
var $8944235bd8be49ac$var$__assign = undefined && undefined.__assign || function() {
    $8944235bd8be49ac$var$__assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return $8944235bd8be49ac$var$__assign.apply(this, arguments);
};
var $8944235bd8be49ac$var$MS_PER_SECOND = 1e3;
var $8944235bd8be49ac$var$SECS_PER_MIN = 60;
var $8944235bd8be49ac$var$SECS_PER_HOUR = $8944235bd8be49ac$var$SECS_PER_MIN * 60;
var $8944235bd8be49ac$var$SECS_PER_DAY = $8944235bd8be49ac$var$SECS_PER_HOUR * 24;
var $8944235bd8be49ac$var$SECS_PER_WEEK = $8944235bd8be49ac$var$SECS_PER_DAY * 7;
function $8944235bd8be49ac$export$b8f7189986dd5395(from, to, thresholds) {
    if (to === void 0) to = Date.now();
    if (thresholds === void 0) thresholds = {};
    var resolvedThresholds = $8944235bd8be49ac$var$__assign($8944235bd8be49ac$var$__assign({}, $8944235bd8be49ac$export$f4fd60e41371f80d), thresholds || {});
    var secs = (+from - +to) / $8944235bd8be49ac$var$MS_PER_SECOND;
    if (Math.abs(secs) < resolvedThresholds.second) return {
        value: Math.round(secs),
        unit: "second"
    };
    var mins = secs / $8944235bd8be49ac$var$SECS_PER_MIN;
    if (Math.abs(mins) < resolvedThresholds.minute) return {
        value: Math.round(mins),
        unit: "minute"
    };
    var hours = secs / $8944235bd8be49ac$var$SECS_PER_HOUR;
    if (Math.abs(hours) < resolvedThresholds.hour) return {
        value: Math.round(hours),
        unit: "hour"
    };
    var days = secs / $8944235bd8be49ac$var$SECS_PER_DAY;
    if (Math.abs(days) < resolvedThresholds.day) return {
        value: Math.round(days),
        unit: "day"
    };
    var fromDate = new Date(from);
    var toDate = new Date(to);
    var years = fromDate.getFullYear() - toDate.getFullYear();
    if (Math.round(Math.abs(years)) > 0) return {
        value: Math.round(years),
        unit: "year"
    };
    var months = years * 12 + fromDate.getMonth() - toDate.getMonth();
    if (Math.round(Math.abs(months)) > 0) return {
        value: Math.round(months),
        unit: "month"
    };
    var weeks = secs / $8944235bd8be49ac$var$SECS_PER_WEEK;
    return {
        value: Math.round(weeks),
        unit: "week"
    };
}
var $8944235bd8be49ac$export$f4fd60e41371f80d = {
    second: 45,
    minute: 45,
    hour: 22,
    day: 5
};

});




//# sourceMappingURL=editor.7baf97f9.js.map
