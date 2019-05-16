Home Assistant SL Sensor (HASL) Cards
===============================

These cards can be used in HomeAssistant together with [Home Assistant SL Sensor](https://github.com/DSorlov/hasl-platform/blob/hasl/README.md)

# SL Departure Lovelace Card (hasl-departure-card.js)
Present departure times from HASL Combination sensors. Huge thanks to [@dimmanramone](https://github.com/dimmanramone) for pimping the card!

![card](https://user-images.githubusercontent.com/8133650/56198334-0a150f00-603b-11e9-9e93-92be212d7f7b.PNG)

## Installation
Copy [`www/hasl-departure-card.js`](https://github.com/DSorlov/hasl-cards/blob/master/www/hasl-departure-card.js) to `<config>/www/hasl-departure-card.js`  

where `<config>` is your Home Assistant configuration directory.
Then use the following in your ui-lovelace.yaml file:
 
```yaml
resources:
  - url: /local/hasl-departure-card.js
    type: js
```

and use the card through this example:

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

## SL Departure Lovelace Card (hasl-departure-card.js) Configuration variables

- **header**: Render headers in the such as "line", "destination" and "time"

- **departures** (*Optional*): Render departure section, default `false`

- **deviations** (*Optional*): Render deviation section, default `false`

- **updated** (*Optional*): Render the last updated time section

- **timeleft** (*Optional*): Show as SL real time with minutes instead of time. If using **adjust_times** then this must be specified.

- **adjust_times** (*Optional*): Calculate time left adjusted to last update (used in conjunction with timeleft)

- **hide_departed** (*Optional*): This can hide already departured transports

- **language** (*Optional*): The texts will be rendered in this language. Can be one of `sv-SE` or `en-EN`-

- **name** (*Optional*): If specified it will not render titles per entitiy in the card, but rather have this as the card name. If not speficied it will render each sensors name

- **max_departures** (*Optional*): Max departures to show, default to all.
  
- **max_deviations** (*Optional*): Max deviations to show, defaults to all.

- **compact** (*Optional*): Compact style of the card. Default value is `true`

# SL Traffic Status Lovelace Card (hasl-departure-card.js)
Present traffic status from HASL Combination sensors.

![card](https://user-images.githubusercontent.com/1217994/57677754-e1773980-7627-11e9-81e7-4b991a6e4dc1.png)

## Installation
Copy [`www/hasl-traffic-status-card.js`](https://github.com/DSorlov/hasl-cards/blob/master/www/hasl-traffic-status-card.js) to `<config>/www/hasl-traffic-status-card.js`  

where `<config>` is your Home Assistant configuration directory.
Then use the following in your ui-lovelace.yaml file:
 
```yaml
resources:
  - url: /local/hasl-traffic-status-card.js
    type: js
```

and use the card through this example:

```yaml
cards:
  - type: custom:hasl-traffic-status-card
        name: Traffic Status
        language: en-EN
        show_time: false
        hide_events: false
        show_only_disturbances: false
        entities:
          - sensor.traffic_status
```

## SL Traffic Status Lovelace Card (hasl-traffic-status-card.js) Configuration variables

- **name** (*Optional*): If specified it will not render titles per entitiy in the card, but rather have this as the card name. If not speficied it will render each sensors name

- **language** (*Optional*): The texts will be rendered in this language. Can be one of `sv-SE` or `en-EN`

- **show_time** (*Optional*): Render the time beside the name of the card, default `false`

- **hide_events** (*Optional*): Hide all events and renders just the headers, default `false`

- **show_only_disturbances** (*Optional*): Renders just disturbances in the traffic, default `false`

# Automatic update of cards
For update check of cards, add the following to your `configuration.yaml`.

```yaml
custom_updater:
  track:
    - cards
  card_urls:
    - https://raw.githubusercontent.com/DSorlov/hasl-cards/master/custom_updater.json
```
