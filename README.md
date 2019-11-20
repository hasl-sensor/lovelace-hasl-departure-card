# SL Departure Lovelace Card

[![hacs_badge](https://img.shields.io/badge/HACS-Default-orange.svg)](https://github.com/custom-components/hacs)
[![ha_version](https://img.shields.io/badge/home%20assistant-0.92%2B-yellow.svg)](https://www.home-assistant.io)
[![version](https://img.shields.io/badge/version-2.4.1-green.svg)](#)
[![maintained](https://img.shields.io/maintenance/yes/2019.svg)](#)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

Present departure times from HASL Combination sensors. Huge thanks to [@dimmanramone](https://github.com/dimmanramone) for pimping the card!

![card](https://user-images.githubusercontent.com/8133650/56198334-0a150f00-603b-11e9-9e93-92be212d7f7b.PNG)

## Manual Installation
Copy [`hasl-departure-card.js`](https://github.com/hasl-platform/lovelace-hasl-departure-card/blob/master/dist/hasl-departure-card.js) to `<config>/www/hasl-departure-card.js`

Where `<config>` is your Home Assistant configuration directory.
Then use the following in your ui-lovelace.yaml file:

```yaml
resources:
  - url: /local/hasl-departure-card.js
    type: js
```

## Configuration

### Options

| Name | Type | Required? | Description | Default |
|------|------|-----------|-------------|---------|
|name|string|optional|If specified it will not render titles per entitiy in the card, but rather have this as the card name. If not speficied it will render each sensors name.|`sensor-name`|
|show_cardname|bool|optional|Render card name.|true|
|header|bool|optional|Render headers in the such as "line", "destination" and "time".|true|
|departures|bool|optional|Render departure section.|false|
|max_departures|number|optional|Max departures to show, default to all.||
|deviations|bool|optional|Render deviation section.|false|
|max_deviations|number|optional|Max deviations to show, defaults to all.||
|updated|bool|optional|Render the last updated time section.|false|
|timeleft|bool|optional|Show as SL real time with minutes instead of time. If using **adjust_times** then this must be specified.|false|
|adjust_times|bool|optional|Calculate time left adjusted to last update.|false|
|hide_departed|bool|optional|This can hide already departured transports.|false|
|offset|number|optional|Add offset to the departures, so you can hide the one you cannot catch.|0|
|language|string|optional|The texts will be rendered in this language. Can be one of `sv-SE` or `en-EN`.||
|compact|bool|optional|Compact style of the card.|true|
|tap_action|string|optional|Action when tapping the card. Choose between `info` or `service`.|info|
|tap_action_entity|string|optional|The entity that the info dialog is going to show, default is the first entity of the card.||
|service_config|object|optional|If service is chosen as a tap_action, service_config has to be configured and the following must be specified `domain`, `service` and `data`.||

### Basic setup

```yaml
cards:
  - type: "custom:hasl-departure-card"
    header: false
    departures: true
    deviations: true
    timeleft: false
    updated: true
    name: Departures
    adjust_times: false
    hide_departed: false
    language: en-EN
    entities:
      - sensor.hasl_name
```

### Tap action examples

```yaml
tap_action: info
tap_action_entity: info
```

```yaml
tap_action: service
service_config:
  domain: light
  service: turn_on
  data:
    entity_id: light.living_room
```
