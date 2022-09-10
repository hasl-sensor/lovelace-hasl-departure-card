class HASLDepartureCard extends HTMLElement {
    setConfig(config) {
        if (!config.entities) {
            throw new Error('You need to define one or more entities');
        }

        this.config = Object.assign({}, config)

        if (!this.config.tap_action) this.config.tap_action = 'info';
        if (!this.config.tap_action_entity) this.config.tap_action_entity = this.config.entities[0];
        this.config.show_cardname ? this.config.show_cardname = true : this.config.show_cardname = this.config.show_cardname;
        this.config.compact ? this.config.compact = false : this.config.compact = this.config.compact;
        if (!this.config.offset) this.config.offset = 0;
        if (!this.config.replace) this.config.replace = {};
        if (!this.config.updated_minutes) this.config.updated_minutes = 0;
    }

    set hass(hass) {
        this._hass = hass;

        if (!this.content) {
            const card = document.createElement('ha-card');
            card.addEventListener("click", event => {
                this._handleClick()});
            this.content = document.createElement('div');
            const style = document.createElement('style');
            style.textContent = this._cssStyles();
            card.appendChild(style);
            card.appendChild(this.content);
            this.appendChild(card);
        }

        const config = this.config;
        const lang = this._lang();

        function getEntitiesContent(data) {
            var html = ``;

            // Add data to table.
            var culture = "";
            if(config.show_cardname === true) {
                if (config.name) html += " <div class=\"header\"><div class=\"name\">" + config.name + "</div></div>"
            }
            config.language ? culture = config.language : culture = navigator.language || navigator.userLanguage
            if (!lang.hasOwnProperty(culture)) culture = 'sv-SE'

            for (var i = 0; i < data.length; i++) {
                const entity_data = hass.states[data[i]]
                if (typeof entity_data === 'undefined') {
                    var str = lang[culture].entity_missing
                    console.log(str)
                }
                else {
                    var minutesSinceUpdate = 0;
                    var updatedDate = new Date(entity_data.last_refresh);
                    var updatedValue = updatedDate.toLocaleString(culture);
                    var dateTimeNow = new Date();

                    if (config.adjust_times === true) {
                        minutesSinceUpdate = Math.floor(((dateTimeNow.getTime() - updatedDate.getTime()) / 1000 / 60));
                        updatedValue = "" + minutesSinceUpdate + " " + lang[culture].min + " (" + updatedDate.toLocaleString(culture) + ")";
                    }

                    if(config.show_cardname === true) {
                        if (!config.name) html += "<div class=\"header\">" + entity_data.attributes.friendly_name + "</div>"
                    }

                    html += "<table class=\"sl-table\">"

                    // Departures
                    if (config.departures === true) {
                        if (config.header === true) {
                            html += `
                                <tr>
                                    <th class="col1">${lang[culture].line}</th>
                                    <th class="col2">${lang[culture].destination}</th>
                                    <th class="col3 wider">${lang[culture].departure}</th>
                                </tr>
                        `
                        }

                        if (typeof entity_data.attributes.departures !== 'undefined') {
                            var maxDepartures = entity_data.attributes.departures.length;

                            if (config.max_departures && maxDepartures > config.max_departures ) {
                                maxDepartures = config.max_departures;
                            }
                            var offset_i = 0;

                            for (var j = 0; j < entity_data.attributes.departures.length; j++) {
                                var departureInMinutes = entity_data.attributes.departures[j].time - minutesSinceUpdate;

                                if (departureInMinutes - config.offset < 0 && config.hide_departed) {
                                    continue;
                                }
                                offset_i++;
                                
                                var expectedTime = new Date(entity_data.attributes.departures[j].expected);

                                var departureTime = expectedTime.toLocaleTimeString(culture, {
                                    hour: "numeric",
                                    minute: "numeric"
                                })

                                if (config.timeleft === true) {
                                    if (config.adjust_times === true) {
                                        if (minutesSinceUpdate > 0) {
                                            if (departureInMinutes > 0) {
                                                departureInMinutes = "" + departureInMinutes + " " + lang[culture].min;
                                                if (config.always_show_time === true) {
                                                    departureInMinutes += " (" + departureTime + ")";
                                                }
                                            }
                                            else if (departureInMinutes === 0) {
                                                departureInMinutes = lang[culture].now;
                                            }
                                            else if (departureInMinutes < 0) {
                                                departureInMinutes = lang[culture].departed;
                                            }
                                        }
                                        else {
                                            departureInMinutes = "" + departureInMinutes + " " + lang[culture].min;
                                        }
                                    }
                                    else {
                                        departureInMinutes = "" + entity_data.attributes.departures[j].time + " " + lang[culture].min;
                                        if (config.always_show_time === true) {
                                            departureInMinutes += " (" + departureTime + ")";
                                        }
                                    }
                                }

                                var lineNumber = entity_data.attributes.departures[j].line;
                                var groupOfLine = entity_data.attributes.departures[j].groupofline;

                                var typeClass = '';

                                switch (entity_data.attributes.departures[j].type) {
                                    case 'Buses':
                                        switch(groupOfLine) {
                                            case 'blåbuss':
                                                typeClass = ' ' + 'bus_blue bus_blue_' + lineNumber;
                                                break;
                                            default:
                                                typeClass = ' ' + 'bus_red bus_red_' + lineNumber;
                                        }
                                        break;
                                    case 'Trams':
                                        typeClass = ' ' + 'trm trm_' + lineNumber;
                                        break;
                                    case 'Metros':
                                        switch (lineNumber) {
                                            case '10':
                                            case '11':
                                                typeClass = ' ' + 'met_blue met_blue_' + lineNumber;;
                                                break;
                                            case '13':
                                            case '14':
                                                typeClass = ' ' + 'met_red met_red_' + lineNumber;
                                                break;
                                            case '17':
                                            case '18':
                                            case '19':
                                                typeClass = ' ' + 'met_green met_green_' + lineNumber;
                                                break;
                                        }
                                        break;
                                    case 'Trains':
                                        typeClass = ' ' + 'trn trn_' + lineNumber;
                                        break;
                                }

                                var destinationName = entity_data.attributes.departures[j].destination;
                                if (config.replace[destinationName]) {
                                    destinationName = config.replace[destinationName];
                                }

                                var spanClass = 'line-icon' + typeClass;

                                html += `
                                    <tr>
                                        <td class="col1 ${config.compact === false ? 'loose-icon' : ''}"><ha-icon icon="${entity_data.attributes.departures[j].icon}"></ha-icon></td>
                                        <td class="col2 ${config.compact === false ? 'loose-cell loose-padding' : ''}"><span class="${spanClass}">${lineNumber}</span> ${destinationName}</td>
                                        <td class="col3 ${config.compact === false ? 'loose-cell' : ''}">${config.timeleft === true ? departureInMinutes : departureTime}</td>
                                    </tr>
                                `
                                if (offset_i >= maxDepartures) {
                                    break;
                                }
                            }
                        }
                        html += `</table>`;
                    }

                    // Devations
                    if (config.deviations === true) {
                        if (typeof entity_data.attributes.deviations !== 'undefined') {
                            var maxDeviations = entity_data.attributes.deviations.length;

                            if (config.max_deviations && maxDeviations > config.max_deviations) {
                                maxDeviations = config.max_deviations;
                            }

                            html += `<table>`;

                            for (var k = 0; k < maxDeviations; k++) {
                                if (config.compact === false) {
                                    html += `
                                        <tr>
                                            <td align="left">&nbsp;</td>
                                        </tr>
                                    `
                                }

                                html += `
                                    <tr>
                                        <td class="col1 ${config.compact === false ? 'loose-icon' : ''}" valign="top"><ha-icon class="alert" icon="mdi:alert-outline"></td>
                                        <td class="col2 ${config.compact === false ? 'loose-cell' : ''}"><b>${entity_data.attributes.deviations[k].title}</b><br/><i>${entity_data.attributes.deviations[k].details}</i></td>
                                    </tr>
                                `
                            }

                            html += `</table>`;
                        }
                    }

                    // Updated
                    if (config.updated === true) {
                        if (this.config.updated_minutes==0 || this.config.updated_minutes < minutesSinceUpdate ) {
                            html += `<table><tr>
                                    <td class="last-update"><sub><i>${lang[culture].last_updated} ${updatedValue}</i></sub></td>
                                </tr></table>`;
                        }
                    }
                }
            }
            return html;
        }

        this.content.innerHTML = getEntitiesContent(this.config.entities);
    }

    // The height of your card. Home Assistant uses this to automatically
    // distribute all cards over the available columns. This kind of works but it is very dynamic
    getCardSize() {
        return this.config.entities.length + 1;
    }

    _handleClick() {
        switch (this.config.tap_action) {
            case 'info':
                this._showAttributes(this, "hass-more-info", { entityId: this.config.tap_action_entity });
                break
            case 'service':
                this._serviceCall(this.config.service_config.domain, this.config.service_config.service, this.config.service_config.data)
                break
        }
    }

    _serviceCall (domain, service, data) {
        const hass = this._hass
        hass.callService(domain, service, data)
    }

    _showAttributes (node, type, detail, options) {
        options = options || {};
        detail = (detail === null || detail === undefined) ? {} : detail;
        const event = new Event(type, {
            bubbles: options.bubbles === undefined ? true : options.bubbles,
            cancelable: Boolean(options.cancelable),
            composed: options.composed === undefined ? true : options.composed
        });
        event.detail = detail;
        node.dispatchEvent(event);
        return event;
    }

    _cssStyles() {
        var css = `
            ha-card {
                padding: 16px;
            }

            .header {
                font-family: var(--paper-font-headline_-_font-family);
                -webkit-font-smoothing: var(--paper-font-headline_-_-webkit-font-smoothing);
                font-size: var(--paper-font-headline_-_font-size);
                font-weight: var(--paper-font-headline_-_font-weight);
                letter-spacing: var(--paper-font-headline_-_letter-spacing);
                line-height: var(--paper-font-headline_-_line-height);
                text-rendering: var(--paper-font-common-expensive-kerning_-_text-rendering);
                opacity: var(--dark-primary-opacity);
                padding: 4px 0px 12px;
                display: flex;
                justify-content: space-between;
            }

            ha-icon {
                transition: color 0.3s ease-in-out, filter 0.3s ease-in-out;
                width: 24px;
                height: 24px;
                color: var(--paper-item-icon-color);
            }

            ha-icon.alert {
                color: red;
            }

            table.sl-table {
                width: 100%;
                border-spacing: 0px 8px;
            }

            th.col1, td.col1 {
                text-align: center;
                width: 24px;
                height: 30px;
            }

            th.col2, td.col2 {
                padding-left:10px;
                text-align: left;
                line-height: 18px;
            }

            th.col3, td.col3 {
                text-align: right;
                line-height: 18px;
                min-width: 50px;
            }

            /* Icons - Default for Boats and Metro Blue Line */
            .line-icon {
                width: auto;
                border-radius: 2px;
                background: #0089ca;
                padding: 3px 3px 0 3px;
                color: #fff;
                min-width: 22px;
                height: 22px;
                font-weight: 500;
                display: inline-block;
                text-align: center;
                text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
            }

            /* Metros */
            .line-icon.met_green {
                background-color: #179d4d;
            }

            /* Buses and Metro Red Line */
            .line-icon.bus_red, .line-icon.met_red {
                background-color: #d71d24;
            }

            /* Commuter Trains */
            .line-icon.trn {
                background-color: #ec619f;
            }

            /* Trams */
            .line-icon.trm {
                background-color: #985141;
            }

            .line-icon.trm.trm_7 {
                background-color: #878a83;
            }

            .line-icon.trm.trm_12 {
                background-color: #778da7;
            }

            .line-icon.trm.trm_21 {
                background-color: #b76020;
            }

            .line-icon.trm.trm_22 {
                background-color: #d77d00;
            }

            th.loose-icon, td.loose-icon {
                width: 40px;
                height: 40px;
            }

            th.loose-cell, td.loose-cell {
                line-height: 20px;
            }

            th.loose-padding, td.loose-padding {
                padding-left: 16px;
            }

            td.last-update {
                text-align: right;
                padding-left: 10px;
            }
        `;

        return css;
    }

    _lang() {
        return {
            'sv-SE': {
                entity_missing: 'Ingen data hittades',
                line: 'Linje',
                destination: 'Till',
                departure: 'Avg&aring;ng',
                min: 'min',
                last_updated: 'Senast uppdaterad ',
                now: 'Nu',
                departed: 'Avg&aring;tt',
            },
            'en-EN': {
                entity_missing: 'Entity data missing',
                line: 'Line',
                destination: 'Destination',
                departure: 'Departure',
                min: 'min',
                last_updated: 'Last updated ',
                now: 'Now',
                departed: 'Departed',
            },
            'fr-FR': {
                entity_missing: 'Aucune info trouv&eacute;e',
                line: 'Ligne',
                destination: 'Terminus',
                departure: 'D&eacute;part',
                min: 'min',
                last_updated: 'Mis à jour ',
                now: 'Maintenant ',
                departed: 'Parti ',
            }
        }
    }
}

customElements.define('hasl-departure-card', HASLDepartureCard);
